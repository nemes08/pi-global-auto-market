/**
 * Pi Global Auto Market - Dil Sistemi
 * 10+ dil desteği
 */

const Language = (function() {
    'use strict';

    // ==========================================
    // TRANSLATIONS
    // ==========================================

    const translations = {
        tr: {
            'nav.home': 'Ana Sayfa',
            'nav.vehicles': 'Araçlar',
            'nav.dealers': 'Bayiler',
            'nav.auctions': 'Açık Artırma',
            'nav.news': 'Haberler',
            'nav.contact': 'İletişim',
            'nav.login': 'Giriş',
            'nav.register': 'Kayıt Ol',
            'hero.title': 'Geleceği <br />Pi ile Sür',
            'hero.subtitle': 'Pi Network ile Desteklenen Küresel Lüks Araç Pazarı',
            'hero.browse': 'Araçları İncele',
            'hero.sell': 'Aracını Sat',
            'hero.connect': 'Pi Cüzdanı Bağla',
            'search.brand': 'Marka',
            'search.model': 'Model',
            'search.country': 'Ülke',
            'search.year': 'Yıl',
            'search.price': 'Fiyat',
            'categories.luxury': 'Lüks Otomobiller',
            'categories.supercar': 'Süper Arabalar',
            'categories.suv': 'SUV',
            'categories.electric': 'Elektrikli',
            'categories.motorcycle': 'Motosiklet',
            'categories.truck': 'Kamyonet',
            'categories.boat': 'Tekne',
            'categories.jet': 'Özel Jet',
            'featured.title': 'Öne Çıkan İlanlar',
            'wallet.title': 'Pi Cüzdanı',
            'wallet.subtitle': 'Bağlan · Pi ile Giriş · Rezerve · Yatırma · İşlem Geçmişi',
            'wallet.connect': 'Cüzdan Bağla',
            'wallet.history': 'İşlemler',
            'modules.escrow': 'Escrow',
            'modules.auction': 'Açık Artırma',
            'modules.ai': 'AI Danışman',
            'modules.insurance': 'Sigorta',
            'modules.financing': 'Finansman',
            'modules.shipping': 'Nakliye',
            'footer.tagline': 'Geleceği Pi ile sürün.',
            'footer.about': 'Hakkında',
            'footer.privacy': 'Gizlilik',
            'footer.terms': 'Koşullar',
            'footer.support': 'Destek',
            'footer.market': 'Pazar',
            'footer.vehicles': 'Araçlar',
            'footer.dealers': 'Bayiler',
            'footer.auctions': 'Açık Artırma',
            'footer.community': 'Topluluk',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Haberler',
            'footer.contact': 'İletişim'
        },
        en: {
            'nav.home': 'Home',
            'nav.vehicles': 'Vehicles',
            'nav.dealers': 'Dealers',
            'nav.auctions': 'Auctions',
            'nav.news': 'News',
            'nav.contact': 'Contact',
            'nav.login': 'Login',
            'nav.register': 'Register',
            'hero.title': 'Drive the <br />Future with Pi',
            'hero.subtitle': 'The Global Luxury Vehicle Marketplace Powered by Pi Network',
            'hero.browse': 'Browse Vehicles',
            'hero.sell': 'Sell Your Vehicle',
            'hero.connect': 'Connect Pi Wallet',
            'search.brand': 'Brand',
            'search.model': 'Model',
            'search.country': 'Country',
            'search.year': 'Year',
            'search.price': 'Price',
            'categories.luxury': 'Luxury Cars',
            'categories.supercar': 'Supercars',
            'categories.suv': 'SUV',
            'categories.electric': 'Electric',
            'categories.motorcycle': 'Motorcycles',
            'categories.truck': 'Trucks',
            'categories.boat': 'Boats',
            'categories.jet': 'Private Jets',
            'featured.title': 'Featured Listings',
            'wallet.title': 'Pi Wallet',
            'wallet.subtitle': 'Connect · Login with Pi · Reserve · Deposit · History',
            'wallet.connect': 'Connect Wallet',
            'wallet.history': 'History',
            'modules.escrow': 'Escrow',
            'modules.auction': 'Auction',
            'modules.ai': 'AI Advisor',
            'modules.insurance': 'Insurance',
            'modules.financing': 'Financing',
            'modules.shipping': 'Shipping',
            'footer.tagline': 'Drive the future with Pi.',
            'footer.about': 'About',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.support': 'Support',
            'footer.market': 'Market',
            'footer.vehicles': 'Vehicles',
            'footer.dealers': 'Dealers',
            'footer.auctions': 'Auctions',
            'footer.community': 'Community',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'News',
            'footer.contact': 'Contact'
        },
        de: {
            'nav.home': 'Startseite',
            'nav.vehicles': 'Fahrzeuge',
            'nav.dealers': 'Händler',
            'nav.auctions': 'Auktionen',
            'nav.news': 'Nachrichten',
            'nav.contact': 'Kontakt',
            'nav.login': 'Anmelden',
            'nav.register': 'Registrieren',
            'hero.title': 'Fahren Sie die <br />Zukunft mit Pi',
            'hero.subtitle': 'Der globale Luxusfahrzeugmarkt mit Pi Network',
            'hero.browse': 'Fahrzeuge durchsuchen',
            'hero.sell': 'Fahrzeug verkaufen',
            'hero.connect': 'Pi Wallet verbinden',
            'search.brand': 'Marke',
            'search.model': 'Modell',
            'search.country': 'Land',
            'search.year': 'Jahr',
            'search.price': 'Preis',
            'categories.luxury': 'Luxusautos',
            'categories.supercar': 'Supersportwagen',
            'categories.suv': 'SUV',
            'categories.electric': 'Elektrisch',
            'categories.motorcycle': 'Motorräder',
            'categories.truck': 'Lastwagen',
            'categories.boat': 'Boote',
            'categories.jet': 'Privatjets',
            'featured.title': 'Empfohlene Angebote',
            'wallet.title': 'Pi Wallet',
            'wallet.subtitle': 'Verbinden · Mit Pi anmelden · Reservieren · Einzahlen · Verlauf',
            'wallet.connect': 'Wallet verbinden',
            'wallet.history': 'Verlauf',
            'modules.escrow': 'Treuhand',
            'modules.auction': 'Auktion',
            'modules.ai': 'KI-Berater',
            'modules.insurance': 'Versicherung',
            'modules.financing': 'Finanzierung',
            'modules.shipping': 'Versand',
            'footer.tagline': 'Fahren Sie die Zukunft mit Pi.',
            'footer.about': 'Über uns',
            'footer.privacy': 'Datenschutz',
            'footer.terms': 'Bedingungen',
            'footer.support': 'Support',
            'footer.market': 'Markt',
            'footer.vehicles': 'Fahrzeuge',
            'footer.dealers': 'Händler',
            'footer.auctions': 'Auktionen',
            'footer.community': 'Gemeinschaft',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Nachrichten',
            'footer.contact': 'Kontakt'
        },
        fr: {
            'nav.home': 'Accueil',
            'nav.vehicles': 'Véhicules',
            'nav.dealers': 'Concessionnaires',
            'nav.auctions': 'Enchères',
            'nav.news': 'Actualités',
            'nav.contact': 'Contact',
            'nav.login': 'Connexion',
            'nav.register': 'S\'inscrire',
            'hero.title': 'Conduisez l\'<br />avenir avec Pi',
            'hero.subtitle': 'Le marché mondial du véhicule de luxe propulsé par Pi Network',
            'hero.browse': 'Parcourir les véhicules',
            'hero.sell': 'Vendre votre véhicule',
            'hero.connect': 'Connecter le portefeuille Pi',
            'search.brand': 'Marque',
            'search.model': 'Modèle',
            'search.country': 'Pays',
            'search.year': 'Année',
            'search.price': 'Prix',
            'categories.luxury': 'Voitures de luxe',
            'categories.supercar': 'Supercars',
            'categories.suv': 'SUV',
            'categories.electric': 'Électrique',
            'categories.motorcycle': 'Motos',
            'categories.truck': 'Camions',
            'categories.boat': 'Bateaux',
            'categories.jet': 'Jets privés',
            'featured.title': 'Annonces en vedette',
            'wallet.title': 'Portefeuille Pi',
            'wallet.subtitle': 'Connecter · Connexion Pi · Réserver · Déposer · Historique',
            'wallet.connect': 'Connecter le portefeuille',
            'wallet.history': 'Historique',
            'modules.escrow': 'Séquestre',
            'modules.auction': 'Enchère',
            'modules.ai': 'Conseiller IA',
            'modules.insurance': 'Assurance',
            'modules.financing': 'Financement',
            'modules.shipping': 'Expédition',
            'footer.tagline': 'Conduisez l\'avenir avec Pi.',
            'footer.about': 'À propos',
            'footer.privacy': 'Confidentialité',
            'footer.terms': 'Conditions',
            'footer.support': 'Support',
            'footer.market': 'Marché',
            'footer.vehicles': 'Véhicules',
            'footer.dealers': 'Concessionnaires',
            'footer.auctions': 'Enchères',
            'footer.community': 'Communauté',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Actualités',
            'footer.contact': 'Contact'
        },
        es: {
            'nav.home': 'Inicio',
            'nav.vehicles': 'Vehículos',
            'nav.dealers': 'Concesionarios',
            'nav.auctions': 'Subastas',
            'nav.news': 'Noticias',
            'nav.contact': 'Contacto',
            'nav.login': 'Iniciar sesión',
            'nav.register': 'Registrarse',
            'hero.title': 'Conduce el <br />futuro con Pi',
            'hero.subtitle': 'El mercado global de vehículos de lujo impulsado por Pi Network',
            'hero.browse': 'Explorar vehículos',
            'hero.sell': 'Vender tu vehículo',
            'hero.connect': 'Conectar billetera Pi',
            'search.brand': 'Marca',
            'search.model': 'Modelo',
            'search.country': 'País',
            'search.year': 'Año',
            'search.price': 'Precio',
            'categories.luxury': 'Autos de lujo',
            'categories.supercar': 'Superdeportivos',
            'categories.suv': 'SUV',
            'categories.electric': 'Eléctrico',
            'categories.motorcycle': 'Motos',
            'categories.truck': 'Camiones',
            'categories.boat': 'Barcos',
            'categories.jet': 'Jets privados',
            'featured.title': 'Listados destacados',
            'wallet.title': 'Billetera Pi',
            'wallet.subtitle': 'Conectar · Iniciar con Pi · Reservar · Depositar · Historial',
            'wallet.connect': 'Conectar billetera',
            'wallet.history': 'Historial',
            'modules.escrow': 'Depósito en garantía',
            'modules.auction': 'Subasta',
            'modules.ai': 'Asesor IA',
            'modules.insurance': 'Seguro',
            'modules.financing': 'Financiación',
            'modules.shipping': 'Envío',
            'footer.tagline': 'Conduce el futuro con Pi.',
            'footer.about': 'Acerca de',
            'footer.privacy': 'Privacidad',
            'footer.terms': 'Términos',
            'footer.support': 'Soporte',
            'footer.market': 'Mercado',
            'footer.vehicles': 'Vehículos',
            'footer.dealers': 'Concesionarios',
            'footer.auctions': 'Subastas',
            'footer.community': 'Comunidad',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Noticias',
            'footer.contact': 'Contacto'
        },
        it: {
            'nav.home': 'Home',
            'nav.vehicles': 'Veicoli',
            'nav.dealers': 'Concessionari',
            'nav.auctions': 'Aste',
            'nav.news': 'Notizie',
            'nav.contact': 'Contatti',
            'nav.login': 'Accedi',
            'nav.register': 'Registrati',
            'hero.title': 'Guida il <br />futuro con Pi',
            'hero.subtitle': 'Il mercato globale dei veicoli di lusso alimentato da Pi Network',
            'hero.browse': 'Sfoglia i veicoli',
            'hero.sell': 'Vendi il tuo veicolo',
            'hero.connect': 'Connetti portafoglio Pi',
            'search.brand': 'Marca',
            'search.model': 'Modello',
            'search.country': 'Paese',
            'search.year': 'Anno',
            'search.price': 'Prezzo',
            'categories.luxury': 'Auto di lusso',
            'categories.supercar': 'Supercar',
            'categories.suv': 'SUV',
            'categories.electric': 'Elettrico',
            'categories.motorcycle': 'Moto',
            'categories.truck': 'Camion',
            'categories.boat': 'Barche',
            'categories.jet': 'Jet privati',
            'featured.title': 'Annunci in evidenza',
            'wallet.title': 'Portafoglio Pi',
            'wallet.subtitle': 'Connetti · Accedi con Pi · Prenota · Deposita · Cronologia',
            'wallet.connect': 'Connetti portafoglio',
            'wallet.history': 'Cronologia',
            'modules.escrow': 'Deposito fiduciario',
            'modules.auction': 'Asta',
            'modules.ai': 'Consulente AI',
            'modules.insurance': 'Assicurazione',
            'modules.financing': 'Finanziamento',
            'modules.shipping': 'Spedizione',
            'footer.tagline': 'Guida il futuro con Pi.',
            'footer.about': 'Chi siamo',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Termini',
            'footer.support': 'Supporto',
            'footer.market': 'Mercato',
            'footer.vehicles': 'Veicoli',
            'footer.dealers': 'Concessionari',
            'footer.auctions': 'Aste',
            'footer.community': 'Comunità',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Notizie',
            'footer.contact': 'Contatti'
        },
        ar: {
            'nav.home': 'الرئيسية',
            'nav.vehicles': 'المركبات',
            'nav.dealers': 'الوكلاء',
            'nav.auctions': 'المزادات',
            'nav.news': 'الأخبار',
            'nav.contact': 'اتصل بنا',
            'nav.login': 'تسجيل الدخول',
            'nav.register': 'التسجيل',
            'hero.title': 'قد المستقبل <br />مع Pi',
            'hero.subtitle': 'سوق المركبات الفاخرة العالمي المدعوم من Pi Network',
            'hero.browse': 'استعراض المركبات',
            'hero.sell': 'بيع مركبتك',
            'hero.connect': 'ربط محفظة Pi',
            'search.brand': 'العلامة التجارية',
            'search.model': 'الموديل',
            'search.country': 'الدولة',
            'search.year': 'السنة',
            'search.price': 'السعر',
            'categories.luxury': 'سيارات فاخرة',
            'categories.supercar': 'سيارات خارقة',
            'categories.suv': 'SUV',
            'categories.electric': 'كهربائية',
            'categories.motorcycle': 'دراجات نارية',
            'categories.truck': 'شاحنات',
            'categories.boat': 'قوارب',
            'categories.jet': 'طائرات خاصة',
            'featured.title': 'إعلانات مميزة',
            'wallet.title': 'محفظة Pi',
            'wallet.subtitle': 'ربط · تسجيل الدخول بـ Pi · حجز · إيداع · السجل',
            'wallet.connect': 'ربط المحفظة',
            'wallet.history': 'السجل',
            'modules.escrow': 'ضمان',
            'modules.auction': 'مزاد',
            'modules.ai': 'مستشار الذكاء الاصطناعي',
            'modules.insurance': 'تأمين',
            'modules.financing': 'تمويل',
            'modules.shipping': 'شحن',
            'footer.tagline': 'قد المستقبل مع Pi.',
            'footer.about': 'حول',
            'footer.privacy': 'الخصوصية',
            'footer.terms': 'الشروط',
            'footer.support': 'الدعم',
            'footer.market': 'السوق',
            'footer.vehicles': 'المركبات',
            'footer.dealers': 'الوكلاء',
            'footer.auctions': 'المزادات',
            'footer.community': 'المجتمع',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'الأخبار',
            'footer.contact': 'اتصل بنا'
        },
        ru: {
            'nav.home': 'Главная',
            'nav.vehicles': 'Автомобили',
            'nav.dealers': 'Дилеры',
            'nav.auctions': 'Аукционы',
            'nav.news': 'Новости',
            'nav.contact': 'Контакты',
            'nav.login': 'Войти',
            'nav.register': 'Регистрация',
            'hero.title': 'Ведите будущее <br />с Pi',
            'hero.subtitle': 'Глобальный рынок люксовых автомобилей на базе Pi Network',
            'hero.browse': 'Просмотр автомобилей',
            'hero.sell': 'Продать автомобиль',
            'hero.connect': 'Подключить Pi кошелек',
            'search.brand': 'Марка',
            'search.model': 'Модель',
            'search.country': 'Страна',
            'search.year': 'Год',
            'search.price': 'Цена',
            'categories.luxury': 'Люксовые авто',
            'categories.supercar': 'Суперкары',
            'categories.suv': 'Внедорожники',
            'categories.electric': 'Электромобили',
            'categories.motorcycle': 'Мотоциклы',
            'categories.truck': 'Грузовики',
            'categories.boat': 'Катера',
            'categories.jet': 'Частные самолеты',
            'featured.title': 'Избранные объявления',
            'wallet.title': 'Pi кошелек',
            'wallet.subtitle': 'Подключить · Вход с Pi · Бронировать · Депозит · История',
            'wallet.connect': 'Подключить кошелек',
            'wallet.history': 'История',
            'modules.escrow': 'Эскроу',
            'modules.auction': 'Аукцион',
            'modules.ai': 'AI консультант',
            'modules.insurance': 'Страхование',
            'modules.financing': 'Финансирование',
            'modules.shipping': 'Доставка',
            'footer.tagline': 'Ведите будущее с Pi.',
            'footer.about': 'О нас',
            'footer.privacy': 'Конфиденциальность',
            'footer.terms': 'Условия',
            'footer.support': 'Поддержка',
            'footer.market': 'Рынок',
            'footer.vehicles': 'Автомобили',
            'footer.dealers': 'Дилеры',
            'footer.auctions': 'Аукционы',
            'footer.community': 'Сообщество',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'Новости',
            'footer.contact': 'Контакты'
        },
        ja: {
            'nav.home': 'ホーム',
            'nav.vehicles': '車両',
            'nav.dealers': 'ディーラー',
            'nav.auctions': 'オークション',
            'nav.news': 'ニュース',
            'nav.contact': 'お問い合わせ',
            'nav.login': 'ログイン',
            'nav.register': '登録',
            'hero.title': 'Piで未来を<br />ドライブ',
            'hero.subtitle': 'Pi Networkが支えるグローバルラグジュアリー車両マーケット',
            'hero.browse': '車両を探す',
            'hero.sell': '車両を売る',
            'hero.connect': 'Piウォレットを接続',
            'search.brand': 'ブランド',
            'search.model': 'モデル',
            'search.country': '国',
            'search.year': '年式',
            'search.price': '価格',
            'categories.luxury': 'ラグジュアリーカー',
            'categories.supercar': 'スーパーカー',
            'categories.suv': 'SUV',
            'categories.electric': '電気自動車',
            'categories.motorcycle': 'バイク',
            'categories.truck': 'トラック',
            'categories.boat': 'ボート',
            'categories.jet': 'プライベートジェット',
            'featured.title': '注目の出品',
            'wallet.title': 'Piウォレット',
            'wallet.subtitle': '接続 · Piでログイン · 予約 · 入金 · 履歴',
            'wallet.connect': 'ウォレットを接続',
            'wallet.history': '履歴',
            'modules.escrow': 'エスクロー',
            'modules.auction': 'オークション',
            'modules.ai': 'AIアドバイザー',
            'modules.insurance': '保険',
            'modules.financing': 'ファイナンス',
            'modules.shipping': '配送',
            'footer.tagline': 'Piで未来をドライブ。',
            'footer.about': 'について',
            'footer.privacy': 'プライバシー',
            'footer.terms': '利用規約',
            'footer.support': 'サポート',
            'footer.market': 'マーケット',
            'footer.vehicles': '車両',
            'footer.dealers': 'ディーラー',
            'footer.auctions': 'オークション',
            'footer.community': 'コミュニティ',
            'footer.pinetwork': 'Pi Network',
            'footer.news': 'ニュース',
            'footer.contact': 'お問い合わせ'
        },
        ko: {
            'nav.home': '홈',
            'nav.vehicles': '차량',
            'nav.dealers': '딜러',
            'nav.auctions': '경매',
            'nav.news': '뉴스',
            'nav.contact': '문의',
            'nav.login': '로그인',
            'nav.register': '회원가입',
            'hero.title': 'Pi와 함께<br />미래를 운전하세요',
            'hero.subtitle': 'Pi Network로 구동되는 글로벌 럭셔리 차량 마켓플레이스',
            'hero.browse': '차량 둘러보기',
            'hero.sell': '차량 판매하기',
            'hero.connect': 'Pi 지갑 연결',
            'search.brand': '브랜드',
            'search.model': '모델',
            'search.country': '국가',
            'search.year': '연식',
            'search.price': '가격',
            'categories.luxury': '럭셔리카',
            'categories.supercar': '슈퍼카',
            'categories.suv': 'SUV',
            'categories.electric': '전기차',
            'categories.motorcycle': '오토바이',
            'categories.truck': '트럭',
            'categories.boat': '보트',
            'categories.jet': '전용기',
            'featured.title': '추천 매물',
            'wallet.title': 'Pi 지갑',
            'wallet.subtitle': '연결 · Pi 로그인 · 예약 · 입금 · 내역',
            'wallet.connect': '지갑 연결',
            'wallet.history': '내역',
            'modules.escrow': '에스크로',
            'modules.auction': '경매',
            'modules.ai': 'AI 어드바이저',
            'modules.insurance': '보험',
            'modules.financing': '금융',
            'modules.shipping': '배송',
            'footer.tagline': 'Pi와 함께 미래를 운전하세요.',
            'footer.about': '소개',
            'footer.privacy': '개인정보',
            'footer.terms': '약관',
            'footer.support': '지원',
            'footer.market': '마켓',
            'footer.vehicles': '차량',
            'footer.dealers': '딜러',
            'footer.auctions': '경매',
            'footer.community': '커뮤니티',
            'footer.pinetwork': 'Pi Network',
            'footer.news': '뉴스',
            'footer.contact': '문의'
        }
    };

    let currentLang = 'tr';

    // ==========================================
    // PUBLIC METHODS
    // ==========================================

    function init() {
        // Dil seçiciyi bul
        const select = document.getElementById('languageSelect');
        if (!select) return;

        // Kaydedilmiş dili yükle
        const savedLang = localStorage.getItem('piAutoLanguage');
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
            select.value = savedLang;
        }

        // Dil değişimini dinle
        select.addEventListener('change', function() {
            const lang = this.value;
            if (translations[lang]) {
                setLanguage(lang);
            }
        });

        // Başlangıç dilini uygula
        applyLanguage(currentLang);
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('piAutoLanguage', lang);
        applyLanguage(lang);
        
        // Dil seçiciyi güncelle
        const select = document.getElementById('languageSelect');
        if (select) select.value = lang;
    }

    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Tüm data-i18n etiketlerini güncelle
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                // HTML içeriğini koruyarak değiştir
                if (element.innerHTML.includes('<')) {
                    // Inner HTML'deki metni değiştir (basit yaklaşım)
                    const textNode = element.childNodes[0];
                    if (textNode && textNode.nodeType === 3) {
                        textNode.textContent = t[key];
                    } else {
                        element.innerHTML = t[key];
                    }
                } else {
                    element.textContent = t[key];
                }
            }
        });

        // Placeholder'lar için
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });

        console.log(`🌍 Dil değiştirildi: ${lang}`);
    }

    function t(key) {
        return translations[currentLang]?.[key] || key;
    }

    function getCurrentLang() {
        return currentLang;
    }

    // ==========================================
    // EXPOSE PUBLIC API
    // ==========================================

    return {
        init: init,
        setLanguage: setLanguage,
        applyLanguage: applyLanguage,
        t: t,
        getCurrentLang: getCurrentLang,
        translations: translations
    };

})();

// Global erişim
window.Language = Language;
