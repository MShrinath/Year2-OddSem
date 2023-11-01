package Factory;

public class Factory {
    public Car getCar(String m){
        if(m == null) return null;
        
        else if( m.equals("Toyota")){
            return new Toyota();
        }
        else if( m.equals("Tata")){
            return new Tata();
        }
        else return null;
    }
}
