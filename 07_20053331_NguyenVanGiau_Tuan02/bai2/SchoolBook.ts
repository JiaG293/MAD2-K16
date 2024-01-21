
//Class sach
class Sach {
  maSach: string;
  ngayNhap: string;
  donGia: number;
  soLuong: number;
  nhaXuatBan: string;

  constructor(
    maSach: string,
    ngayNhap: string,
    donGia: number,
    soLuong: number,
    nhaXuatBan: string
  ) {
    this.maSach = maSach;
    this.ngayNhap = ngayNhap;
    this.donGia = donGia;
    this.soLuong = soLuong;
    this.nhaXuatBan = nhaXuatBan;
  }

  tinhThanhTien(): number {
    return this.donGia * this.soLuong;
  }
}

//Class sach giao khoa
class SachGiaoKhoa extends Sach {
  tinhTrang: string;

  constructor(
    maSach: string,
    ngayNhap: string,
    donGia: number,
    soLuong: number,
    nhaXuatBan: string,
    tinhTrang: string
  ) {
    super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
    this.tinhTrang = tinhTrang;
  }

  tinhThanhTien(): number {
    if (this.tinhTrang === "mới") {
      return super.tinhThanhTien();
    } else if (this.tinhTrang === "cũ") {
      return super.tinhThanhTien() * 0.5;
    } else {
      return 0;
    }
  }
}


//Class sach tham khao
class SachThamKhao extends Sach {
  thue: number;

  constructor(
    maSach: string,
    ngayNhap: string,
    donGia: number,
    soLuong: number,
    nhaXuatBan: string,
    thue: number
  ) {
    super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan);
    this.thue = thue;
  }

  tinhThanhTien(): number {
    return super.tinhThanhTien() + this.thue;
  }
}

function mainSchoolBook() {
  const sachGiaoKhoa1 = new SachGiaoKhoa(
    "GDCD-LOP1",
    "21/01/2023",
    12900,
    100,
    "Nhà xuất bản Giáo dục Việt Nam",
    "mới"
  );
  const sachGiaoKhoa2 = new SachGiaoKhoa(
    "TV-LOP2",
    "03/02/2023",
    14600,
    1000,
    "Nhà xuất bản Giáo dục Việt Nam",
    "cũ"
  );
  const sachGiaoKhoa3 = new SachGiaoKhoa(
    "TOAN-LOP4",
    "23/02/2023",
    21600,
    300,
    "Nhà xuất bản Giáo dục Việt Nam",
    "mới"
  );

  const sachThamKhao1 = new SachThamKhao(
    "AV-LOP4",
    "23/11/2021",
    20000,
    50,
    "Nhà xuất bản Giáo dục Việt Nam",
    45600
  );
  const sachThamKhao2 = new SachThamKhao(
    "AV-LOP12",
    "21/01/2023",
    22000,
    200,
    "NXB Đại học Quốc gia Hà Nội",
    34000
  );
  const sachThamKhao3 = new SachThamKhao(
    "HOAHOC-LOP12",
    "03/01/2016",
    25000,
    650,
    "NXB Đại học Quốc gia Hà Nội",
    75900
  );

  // Tinh thanh tien cho tung loai sach
  const tongThanhTienSachGiaoKhoa =
    sachGiaoKhoa1.tinhThanhTien() +
    sachGiaoKhoa2.tinhThanhTien() +
    sachGiaoKhoa3.tinhThanhTien();
  const tongThanhTienSachThamKhao =
    sachThamKhao1.tinhThanhTien() +
    sachThamKhao2.tinhThanhTien() +
    sachThamKhao3.tinhThanhTien();

  // Tinh trung binh gia cac loai sach
  const trungBinhDonGiaSachThamKhao =
    (sachThamKhao1.donGia + sachThamKhao2.donGia + sachThamKhao3.donGia) / 3;

  console.log(`Tổng thành tiền sách giáo khoa: ${tongThanhTienSachGiaoKhoa}`);
  console.log(`Tổng thành tiền sách tham khảo: ${tongThanhTienSachThamKhao}`);
  console.log(
    `Trung bình cộng đơn giá sách tham khảo: ${trungBinhDonGiaSachThamKhao}`
  );

  // Xuat ra casc sach cua nha xuat ban K
  const nhaXuatBanCanTim = "Nhà xuất bản Giáo dục Việt Nam";
  const sachGiaoKhoaNXB_K = [sachGiaoKhoa1, sachGiaoKhoa3].filter(
    (sach) => sach.nhaXuatBan === nhaXuatBanCanTim
  );
  console.log(
    `Các sách giáo khoa của nhà xuất bản ${nhaXuatBanCanTim}:`,
    sachGiaoKhoaNXB_K
  );
}

export { Sach, SachGiaoKhoa, SachThamKhao, mainSchoolBook };
