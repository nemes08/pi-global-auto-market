/**
 * Pi Global Auto Market - Ana Uygulama
 * Pi Network dApp için temel fonksiyonlar
 */

(function() {
    'use strict';

    // ==========================================
    // VEHICLE DATA (50+ araç örneği)
    // ==========================================
    const VEHICLES = [
        {
            id: 1,
            brand: 'Mercedes',
            model: 'AMG GT 63 S',
            year: 2025,
            price: 245000,
            priceUSD: 198000,
            gcv: 312000,
            mileage: 8200,
            transmission: 'Otomatik',
            fuel: 'V8 Hybrid',
            color: 'Siyah',
            country: 'Almanya',
            seller: 'Premium Motors',
            verified: true,
            image: 'mercedes-amg-gt.jpg',
            category: 'Luxury Cars'
        },
        {
            id: 2,
            brand: 'Ferrari',
            model: 'SF90 Stradale',
            year: 2024,
            price: 520000,
            priceUSD: 425000,
            gcv: 660000,
            mileage: 3400,
            transmission: 'Otomatik',
            fuel: 'Hybrid V8',
            color: 'Kırmızı',
            country: 'İtalya',
            seller: 'AutoItaliana',
            verified: true,
            image: 'ferrari-sf90.jpg',
            category: 'Supercars'
        },
        {
            id: 3,
            brand: 'Rolls-Royce',
            model: 'Ghost',
            year: 2025,
            price: 890000,
            priceUSD: 720000,
            gcv: 1050000,
            mileage: 1200,
            transmission: 'Otomatik',
            fuel: 'V12',
            color: 'Fildişi',
            country: 'İngiltere',
            seller: 'Royal Motors',
            verified: true,
            image: 'rolls-ghost.jpg',
            category: 'Luxury Cars'
        },
        {
            id: 4,
            brand: 'Lamborghini',
            model: 'Revuelto',
            year: 2024,
            price: 680000,
            priceUSD: 550000,
            gcv: 820000,
            mileage: 1500,
            transmission: 'Otomatik',
            fuel: 'V12 Hybrid',
            color: 'Sarı',
            country: 'İtalya',
            seller: 'Lambo World',
            verified: true,
            image: 'lamborghini-revuelto.jpg',
            category: 'Supercars'
        },
        {
            id: 5,
            brand: 'Porsche',
            model: '911 Turbo S',
            year: 2025,
            price: 280000,
            priceUSD: 230000,
            gcv: 350000,
            mileage: 5000,
            transmission: 'Otomatik',
            fuel: 'Flat-6',
            color: 'Gri',
            country: 'Almanya',
            seller: 'Porsche Zentrum',
            verified: true,
            image: 'porsche-911.jpg',
            category: 'Supercars'
        },
        {
            id: 6,
            brand: 'Tesla',
            model: 'Model S Plaid',
            year: 2025,
            price: 120000,
            priceUSD: 95000,
            gcv: 150000,
            mileage: 8000,
            transmission: 'Otomatik',
            fuel: 'Elektrik',
            color: 'Beyaz',
            country: 'ABD',
            seller: 'Tesla Motors',
            verified: false,
            image: 'tesla-plaid.jpg',
            category: 'Electric'
        },
        {
            id: 7,
            brand: 'Bentley',
            model: 'Continental GT',
            year: 2024,
            price: 350000,
            priceUSD: 285000,
            gcv: 420000,
            mileage: 6000,
            transmission: 'Otomatik',
            fuel: 'V8',
            color: 'Mavi',
            country: 'İngiltere',
            seller: 'Bentley London',
            verified: true,
            image: 'bentley-continental.jpg',
            category: 'Luxury Cars'
        },
        {
            id: 8,
            brand: 'McLaren',
            model: 'Artura',
            year: 2024,
            price: 310000,
            priceUSD: 250000,
            gcv: 380000,
            mileage: 2500,
            transmission: 'Otomatik',
            fuel: 'V6 Hybrid',
            color: 'Turuncu',
            country: 'İngiltere',
            seller: 'McLaren UK',
            verified: true,
            image: 'mclaren-artura.jpg',
            category: 'Supercars'
        },
        {
            id: 9,
            brand: 'Audi',
            model: 'RS e-tron GT',
            year: 2025,
            price: 160000,
            priceUSD: 130000,
            gcv: 200000,
            mileage: 3000,
            transmission: 'Otomatik',
            fuel: 'Elektrik',
            color: 'Gümüş',
            country: 'Almanya',
            seller: 'Audi AG',
            verified: false,
            image: 'audi-etron.jpg',
            category: 'Electric'
        },
        {
            id: 10,
            brand: 'Bugatti',
            model: 'Chiron',
            year: 2023,
            price: 2500000,
            priceUSD: 2000000,
            gcv: 3000000,
            mileage: 800,
            transmission: 'Otomatik',
            fuel: 'W16',
            color: 'Mavi',
            country: 'Fransa',
            seller: 'Bugatti Paris',
            verified: true,
            image: 'bugatti-chiron.jpg',
            category: 'Supercars'
        },
        {
            id: 11,
            brand: 'Aston Martin',
            model: 'Valkyrie',
            year: 2024,
            price: 1850000,
            priceUSD: 1500000,
            gcv: 2200000,
            mileage: 500,
            transmission: 'Otomatik',
            fuel: 'V12',
            color: 'Yeşil',
            country: 'İngiltere',
            seller: 'Aston Martin Works',
            verified: true,
            image: 'aston-valkyrie.jpg',
            category: 'Supercars'
        },
        {
            id: 12,
            brand: 'Land Rover',
            model: 'Range Rover SV',
            year: 2025,
            price: 210000,
            priceUSD: 170000,
            gcv: 260000,
            mileage: 4000,
            transmission: 'Otomatik',
            fuel: 'V8',
            color: 'Siyah',
            country: 'İngiltere',
            seller: 'Land Rover UK',
            verified: true,
            image: 'range-rover-sv.jpg',
            category: 'SUV'
        }
    ];

    // ==========================================
    // RENDER FUNCTIONS
    // ==========================================

    /**
     * Araç kartını render eder
     */
    function renderVehicleCard(vehicle) {
        return `
            <div class="col-md-6 col-lg-4">
                <div class="vehicle-card">
                    <div class="vehicle-img">
                        <i class="bi bi-image"></i>
                        <span class="position-absolute top-0 end-0 m-2">
                            <span class="badge-verified">
                                <i class="bi bi-patch-check-fill me-1"></i>
                                ${vehicle.verified ? 'Onaylı Bayi' : 'Bayi'}
                            </span>
                        </span>
                    </div>
                    <div class="mt-2 d-flex justify-content-between align-items-start">
                        <h5 class="fw-bold mb-0">${vehicle.brand} ${vehicle.model}</h5>
                        <span class="badge-verified">
                            <i class="bi bi-patch-check-fill me-1"></i>
                            ${vehicle.verified ? 'Onaylı Bayi' : 'Bayi'}
                        </span>
                    </div>
                    <div class="d-flex flex-wrap gap-2 mt-1 small text-secondary">
                        <span><i class="bi bi-person"></i> ${vehicle.seller}</span>
                        <span><i class="bi bi-geo-alt"></i> ${vehicle.country}</span>
                        <span>${vehicle.year}</span>
                        <span>${vehicle.mileage.toLocaleString()} km</span>
                    </div>
                    <div class="d-flex flex-wrap gap-2 mt-1 small">
                        <span>${vehicle.transmission}</span>
                        <span>${vehicle.fuel}</span>
                        <span>${vehicle.color}</span>
                    </div>
                    <div class="mt-2 d-flex flex-wrap align-items-center gap-2">
                        <span class="price-tag">
                            <i class="bi bi-coin me-1"></i> ${vehicle.price.toLocaleString()} Pi
                        </span>
                        <span class="text-light fw-light" style="font-size:0.8rem;">
                            $${vehicle.priceUSD.toLocaleString()} USD
                        </span>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <span class="badge bg-dark text-warning border-gold border">
                            GCV ${vehicle.gcv.toLocaleString()} Pi
                        </span>
                        <span class="price-disclaimer">*topluluk referansı</span>
                    </div>
                    <div class="d-flex gap-2 mt-3">
                        <button class="btn btn-outline-silver btn-sm flex-fill favorite-btn" data-id="${vehicle.id}">
                            <i class="bi bi-star"></i> Favori
                        </button>
                        <button class="btn btn-gold btn-sm flex-fill reserve-btn" data-id="${vehicle.id}">
                            <i class="bi bi-wallet2"></i> Rezerve
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Öne çıkan araçları göster
     */
    function renderFeaturedVehicles() {
        const container = document.getElementById('featuredVehicles');
        if (!container) return;

        const featured = VEHICLES.slice(0, 6);
        container.innerHTML = featured.map(v => renderVehicleCard(v)).join('');
        
        // Event listeners ekle
        attachVehicleEvents();
    }

    /**
     * Araç kartı eventleri
     */
    function attachVehicleEvents() {
        // Favori butonları
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.dataset.id;
                toggleFavorite(id);
            });
        });

        // Rezerve butonları
        document.querySelectorAll('.reserve-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.dataset.id;
                const vehicle = VEHICLES.find(v => v.id == id);
                if (vehicle) {
                    showReserveModal(vehicle);
                }
            });
        });
    }

    // ==========================================
    // FAVORITE SYSTEM
    // ==========================================

    function toggleFavorite(id) {
        let favorites = JSON.parse(localStorage.getItem('piAutoFavorites') || '[]');
        const index = favorites.indexOf(id);
        if (index > -1) {
            favorites.splice(index, 1);
            showToast('Favorilerden kaldırıldı', 'info');
        } else {
            favorites.push(id);
            showToast('Favorilere eklendi! ❤️', 'success');
        }
        localStorage.setItem('piAutoFavorites', JSON.stringify(favorites));
        updateFavoriteButtons();
    }

    function updateFavoriteButtons() {
        const favorites = JSON.parse(localStorage.getItem('piAutoFavorites') || '[]');
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (favorites.includes(id)) {
                btn.innerHTML = '<i class="bi bi-star-fill gold-text"></i> Favori';
                btn.classList.add('border-gold');
            } else {
                btn.innerHTML = '<i class="bi bi-star"></i> Favori';
                btn.classList.remove('border-gold');
            }
        });
    }

    // ==========================================
    // RESERVE MODAL
    // ==========================================

    function showReserveModal(vehicle) {
        const modalHtml = `
            <div class="modal fade" id="reserveModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark text-light border-gold">
                        <div class="modal-header border-secondary">
                            <h5 class="modal-title gold-text">
                                <i class="bi bi-wallet2 me-2"></i> Rezervasyon
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>${vehicle.brand} ${vehicle.model}</strong></p>
                            <p class="text-secondary">Satıcı: ${vehicle.seller}</p>
                            <div class="d-flex justify-content-between border-bottom border-secondary py-2">
                                <span>Satıcı Fiyatı (Pi)</span>
                                <span class="gold-text fw-bold">${vehicle.price.toLocaleString()} Pi</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom border-secondary py-2">
                                <span>GCV Referans</span>
                                <span class="text-warning">${vehicle.gcv.toLocaleString()} Pi</span>
                            </div>
                            <div class="mt-3">
                                <label class="form-label text-secondary">Rezervasyon Notu</label>
                                <textarea class="form-control bg-dark text-light border-secondary" rows="2" placeholder="Eklemek istediğiniz not..."></textarea>
                            </div>
                            <div class="mt-3 small text-secondary">
                                <i class="bi bi-info-circle me-1"></i> Rezervasyon için ${Math.round(vehicle.price * 0.05).toLocaleString()} Pi depozito gereklidir.
                            </div>
                        </div>
                        <div class="modal-footer border-secondary">
                            <button class="btn btn-outline-silver" data-bs-dismiss="modal">İptal</button>
                            <button class="btn btn-gold" id="confirmReserveBtn">
                                <i class="bi bi-wallet2 me-2"></i> Pi ile Rezerve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Modal'ı göster
        const existingModal = document.getElementById('reserveModal');
        if (existingModal) {
            existingModal.remove();
        }
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('reserveModal'));
        modal.show();

        // Rezerve butonu
        document.getElementById('confirmReserveBtn').addEventListener('click', function() {
            if (typeof PiWallet !== 'undefined') {
                PiWallet.reserveVehicle(vehicle.id, vehicle.price);
            } else {
                showToast('Pi Cüzdanı bağlı değil!', 'danger');
            }
            modal.hide();
        });
    }

    // ==========================================
    // TOAST SYSTEM
    // ==========================================

    function showToast(message, type = 'info') {
        const toastHtml = `
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999;">
                <div class="toast align-items-center text-white bg-${type === 'success' ? 'success' : type === 'danger' ? 'danger' : 'dark'} border-gold show" role="alert">
                    <div class="d-flex">
                        <div class="toast-body">${message}</div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', toastHtml);
        setTimeout(() => {
            const toast = document.querySelector('.toast');
            if (toast) toast.remove();
        }, 3000);
    }

    // ==========================================
    // SEARCH FUNCTION (from search.js)
    // ==========================================

    function setupSearch() {
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const brand = document.getElementById('searchBrand')?.value || '';
                const model = document.getElementById('searchModel')?.value || '';
                const country = document.getElementById('searchCountry')?.value || '';
                const year = document.getElementById('searchYear')?.value || '';
                const price = document.getElementById('searchPrice')?.value || '';

                let results = VEHICLES;
                if (brand) results = results.filter(v => v.brand.toLowerCase() === brand);
                if (model) results = results.filter(v => v.model.toLowerCase().includes(model));
                if (country) results = results.filter(v => v.country.toLowerCase() === country);
                if (year) results = results.filter(v => v.year == year);
                if (price) results = results.filter(v => v.priceUSD >= parseInt(price));

                if (results.length === 0) {
                    showToast('Araç bulunamadı', 'info');
                } else {
                    showToast(`${results.length} araç bulundu`, 'success');
                }

                // Sonuçları göster (vehicles sayfasına yönlendir)
                if (results.length > 0) {
                    localStorage.setItem('piAutoSearchResults', JSON.stringify(results));
                    window.location.href = 'vehicles.html';
                }
            });
        }
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================

    document.addEventListener('DOMContentLoaded', function() {
        // Öne çıkan araçlar
        renderFeaturedVehicles();

        // Favorileri güncelle
        updateFavoriteButtons();

        // Arama
        setupSearch();

        // Dil sistemi (language.js)
        if (typeof Language !== 'undefined') {
            Language.init();
        }

        // Cüzdan (wallet.js)
        if (typeof PiWallet !== 'undefined') {
            PiWallet.init();
        }

        // Bağlantı butonları
        const connectBtn = document.getElementById('connectWalletBtn');
        if (connectBtn) {
            connectBtn.addEventListener('click', function() {
                if (typeof PiWallet !== 'undefined') {
                    PiWallet.connect();
                } else {
                    showToast('Pi Cüzdanı yükleniyor...', 'info');
                }
            });
        }

        const walletConnectBtn = document.getElementById('walletConnectBtn');
        if (walletConnectBtn) {
            walletConnectBtn.addEventListener('click', function() {
                if (typeof PiWallet !== 'undefined') {
                    PiWallet.connect();
                }
            });
        }

        console.log('🚗 Pi Global Auto Market initialized');
        console.log(`📦 ${VEHICLES.length} vehicles loaded`);
    });

    // Global erişim
    window.VEHICLES = VEHICLES;
    window.showToast = showToast;
    window.toggleFavorite = toggleFavorite;

})();
