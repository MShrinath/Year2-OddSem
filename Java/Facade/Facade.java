package Facade;

public class Facade {
    Computer s1 = new Subsystem1();
    Computer s2 = new Subsystem2();

    public void Systems(){
        s1.sys();
        s2.sys();
    }
}


