package Threads;

public class Normal extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        Normal t1 = new Normal();
        t1.start();
    }
}

