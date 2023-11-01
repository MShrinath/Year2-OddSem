package AbstractFactory;

import AbstractFactory.Banks.*;
import AbstractFactory.Loans.*;

public abstract class AbstractFactory {
    public abstract Bank getBankFact(String type);
    public abstract Loan getLoanFact(String type);
    
}
