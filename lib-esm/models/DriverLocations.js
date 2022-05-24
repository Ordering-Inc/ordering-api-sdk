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
import { Model } from "./Model";
var DriverLocations = /** @class */ (function (_super) {
    __extends(DriverLocations, _super);
    function DriverLocations(driver, api) {
        if (driver === void 0) { driver = {}; }
        var _this = _super.call(this, driver, api, ["driver"]) || this;
        Object.entries(driver).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    return DriverLocations;
}(Model));
export { DriverLocations };
//# sourceMappingURL=DriverLocations.js.map