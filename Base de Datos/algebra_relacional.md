# Ejercicios Algebra Relacional

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
        <br/> Respuesta: <br/> $\prod$ nombre, apellido ($\sigma$ Nacionalidad = "MEX"(PARTICIPANTE))
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
        <br/> Respuesta: <br/> $\prod$ nombre, apellido, puntos($ \sigma$ Nacionalidad= "USA"(PARTICIPANTE $\Join$ PUNTOSACUMULADOS))
3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.