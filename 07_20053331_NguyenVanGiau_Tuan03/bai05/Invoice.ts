class KhachHang {
    ma: string
    ten: string
    ngayLapHoaDon: string
    kWtieuthu: number
    donGia: number
    constructor(
        ma: string,
        ten: string,
        ngayLapHoaDon: string,
        kWtieuthu: number,
        donGia: number
    ) {
        this.ma = ma
        this.ten = ten
        this.ngayLapHoaDon = ngayLapHoaDon
        this.kWtieuthu = kWtieuthu
        this.donGia = donGia
    }

    tinhTien(): number {
        return this.kWtieuthu * this.donGia;
    }
}

class KhachHangNoiDia extends KhachHang {
    loaiKhachHang: string
    gioiHan: number
    constructor(
        ma: string,
        ten: string,
        ngayLapHoaDon: string,
        kWtieuthu: number,
        donGia: number,
        loaiKhachHang: string,
        gioiHan: number
    ) {
        super(ma, ten, ngayLapHoaDon, kWtieuthu, donGia);
        this.loaiKhachHang = loaiKhachHang
        this.gioiHan = gioiHan
    }

    tinhTien(): number {
        if (this.kWtieuthu <= this.gioiHan) {
            return super.tinhTien();
        } else {
            const soKWvuotGioiHan = this.kWtieuthu - this.gioiHan;
            return (
                (this.gioiHan * this.donGia) +
                (soKWvuotGioiHan * this.donGia * 2.5)
            );
        }
    }
}

class KhachHangQuocTe extends KhachHang {
    quocTich: string
    constructor(
        ma: string,
        ten: string,
        ngayLapHoaDon: string,
        kWtieuthu: number,
        donGia: number,
        quocTich: string
    ) {
        super(ma, ten, ngayLapHoaDon, kWtieuthu, donGia);
        this.quocTich = quocTich
    }
}

function mainInvoice() {
    const danhSachKhachHang: KhachHang[] = [
        new KhachHangNoiDia('VN001', 'Nguyễn Văn Giàu', '15-09-2023', 100, 3000, 'sinh hoạt', 50),
        new KhachHangNoiDia('VN002', 'Huỳnh Văn Sang', '20-09-2018', 70, 3000, 'kinh doanh', 50),
        new KhachHangNoiDia('VN003', 'Nguyễn Thành Hiệp', '02-09-2018', 120, 3000, 'sản xuất', 50),
        new KhachHangQuocTe('FN001', 'John Wick', '10-09-2018', 150, 4000, 'USA'),
        new KhachHangQuocTe('FN002', 'John Cena', '22-03-2022', 80, 4000, 'Turkey'),
        new KhachHangQuocTe('FN003', 'King James', '28-02-2018', 100, 4000, 'Russia')
    ];

    let soLuongKhachHangNoiDia = 0;
    let soLuongKhachHangQuocTe = 0;
    let tongHoaDonKhachHangQuocTe = 0;

    console.log('\n\n\n--- Khách Hàng Nội Địa ---');
    danhSachKhachHang.forEach(khachHang => {
        if (khachHang instanceof KhachHangNoiDia) {
            soLuongKhachHangNoiDia++;
            console.log(`Khách Hàng: ${khachHang.ten}, Hóa Đơn: ${khachHang.tinhTien()}`);
        }
    });

    console.log('\n\n\n--- Khách Hàng Quốc Tế ---');
    danhSachKhachHang.forEach(khachHang => {
        if (khachHang instanceof KhachHangQuocTe) {
            soLuongKhachHangQuocTe++;
            tongHoaDonKhachHangQuocTe += khachHang.tinhTien();
            console.log(`Khách Hàng: ${khachHang.ten}, Hóa Đơn: ${khachHang.tinhTien()}`);
        }
    });

    const trungBinhHoaDonKhachHangQuocTe = tongHoaDonKhachHangQuocTe / soLuongKhachHangQuocTe;

    console.log(`\n\n\nTổng Số Lượng Khách Hàng Nội Địa: ${soLuongKhachHangNoiDia}`);
    console.log(`Tổng Số Lượng Khách Hàng Quốc Tế: ${soLuongKhachHangQuocTe}`);
    console.log(`Trung Bình Hóa Đơn Cho Khách Hàng Quốc Tế: ${trungBinhHoaDonKhachHangQuocTe}`);


    const danhSachLoc = danhSachKhachHang.filter((gd) => gd.ngayLapHoaDon.startsWith("09-2018", 3));
    console.log('\n\n\n--- Lọc Khách Hàng 09-2018 ---\n\n', danhSachLoc);
}

export { KhachHangNoiDia, KhachHangQuocTe, mainInvoice }

