package Threads;

class Library extends Thread{

    String res1 = new String("JAVA");
    String res2 = new String("DSA");
    String res3 = new String("SpringBoot");

    public void run(){
        String tname = Thread.currentThread().getName();

        if(tname.equals("Stu1")){
            try{   
                Thread.sleep(1000);

                synchronized(res1){
                    System.out.println("Student 1 has locked "+res1);
                    Thread.sleep(1000);
                    synchronized(res2){
                        System.out.println("Student 1 has locked "+res2);
                        Thread.sleep(1000);
                        synchronized(res3){
                            System.out.println("Student 1 has locked "+res3);
                            Thread.sleep(1000);
                        }
                    }
                }
            }catch(InterruptedException e){ e.printStackTrace(); }
        }else{
            try{
                Thread.sleep(1000);

                synchronized(res3){
                    System.out.println("Student 2 has locked "+res3);
                    Thread.sleep(1000);
                    synchronized(res2){
                        System.out.println("Student 2 has locked "+res2);
                        Thread.sleep(1000);
                        synchronized(res1){
                            System.out.println("Student 2 has locked "+res1);
                            Thread.sleep(1000);
                        }
                    }
                }
            }catch(InterruptedException e){ e.printStackTrace(); }
        }
        
    }

}

public class LaunchDeadLock{
    public static void main(String[] args) {
        Library library = new Library();
        
        Thread stu1 = new Thread(library,"Stu1");
        Thread stu2 = new Thread(library,"Stu2");

        stu1.start();
        stu2.start();
    }
}