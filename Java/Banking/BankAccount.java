package Banking;

class BankAccount{
    int accno;
    String accname;
    double bal;

    public BankAccount(int acn,String acna,double b){
        accno = acn;
        accname = acna;
        bal = b;
    }

    public void deposit(double a){
        bal +=a;
    }

    public void withdraw(double a){
        bal -=a;
    }

    public double getBal(){
        return bal;
    }

    public String toString(){
        return "Account Number:" + accno + " Account Holder:" + accname + " Balance:" +bal;
    }
}

class SavingsAccount extends BankAccount{
    double interestRate;
    public SavingsAccount(int acn, String acna, double b, double ir) {
        super(acn, acna, b);
        this.interestRate = ir;
        
    }


    public String toString(){
        return "Account Number:" + accno + " Account Holder:" + accname + " Balance: " +bal + " Interest:" + interestRate +"%";
    }
}


class CurrentAccount extends BankAccount{
    double overdraft;

    public CurrentAccount(int acn, String acna, double b, double od) {
        super(acn, acna, b);
        this.overdraft = od;
    }

    public String toString(){
        return "Account Number:" + accno + " Account Holder:" + accname + " Balance:" +bal + " Overdraft:" + overdraft;
    }
}