"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRealEstate = exports.GiaoDichNha = exports.GiaoDichDat = void 0;
//class giao dich dat
var GiaoDichDat = /** @class */ (function () {
    function GiaoDichDat(maGiaoDich, ngayGiaoDich, donGia, loaiDat, dienTich) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.loaiDat = loaiDat;
        this.dienTich = dienTich;
    }
    GiaoDichDat.prototype.tinhThanhTien = function () {
        if (this.loaiDat === "A") {
            return this.dienTich * this.donGia * 1.5;
        }
        else {
            return this.dienTich * this.donGia;
        }
    };
    return GiaoDichDat;
}());
exports.GiaoDichDat = GiaoDichDat;
//Class giao dich nha
var GiaoDichNha = /** @class */ (function () {
    function GiaoDichNha(maGiaoDich, ngayGiaoDich, donGia, loaiNha, diaChi, dienTich) {
        this.maGiaoDich = maGiaoDich;
        this.ngayGiaoDich = ngayGiaoDich;
        this.donGia = donGia;
        this.loaiNha = loaiNha;
        this.diaChi = diaChi;
        this.dienTich = dienTich;
    }
    GiaoDichNha.prototype.tinhThanhTien = function () {
        if (this.loaiNha === "cao cấp") {
            return this.dienTich * this.donGia;
        }
        else {
            return this.dienTich * this.donGia * 0.9;
        }
    };
    return GiaoDichNha;
}());
exports.GiaoDichNha = GiaoDichNha;
function mainRealEstate() {
    var giaoDichDat1 = new GiaoDichDat("GDD001", "01/09/2013", 1000000, "A", 200);
    var giaoDichDat2 = new GiaoDichDat("GDD002", "05/09/2013", 800000, "B", 150);
    var giaoDichDat3 = new GiaoDichDat("GDD003", "10/09/2013", 1200000, "C", 180);
    var giaoDichNha1 = new GiaoDichNha("GDN001", "02/09/2013", 2000000, "cao cấp", "123 ABC Street", 250);
    var giaoDichNha2 = new GiaoDichNha("GDN002", "08/09/2013", 1500000, "thường", "456 XYZ Street", 180);
    var giaoDichNha3 = new GiaoDichNha("GDN003", "12/09/2013", 1800000, "thường", "789 DEF Street", 200);
    // so luong giao dich
    var tongSoLuongGiaoDichDat = giaoDichDat1.dienTich + giaoDichDat2.dienTich + giaoDichDat3.dienTich;
    var tongSoLuongGiaoDichNha = giaoDichNha1.dienTich + giaoDichNha2.dienTich + giaoDichNha3.dienTich;
    // Trung binh cac giao dich dat
    var trungBinhThanhTienGiaoDichDat = (giaoDichDat1.tinhThanhTien() +
        giaoDichDat2.tinhThanhTien() +
        giaoDichDat3.tinhThanhTien()) /
        3;
    // xuat ra cac giao dich 9/23
    var giaoDichThang9Nam2013 = [
        giaoDichDat1,
        giaoDichDat2,
        giaoDichDat3,
        giaoDichNha1,
        giaoDichNha2,
        giaoDichNha3,
    ].filter(function (gd) { return gd.ngayGiaoDich.startsWith("09/2013", 3); });
    console.log("T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng giao d\u1ECBch \u0111\u1EA5t: ".concat(tongSoLuongGiaoDichDat));
    console.log("T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng giao d\u1ECBch nh\u00E0: ".concat(tongSoLuongGiaoDichNha));
    console.log("Trung b\u00ECnh th\u00E0nh ti\u1EC1n giao d\u1ECBch \u0111\u1EA5t: ".concat(trungBinhThanhTienGiaoDichDat));
    console.log("C\u00E1c giao d\u1ECBch c\u1EE7a th\u00E1ng 9 n\u0103m 2013:", giaoDichThang9Nam2013);
}
exports.mainRealEstate = mainRealEstate;
