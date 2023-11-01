package Exam;

import java.util.Scanner;

class Umpire {
    int num;

    public void setNum(int n) {
        this.num = n;
    }

    public int getNum() {
        return num;
    }

    public boolean validateNum(int n){
        return num == n;
    }
}

public class Guess {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        Umpire u = new Umpire();
        u.setNum(scn.nextInt());

        int p1 = scn.nextInt();
        int p2 = scn.nextInt();
        int p3 = scn.nextInt();
        
        System.out.println(u.validateNum(p1));
        System.out.println(u.validateNum(p2));
        System.out.println(u.validateNum(p3));
        scn.close();
    }
}
