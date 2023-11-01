package SingletonBank;

public class SingletonClient {
    public static void main(String[] args) {
        SingletonBank s1 = SingletonBank.giveSingleton();

        SingletonBank s2 = SingletonBank.giveSingleton();

        s1.openAccount();

        s2.openAccount();

        s1.deposit(1000);

        s2.withdraw(500);

        s1.closeAccount();

        s2.checkBalance();

        s2.openAccount();

        s1.checkBalance();

    }
}
