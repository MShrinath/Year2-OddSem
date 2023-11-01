package Threads;

public class Alive extends Thread {
    static int amt = 0;

    public void run() {
        amt++;
    }

    public static void main(String[] args) {
        Alive thd = new Alive();
        System.out.println(thd.isAlive()); // False
        System.out.println(amt); 
        thd.start();
        System.out.println(amt); 
        amt++;
        System.out.println(amt);
    }
}
