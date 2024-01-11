"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    //contructor
    function Account(name, accountNumber, balance) {
        if (balance === void 0) { balance = 50000; }
        this.name = name;
        this.accountNumber = accountNumber > 0 ? accountNumber : 999999;
        this.balance = balance >= 50000 ? balance : 50000;
    }
    //getter, setter
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    //nap tien
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    };
    //rut tien
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    };
    //tinh tien lai
    Account.prototype.addInterest = function () {
        var RATE = 0.05;
        this.balance += this.balance * RATE;
    };
    //chuyen khoan tien
    Account.prototype.transfer = function (acc2, amount) {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    };
    //to string
    Account.prototype.toString = function () {
        return "Account Information: Name: ".concat(this.name, ", Account Number: ").concat(this.accountNumber, ", Balance: ").concat(this.formatCurrency(this.balance));
    };
    Account.prototype.toObject = function () {
        return {
            full_name: this.name,
            account_number: this.accountNumber,
            balance: this.formatCurrency(this.balance),
        };
    };
    //dinh dang tien
    Account.prototype.formatCurrency = function (amount) {
        return new Intl.NumberFormat('vi-vn', { minimumFractionDigits: 3 }).format(amount) + " VND";
    };
    return Account;
}());
exports.Account = Account;
