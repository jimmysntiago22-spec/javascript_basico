Algoritmo Altura_persona
	Definir altura Como Real
	
	Escribir "Ingrese la altura en centimetros:"
	Leer altura
	
	Si altura <= 1.50 Entonces
		Escribir "Persona de altura baja"
	Sino
		Si altura >= 1.51 Y altura <= 1.70 Entonces
			Escribir "Persona de altura media"
		Sino
			Escribir "Persona de altura alta"
		FinSi
	FinSi
FinAlgoritmo