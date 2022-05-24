var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Model } from './Model';
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(cart, api) {
        if (cart === void 0) { cart = {}; }
        if (api === void 0) { api = null; }
        var _this = _super.call(this, cart, api) || this;
        Object.entries(cart).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Cart.prototype.getId = function () {
        return this.id;
    };
    return Cart;
}(Model));
export { Cart };
//# sourceMappingURL=Cart.js.map