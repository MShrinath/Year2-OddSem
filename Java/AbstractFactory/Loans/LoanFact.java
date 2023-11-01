package AbstractFactory.Loans;

import AbstractFactory.AbstractFactory;
import AbstractFactory.Banks.Bank;

public class LoanFact extends AbstractFactory{

    @Override
    public Bank getBankFact(String type) {
        return null;
    }

    @Override
    public Loan getLoanFact(String type) {
        if(type.equalsIgnoreCase("Health")){
            return new Health();
        }
        else if(type.equalsIgnoreCase("Car")){
            return new Car();
        }
        else return null;
    } 
    
}
