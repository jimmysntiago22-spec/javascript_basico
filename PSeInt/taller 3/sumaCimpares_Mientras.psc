Algoritmo sumaCimpares_Mientras
	Leer N
	
	Suma <- 0
	Impar <- 1
	i <- 1
	
	Mientras i <= N Hacer
		Suma <- Suma + Impar
		
		Escribir "Cuadrado de ", i, " = ", Suma
		
		Impar <- Impar + 2
		i <- i + 1
	FinMientras
FinAlgoritmo