public class Divide {
	public static void main(String[] args) {
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);
		boolean divide;
		if (a < 1 || b < 1) {
			System.out.println("Please provide two POSITIVE integers.");
		}
		else {
			divide = (a % b == 0) || (b % a == 0);
			System.out.println(divide);
		}
	}
}
