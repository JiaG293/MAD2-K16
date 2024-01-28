abstract class Vehicle {
    protected gia: number;

    constructor(gia: number) {
        this.gia = gia;
    }

    abstract tinhThue(): number;
}

class XeDap extends Vehicle {
    constructor(gia: number) {
        super(gia);
    }

    tinhThue(): number {
        return 0; // khong co thue
    }
}

class XeMay extends Vehicle {
    constructor(gia: number) {
        super(gia);
    }

    tinhThue(): number {
        return this.gia * 0.15; // VAT 10% + thue truoc ba 5%
    }
}

class XeKhach extends Vehicle {
    private soChoNgoi: number;

    constructor(gia: number, soChoNgoi: number) {
        super(gia);
        this.soChoNgoi = soChoNgoi;
    }

    tinhThue(): number {
        let thueTieuThuDacBiet: number;
        if (this.soChoNgoi >= 5) {
            thueTieuThuDacBiet = 0.3;
        } else {
            thueTieuThuDacBiet = 0.5;
        }

        return this.gia * (0.4 + thueTieuThuDacBiet); // VAT 10% + thue truoc ba 20% + thue tieu thu dac biet
    }
}

class XeTai extends Vehicle {
    constructor(gia: number) {
        super(gia);
    }

    tinhThue(): number {
        return this.gia * 0.12; // VAT 10% + thue truoc ba 2%
    }
}

function mainVehicle() {
    const xeDap = new XeDap(100);
    const xeMay = new XeMay(1000);
    const xeKhach = new XeKhach(20000, 6);
    const xeTai = new XeTai(50000);

    console.log("Thuế cho xe đạp:", xeDap.tinhThue());
    console.log("Thuế cho xe máy:", xeMay.tinhThue());
    console.log("Thuế cho xe khách:", xeKhach.tinhThue());
    console.log("Thuế cho xe tải:", xeTai.tinhThue());
}

export {Vehicle, XeDap, XeMay, XeKhach, XeTai, mainVehicle}
