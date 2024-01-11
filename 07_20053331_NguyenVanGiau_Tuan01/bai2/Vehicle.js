"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    //constructor
    function Vehicle(owner, vehicleType, vehicleValue, cylinderCapacity) {
        this.owner = owner;
        this.vehicleType = vehicleType;
        this.vehicleValue = vehicleValue >= 0 ? vehicleValue : 0;
        this.cylinderCapacity = cylinderCapacity >= 0 ? cylinderCapacity : 0;
    }
    //Tinh thue
    Vehicle.prototype.calcTax = function () {
        if (this.cylinderCapacity < 100) {
            return 0.01 * this.vehicleValue;
        }
        else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
            return 0.03 * this.vehicleValue;
        }
        else {
            return 0.05 * this.vehicleValue;
        }
    };
    //hien thi thue
    Vehicle.prototype.showTaxInfo = function () {
        var tax = this.calcTax();
        console.log("Owner: ".concat(this.owner, ", Vehicle Type: ").concat(this.vehicleType));
        console.log("Tax Amount: ".concat(this.formatCurrency(tax)));
    };
    //to object
    Vehicle.prototype.toObject = function () {
        return {
            owner: this.owner,
            type: this.vehicleType,
            capacity: this.cylinderCapacity,
            value: this.formatCurrency(this.vehicleValue),
            tax: this.formatCurrency(this.calcTax())
        };
    };
    //dinh tien tien
    Vehicle.prototype.formatCurrency = function (amount) {
        return new Intl.NumberFormat('vi-vn', { minimumFractionDigits: 3 }).format(amount) + " VND";
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
