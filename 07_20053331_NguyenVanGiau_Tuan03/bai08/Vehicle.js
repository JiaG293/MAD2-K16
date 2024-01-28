"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainVehicle = exports.XeTai = exports.XeKhach = exports.XeMay = exports.XeDap = exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(gia) {
        this.gia = gia;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var XeDap = /** @class */ (function (_super) {
    __extends(XeDap, _super);
    function XeDap(gia) {
        return _super.call(this, gia) || this;
    }
    XeDap.prototype.tinhThue = function () {
        return 0; // khong co thue
    };
    return XeDap;
}(Vehicle));
exports.XeDap = XeDap;
var XeMay = /** @class */ (function (_super) {
    __extends(XeMay, _super);
    function XeMay(gia) {
        return _super.call(this, gia) || this;
    }
    XeMay.prototype.tinhThue = function () {
        return this.gia * 0.15; // VAT 10% + thue truoc ba 5%
    };
    return XeMay;
}(Vehicle));
exports.XeMay = XeMay;
var XeKhach = /** @class */ (function (_super) {
    __extends(XeKhach, _super);
    function XeKhach(gia, soChoNgoi) {
        var _this = _super.call(this, gia) || this;
        _this.soChoNgoi = soChoNgoi;
        return _this;
    }
    XeKhach.prototype.tinhThue = function () {
        var thueTieuThuDacBiet;
        if (this.soChoNgoi >= 5) {
            thueTieuThuDacBiet = 0.3;
        }
        else {
            thueTieuThuDacBiet = 0.5;
        }
        return this.gia * (0.4 + thueTieuThuDacBiet); // VAT 10% + thue truoc ba 20% + thue tieu thu dac biet
    };
    return XeKhach;
}(Vehicle));
exports.XeKhach = XeKhach;
var XeTai = /** @class */ (function (_super) {
    __extends(XeTai, _super);
    function XeTai(gia) {
        return _super.call(this, gia) || this;
    }
    XeTai.prototype.tinhThue = function () {
        return this.gia * 0.12; // VAT 10% + thue truoc ba 2%
    };
    return XeTai;
}(Vehicle));
exports.XeTai = XeTai;
function mainVehicle() {
    var xeDap = new XeDap(100);
    var xeMay = new XeMay(1000);
    var xeKhach = new XeKhach(20000, 6);
    var xeTai = new XeTai(50000);
    console.log("Thuế cho xe đạp:", xeDap.tinhThue());
    console.log("Thuế cho xe máy:", xeMay.tinhThue());
    console.log("Thuế cho xe khách:", xeKhach.tinhThue());
    console.log("Thuế cho xe tải:", xeTai.tinhThue());
}
exports.mainVehicle = mainVehicle;
