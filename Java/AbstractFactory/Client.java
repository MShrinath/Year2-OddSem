package AbstractFactory;

import AbstractFactory.Banks.*;
import AbstractFactory.Loans.*;

public class Client {
    public static void main(String[] args) {

            Factory f = new Factory(); 

            AbstractFactory Bankf = f.getFact("Bank");
            Bank hdf  = Bankf.getBankFact("HDFC");
            hdf.type();


            AbstractFactory LoanF = f.getFact("Loan");
            Loan hlth = LoanF.getLoanFact("Health");
            hlth.type();

    }
}