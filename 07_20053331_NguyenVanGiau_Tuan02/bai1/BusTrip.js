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
exports.mainBusTrip = exports.ChuyenXeNgoaiThanh = exports.ChuyenXeNoiThanh = exports.ChuyenXe = void 0;
//Class chuyen xe
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSoChuyen, hoTenTaiXe, soXe, doanhThu) {
        this.maSoChuyen = maSoChuyen;
        this.hoTenTaiXe = hoTenTaiXe;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }
    ChuyenXe.prototype.tinhDoanhThu = function () {
        return this.doanhThu;
    };
    return ChuyenXe;
}());
exports.ChuyenXe = ChuyenXe;
//Class thua ke chuyen xe noi thanh
var ChuyenXeNoiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNoiThanh, _super);
    function ChuyenXeNoiThanh(maSoChuyen, hoTenTaiXe, soXe, soTuyen, soKmDiDuoc, doanhThu) {
        var _this = _super.call(this, maSoChuyen, hoTenTaiXe, soXe, doanhThu) || this;
        _this.soTuyen = soTuyen;
        _this.soKmDiDuoc = soKmDiDuoc;
        return _this;
    }
    ChuyenXeNoiThanh.prototype.tinhDoanhThu = function () {
        return this.soKmDiDuoc * 1000;
    };
    return ChuyenXeNoiThanh;
}(ChuyenXe));
exports.ChuyenXeNoiThanh = ChuyenXeNoiThanh;
//Class thua ke chuyen xe ngoai thanh
var ChuyenXeNgoaiThanh = /** @class */ (function (_super) {
    __extends(ChuyenXeNgoaiThanh, _super);
    function ChuyenXeNgoaiThanh(maSoChuyen, hoTenTaiXe, soXe, noiDen, soNgayDiDuoc, doanhThu) {
        var _this = _super.call(this, maSoChuyen, hoTenTaiXe, soXe, doanhThu) || this;
        _this.noiDen = noiDen;
        _this.soNgayDiDuoc = soNgayDiDuoc;
        return _this;
    }
    return ChuyenXeNgoaiThanh;
}(ChuyenXe));
exports.ChuyenXeNgoaiThanh = ChuyenXeNgoaiThanh;
function mainBusTrip() {
    var chuyenXeNoiThanh1 = new ChuyenXeNoiThanh("NOITHANH1A", "Nguyễn Văn Giàu", "Xe 1A", 1, 20, 1000000);
    var chuyenXeNoiThanh2 = new ChuyenXeNoiThanh("NOITHANH5B", "Huỳnh Văn Sang", "Xe 5B", 2, 50, 400000);
    var chuyenXeNgoaiThanh1 = new ChuyenXeNgoaiThanh("NGOAITHANH99A", "Nguyễn Thành Hiệp", "Xe 99A", "Bình Chánh", 3, 35600000);
    var chuyenXeNgoaiThanh2 = new ChuyenXeNgoaiThanh("NGOAITHANH35F", "Hồ Tấn Lộc", "Xe 35F", "Nhà Bè", 1, 5300000);
    // Tong thu cho tat ca tuyen xe
    var tongDoanhThuTatCaChuyenXe = chuyenXeNoiThanh1.tinhDoanhThu() +
        chuyenXeNoiThanh2.tinhDoanhThu() +
        chuyenXeNgoaiThanh1.tinhDoanhThu() +
        chuyenXeNgoaiThanh2.tinhDoanhThu();
    // Tong thu chong tung loai tuyen xe
    var tongDoanhThuChuyenXeNoiThanh = chuyenXeNoiThanh1.tinhDoanhThu() + chuyenXeNoiThanh2.tinhDoanhThu();
    var tongDoanhThuChuyenXeNgoaiThanh = chuyenXeNgoaiThanh1.tinhDoanhThu() + chuyenXeNgoaiThanh2.tinhDoanhThu();
    console.log("T\u1ED5ng doanh thu t\u1EA5t c\u1EA3 chuy\u1EBFn xe: ".concat(tongDoanhThuTatCaChuyenXe));
    console.log("T\u1ED5ng doanh thu chuy\u1EBFn xe n\u1ED9i th\u00E0nh: ".concat(tongDoanhThuChuyenXeNoiThanh));
    console.log("T\u1ED5ng doanh thu chuy\u1EBFn xe ngo\u1EA1i th\u00E0nh: ".concat(tongDoanhThuChuyenXeNgoaiThanh));
}
exports.mainBusTrip = mainBusTrip;
