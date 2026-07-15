/**
 * Pi Global Auto Market - Pi Wallet Entegrasyonu
 * Pi Network cüzdan bağlantısı ve işlemler
 */

const PiWallet = (function() {
    'use strict';

    let isConnected = false;
    let walletAddress = '';
    let balance = 0;

    // ==========================================
    // PI NETWORK SDK SIMULASYONU (Gerçek SDK ile değiştirilecek)
    // ==========================================

    // Gerçek Pi Network SDK'sı için:
    // import { Pi } from '@pinetwork-js/sdk';
    // veya Pi Browser içinde window.Pi ile erişim

    const PiSDK = {
        isConnected: function() {
            return isConnected;
        },
        connect: function() {
            return new Promise((resolve) => {
                // Simülasyon
                setTimeout(() => {
                    isConnected = true;
                    walletAddress = 'G' + Math.random().toString(36).substring(2, 15).toUpperCase();
                    balance = Math.floor(Math.random() * 10000) + 1000;
                    resolve({
                        address: walletAddress,
                        balance: balance
                    });
                }, 1500);
            });
        },
        getBalance: function() {
            return balance;
        },
        sendPayment: function(amount, memo) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (balance >= amount) {
                        balance -= amount;
                        resolve({
                            success: true,
                            txid: '0x' + Math.random().toString(36).substring(2, 15),
                            amount: amount
                        });
                    } else {
                        reject({
                            success: false,
                            error: 'Yetersiz bakiye'
                        });
                    }
                }, 1000);
            });
        },
        signMessage: function(message) {
            return '0x' + Math.random().toString(36).substring(2, 15);
        }
    };

    // ==========================================
    // WALLET STATE
    // ==========================================

    function getState() {
        return {
            isConnected: isConnected,
            address: walletAddress,
            balance: balance
        };
    }

    // ==========================================
    // CONNECT
    // ==========================================

    async function connect() {
        try {
            showLoading('Pi Cüzdanı bağlanıyor...');
            
            // Pi Browser'da Pi SDK'yı kontrol et
            if (typeof window.Pi !== 'undefined') {
                // Gerçek Pi SDK
                const result = await window.Pi.authenticate();
                isConnected = true;
                walletAddress = result.user.uid;
                balance = await window.Pi.getBalance();
            } else {
                // Simülasyon (geliştirme ortamı)
                const result = await PiSDK.connect();
                isConnected = true;
                walletAddress = result.address;
                balance = result.balance;
            }

            hideLoading();
            updateUI();
            showToast(`✅ Cüzdan bağlandı: ${walletAddress.substring(0, 8)}...`, 'success');
            
            // Event yayınla
            document.dispatchEvent(new CustomEvent('walletConnected', {
                detail: { address: walletAddress, balance: balance }
            }));

            return { address: walletAddress, balance: balance };
        } catch (error) {
            hideLoading();
            showToast('❌ Cüzdan bağlanamadı: ' + error.message, 'danger');
            console.error('Wallet connection error:', error);
            return null;
        }
    }

    // ==========================================
    // DISCONNECT
    // ==========================================

    function disconnect() {
        isConnected = false;
        walletAddress = '';
        balance = 0;
        updateUI();
        showToast('Cüzdan bağlantısı kesildi', 'info');
        document.dispatchEvent(new CustomEvent('walletDisconnected'));
    }

    // ==========================================
    // RESERVE VEHICLE
    // ==========================================

    async function reserveVehicle(vehicleId, price) {
        if (!isConnected) {
            showToast('⚠️ Lütfen önce cüzdanınızı bağlayın', 'warning');
            return false;
        }

        const depositAmount = Math.round(price * 0.05); // %5 depozito

        try {
            showLoading(`Rezervasyon işlemi başlatılıyor... (${depositAmount} Pi)`);

            let result;
            if (typeof window.Pi !== 'undefined') {
                // Gerçek Pi SDK
                result = await window.Pi.createPayment({
                    amount: depositAmount,
                    memo: `Vehicle Reservation #${vehicleId}`,
                    metadata: { vehicleId: vehicleId }
                });
            } else {
                // Simülasyon
                result = await PiSDK.sendPayment(depositAmount, `Vehicle Reservation #${vehicleId}`);
            }

            hideLoading();

            if (result.success) {
                showToast(`✅ Rezervasyon başarılı! ${depositAmount} Pi depozito alındı.`, 'success');
                // Rezervasyonu kaydet
                saveReservation(vehicleId, depositAmount, result.txid);
                return true;
            } else {
                showToast('❌ Rezervasyon başarısız: ' + (result.error || 'Bilinmeyen hata'), 'danger');
                return false;
            }
        } catch (error) {
            hideLoading();
            showToast('❌ Rezervasyon hatası: ' + error.message, 'danger');
            return false;
        }
    }

    // ==========================================
    // RESERVATION HISTORY
    // ==========================================

    function saveReservation(vehicleId, amount, txid) {
        const reservations = JSON.parse(localStorage.getItem('piAutoReservations') || '[]');
        reservations.push({
            vehicleId: vehicleId,
            amount: amount,
            txid: txid,
            date: new Date().toISOString(),
            status: 'pending'
        });
        localStorage.setItem('piAutoReservations', JSON.stringify(reservations));
    }

    function getReservations() {
        return JSON.parse(localStorage.getItem('piAutoReservations') || '[]');
    }

    // ==========================================
    // UI UPDATE
    // ==========================================

    function updateUI() {
        const statusElements = document.querySelectorAll('.wallet-status');
        statusElements.forEach(el => {
            if (isConnected) {
                el.textContent = `✅ ${walletAddress.substring(0, 8)}...`;
                el.className = 'wallet-status gold-text';
            } else {
                el.textContent = '🔴 Bağlı değil';
                el.className = 'wallet-status text-secondary';
            }
        });

        const connectBtns = document.querySelectorAll('#connectWalletBtn, #walletConnectBtn');
        connectBtns.forEach(btn => {
            if (isConnected) {
                btn.innerHTML = '<i class="bi bi-wallet2 me-2"></i> Cüzdan Bağlı';
                btn.className = 'btn btn-gold';
            } else {
                btn.innerHTML = '<i class="bi bi-plug me-2"></i> Cüzdan Bağla';
                btn.className = 'btn btn-gold';
            }
        });

        const balanceElements = document.querySelectorAll('.wallet-balance');
        balanceElements.forEach(el => {
            el.textContent = isConnected ? `${balance.toLocaleString()} Pi` : '---';
        });
    }

    // ==========================================
    // LOADING / TOAST
    // ==========================================

    function showLoading(message) {
        let loader = document.getElementById('walletLoader');
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'walletLoader';
            loader.className = 'position-fixed top-50 start-50 translate-middle z-3';
            loader.innerHTML = `
                <div class="glass p-4 text-center">
                    <div class="spinner-border text-gold" role="status">
                        <span class="visually-hidden">Yükleniyor...</span>
                    </div>
                    <p class="mt-2 mb-0" id="loaderMessage">${message}</p>
                </div>
            `;
            document.body.appendChild(loader);
        } else {
            document.getElementById('loaderMessage').textContent = message;
            loader.style.display = 'block';
        }
    }

    function hideLoading() {
        const loader = document.getElementById('walletLoader');
        if (loader) {
            loader.style.display = 'none';
        }
    }

    function showToast(message, type = 'info') {
        // app.js'deki showToast'u kullan
        if (typeof window.showToast === 'function') {
            window.showToast(message, type);
        } else {
            console.log(`[Toast] ${type}: ${message}`);
        }
    }

    // ==========================================
    // INIT
    // ==========================================

    function init() {
        // Kaydedilmiş cüzdan durumunu kontrol et
        const savedWallet = localStorage.getItem('piAutoWallet');
        if (savedWallet) {
            try {
                const data = JSON.parse(savedWallet);
                if (data.isConnected) {
                    isConnected = true;
                    walletAddress = data.address;
                    balance = data.balance;
                    updateUI();
                }
            } catch (e) {
                // Geçersiz veri
            }
        }

        // Cüzdan bağlantı butonları
        document.querySelectorAll('#connectWalletBtn, #walletConnectBtn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (isConnected) {
                    disconnect();
                } else {
                    connect();
                }
            });
        });

        console.log('👛 Pi Wallet initialized');
    }

    // ==========================================
    // EXPOSE PUBLIC API
    // ==========================================

    return {
        init: init,
        connect: connect,
        disconnect: disconnect,
        reserveVehicle: reserveVehicle,
        getReservations: getReservations,
        getState: getState,
        isConnected: () => isConnected,
        getAddress: () => walletAddress,
        getBalance: () => balance
    };

})();

// Global erişim
window.PiWallet = PiWallet;
