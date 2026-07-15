/**
 * Pi Global Auto Market - Gelişmiş Arama Sistemi
 */

const SearchEngine = (function() {
    'use strict';

    // ==========================================
    // SEARCH PARAMETERS
    // ==========================================

    function getSearchParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            brand: params.get('brand') || '',
            model: params.get('model') || '',
            country: params.get('country') || '',
            year: params.get('year') || '',
            minPrice: params.get('minPrice') || '',
            maxPrice: params.get('maxPrice') || '',
            category: params.get('category') || '',
            keyword: params.get('keyword') || ''
        };
    }

    // ==========================================
    // SEARCH VEHICLES
    // ==========================================

    function search(vehicles, params) {
        let results = [...vehicles];

        if (params.brand) {
            results = results.filter(v => 
                v.brand.toLowerCase().includes(params.brand.toLowerCase())
            );
        }

        if (params.model) {
            results = results.filter(v => 
                v.model.toLowerCase().includes(params.model.toLowerCase())
            );
        }

        if (params.country) {
            results = results.filter(v => 
                v.country.toLowerCase().includes(params.country.toLowerCase())
            );
        }

        if (params.year) {
            results = results.filter(v => v.year == params.year);
        }

        if (params.minPrice) {
            results = results.filter(v => v.priceUSD >= parseInt(params.minPrice));
        }

        if (params.maxPrice) {
            results = results.filter(v => v.priceUSD <= parseInt(params.maxPrice));
        }

        if (params.category) {
            results = results.filter(v => 
                v.category.toLowerCase().includes(params.category.toLowerCase())
            );
        }

        if (params.keyword) {
            const keyword = params.keyword.toLowerCase();
            results = results.filter(v => 
                v.brand.toLowerCase().includes(keyword) ||
                v.model.toLowerCase().includes(keyword) ||
                v.country.toLowerCase().includes(keyword) ||
                v.seller.toLowerCase().includes(keyword)
            );
        }

        return results;
    }

    // ==========================================
    // SORT RESULTS
    // ==========================================

    function sortResults(vehicles, sortBy = 'price_asc') {
        const sorted = [...vehicles];
        switch (sortBy) {
            case 'price_asc':
                sorted.sort((a, b) => a.priceUSD - b.priceUSD);
                break;
            case 'price_desc':
                sorted.sort((a, b) => b.priceUSD - a.priceUSD);
                break;
            case 'year_desc':
                sorted.sort((a, b) => b.year - a.year);
                break;
            case 'year_asc':
                sorted.sort((a, b) => a.year - b.year);
                break;
            case 'mileage_asc':
                sorted.sort((a, b) => a.mileage - b.mileage);
                break;
            default:
                break;
        }
        return sorted;
    }

    // ==========================================
    // FILTER BY VERIFIED
    // ==========================================

    function filterVerified(vehicles, onlyVerified = false) {
        if (onlyVerified) {
            return vehicles.filter(v => v.verified);
        }
        return vehicles;
    }

    // ==========================================
    // EXPOSE PUBLIC API
    // ==========================================

    return {
        getSearchParams: getSearchParams,
        search: search,
        sortResults: sortResults,
        filterVerified: filterVerified
    };

})();

window.SearchEngine = SearchEngine;
