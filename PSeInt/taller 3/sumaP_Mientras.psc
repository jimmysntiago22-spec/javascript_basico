Algoritmo sumaP_Mientras
	Leer N
	
	S <- 0
	i <- 1
	
	Mientras i <= N Hacer
		S <- S + (1 / (i * i))
		i <- i + 2
	FinMientras
	
	Escribir "S = ", S
FinAlgoritmo