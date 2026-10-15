Algoritmo sumaMplos_Mientras
	Leer N
	
	Suma <- 0
	i <- 1
	
	Mientras i <= N Hacer
		Multiplo <- i * 11
		Escribir Multiplo
		Suma <- Suma + Multiplo
		i <- i + 1
	FinMientras
	
	Escribir "La suma es: ", Suma
FinAlgoritmo