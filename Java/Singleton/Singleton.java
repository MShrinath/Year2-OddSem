package Singleton;

public class Singleton {

    private Singleton(){}

    public static Singleton s;

    public static Singleton giveSingleton(){
        
        if(s==null){
            s =new Singleton();
        }
        return s;
    }
    void print(){
        System.out.println("Hello");
    } 

    
}



