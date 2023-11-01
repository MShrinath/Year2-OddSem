package Threads;

class hotel_movie implements Runnable {

    int seat =1;

    synchronized public void run() {
        bookmovie("Avengers");
    }

    void bookmovie(String name) {
        if(seat>0){
        System.out.println("Booking started for " + name);
        try{Thread.sleep(1000);}catch(Exception e){}
        System.out.println("Booking ended for " + name);
        seat--;}
        else{
            System.out.println("Sorry, no seats available");
        }
    }

}

public class Tkt {
    public static void main(String[] args) {

        hotel_movie h = new hotel_movie();
        Thread t1 = new Thread(h);
        Thread t2 = new Thread(h);
        t1.start();
        t2.start();
    }

}