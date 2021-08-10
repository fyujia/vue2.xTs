
import java.util.Scanner;

public class Hello {

    public static void main(String[] args) {
        System.out.print("HelloWorld");
        for (int i = 0; i < 5; i++) {
            System.out.println("你好");
            // System.out.println(i);
        }
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入数字：");
        int a = sc.nextInt();
        System.out.println("你输入的是：" + a);
        switch (a) {
            case 1:
                System.out.println("周一");
                break;
            case 2:
                System.out.println("周二");
                break;
            default:
                System.out.println("???");
                break;
        }
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
        System.out.println(sum);

        System.out.println((int)123 / 100 % 10);
        
        int count = 0;
        for (int i = 100; i < 1000; i++) {
            int ge = i % 10;
            int shi = i / 10 % 10;
            int bai = i / 10 / 10 % 10;
            if (Math.pow(ge, 3) + Math.pow(shi, 3) + Math.pow(bai, 3) == i) {
                System.out.println("水仙花数" + i);
                count ++;
            }
        }
        System.out.println("共计：" + count);
    }
}