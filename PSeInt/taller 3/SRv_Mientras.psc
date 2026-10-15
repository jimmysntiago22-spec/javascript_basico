Algoritmo SRv_Mientras
	Leer N
	
	S <- 0
	Signo <- 1
	i <- 1
	
	Mientras i <= N Hacer
		S <- S + (i * Signo)
		Signo <- Signo * (-1)
		i <- i + 1
	FinMientras
	
	Escribir "S = ", S
FinAlgoritmo