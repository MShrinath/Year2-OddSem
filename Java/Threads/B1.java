package Threads;

public class B1 extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName() + " This code is running in a thread");
    }

    public static void main(String[] args) {
        B1 thread = new B1();

        thread.setName("Hiiii");
        thread.start();

        // System.out.println(thread.getName());
    }
}
