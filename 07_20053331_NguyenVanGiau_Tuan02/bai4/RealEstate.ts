//class giao dich dat
class GiaoDichDat {
  maGiaoDich: string;
  ngayGiaoDich: string;
  donGia: number;
  loaiDat: string;
  dienTich: number;

  constructor(
    maGiaoDich: string,
    ngayGiaoDich: string,
    donGia: number,
    loaiDat: string,
    dienTich: number
  ) {
    this.maGiaoDich = maGiaoDich;
    this.ngayGiaoDich = ngayGiaoDich;
    this.donGia = donGia;
    this.loaiDat = loaiDat;
    this.dienTich = dienTich;
  }

  tinhThanhTien(): number {
    if (this.loaiDat === "A") {
      return this.dienTich * this.donGia * 1.5;
    } else {
      return this.dienTich * this.donGia;
    }
  }
}

//Class giao dich nha
class GiaoDichNha {
  maGiaoDich: string;
  ngayGiaoDich: string;
  donGia: number;
  loaiNha: string;
  diaChi: string;
  dienTich: number;

  constructor(
    maGiaoDich: string,
    ngayGiaoDich: string,
    donGia: number,
    loaiNha: string,
    diaChi: string,
    dienTich: number
  ) {
    this.maGiaoDich = maGiaoDich;
    this.ngayGiaoDich = ngayGiaoDich;
    this.donGia = donGia;
    this.loaiNha = loaiNha;
    this.diaChi = diaChi;
    this.dienTich = dienTich;
  }

  tinhThanhTien(): number {
    if (this.loaiNha === "cao cấp") {
      return this.dienTich * this.donGia;
    } else {
      return this.dienTich * this.donGia * 0.9;
    }
  }
}

function mainRealEstate() {
  const giaoDichDat1 = new GiaoDichDat(
    "GDD001",
    "01/09/2013",
    1000000,
    "A",
    200
  );
  const giaoDichDat2 = new GiaoDichDat(
    "GDD002",
    "05/09/2013",
    800000,
    "B",
    150
  );
  const giaoDichDat3 = new GiaoDichDat(
    "GDD003",
    "10/09/2013",
    1200000,
    "C",
    180
  );

  const giaoDichNha1 = new GiaoDichNha(
    "GDN001",
    "02/09/2013",
    2000000,
    "cao cấp",
    "123 ABC Street",
    250
  );
  const giaoDichNha2 = new GiaoDichNha(
    "GDN002",
    "08/09/2013",
    1500000,
    "thường",
    "456 XYZ Street",
    180
  );
  const giaoDichNha3 = new GiaoDichNha(
    "GDN003",
    "12/09/2013",
    1800000,
    "thường",
    "789 DEF Street",
    200
  );

  // so luong giao dich
  const tongSoLuongGiaoDichDat =
    giaoDichDat1.dienTich + giaoDichDat2.dienTich + giaoDichDat3.dienTich;
  const tongSoLuongGiaoDichNha =
    giaoDichNha1.dienTich + giaoDichNha2.dienTich + giaoDichNha3.dienTich;

  // Trung binh cac giao dich dat
  const trungBinhThanhTienGiaoDichDat =
    (giaoDichDat1.tinhThanhTien() +
      giaoDichDat2.tinhThanhTien() +
      giaoDichDat3.tinhThanhTien()) /
    3;

  // xuat ra cac giao dich 9/23
  const giaoDichThang9Nam2013 = [
    giaoDichDat1,
    giaoDichDat2,
    giaoDichDat3,
    giaoDichNha1,
    giaoDichNha2,
    giaoDichNha3,
  ].filter((gd) => gd.ngayGiaoDich.startsWith("09/2013", 3));

  console.log(`Tổng số lượng giao dịch đất: ${tongSoLuongGiaoDichDat}`);
  console.log(`Tổng số lượng giao dịch nhà: ${tongSoLuongGiaoDichNha}`);
  console.log(
    `Trung bình thành tiền giao dịch đất: ${trungBinhThanhTienGiaoDichDat}`
  );
  console.log(`Các giao dịch của tháng 9 năm 2013:`, giaoDichThang9Nam2013);
}

export { GiaoDichDat, GiaoDichNha, mainRealEstate };
