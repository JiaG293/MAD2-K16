//Class giao dich
class GiaoDich {
  maGiaoDich: string;
  ngayGiaoDich: string;
  donGia: number;
  soLuong: number;

  constructor(
    maGiaoDich: string,
    ngayGiaoDich: string,
    donGia: number,
    soLuong: number
  ) {
    this.maGiaoDich = maGiaoDich;
    this.ngayGiaoDich = ngayGiaoDich;
    this.donGia = donGia;
    this.soLuong = soLuong;
  }

  tinhThanhTien(): number {
    return this.soLuong * this.donGia;
  }
}

//Class thua ke giao dich vang
class GiaoDichVang extends GiaoDich {
  loaiVang: string;

  constructor(
    maGiaoDich: string,
    ngayGiaoDich: string,
    donGia: number,
    soLuong: number,
    loaiVang: string
  ) {
    super(maGiaoDich, ngayGiaoDich, donGia, soLuong);
    this.loaiVang = loaiVang;
  }
}

//Class thua ke giao dich tien te
class GiaoDichTienTe extends GiaoDich {
  loaiTienTe: string;
  tiGia: number;

  constructor(
    maGiaoDich: string,
    ngayGiaoDich: string,
    donGia: number,
    soLuong: number,
    loaiTienTe: string,
    tiGia: number
  ) {
    super(maGiaoDich, ngayGiaoDich, donGia, soLuong);
    this.loaiTienTe = loaiTienTe;
    this.tiGia = tiGia;
  }

  tinhThanhTien(): number {
    if (this.loaiTienTe === "USD" || this.loaiTienTe === "EUR") {
      return this.soLuong * this.donGia * this.tiGia;
    } else if (this.loaiTienTe === "VND") {
      return super.tinhThanhTien();
    } else {
      return 0;
    }
  }
}

function mainTransaction() {
  const giaoDichVang1 = new GiaoDichVang(
    "GDV210123",
    "21/01/2023",
    5000000,
    2,
    "24K"
  );
  const giaoDichVang2 = new GiaoDichVang(
    "GDV0210123",
    "02/01/2023",
    2905500,
    3,
    "18K"
  );
  const giaoDichVang3 = new GiaoDichVang(
    "GDV003",
    "01/01/2023",
    195000000,
    40,
    "24K"
  );

  const giaoDichTienTe1 = new GiaoDichTienTe(
    "GDTT010123",
    "01/01/2023",
    1,
    1000,
    "USD",
    27000
  );
  const giaoDichTienTe2 = new GiaoDichTienTe(
    "GDTT120123",
    "12/01/2023",
    10,
    1500,
    "EUR",
    29000
  );
  const giaoDichTienTe3 = new GiaoDichTienTe(
    "GDTT210123",
    "21/01/2023",
    1500000000,
    500000,
    "VND",
    1
  );

  // Tong cho tung loai giao dich
  const tongSoLuongGiaoDichVang =
    giaoDichVang1.soLuong + giaoDichVang2.soLuong + giaoDichVang3.soLuong;
  const tongSoLuongGiaoDichTienTe =
    giaoDichTienTe1.soLuong + giaoDichTienTe2.soLuong + giaoDichTienTe3.soLuong;

  // Trung binh giao dich tien te
  const trungBinhThanhTienGiaoDichTienTe =
    (giaoDichTienTe1.tinhThanhTien() +
      giaoDichTienTe2.tinhThanhTien() +
      giaoDichTienTe3.tinhThanhTien()) /
    3;

  // Xuat ra cac don gia co hon 1 ty dong
  const giaoDichDonGiaLonHon1Ty = [
    giaoDichVang1,
    giaoDichVang2,
    giaoDichVang3,
    giaoDichTienTe1,
    giaoDichTienTe2,
    giaoDichTienTe3,
  ].filter((gd) => gd.donGia > 1000000000);

  console.log(`Tổng số lượng giao dịch vàng: ${tongSoLuongGiaoDichVang}`);
  console.log(`Tổng số lượng giao dịch tiền tệ: ${tongSoLuongGiaoDichTienTe}`);
  console.log(
    `Trung bình thành tiền giao dịch tiền tệ: ${trungBinhThanhTienGiaoDichTienTe}`
  );
  console.log(`Các giao dịch có đơn giá > 1 tỷ:`, giaoDichDonGiaLonHon1Ty);
}

export { mainTransaction };
