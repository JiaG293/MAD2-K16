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
exports.mainTransaction = void 0;
//Class giao dich
var GiaoDich = /** @class */ (function () {
    function GiaoDich(maGiaoDich, ngayGiaoDich, donGia, soLuong) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.soLuong = soLuong;
    }
    GiaoDich.prototype.tinhThanhTien = function () {
        return this.soLuong * this.donGia;
    };
    return GiaoDich;
}());
//Class thua ke giao dich vang
var GiaoDichVang = /** @class */ (function (_super) {
    __extends(GiaoDichVang, _super);
    function GiaoDichVang(maGiaoDich, ngayGiaoDich, donGia, soLuong, loaiVang) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, soLuong) || this;
        _this.loaiVang = loaiVang;
        return _this;
    }
    return GiaoDichVang;
}(GiaoDich));
//Class thua ke giao dich tien te
var GiaoDichTienTe = /** @class */ (function (_super) {
    __extends(GiaoDichTienTe, _super);
    function GiaoDichTienTe(maGiaoDich, ngayGiaoDich, donGia, soLuong, loaiTienTe, tiGia) {
        var _this = _super.call(this, maGiaoDich, ngayGiaoDich, donGia, soLuong) || this;
        _this.loaiTienTe = loaiTienTe;
        _this.tiGia = tiGia;
        return _this;
    }
    GiaoDichTienTe.prototype.tinhThanhTien = function () {
        if (this.loaiTienTe === "USD" || this.loaiTienTe === "EUR") {
            return this.soLuong * this.donGia * this.tiGia;
        }
        else if (this.loaiTienTe === "VND") {
            return _super.prototype.tinhThanhTien.call(this);
        }
        else {
            return 0;
        }
    };
    return GiaoDichTienTe;
}(GiaoDich));
function mainTransaction() {
    var giaoDichVang1 = new GiaoDichVang("GDV210123", "21/01/2023", 5000000, 2, "24K");
    var giaoDichVang2 = new GiaoDichVang("GDV0210123", "02/01/2023", 2905500, 3, "18K");
    var giaoDichVang3 = new GiaoDichVang("GDV003", "01/01/2023", 195000000, 40, "24K");
    var giaoDichTienTe1 = new GiaoDichTienTe("GDTT010123", "01/01/2023", 1, 1000, "USD", 27000);
    var giaoDichTienTe2 = new GiaoDichTienTe("GDTT120123", "12/01/2023", 10, 1500, "EUR", 29000);
    var giaoDichTienTe3 = new GiaoDichTienTe("GDTT210123", "21/01/2023", 1500000000, 500000, "VND", 1);
    // Tong cho tung loai giao dich
    var tongSoLuongGiaoDichVang = giaoDichVang1.soLuong + giaoDichVang2.soLuong + giaoDichVang3.soLuong;
    var tongSoLuongGiaoDichTienTe = giaoDichTienTe1.soLuong + giaoDichTienTe2.soLuong + giaoDichTienTe3.soLuong;
    // Trung binh giao dich tien te
    var trungBinhThanhTienGiaoDichTienTe = (giaoDichTienTe1.tinhThanhTien() +
        giaoDichTienTe2.tinhThanhTien() +
        giaoDichTienTe3.tinhThanhTien()) /
        3;
    // Xuat ra cac don gia co hon 1 ty dong
    var giaoDichDonGiaLonHon1Ty = [
        giaoDichVang1,
        giaoDichVang2,
        giaoDichVang3,
        giaoDichTienTe1,
        giaoDichTienTe2,
        giaoDichTienTe3,
    ].filter(function (gd) { return gd.donGia > 1000000000; });
    console.log("T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng giao d\u1ECBch v\u00E0ng: ".concat(tongSoLuongGiaoDichVang));
    console.log("T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng giao d\u1ECBch ti\u1EC1n t\u1EC7: ".concat(tongSoLuongGiaoDichTienTe));
    console.log("Trung b\u00ECnh th\u00E0nh ti\u1EC1n giao d\u1ECBch ti\u1EC1n t\u1EC7: ".concat(trungBinhThanhTienGiaoDichTienTe));
    console.log("C\u00E1c giao d\u1ECBch c\u00F3 \u0111\u01A1n gi\u00E1 > 1 t\u1EF7:", giaoDichDonGiaLonHon1Ty);
}
exports.mainTransaction = mainTransaction;
