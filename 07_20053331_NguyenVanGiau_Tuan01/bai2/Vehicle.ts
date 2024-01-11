export class Vehicle {
    private owner: string;
    private vehicleType: string;
    private vehicleValue: number;
    private cylinderCapacity: number;

    //constructor
    constructor(owner: string, vehicleType: string, vehicleValue: number, cylinderCapacity: number) {
        this.owner = owner;
        this.vehicleType = vehicleType;
        this.vehicleValue = vehicleValue >= 0 ? vehicleValue : 0;
        this.cylinderCapacity = cylinderCapacity >= 0 ? cylinderCapacity : 0;
    }

    //Tinh thue
    calcTax(): number {
        if (this.cylinderCapacity < 100) {
            return 0.01 * this.vehicleValue;
        } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
            return 0.03 * this.vehicleValue;
        } else {
            return 0.05 * this.vehicleValue;
        }
    }

    //hien thi thue
    showTaxInfo(): void {
        const tax = this.calcTax();
        console.log(`Owner: ${this.owner}, Vehicle Type: ${this.vehicleType}`);
        console.log(`Tax Amount: ${this.formatCurrency(tax)}`);
    }

    //to object
    toObject(): object {
        return {
            owner: this.owner,
            type: this.vehicleType,
            capacity: this.cylinderCapacity,
            value: this.formatCurrency(this.vehicleValue),
            tax: this.formatCurrency(this.calcTax())
        }
    }

    //dinh tien tien
    private formatCurrency(amount: number): string {
        return new Intl.NumberFormat('vi-vn', {minimumFractionDigits: 3}).format(amount) + " VND"
    }
}
