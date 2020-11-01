public class Random {
	public static void main(String[] args) {
		int limit = 6;
		int a = 1 + (int) (Math.random() * limit);
		int b = 1 + (int) (Math.random() * limit);
		System.out.println(a + b);
	}
}
