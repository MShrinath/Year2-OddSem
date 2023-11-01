package Threads;

import java.util.concurrent.ArrayBlockingQueue;


class Producer extends Thread {
    ArrayBlockingQueue<Integer> bq;

    public Producer(ArrayBlockingQueue<Integer> bq2) {
        this.bq = bq2;
    }

    public void run() {
        for (int i = 0; i < 4; i++) {
            try {
                Thread.sleep(2000);
                bq.put(i);
                System.out.println("Producer " + i);
            } catch (Exception e) {
                System.out.println("Some Problem P");
            }
        }
    }
}

class Consumer extends Thread {
    ArrayBlockingQueue<Integer> bq;

    public Consumer(ArrayBlockingQueue<Integer> bq2) {
        this.bq = bq2;
    }

    public void run() {
        for (int i = 0; i < 4; i++) {
            try {
                Thread.sleep(2000);
                System.out.println("Consumer " + i);
            } catch (Exception e) {
                System.out.println("Some Problem C");
            }
        }
    }
}

public class BDqueue {
    public static void main(String[] args) throws InterruptedException {
        ArrayBlockingQueue<Integer> bq = new ArrayBlockingQueue<Integer>(4);
        Producer p = new Producer(bq);
        Consumer c = new Consumer(bq);
        p.start();
        c.start();

        p.join();
        c.join();

    }
}
