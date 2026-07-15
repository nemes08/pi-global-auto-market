/**
 * Pi Global Auto Market - Filtreleme Sistemi
 */

const FilterSystem = (function() {
    'use strict';

    // ==========================================
    // FILTER STATE
    // ==========================================

    let activeFilters = {
        brands: [],
        categories: [],
        priceRange: { min: 0, max: Infinity },
        years: [],
        countries: [],
        transmission: [],
        fuel: [],
        verified: false,
        searchQuery: ''
    };

    // ==========================================
    // FILTER FUNCTIONS
    // ==========================================

    function filterVehicles(vehicles) {
        let results = [...vehicles];

        // Marka
        if (activeFilters.brands.length > 0) {
            results = results.filter(v => 
                activeFilters.brands.includes(v.brand)
            );
        }

        // Kategori
        if (activeFilters.categories.length > 0) {
            results = results.filter(v => 
                activeFilters.categories.includes(v.category)
            );
        }

        // Fiyat aralığı
        results = results.filter(v => 
            v.priceUSD >= activeFilters.priceRange.min &&
            v.priceUSD <= activeFilters.priceRange.max
        );

        // Yıl
        if (activeFilters.years.length > 0) {
            results = results.filter(v => 
                activeFilters.years.includes(v.year.toString())
            );
        }

        // Ülke
        if (activeFilters.countries.length > 0) {
            results = results.filter(v => 
                activeFilters.countries.includes(v.country)
            );
        }

        // Vites
        if (activeFilters.transmission.length > 0) {
            results = results.filter(v => 
                activeFilters.transmission.includes(v.transmission)
            );
        }

        // Yakıt
        if (activeFilters.fuel.length > 0) {
            results = results.filter(v => 
                activeFilters.fuel.some(f => v.fuel.includes(f))
            );
        }

        // Onaylı bayi
        if (activeFilters.verified) {
            results = results.filter(v => v.verified);
        }

        // Arama sorgusu
        if (activeFilters.searchQuery) {
            const query = activeFilters.searchQuery.toLowerCase();
            results = results.filter(v =>
                v.brand.toLowerCase().includes(query) ||
                v.model.toLowerCase().includes(query) ||
                v.country.toLowerCase().includes(query) ||
                v.seller.toLowerCase().includes(query)
            );
        }

        return results;
    }

    // ==========================================
    // FILTER MANAGEMENT
    // ==========================================

    function setFilter(key, value) {
        if (key === 'brands' || key === 'categories' || key === 'years' || 
            key === 'countries' || key === 'transmission' || key === 'fuel') {
            if (Array.isArray(value)) {
                activeFilters[key] = value;
            } else {
                const index = activeFilters[key].indexOf(value);
                if (index > -1) {
                    activeFilters[key].splice(index, 1);
                } else {
                    activeFilters[key].push(value);
                }
            }
        } else if (key === 'priceRange') {
            activeFilters.priceRange = { ...activeFilters.priceRange, ...value };
        } else if (key === 'verified') {
            activeFilters.verified = value;
        } else if (key === 'searchQuery') {
            activeFilters.searchQuery = value;
        }

        // Filtre değişti event'i
        document.dispatchEvent(new CustomEvent('filtersChanged', {
            detail: { filters: activeFilters }
        }));
    }

    function getFilters() {
        return { ...activeFilters };
    }

    function resetFilters() {
        activeFilters = {
            brands: [],
            categories: [],
            priceRange: { min: 0, max: Infinity },
            years: [],
            countries: [],
            transmission: [],
            fuel: [],
            verified: false,
            searchQuery: ''
        };
        document.dispatchEvent(new CustomEvent('filtersChanged', {
            detail: { filters: activeFilters }
        }));
    }

    // ==========================================
    // URL SYNC
    // ==========================================

    function syncToURL() {
        const params = new URLSearchParams();
        if (activeFilters.brands.length > 0) params.set('brands', activeFilters.brands.join(','));
        if (activeFilters.categories.length > 0) params.set('categories', activeFilters.categories.join(','));
        if (activeFilters.priceRange.min > 0) params.set('minPrice', activeFilters.priceRange.min);
        if (activeFilters.priceRange.max < Infinity) params.set('maxPrice', activeFilters.priceRange.max);
        if (activeFilters.years.length > 0) params.set('years', activeFilters.years.join(','));
        if (activeFilters.countries.length > 0) params.set('countries', activeFilters.countries.join(','));
        if (activeFilters.verified) params.set('verified', 'true');
        if (activeFilters.searchQuery) params.set('q', activeFilters.searchQuery);

        const newUrl = window.location.pathname + '?' + params.toString();
        window.history.replaceState({}, '', newUrl);
    }

    function loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        if (params.has('brands')) {
            activeFilters.brands = params.get('brands').split(',');
        }
        if (params.has('categories')) {
            activeFilters.categories = params.get('categories').split(',');
        }
        if (params.has('minPrice')) {
            activeFilters.priceRange.min = parseInt(params.get('minPrice'));
        }
        if (params.has('maxPrice')) {
            activeFilters.priceRange.max = parseInt(params.get('maxPrice'));
        }
        if (params.has('years')) {
            activeFilters.years = params.get('years').split(',');
        }
        if (params.has('countries')) {
            activeFilters.countries = params.get('countries').split(',');
        }
        if (params.has('verified')) {
            activeFilters.verified = params.get('verified') === 'true';
        }
        if (params.has('q')) {
            activeFilters.searchQuery = params.get('q');
        }

        return activeFilters;
    }

    // ==========================================
    // EXPOSE PUBLIC API
    // ==========================================

    return {
        filterVehicles: filterVehicles,
        setFilter: setFilter,
        getFilters: getFilters,
        resetFilters: resetFilters,
        syncToURL: syncToURL,
        loadFromURL: loadFromURL
    };

})();

window.FilterSystem = FilterSystem;
