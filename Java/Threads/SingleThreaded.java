package Threads;

import java.util.Scanner;

class Banking implements Runnable {

	public void run() {

		System.out.println("Activity 1 started");

		Scanner scan = new Scanner(System.in);
		System.out.println("enter your username :");
		int a = scan.nextInt();
		System.out.println("enter your password :");
		int b = scan.nextInt();
		System.out.println(a + b);
		System.out.println("Activity 1 ended");
		scan.close();
	}
}

class PrintingNumbers implements Runnable {

	public void run() {

		System.out.println("Activity 2 started");

		for (int i = 0; i < 5; i++) {
			System.out.println(i);
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				System.out.println(e);
			}

		}

		System.out.println("Activity 2 ended");
	}
}

class PrintingAlpha implements Runnable {
	public void run() {

		System.out.println("Activity 3 started");

		for (int i = 65; i < 70; i++) {
			System.out.println((char) i);
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println("Activity 3 ended");
	}
}

public class SingleThreaded {

	public static void main(String[] args) throws InterruptedException {

		Banking b = new Banking();
		PrintingNumbers pn = new PrintingNumbers();
		PrintingAlpha pa = new PrintingAlpha();

		Thread t1 = new Thread(b);
		Thread t2 = new Thread(pn);
		Thread t3 = new Thread(pa);

		System.out.println(t1.isAlive());
		System.out.println(t2.isAlive());
		System.out.println(t3.isAlive());

		/*
		 * t1.run(); t2.run(); t3.run();
		 */

		t1.start();
		t2.start();
		t3.start();

		System.out.println(t1.isAlive());
		System.out.println(t2.isAlive());
		System.out.println(t3.isAlive());

		t1.join();
		t2.join();
		t3.join();

		System.out.println("Resources closed");

	}

}
