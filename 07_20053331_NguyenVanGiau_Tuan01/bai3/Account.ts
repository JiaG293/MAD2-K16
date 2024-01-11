export class Account {
    private accountNumber: number;
    private name: string;
    private balance: number;

    //contructor
    constructor(name: string, accountNumber: number, balance: number = 50000) {
        this.name = name;
        this.accountNumber = accountNumber > 0 ? accountNumber : 999999;
        this.balance = balance >= 50000 ? balance : 50000;
    }

    //getter, setter
    public getAccountNumber(): number {
        return this.accountNumber;
    }

    public getName(): string {
        return this.name;
    }

    //nap tien
    deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    //rut tien
    withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    }

    //tinh tien lai
    addInterest(): void {
        const RATE = 0.05;
        this.balance += this.balance * RATE;
    }

    //chuyen khoan tien
    transfer(acc2: Account, amount: number): boolean {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    }

    //to string
    toString(): string {
        return `Account Information: Name: ${this.name}, Account Number: ${this.accountNumber}, Balance: ${this.formatCurrency(this.balance)}`;
    }

    toObject(): Object {
        return {
            full_name: this.name,
            account_number: this.accountNumber,
            balance: this.formatCurrency(this.balance),
        }
    }

    //dinh dang tien
    private formatCurrency(amount: number): string {
        return new Intl.NumberFormat('vi-vn', {minimumFractionDigits: 3}).format(amount) + " VND"
    }
}