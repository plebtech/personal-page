public class Day {
	public static void main(String[] args) {
		int m = Integer.parseInt(args[0]);
		int d = Integer.parseInt(args[1]);
		int y = Integer.parseInt(args[2]);
		int yZero = y - (14 - m) / 12;
		System.out.println(yZero);
		int x = yZero + (yZero / 4) - (yZero / 100) + (yZero / 400);
		System.out.println(x);
		int mZero = m + 12 * ((14 - m) / 12) - 2;
		System.out.println(mZero);
		int dZero = (int) (d + x + (31 * mZero) / 12) % 7;
		System.out.println(dZero);
	}
}
