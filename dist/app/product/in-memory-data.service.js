/**
 * Created by v-khmai on 12/12/2016.
 */
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'Iphone 4' },
            { id: 2, name: 'Ipad' },
            { id: 3, name: 'Macbook' },
            { id: 4, name: 'Iphone 5S' },
            { id: 5, name: 'iPad Pro' },
            { id: 6, name: 'iPad Mini 2' },
            { id: 7, name: 'Macbook Air' },
            { id: 8, name: 'Ipad Air' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map