public class FlipAdvanced {
	public static void main(String[] args) {
		int count = Integer.parseInt(args[0]);
		int i = 0;
		int heads = 0;
		int tails = 0;
		
		while (i < count) {
			if (Math.random() < 0.5) {
				heads++;
			}
			else {
				tails++;
			}
			i++;
		}
		
		System.out.println("Heads = " + heads);
		System.out.println("Tails = " + tails);
	}
}
