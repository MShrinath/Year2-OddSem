package TCS;

import java.util.Scanner;

public class C {

    public static void find(char[] input, char[] actions) {
        int i = 0; // Index for input string
        int current = 0; // Current position

        while (i < actions.length) {
            switch (actions[i]) {
                case 'R':
                    current++;
                    break;
                case 'L':
                    current--;
                    break;
                case 'T':
                    if (input[current] < '9') 
                        input[current]++;
                    break;
                case 'D':
                    if (input[current] > '0')
                        input[current]--;
                    break;
                case 'S':
                    i++; 
                    int it = Character.getNumericValue(actions[i]);
                    char temp = input[it-1];
                    input[it-1] = input[current];
                    input[current] = temp;
                    break;
                default:
                    break;
            }
            i++;
        }
    }

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        char[] n = scn.nextLine().toCharArray();
        char[] s = scn.nextLine().toCharArray();
        scn.close();
        find(n, s);
        System.out.println(new String(n));
    }
}
