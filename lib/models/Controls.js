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
var Controls = /** @class */ (function (_super) {
    __extends(Controls, _super);
    function Controls(controls, api) {
        if (controls === void 0) { controls = {}; }
        var _this = _super.call(this, controls, api, ["business"]) || this;
        Object.entries(controls).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    return Controls;
}(Model));
export { Controls };
//# sourceMappingURL=Controls.js.map