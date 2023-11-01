package Threads;

import java.util.concurrent.Semaphore;

class Product extends Thread {

    Semaphore q;

    public Product(Semaphore q) {
        this.q = q;
    }

    public void run() {

    }
}

class Consumer extends Thread {

    Semaphore q;

    public Consumer(Semaphore q) {
        this.q = q;
    }

    public void run() {

    }

}

class Q {

    int i;
    Semaphore q;

    Q(Semaphore q) {
        this.q = q;
    }

    public synchronized void put(int n) throws InterruptedException {

    }

    public synchronized void get() {

    }
}

public class ProductConsumerSemaphore {

    public static void main(String[] args) {
        // Q qwn = new Q(null);

        Semaphore ProductS = new Semaphore(1);
        Semaphore ConsumerS = new Semaphore(0);

        Product P = new Product(ProductS);
        Consumer C = new Consumer(ConsumerS);

        P.start();
        C.start();
    }
}
