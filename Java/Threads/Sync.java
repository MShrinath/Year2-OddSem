package Threads;

class fine{
    public void printTable(int n){
        {
            for(int i=1;i<=5;i++){
                System.out.println(i + Thread.currentThread().getName());
                try{
                    Thread.sleep(400);
                }catch(Exception e){
                    System.out.println(e);
                }
            }
        }
    }
}

class Thd extends Thread{
    fine t;
    Thd(fine t,String name){
        super(name);
        this.t = t;
    }
    public void run(){
        t.printTable(5);
    }
}

class TestSynchronization1 {
    public static void main(String[] args) {
        fine obj = new fine();
        Thd t1 = new Thd(obj,"One");
        Thd t2 = new Thd(obj,"Two");
        t1.start();
        t2.start(); 
    }
}
