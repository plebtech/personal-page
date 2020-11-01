public class Htrees {
	
	// draw an H centered on (x, y) of the given length.
	public static void drawH(double x, double y, double size) {
		
		// compute H 'tips' equi-distant from x/y center point.
		double x0 = x - size / 2;
		double x1 = x + size / 2;
		double y0 = y - size / 2;
		double y1 = y + size / 2;

		//draw three lines to compose the H.
		StdDraw.line(x0, y0, x0, y1);	// left column.
		StdDraw.line(x1, y0, x1, y1);	// right column.
		StdDraw.line(x0,  y, x1,  y);	// cross-bar.

	}

	public static void draw(int n, double x, double y, double size) {

		if (n == 0) return;
		drawH(x, y, size);

		double x0 = x - size / 2;
		double x1 = x + size / 2;
		double y0 = y - size / 2;
		double y1 = y + size / 2;

		draw(n-1, x0, y0, size / 2);
		draw(n-1, x0, y1, size / 2);
		draw(n-1, x1, y0, size / 2);
		draw(n-1, x1, y1, size / 2);

	}

	public static void main(String[] args) {

		int n = Integer.parseInt(args[0]);

		double x = 0.5;
		double y = 0.5;
		double size = 0.5;
		draw(n, x, y, size);

	}	
}