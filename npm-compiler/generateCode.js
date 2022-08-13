


const generateCode = (language, code, userName) => {
	const codes = {
		py:
			`
import time;

st = time.time();

`
+
code
+
`
et = time.time();
elapsed_time = et - st;
print('Execution Time :',round(elapsed_time,3), 's');
`
		,
		java: 
		
`import java.util.concurrent.TimeUnit;\n` 
+
code
+
`
public class Execute {
	public static void main(String args[]) {
		long startTime = System.nanoTime();

		${userName}.main(args);

		long stopTime = System.nanoTime();
		long elapsedTime = (stopTime - startTime);
		System.out.println("Execution Time :"+(TimeUnit.MILLISECONDS.convert(elapsedTime, TimeUnit.NANOSECONDS) / 1000.0)+"s");
	}
}
`,
		cpp: `import java.util.concurrent.TimeUnit;\n` + code +
			`
public class Execute {
	public static void main(String args[]) {
		long startTime = System.nanoTime();

		${userName}.main(args);

		long stopTime = System.nanoTime();
		long elapsedTime = (stopTime - startTime);
		System.out.println("Total Time :"+(TimeUnit.MILLISECONDS.convert(elapsedTime, TimeUnit.NANOSECONDS) / 1000.0)+"s");
	}
}
`}
	return codes[language];
}
module.exports = {
	generateCode,
};