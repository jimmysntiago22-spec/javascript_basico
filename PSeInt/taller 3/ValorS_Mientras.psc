Algoritmo ValorS_Mientras
	Leer N
	
	S <- 0
	i <- 1
	Contador <- 1
	
	Mientras i <= N Hacer
		
		Si Contador = 3 Entonces
			S <- S - i
			Contador <- 1
		SiNo
			S <- S + i
			Contador <- Contador + 1
		FinSi
		
		i <- i + 1
	FinMientras
	
	Escribir "S = ", S
FinAlgoritmo