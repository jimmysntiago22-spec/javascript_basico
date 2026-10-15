Algoritmo sumaNpares_Mientras
	Leer N
	
	Suma <- 0
	i <- 2
	
	Mientras i <= N Hacer
		Escribir i
		Suma <- Suma + i
		i <- i + 2
	FinMientras
	
	Escribir "La suma de los pares es: ", Suma
FinAlgoritmo