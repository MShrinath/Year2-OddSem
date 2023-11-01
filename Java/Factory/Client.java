package Factory;

public class Client {
    public static void main(String[] args) {
        Factory factory = new Factory();
        Car c = factory.getCar("Tata");
        c.model();
    }
    
}
