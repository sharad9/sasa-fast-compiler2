
import time;

st = time.time();


n = 10;  
m = (2 * n) - 2  
for i in range(0, n):  
    for j in range(0, m):  
        print(end=" ")  
    m = m - 1 
    for j in range(0, i + 1):  
        
        print("* ", end=' ')  
    print(" ") 


et = time.time();
elapsed_time = et - st;
print('Execution Time :',round(elapsed_time,3), 's');
