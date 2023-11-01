package Exam;

class Bank {
    private Bank() {
    }

    static Bank instance;
    int Balance;

    static public Bank getInstance() {
        if (instance == null)
            instance = new Bank();
        return instance;
    }

    public int getBalance() {
        return Balance;
    }

    public void Deposit(int n) {
        Balance += n;
    }

    public void Withdraw(int n) {
        Balance -= n;
    }

    public Boolean isLoggedIn() {
        return (instance == null);
    }
}

public class Exam2 {
    public static void main(String[] args) {
        System.out.println("Welcome to Bank");

        Bank B = Bank.getInstance();

        B.Deposit(1000);
        B.Withdraw(250);
        System.out.println(B.getBalance());
        System.out.println(!B.isLoggedIn());
    }
}
