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
exports.mainManagement = exports.Management = exports.Customer = exports.Employee = exports.Student = exports.Person = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Person = /** @class */ (function () {
    function Person(ten, diaChi) {
        this.ten = ten;
        this.diaChi = diaChi;
    }
    Person.prototype.toString = function () {
        return "T\u00EAn: ".concat(this.ten, ", \u0110\u1ECBa ch\u1EC9: ").concat(this.diaChi);
    };
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(ten, diaChi, diemMon1, diemMon2) {
        var _this = _super.call(this, ten, diaChi) || this;
        _this.diemMon1 = diemMon1;
        _this.diemMon2 = diemMon2;
        return _this;
    }
    Student.prototype.tinhDiemTrungBinh = function () {
        return (this.diemMon1 + this.diemMon2) / 2;
    };
    Student.prototype.danhGia = function () {
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if (diemTrungBinh >= 8.5) {
            return "Xuất sắc";
        }
        else if (diemTrungBinh >= 7) {
            return "Tốt";
        }
        else if (diemTrungBinh >= 5.5) {
            return "Trung bình";
        }
        else {
            return "Yếu";
        }
    };
    Student.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", \u0110i\u1EC3m m\u00F4n 1: ").concat(this.diemMon1, ", \u0110i\u1EC3m m\u00F4n 2: ").concat(this.diemMon2, ", \u0110i\u1EC3m trung b\u00ECnh: ").concat(this.tinhDiemTrungBinh(), ", \u0110\u00E1nh gi\u00E1: ").concat(this.danhGia());
    };
    return Student;
}(Person));
exports.Student = Student;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(ten, diaChi, heSoLuong) {
        var _this = _super.call(this, ten, diaChi) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    Employee.prototype.tinhLuong = function () {
        return this.heSoLuong * 10000000;
    };
    Employee.prototype.danhGia = function () {
        if (this.heSoLuong >= 5) {
            return "Xuất sắc";
        }
        else if (this.heSoLuong >= 3) {
            return "Tốt";
        }
        else if (this.heSoLuong >= 1.5) {
            return "Trung bình";
        }
        else {
            return "Yếu";
        }
    };
    Employee.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", H\u1EC7 s\u1ED1 l\u01B0\u01A1ng: ").concat(this.heSoLuong, ", L\u01B0\u01A1ng: ").concat(this.tinhLuong(), ", \u0110\u00E1nh gi\u00E1: ").concat(this.danhGia());
    };
    return Employee;
}(Person));
exports.Employee = Employee;
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(ten, diaChi, tenCongTy, giaTriHoaDon) {
        var _this = _super.call(this, ten, diaChi) || this;
        _this.tenCongTy = tenCongTy;
        _this.giaTriHoaDon = giaTriHoaDon;
        return _this;
    }
    Customer.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", T\u00EAn c\u00F4ng ty: ").concat(this.tenCongTy, ", Gi\u00E1 tr\u1ECB h\u00F3a \u0111\u01A1n: ").concat(this.giaTriHoaDon);
    };
    return Customer;
}(Person));
exports.Customer = Customer;
var Management = /** @class */ (function () {
    function Management(soLuongToiDa) {
        this.soLuongToiDa = soLuongToiDa;
        this.danhSachPerson = [];
    }
    Management.prototype.themPerson = function (Person) {
        if (this.danhSachPerson.length < this.soLuongToiDa) {
            this.danhSachPerson.push(Person);
        }
        else {
            console.log("Đã đạt số lượng người tối đa!");
        }
    };
    Management.prototype.xoaPerson = function (ten) {
        this.danhSachPerson = this.danhSachPerson.filter(function (p) { return p['ten'] !== ten; });
    };
    Management.prototype.sapXepTheoTen = function () {
        this.danhSachPerson.sort(function (a, b) { return a['ten'].localeCompare(b['ten']); });
    };
    Management.prototype.hienThiBang = function () {
        console.log("---------- Thông tin người ----------");
        console.table(this.danhSachPerson.map(function (Person) { return ({ "Tên": Person['ten'], "Địa chỉ": Person['diaChi'] }); }));
    };
    return Management;
}());
exports.Management = Management;
function mainManagement() {
    var management = new Management(10);
    var student = new Student("Nguyen Van Giau", "333 Lai Hung Cuong, Emirates of Binh Chanh", 4, 6);
    var employee = new Employee("Nguyen Thanh Hiep", "12 Nguyen Van Bao Go Vap", 1.5);
    var customer = new Customer("Huynh Van Sang", "44 Ap Bac, Hoc Mon", "Cong ty TNHH MTV ASGY", 1500000000);
    management.themPerson(student);
    management.themPerson(employee);
    management.themPerson(customer);
    // Menu cho tương tác người dùng
    var luaChon;
    do {
        console.log("\n-------- Menu --------");
        console.log("1. Thêm người");
        console.log("2. Xóa người");
        console.log("3. Sắp xếp người theo tên");
        console.log("4. Hiển thị thông tin người");
        console.log("5. Thoát");
        luaChon = prompt("Nhập lựa chọn của bạn:");
        switch (luaChon) {
            case "1":
                var loaiPerson = prompt("Nhập loại người (sinh vien/nhan vien/khach hang):");
                var person = void 0;
                if (loaiPerson == "sinh vien") {
                    var ten = prompt("Nhập tên sinh viên:");
                    var diaChi = prompt("Nhập địa chỉ sinh viên:");
                    var diemMon1 = +prompt("Nhập điểm môn 1:");
                    var diemMon2 = +prompt("Nhập điểm môn 2:");
                    person = new Student(ten, diaChi, diemMon1, diemMon2);
                }
                else if (loaiPerson == "nhan vien") {
                    var ten = prompt("Nhập tên nhân viên:");
                    var diaChi = prompt("Nhập địa chỉ nhân viên:");
                    var heSoLuong = +prompt("Nhập hệ số lương:");
                    person = new Employee(ten, diaChi, heSoLuong);
                }
                else if (loaiPerson == "khach hang") {
                    var ten = prompt("Nhập tên khách hàng:");
                    var diaChi = prompt("Nhập địa chỉ khách hàng:");
                    var tenCongTy = prompt("Nhập tên công ty:");
                    var giaTriHoaDon = +prompt("Nhập giá trị hóa đơn:");
                    person = new Customer(ten, diaChi, tenCongTy, giaTriHoaDon);
                }
                else {
                    console.log("Loại người không hợp lệ!");
                    continue;
                }
                management.themPerson(person);
                break;
            case "2":
                var tenXoa = prompt("Nhập tên người muốn xóa:");
                management.xoaPerson(tenXoa);
                break;
            case "3":
                management.sapXepTheoTen();
                break;
            case "4":
                management.hienThiBang();
                break;
            case "5":
                console.log("Thoát chương trình...");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (luaChon !== "5");
}
exports.mainManagement = mainManagement;
mainManagement();
