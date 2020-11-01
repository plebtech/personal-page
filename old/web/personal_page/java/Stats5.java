public class Stats5 {
	public static void main(String[] args) {
		
		double a = Math.random();
		double b = Math.random();
		double c = Math.random();
		double d = Math.random();
		double e = Math.random();
		
		double avg = (a + b + c + d + e) / 5;
		double min = Math.min(Math.min(Math.min(a,b),Math.min(c,d)),e);
		double max = Math.max(Math.max(Math.max(a,b),Math.max(c,d)),e);
		
		System.out.println("  a = " + a);
		System.out.println("  b = " + b);
		System.out.println("  c = " + c);
		System.out.println("  d = " + d);
		System.out.println("  e = " + e);
		System.out.println("avg = " + avg);
		System.out.println("min = " + min);
		System.out.println("max = " + max);
	}
}
