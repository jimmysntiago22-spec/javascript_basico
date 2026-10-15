Algoritmo serieF_Mientras
	Leer N
	
	A <- 0
	B <- 1
	i <- 1
	
	Mientras i <= N Hacer
		Escribir A
		
		C <- A + B
		A <- B
		B <- C
		
		i <- i + 1
	FinMientras
FinAlgoritmo