package CarDetails;

public class Car {
    String make;
    String model;
    int year;
    String color;
    double mileage;

    public Car(){
        make = "";
        model = "";
        year = 0;
        color = "";
        mileage = 0;
    }

    public Car(String make, String model, int year, String color, double mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }

    //getters
    public String getMake(){
        return make;
    }
    public String getModel(){
        return model;
    }
    public int getYear(){
        return year;
    }
    public String getColor(){
        return color;
    }
    public double getMileage(){
        return mileage;
    }

    //setters
    public void setMake(String ma){
        this.make = ma;
    }
    public void setModel(String mo){
        this.model = mo;
    }
    public void setYear(int y){
        this.year = y;
    }
    public void setColor(String c){
        this.color = c;
    }
    public void setMileage(double m){
        this.mileage = m;
    }

    public void drive(double km){
        mileage += km;
    }

    public void displayInfo(){
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Mileage: " + mileage);
    }

}
