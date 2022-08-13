import java.util.concurrent.TimeUnit;
import java.io.*;
class UserName1
{
	public static void printStars(int n)
	{
		int i, j;
		for(i=0; i<n; i++)
		{
			for(j=0; j<=i; j++)
			{
				System.out.print("* ");
			}
			System.out.println();
		}
}


	public static void main(String args[])
	{
		int n = 5;
		printStars(n);
	}
}



public class Execute {
	public static void main(String args[]) {
		long startTime = System.nanoTime();

		UserName1.main(args);

		long stopTime = System.nanoTime();
		long elapsedTime = (stopTime - startTime);
		System.out.println("Execution Time :"+(TimeUnit.MILLISECONDS.convert(elapsedTime, TimeUnit.NANOSECONDS) / 1000.0)+"s");
	}
}
