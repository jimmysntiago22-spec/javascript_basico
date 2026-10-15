Algoritmo Cfactorial_Mientras
	Leer N
	
	S <- 0
	Signo <- 1
	i <- 1
	
	Mientras i <= N Hacer
		
		Factorial <- 1
		j <- 1
		
		Mientras j <= i Hacer
			Factorial <- Factorial * j
			j <- j + 1
		FinMientras
		
		S <- S + (Signo / Factorial)
		Signo <- Signo * (-1)
		i <- i + 2
		
	FinMientras
	
	Escribir "S = ", S
FinAlgoritmo