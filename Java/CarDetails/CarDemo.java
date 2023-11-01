package CarDetails;

public class CarDemo {
    public static void main(String[] args) {
        Car c1 = new Car("Toyota", "Corolla", 2015, "White", 1000);
        
        Car c2 = new Car();
        c2.setMake("Honda");
        c2.setModel("Civic");
        c2.setYear(2016);
        c2.setColor("Black");
        c2.setMileage(2000);

        c1.drive(100);
        c2.drive(200);

        c1.displayInfo();
        System.out.println();
        c2.displayInfo();
    }
}
