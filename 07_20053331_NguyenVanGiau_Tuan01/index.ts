import { Triangle } from "./bai1/Triangle";

import { Vehicle } from "./bai2/Vehicle";

import { Account } from "./bai3/Account";


//Module 0 Bai 1
const bai1 = () => {
    const triangle1: Triangle = new Triangle(3, 4, 5);
    const triangle2: Triangle = new Triangle(-1, 2, 3); // Khong phai tam giac
    const triangle3: Triangle = new Triangle(5, 5, 5); // Tam giac deu
    const triangle4: Triangle = new Triangle(5, 5, 6); // Tam giac can
    const triangle5: Triangle = new Triangle(7, 8, 9); // Tam giac thuong
    const triangles: Triangle[] = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    let arr: any[] = [];
    triangles.forEach((triangle, index) => {
        arr.push(triangle.toObject())
    });
    console.table(arr);

}

// Module 0 bai 2
const bai2 = () => {
    let vehicle1: Vehicle = new Vehicle("Nguyễn Thu Loan", "Future Neo", 35000000, 100);
    let vehicle2: Vehicle = new Vehicle("Lê Minh Tính", "Ford Ranger", 250000000, 3000);
    let vehicle3: Vehicle = new Vehicle("Nguyễn Minh Triết", "Landscape", 10000000000, 1500);

    const vehicles: Vehicle[] = [vehicle1, vehicle2, vehicle3];

    console.log("Table Vehicle");
    let arr: any[] = [];
    vehicles.forEach((vehicle, index) => {
        arr.push(vehicle.toObject())
    });
    console.table(arr)

}

// Module 0 bai 3
const bai3 = () => {
    let account1: Account = new Account("Nguyễn Thu Loan", 1029384756, 300000);
    let account2: Account = new Account("Lê Minh Tính", 1747639489, 1500000000);
    let account3: Account = new Account("Nguyễn Minh Triết", 2485639474, 45599000);
    let account4: Account = new Account("Nguyễn Văn Giàu", 4856339474, 50000);

    const accounts: Account[] = [account1, account2, account3, account4];

    const showBalanceAmount = (title: string): void => {
        let arr: any[] = [];
        console.log(title);
        // arr.splice(0, arr.length);
        accounts.forEach((account, index) => {
            arr.push(account.toObject())
        });
        console.table(arr)
    }

    const withdrawInfo = (acc: Account, amount: number, fee: number): void => {
        acc.withdraw(amount, fee) ?
            console.log("USER:",
                acc.getName(),
                acc.getAccountNumber(),
                "INFO: Withdraw success!!!") : //
            console.log("USER:",
                acc.getName(),
                acc.getAccountNumber(),
                "INFO: Balance is not enough to withdraw!!!");
    }

    const depositInfo = (acc: Account, amount: number): void => {
        acc.deposit(amount) ?
            console.log("USER:",
                acc.getName(),
                acc.getAccountNumber(),
                "INFO: Deposit success!!!") :
            console.log("USER:",
                acc.getName(),
                acc.getAccountNumber(),
                "INFO: Deposit failed!!!");
    }

    const transferInfo = (fromAcc: Account, toAcc: Account, amount: number): void => {
        fromAcc.transfer(toAcc, amount) ?
            console.log("USER:",
                fromAcc.getName(),
                fromAcc.getAccountNumber(),
                "INFO: Transfer success!!!") :
            console.log("USER:",
                fromAcc.getName(),
                fromAcc.getAccountNumber(),
                "INFO: Transfer failed!!!");
    }

    showBalanceAmount("Table balance"); // so du ban dau
    withdrawInfo(account1, 500000, 10000);
    withdrawInfo(account1, 10000, 10000);
    account2.addInterest();
    depositInfo(account3, 401000);
    transferInfo(account4, account1, 50000);
    depositInfo(account1, 1000000);
    depositInfo(account2, 50000000);
    console.log(`Table balance after transaction is 3 seconds`);
    setTimeout(() => {
        showBalanceAmount("Table balance after transaction"); // so du sau khi giao dich
    }, 3000);


}

//Main//
bai1()
bai2()
bai3()














