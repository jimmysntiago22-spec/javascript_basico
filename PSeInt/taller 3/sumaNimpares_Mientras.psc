Algoritmo sumaNimpares_Mientras
	Leer N
	
	Suma <- 0
	i <- 1
	
	Mientras i <= N Hacer
		Escribir i
		Suma <- Suma + i
		i <- i + 2
	FinMientras
	
	Escribir "La suma de los impares es: ", Suma
FinAlgoritmo