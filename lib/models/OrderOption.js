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
var OrderOption = /** @class */ (function (_super) {
    __extends(OrderOption, _super);
    function OrderOption(orderOption, api) {
        if (orderOption === void 0) { orderOption = {}; }
        if (api === void 0) { api = null; }
        var _this = _super.call(this, orderOption, api) || this;
        Object.entries(orderOption).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    OrderOption.prototype.getId = function () {
        return this.id;
    };
    return OrderOption;
}(Model));
export { OrderOption };
//# sourceMappingURL=OrderOption.js.map