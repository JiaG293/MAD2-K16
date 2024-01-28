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
exports.mainInvoice = exports.KhachHangQuocTe = exports.KhachHangNoiDia = void 0;
var KhachHang = /** @class */ (function () {
    function KhachHang(ma, ten, ngayLapHoaDon, kWtieuthu, donGia) {
        this.ma = ma;
        this.ten = ten;
        this.ngayLapHoaDon = ngayLapHoaDon;
        this.kWtieuthu = kWtieuthu;
        this.donGia = donGia;
    }
    KhachHang.prototype.tinhTien = function () {
        return this.kWtieuthu * this.donGia;
    };
    return KhachHang;
}());
var KhachHangNoiDia = /** @class */ (function (_super) {
    __extends(KhachHangNoiDia, _super);
    function KhachHangNoiDia(ma, ten, ngayLapHoaDon, kWtieuthu, donGia, loaiKhachHang, gioiHan) {
        var _this = _super.call(this, ma, ten, ngayLapHoaDon, kWtieuthu, donGia) || this;
        _this.loaiKhachHang = loaiKhachHang;
        _this.gioiHan = gioiHan;
        return _this;
    }
    KhachHangNoiDia.prototype.tinhTien = function () {
        if (this.kWtieuthu <= this.gioiHan) {
            return _super.prototype.tinhTien.call(this);
        }
        else {
            var soKWvuotGioiHan = this.kWtieuthu - this.gioiHan;
            return ((this.gioiHan * this.donGia) +
                (soKWvuotGioiHan * this.donGia * 2.5));
        }
    };
    return KhachHangNoiDia;
}(KhachHang));
exports.KhachHangNoiDia = KhachHangNoiDia;
var KhachHangQuocTe = /** @class */ (function (_super) {
    __extends(KhachHangQuocTe, _super);
    function KhachHangQuocTe(ma, ten, ngayLapHoaDon, kWtieuthu, donGia, quocTich) {
        var _this = _super.call(this, ma, ten, ngayLapHoaDon, kWtieuthu, donGia) || this;
        _this.quocTich = quocTich;
        return _this;
    }
    return KhachHangQuocTe;
}(KhachHang));
exports.KhachHangQuocTe = KhachHangQuocTe;
function mainInvoice() {
    var danhSachKhachHang = [
        new KhachHangNoiDia('VN001', 'Nguyễn Văn Giàu', '15-09-2023', 100, 3000, 'sinh hoạt', 50),
        new KhachHangNoiDia('VN002', 'Huỳnh Văn Sang', '20-09-2018', 70, 3000, 'kinh doanh', 50),
        new KhachHangNoiDia('VN003', 'Nguyễn Thành Hiệp', '02-09-2018', 120, 3000, 'sản xuất', 50),
        new KhachHangQuocTe('FN001', 'John Wick', '10-09-2018', 150, 4000, 'USA'),
        new KhachHangQuocTe('FN002', 'John Cena', '22-03-2022', 80, 4000, 'Turkey'),
        new KhachHangQuocTe('FN003', 'King James', '28-02-2018', 100, 4000, 'Russia')
    ];
    var soLuongKhachHangNoiDia = 0;
    var soLuongKhachHangQuocTe = 0;
    var tongHoaDonKhachHangQuocTe = 0;
    console.log('\n\n\n--- Khách Hàng Nội Địa ---');
    danhSachKhachHang.forEach(function (khachHang) {
        if (khachHang instanceof KhachHangNoiDia) {
            soLuongKhachHangNoiDia++;
            console.log("Kh\u00E1ch H\u00E0ng: ".concat(khachHang.ten, ", H\u00F3a \u0110\u01A1n: ").concat(khachHang.tinhTien()));
        }
    });
    console.log('\n\n\n--- Khách Hàng Quốc Tế ---');
    danhSachKhachHang.forEach(function (khachHang) {
        if (khachHang instanceof KhachHangQuocTe) {
            soLuongKhachHangQuocTe++;
            tongHoaDonKhachHangQuocTe += khachHang.tinhTien();
            console.log("Kh\u00E1ch H\u00E0ng: ".concat(khachHang.ten, ", H\u00F3a \u0110\u01A1n: ").concat(khachHang.tinhTien()));
        }
    });
    var trungBinhHoaDonKhachHangQuocTe = tongHoaDonKhachHangQuocTe / soLuongKhachHangQuocTe;
    console.log("\n\n\nT\u1ED5ng S\u1ED1 L\u01B0\u1EE3ng Kh\u00E1ch H\u00E0ng N\u1ED9i \u0110\u1ECBa: ".concat(soLuongKhachHangNoiDia));
    console.log("T\u1ED5ng S\u1ED1 L\u01B0\u1EE3ng Kh\u00E1ch H\u00E0ng Qu\u1ED1c T\u1EBF: ".concat(soLuongKhachHangQuocTe));
    console.log("Trung B\u00ECnh H\u00F3a \u0110\u01A1n Cho Kh\u00E1ch H\u00E0ng Qu\u1ED1c T\u1EBF: ".concat(trungBinhHoaDonKhachHangQuocTe));
    var danhSachLoc = danhSachKhachHang.filter(function (gd) { return gd.ngayLapHoaDon.startsWith("09-2018", 3); });
    console.log('\n\n\n--- Lọc Khách Hàng 09-2018 ---\n\n', danhSachLoc);
}
exports.mainInvoice = mainInvoice;
