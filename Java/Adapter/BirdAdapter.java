package Adapter;

class BirdAdapter implements ToyDuck {
    Bird y;

    public BirdAdapter(Bird b) {
        this.y = b;
    }

    public void squeak() {
        y.makeSound();
    }
}