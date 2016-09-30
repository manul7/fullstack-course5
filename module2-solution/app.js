(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            {name: "Cookies", quantity: 10},
            {name: "Cakes", quantity: 20},
            {name: "Pancakes", quantity: 30},
            {name: "Chocolate", quantity: 40},
            {name: "Gasoline cans", quantity: 50}];
        var boughtItems = [];

        service.removeItem = function (itemIndex) {
            var val = toBuyItems.splice(itemIndex, 1);
            boughtItems.push(val[0]);
        };

        service.getItemsToBuy = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuyList.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }

})();