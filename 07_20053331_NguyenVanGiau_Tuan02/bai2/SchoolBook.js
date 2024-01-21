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
exports.mainSchoolBook = exports.SachThamKhao = exports.SachGiaoKhoa = exports.Sach = void 0;
//Class sach
var Sach = /** @class */ (function () {
    function Sach(maSach, ngayNhap, donGia, soLuong, nhaXuatBan) {
        this.maSach = maSach;
        this.ngayNhap = ngayNhap;
        this.donGia = donGia;
        this.soLuong = soLuong;
        this.nhaXuatBan = nhaXuatBan;
    }
    Sach.prototype.tinhThanhTien = function () {
        return this.donGia * this.soLuong;
    };
    return Sach;
}());
exports.Sach = Sach;
//Class sach giao khoa
var SachGiaoKhoa = /** @class */ (function (_super) {
    __extends(SachGiaoKhoa, _super);
    function SachGiaoKhoa(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, tinhTrang) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        _this.tinhTrang = tinhTrang;
        return _this;
    }
    SachGiaoKhoa.prototype.tinhThanhTien = function () {
        if (this.tinhTrang === "mới") {
            return _super.prototype.tinhThanhTien.call(this);
        }
        else if (this.tinhTrang === "cũ") {
            return _super.prototype.tinhThanhTien.call(this) * 0.5;
        }
        else {
            return 0;
        }
    };
    return SachGiaoKhoa;
}(Sach));
exports.SachGiaoKhoa = SachGiaoKhoa;
//Class sach tham khao
var SachThamKhao = /** @class */ (function (_super) {
    __extends(SachThamKhao, _super);
    function SachThamKhao(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, thue) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        _this.thue = thue;
        return _this;
    }
    SachThamKhao.prototype.tinhThanhTien = function () {
        return _super.prototype.tinhThanhTien.call(this) + this.thue;
    };
    return SachThamKhao;
}(Sach));
exports.SachThamKhao = SachThamKhao;
function mainSchoolBook() {
    var sachGiaoKhoa1 = new SachGiaoKhoa("GDCD-LOP1", "21/01/2023", 12900, 100, "Nhà xuất bản Giáo dục Việt Nam", "mới");
    var sachGiaoKhoa2 = new SachGiaoKhoa("TV-LOP2", "03/02/2023", 14600, 1000, "Nhà xuất bản Giáo dục Việt Nam", "cũ");
    var sachGiaoKhoa3 = new SachGiaoKhoa("TOAN-LOP4", "23/02/2023", 21600, 300, "Nhà xuất bản Giáo dục Việt Nam", "mới");
    var sachThamKhao1 = new SachThamKhao("AV-LOP4", "23/11/2021", 20000, 50, "Nhà xuất bản Giáo dục Việt Nam", 45600);
    var sachThamKhao2 = new SachThamKhao("AV-LOP12", "21/01/2023", 22000, 200, "NXB Đại học Quốc gia Hà Nội", 34000);
    var sachThamKhao3 = new SachThamKhao("HOAHOC-LOP12", "03/01/2016", 25000, 650, "NXB Đại học Quốc gia Hà Nội", 75900);
    // Tinh thanh tien cho tung loai sach
    var tongThanhTienSachGiaoKhoa = sachGiaoKhoa1.tinhThanhTien() +
        sachGiaoKhoa2.tinhThanhTien() +
        sachGiaoKhoa3.tinhThanhTien();
    var tongThanhTienSachThamKhao = sachThamKhao1.tinhThanhTien() +
        sachThamKhao2.tinhThanhTien() +
        sachThamKhao3.tinhThanhTien();
    // Tinh trung binh gia cac loai sach
    var trungBinhDonGiaSachThamKhao = (sachThamKhao1.donGia + sachThamKhao2.donGia + sachThamKhao3.donGia) / 3;
    console.log("T\u1ED5ng th\u00E0nh ti\u1EC1n s\u00E1ch gi\u00E1o khoa: ".concat(tongThanhTienSachGiaoKhoa));
    console.log("T\u1ED5ng th\u00E0nh ti\u1EC1n s\u00E1ch tham kh\u1EA3o: ".concat(tongThanhTienSachThamKhao));
    console.log("Trung b\u00ECnh c\u1ED9ng \u0111\u01A1n gi\u00E1 s\u00E1ch tham kh\u1EA3o: ".concat(trungBinhDonGiaSachThamKhao));
    // Xuat ra casc sach cua nha xuat ban K
    var nhaXuatBanCanTim = "Nhà xuất bản Giáo dục Việt Nam";
    var sachGiaoKhoaNXB_K = [sachGiaoKhoa1, sachGiaoKhoa3].filter(function (sach) { return sach.nhaXuatBan === nhaXuatBanCanTim; });
    console.log("C\u00E1c s\u00E1ch gi\u00E1o khoa c\u1EE7a nh\u00E0 xu\u1EA5t b\u1EA3n ".concat(nhaXuatBanCanTim, ":"), sachGiaoKhoaNXB_K);
}
exports.mainSchoolBook = mainSchoolBook;
