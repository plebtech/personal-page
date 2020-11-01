public class Fibonacci {
	
	// recursive approach
	public static long fibonacciRecursion(int number) {
		if ((number == 0) || (number == 1)) {
			return number;
		}
		else {
			return fibonacciRecursion(number - 1) + fibonacciRecursion(number -2);
		}
	}
	
	// iterative approach
	public static void fibonacciIteration(int number) {
		System.out.println("Fibonacci sequence # 0	is:	0");
		System.out.println("Fibonacci sequence # 1	is:	1");
		long one = 0;
		long two = 1;
		long fib = 0;
		int count = 3;
		while (count <= number) {
			fib = one + two;
			one = two;
			two = fib;
			if (fib < 0) {
				System.out.println("OVERFLOW ERROR at iteration # " + (count -1) + ".");
				return;
			}
			else
			{
				System.out.println("Fibonacci sequence # " + (count - 1) + "	is:	" + fib);
				count++;
			}
		}
	}
	
	// main method to test recursion
	/*
	public static void main(String[] args) {
		for (int counter = 0; counter <=45; counter++) {
			System.out.println("Fibonacci sequence # " + counter + "	is: " + fibonacciRecursion(counter));
		}
	}
	*/

	
	// main method to test iteration
	public static void main(String[] args) {
		fibonacciIteration(100);
	}
}