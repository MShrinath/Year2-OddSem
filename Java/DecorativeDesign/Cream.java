package DecorativeDesign;

public class Cream implements Coffee{

    Coffee c;

    public Cream(Coffee cofe){
        this.c = cofe;
    }

    public double getCost(){
        return this.c.getCost() + 0.5;

    }
    public String getDescp(){
        return this.c.getDescp() + " With Cream";
    }
}
