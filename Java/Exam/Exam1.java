package Exam;
import java.util.Scanner;

interface Vehicle {
    public void type();
}

class Car implements Vehicle {
    public void type() {
        System.out.println("Car");
    }
}

class Bike implements Vehicle {
    public void type() {
        System.out.println("Bike");
    }
}

class VehicleFactory{
    public Vehicle getVehicle(String T){
        if(T.equalsIgnoreCase("Car"))
            return new Car();
        if(T.equalsIgnoreCase("Bike"))
            return new Bike();
        return null;
    }
}


interface Payment{
    public void type();
}

class Cash implements Payment{
    public void type(){
        System.out.println("Cash");
    }
}

class UPI implements Payment{
    public void type(){
        System.out.println("UPI");
    }
}

class PaymentFactory{
    public Payment getPayment(String T){
        if(T.equalsIgnoreCase("Cash"))
            return new Cash();
        if(T.equalsIgnoreCase("UPI"))
            return new UPI();
        return null;
    }
}


public class Exam1 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        VehicleFactory VF = new VehicleFactory();
        PaymentFactory PF = new PaymentFactory();
        String V = scn.nextLine();
        Vehicle CV = VF.getVehicle(V);
        String P = scn.nextLine();
        Payment CP = PF.getPayment(P);
        System.out.println(CV);
        System.out.println(CP);
        scn.close();
    }
}
