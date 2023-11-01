package Threads;

public class B2 implements Runnable {
    public void run() {
        System.out.println("This code is running in a thread");
    }

    public static void main(String[] args) {
        B2 obj = new B2();
        Thread thread = new Thread(obj);
        thread.start();
    }
}
