package AbstractFactory.Banks;

import AbstractFactory.AbstractFactory;
import AbstractFactory.Loans.Loan;

public class BankFact extends AbstractFactory{

    @Override
    public Bank getBankFact(String type) {
        if(type.equalsIgnoreCase("HDFC")){
            return new HDFC();
        }
        else if(type.equalsIgnoreCase("Axis")){
            return new Axis();
        }
        else return null;
    }

    @Override
    public Loan getLoanFact(String type) {
        return null;
    } 
    
}
