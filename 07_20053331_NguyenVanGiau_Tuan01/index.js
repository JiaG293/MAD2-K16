"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./bai1/Triangle");
var Vehicle_1 = require("./bai2/Vehicle");
var Account_1 = require("./bai3/Account");
//Module 0 Bai 1
var bai1 = function () {
    var triangle1 = new Triangle_1.Triangle(3, 4, 5);
    var triangle2 = new Triangle_1.Triangle(-1, 2, 3); // Khong phai tam giac
    var triangle3 = new Triangle_1.Triangle(5, 5, 5); // Tam giac deu
    var triangle4 = new Triangle_1.Triangle(5, 5, 6); // Tam giac can
    var triangle5 = new Triangle_1.Triangle(7, 8, 9); // Tam giac thuong
    var triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    var arr = [];
    triangles.forEach(function (triangle, index) {
        arr.push(triangle.toObject());
    });
    console.table(arr);
};
// Module 0 bai 2
var bai2 = function () {
    var vehicle1 = new Vehicle_1.Vehicle("Nguyễn Thu Loan", "Future Neo", 35000000, 100);
    var vehicle2 = new Vehicle_1.Vehicle("Lê Minh Tính", "Ford Ranger", 250000000, 3000);
    var vehicle3 = new Vehicle_1.Vehicle("Nguyễn Minh Triết", "Landscape", 10000000000, 1500);
    var vehicles = [vehicle1, vehicle2, vehicle3];
    console.log("Table Vehicle");
    var arr = [];
    vehicles.forEach(function (vehicle, index) {
        arr.push(vehicle.toObject());
    });
    console.table(arr);
};
// Module 0 bai 3
var bai3 = function () {
    var account1 = new Account_1.Account("Nguyễn Thu Loan", 1029384756, 300000);
    var account2 = new Account_1.Account("Lê Minh Tính", 1747639489, 1500000000);
    var account3 = new Account_1.Account("Nguyễn Minh Triết", 2485639474, 45599000);
    var account4 = new Account_1.Account("Nguyễn Văn Giàu", 4856339474, 50000);
    var accounts = [account1, account2, account3, account4];
    var showBalanceAmount = function (title) {
        var arr = [];
        console.log(title);
        // arr.splice(0, arr.length);
        accounts.forEach(function (account, index) {
            arr.push(account.toObject());
        });
        console.table(arr);
    };
    var withdrawInfo = function (acc, amount, fee) {
        acc.withdraw(amount, fee) ?
            console.log("USER:", acc.getName(), acc.getAccountNumber(), "INFO: Withdraw success!!!") : //
            console.log("USER:", acc.getName(), acc.getAccountNumber(), "INFO: Balance is not enough to withdraw!!!");
    };
    var depositInfo = function (acc, amount) {
        acc.deposit(amount) ?
            console.log("USER:", acc.getName(), acc.getAccountNumber(), "INFO: Deposit success!!!") :
            console.log("USER:", acc.getName(), acc.getAccountNumber(), "INFO: Deposit failed!!!");
    };
    var transferInfo = function (fromAcc, toAcc, amount) {
        fromAcc.transfer(toAcc, amount) ?
            console.log("USER:", fromAcc.getName(), fromAcc.getAccountNumber(), "INFO: Transfer success!!!") :
            console.log("USER:", fromAcc.getName(), fromAcc.getAccountNumber(), "INFO: Transfer failed!!!");
    };
    showBalanceAmount("Table balance"); // so du ban dau
    withdrawInfo(account1, 500000, 10000);
    withdrawInfo(account1, 10000, 10000);
    account2.addInterest();
    depositInfo(account3, 401000);
    transferInfo(account4, account1, 50000);
    depositInfo(account1, 1000000);
    depositInfo(account2, 50000000);
    console.log("Table balance after transaction is 3 seconds");
    setTimeout(function () {
        showBalanceAmount("Table balance after transaction"); // so du sau khi giao dich
    }, 3000);
};
//Main//
bai1();
bai2();
bai3();
