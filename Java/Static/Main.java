package Static;

class A {
    static int a = 10;
    static {
        System.out.println("A Static Block");
        System.out.println(a);
    }

    {
        System.out.println("Init block");
    }

    A() {
        System.out.println("Constructor");
    }

    static void display() {
        System.out.println("Static method");
    }

    void disp() {
        System.out.println("Norm method");
    }
}

public class Main {
    static {
        System.out.println("Main Static Block");
    }

    public static void main(String[] args) {
        System.out.println("Main method");

        A obj = new A();
        obj.disp();
        A.display();
    }
}