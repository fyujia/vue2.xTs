import java.util.Random;
import java.util.Scanner;

public class RandomDemmo {
    public static void main(String[] args) {
        Random r = new Random();
        // int a = r.nextInt(10); // 0 - 9
        // System.out.println(a);
        int a = r.nextInt(100) + 1;
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入数字");
            int b = sc.nextInt();
            if (a == b) {
                System.out.println("恭喜答对");
                break;
            } else if (a > b) {
                System.out.println("猜小了");
            } else {
                System.out.println("猜大了");
            }
        }
    }
}
