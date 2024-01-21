//Class chuyen xe
class ChuyenXe {
  maSoChuyen: string;
  hoTenTaiXe: string;
  soXe: string;
  doanhThu: number;

  constructor(
    maSoChuyen: string,
    hoTenTaiXe: string,
    soXe: string,
    doanhThu: number
  ) {
    this.maSoChuyen = maSoChuyen;
    this.hoTenTaiXe = hoTenTaiXe;
    this.soXe = soXe;
    this.doanhThu = doanhThu;
  }

  tinhDoanhThu(): number {
    return this.doanhThu;
  }
}

//Class thua ke chuyen xe noi thanh
class ChuyenXeNoiThanh extends ChuyenXe {
  soTuyen: number;
  soKmDiDuoc: number;

  constructor(
    maSoChuyen: string,
    hoTenTaiXe: string,
    soXe: string,
    soTuyen: number,
    soKmDiDuoc: number,
    doanhThu: number
  ) {
    super(maSoChuyen, hoTenTaiXe, soXe, doanhThu);
    this.soTuyen = soTuyen;
    this.soKmDiDuoc = soKmDiDuoc;
  }

  tinhDoanhThu(): number {
    return this.soKmDiDuoc * 1000;
  }
}

//Class thua ke chuyen xe ngoai thanh
class ChuyenXeNgoaiThanh extends ChuyenXe {
  noiDen: string;
  soNgayDiDuoc: number;

  constructor(
    maSoChuyen: string,
    hoTenTaiXe: string,
    soXe: string,
    noiDen: string,
    soNgayDiDuoc: number,
    doanhThu: number
  ) {
    super(maSoChuyen, hoTenTaiXe, soXe, doanhThu);
    this.noiDen = noiDen;
    this.soNgayDiDuoc = soNgayDiDuoc;
  }
}

function mainBusTrip() {
  const chuyenXeNoiThanh1 = new ChuyenXeNoiThanh(
    "NOITHANH1A",
    "Nguyễn Văn Giàu",
    "Xe 1A",
    1,
    20,
    1000000
  );
  const chuyenXeNoiThanh2 = new ChuyenXeNoiThanh(
    "NOITHANH5B",
    "Huỳnh Văn Sang",
    "Xe 5B",
    2,
    50,
    400000
  );

  const chuyenXeNgoaiThanh1 = new ChuyenXeNgoaiThanh(
    "NGOAITHANH99A",
    "Nguyễn Thành Hiệp",
    "Xe 99A",
    "Bình Chánh",
    3,
    35600000
  );
  const chuyenXeNgoaiThanh2 = new ChuyenXeNgoaiThanh(
    "NGOAITHANH35F",
    "Hồ Tấn Lộc",
    "Xe 35F",
    "Nhà Bè",
    1,
    5300000
  );

  // Tong thu cho tat ca tuyen xe
  const tongDoanhThuTatCaChuyenXe =
    chuyenXeNoiThanh1.tinhDoanhThu() +
    chuyenXeNoiThanh2.tinhDoanhThu() +
    chuyenXeNgoaiThanh1.tinhDoanhThu() +
    chuyenXeNgoaiThanh2.tinhDoanhThu();

  // Tong thu chong tung loai tuyen xe
  const tongDoanhThuChuyenXeNoiThanh =
    chuyenXeNoiThanh1.tinhDoanhThu() + chuyenXeNoiThanh2.tinhDoanhThu();
  const tongDoanhThuChuyenXeNgoaiThanh =
    chuyenXeNgoaiThanh1.tinhDoanhThu() + chuyenXeNgoaiThanh2.tinhDoanhThu();

  console.log(`Tổng doanh thu tất cả chuyến xe: ${tongDoanhThuTatCaChuyenXe}`);
  console.log(
    `Tổng doanh thu chuyến xe nội thành: ${tongDoanhThuChuyenXeNoiThanh}`
  );
  console.log(
    `Tổng doanh thu chuyến xe ngoại thành: ${tongDoanhThuChuyenXeNgoaiThanh}`
  );
}

export { ChuyenXe, ChuyenXeNoiThanh, ChuyenXeNgoaiThanh, mainBusTrip };
