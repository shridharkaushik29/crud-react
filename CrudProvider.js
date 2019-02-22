"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var CrudContext_1 = require("./CrudContext");
var CrudProvider = /** @class */ (function (_super) {
    __extends(CrudProvider, _super);
    function CrudProvider(props) {
        var _this = _super.call(this, props) || this;
        if (!_this.props.crud) {
            throw "Please provide a CrudRequest instance";
        }
        return _this;
    }
    CrudProvider.prototype.render = function () {
        return React.createElement(CrudContext_1.CrudContext.Provider, { value: this.props.crud }, this.props.children);
    };
    return CrudProvider;
}(React.Component));
exports.CrudProvider = CrudProvider;
//# sourceMappingURL=CrudProvider.js.map