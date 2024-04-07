n = 1
m = 0
r = 0

while n > 0:
    n = int (input ("Digite um valor "))
    
    if n < 0:
        print("Número negativo detectado. Encerrando o programa.")
        break

    if n == 0:
        print("Número 0 detectado. Encerrando o programa.")
        break

    m = 0
    
    print ("---------------------------------------------")
    while m != 10:
        m += 1
        r = n/m
        print ("{} / {} = {}" .format (n,m,r))
    print ("---------------------------------------------")
    