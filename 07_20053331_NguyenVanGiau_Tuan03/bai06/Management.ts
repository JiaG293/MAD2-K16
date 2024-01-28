import * as promptSync from 'prompt-sync';
const prompt = promptSync();

class Person {
    ten: string;
    diaChi: string;
    constructor(ten: string, diaChi: string) {
        this.ten = ten;
        this.diaChi = diaChi;
    }

    toString(): string {
        return `Tên: ${this.ten}, Địa chỉ: ${this.diaChi}`;
    }
}

class Student extends Person {
    diemMon1: number;
    diemMon2: number;
    constructor(ten: string, diaChi: string, diemMon1: number, diemMon2: number) {
        super(ten, diaChi);
        this.diemMon1 = diemMon1;
        this.diemMon2 = diemMon2;
    }

    tinhDiemTrungBinh(): number {
        return (this.diemMon1 + this.diemMon2) / 2;
    }

    danhGia(): string {
        const diemTrungBinh = this.tinhDiemTrungBinh();
        if (diemTrungBinh >= 8.5) {
            return "Xuất sắc";
        } else if (diemTrungBinh >= 7) {
            return "Tốt";
        } else if (diemTrungBinh >= 5.5) {
            return "Trung bình";
        } else {
            return "Yếu";
        }
    }

    toString(): string {
        return `${super.toString()}, Điểm môn 1: ${this.diemMon1}, Điểm môn 2: ${this.diemMon2}, Điểm trung bình: ${this.tinhDiemTrungBinh()}, Đánh giá: ${this.danhGia()}`;
    }
}

class Employee extends Person {
    heSoLuong: number;
    constructor(ten: string, diaChi: string, heSoLuong: number) {
        super(ten, diaChi);
        this.heSoLuong = heSoLuong;
    }

    tinhLuong(): number {
        return this.heSoLuong * 10000000;
    }

    danhGia(): string {
        if (this.heSoLuong >= 5) {
            return "Xuất sắc";
        } else if (this.heSoLuong >= 3) {
            return "Tốt";
        } else if (this.heSoLuong >= 1.5) {
            return "Trung bình";
        } else {
            return "Yếu";
        }
    }

    toString(): string {
        return `${super.toString()}, Hệ số lương: ${this.heSoLuong}, Lương: ${this.tinhLuong()}, Đánh giá: ${this.danhGia()}`;
    }
}

class Customer extends Person {
    tenCongTy: string;
    giaTriHoaDon: number;
    constructor(ten: string, diaChi: string, tenCongTy: string, giaTriHoaDon: number) {
        super(ten, diaChi);
        this.tenCongTy = tenCongTy;
        this.giaTriHoaDon = giaTriHoaDon;
    }

    toString(): string {
        return `${super.toString()}, Tên công ty: ${this.tenCongTy}, Giá trị hóa đơn: ${this.giaTriHoaDon}`;
    }
}

class Management {
    danhSachPerson: Person[] = [];

    constructor(private soLuongToiDa: number) { }

    themPerson(Person: Person): void {
        if (this.danhSachPerson.length < this.soLuongToiDa) {
            this.danhSachPerson.push(Person);
        } else {
            console.log("Đã đạt số lượng người tối đa!");
        }
    }

    xoaPerson(ten: string): void {
        this.danhSachPerson = this.danhSachPerson.filter(p => p['ten'] !== ten);
    }

    sapXepTheoTen(): void {
        this.danhSachPerson.sort((a, b) => a['ten'].localeCompare(b['ten']));
    }

    hienThiBang(): void {
        console.log("---------- Thông tin người ----------");
        console.table(this.danhSachPerson.map(Person => ({ "Tên": Person['ten'], "Địa chỉ": Person['diaChi'] })));
    }
}

function mainManagement() {
    const management = new Management(10);

    const student = new Student("Nguyen Van Giau", "333 Lai Hung Cuong, Emirates of Binh Chanh", 4, 6);
    const employee = new Employee("Nguyen Thanh Hiep", "12 Nguyen Van Bao Go Vap", 1.5);
    const customer = new Customer("Huynh Van Sang", "44 Ap Bac, Hoc Mon", "Cong ty TNHH MTV ASGY", 1500000000);

    management.themPerson(student);
    management.themPerson(employee);
    management.themPerson(customer);

    // Menu cho tương tác người dùng
    let luaChon: string;
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
                const loaiPerson = prompt("Nhập loại người (sinh vien/nhan vien/khach hang):");
                let person: Person;
                if (loaiPerson == "sinh vien") {
                    const ten = prompt("Nhập tên sinh viên:");
                    const diaChi = prompt("Nhập địa chỉ sinh viên:");
                    const diemMon1 = +prompt("Nhập điểm môn 1:");
                    const diemMon2 = +prompt("Nhập điểm môn 2:");
                    person = new Student(ten, diaChi, diemMon1, diemMon2);
                } else if (loaiPerson == "nhan vien") {
                    const ten = prompt("Nhập tên nhân viên:");
                    const diaChi = prompt("Nhập địa chỉ nhân viên:");
                    const heSoLuong = +prompt("Nhập hệ số lương:");
                    person = new Employee(ten, diaChi, heSoLuong);
                } else if (loaiPerson == "khach hang") {
                    const ten = prompt("Nhập tên khách hàng:");
                    const diaChi = prompt("Nhập địa chỉ khách hàng:");
                    const tenCongTy = prompt("Nhập tên công ty:");
                    const giaTriHoaDon = +prompt("Nhập giá trị hóa đơn:");
                    person = new Customer(ten, diaChi, tenCongTy, giaTriHoaDon);
                } else {
                    console.log("Loại người không hợp lệ!");
                    continue;
                }
                management.themPerson(person);
                break;
            case "2":
                const tenXoa = prompt("Nhập tên người muốn xóa:");
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

mainManagement();

export { Person, Student, Employee, Customer, Management, mainManagement };
