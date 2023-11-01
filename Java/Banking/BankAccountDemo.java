package Banking;

public class BankAccountDemo {
    public static void main(String[] args) {
        BankAccount b1 = new BankAccount(1234, "John", 1000);
        b1.deposit(10);
        b1.withdraw(20);

        System.out.println(b1);

        SavingsAccount s1 = new SavingsAccount(5678, "Jane", 2000, 5.0);
        s1.withdraw(50);
        s1.deposit(100);
        System.out.println(s1);

        CurrentAccount c1 = new CurrentAccount(1987, "Jack", 3000, 1000);
        c1.withdraw(70);
        c1.deposit(90);
        System.out.println(c1);

    }
}
