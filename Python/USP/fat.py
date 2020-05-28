def fatorial (x):
    fat = 1
    while(x > 1):
        fat *= x
        x = x-1
    return fat

def num_Bin (n, k):
    return fatorial(n)/(fatorial(k) * fatorial(n-k)) 
    
        
    
