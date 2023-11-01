package DecorativeDesign;

class Shop {

    public static void main(String[] args) {

        Coffee k = new Sugar(new SimpleCoffee());

        System.out.println(k.getDescp());
        System.out.println(k.getCost());

        Coffee o = new Cream(new Sugar(new SimpleCoffee()));

        System.out.println(o.getDescp());
        System.out.println(o.getCost());

    }

}