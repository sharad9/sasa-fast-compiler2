
import time;

st = time.time();


# A Sample class with init method
class Person:

	# init method or constructor
	def __init__(self, name):
		self.name = name

	# Sample Method
	def say_hi(self):
		print('Hello, my name is', self.name);
		
	def pattern(self):
	    n = 10;
	    m = (2 * n) - 2;
	    for i in range(0, n):
	        for j in range(0, m):
	            print(end=" ")
	        m = m - 1;
	        for j in range(0, i + 1):
	            print("*", end=' ');
	        print(" ");
	    


p = Person('Sasa Online Compiler')
p.say_hi();
p.pattern();




et = time.time();
elapsed_time = et - st;
print('Execution Time :',round(elapsed_time,3), 's');
