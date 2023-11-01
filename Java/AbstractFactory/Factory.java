package AbstractFactory;

import AbstractFactory.Banks.*;
import AbstractFactory.Loans.*;

public class Factory {

    public AbstractFactory getFact(String f){
        if(f.equalsIgnoreCase("Bank"))
            return new BankFact();
        else if(f.equalsIgnoreCase("Loan"))
            return new LoanFact();
        else return null;
    }
    
}
