# Ejercicios Algebra Relacional

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
        <br/> **Respuesta:** <br/> $\prod$ nombre, apellido ($\sigma$ Nacionalidad = "MEX"(PARTICIPANTE))
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
        <br/> **Respuesta:** <br/> $\prod$ nombre, apellido, puntos($ \sigma$ Nacionalidad= "USA"(PARTICIPANTE $\Join$ PUNTOSACUMULADOS))
3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
        <br/> **Respuesta:** <br/> $\prod$ nombre, apellido, puntos($\sigma$ Lugar=1(PARTICIPANTE $\Join$ CLASIFICACIÓN))
4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
        <br/> **Respuesta:** <br/> $\prod$ NombreCompetencia($\sigma$ Nacionalidad = "MEX"(PARTCIPANTE $\Join$ COMPETENCIA))