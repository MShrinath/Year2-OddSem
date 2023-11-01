package SingletonBank;

public class SingletonBank {

    private SingletonBank(){}
    public static SingletonBank s;
    boolean isAccountOpen = false;
    int balance = 0;

    public static SingletonBank giveSingleton(){
        if(s==null){
            s = new SingletonBank();
        }
        return s;
    }

    public void openAccount(){
        if(isAccountOpen){
            System.out.println("Account is already open");
        }
        else{
            System.out.println("Account opened");
            isAccountOpen = true;
        }
    }
    public void closeAccount(){
        if(isAccountOpen){
            System.out.println("Account closed");
            isAccountOpen = false;
        }
        else{
            System.out.println("Account is already closed");
        }
    }

    public void deposit(int amount){
        if(isAccountOpen){
            balance += amount;
            System.out.println("Amount deposited");
        }
        else{
            System.out.println("Account is closed");
        }
    }

    public void withdraw(int amount){
        if(isAccountOpen){
            if(balance>=amount){
                balance -= amount;
                System.out.println("Amount withdrawn");
            }
            else{
                System.out.println("Insufficient balance");
            }
        }
        else{
            System.out.println("Account is closed");
        }
    }

    public void checkBalance(){
        if(isAccountOpen){
            System.out.println("Balance is "+balance);
        }
        else{
            System.out.println("Account is closed");
        }
    }

}
