package DecorativeDesign;

public class Sugar implements Coffee{

    Coffee c;

    public Sugar(Coffee cofe){
        this.c = cofe;
    }

    public double getCost() {
        return this.c.getCost() + 0.2;
    }

    public String getDescp() {
        return this.c.getDescp() + " With Sugar";
    }
    
}
