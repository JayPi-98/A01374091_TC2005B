# Ejercicios Algebra Relacional

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
        <br><br> **Respuesta:** <br> 
        $\prod nombre,apellido(\sigma Nacionalidad="Mexicana"(PARTICIPANTE))$
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
        <br><br> **Respuesta:** <br $\prod nombre,apellido,puntos (\sigma Nacionalidad="USA"(PARTICIPANTE \Join PUNTOSACUMULADOS))$
<br><br>

3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
        <br><br> **Respuesta:** <br> $\prod nombre, apellido(\sigma Lugar=1(PARTICIPANTE \Join CLASIFICACION))$
<br><br>

4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
        <br><br> **Respuesta:** <br> $\prod NombreCompetencia(\sigma Nacionalidad = "Mexicana"(PARTICIPANTE \Join CLASIFICACION \Join COMPETENCIA))$
5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
        <br><br> **Respuesta:** <br> $ \prod nombre,apellido(PARTICIPANTE - \prod nombre,apellido(\sigma Lugar = 1(CLASIFICACION \Join PARTICIPANTE))$
6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
        <br><br> **Respuesta:** <br> $\prod nombre,apellido((PARTICIPIPANTE \Join PUNTOSACUMULADOS) -\prod nombre,apellido((PARTICIPANTE \Join PUNTOSACUMULADOS)-(CLASIFICACION \Join participante))$
7. Nombre de la competencia que aporta el máximo de puntos.
        <br><br> **Respuesta:** <br> $\prod NombreCompetencia (COMPETENCIA \Join \sigma NumPtos=max(NumPtos) (COMPETENCIA))$
        <br><br>
        En primer lugar, se utilizó la operación de selección $(\sigma)$ sobre la relación COMPETENCIA para seleccionar solo las tuplas en las que el valor del atributo $NumPtos$ es igual al valor máximo de $NumPtos $ en toda la relación. Para lograr esto, se empleó una función de agregación llamada $max(NumPtos)$, que calcula el valor máximo de $NumPtos$.A continuación, se realizó una concatenación entre la relación resultante de la selección anterior y la relación COMPETENCIA completa, ya que ambas comparten el atributo $NombreCompetencia$, que identifica a cada competencia. Por último, se aplicó la operación de proyección $(\Pi)$ para proyectar únicamente el atributo $NombreCompetencia$, que es el que se necesita en la consulta.

8. Países (nacionalidades) que participaron en todas las competencias.
        <br><br> **Respuesta:** <br> $\prod Nacionalidad((PARTICIPANTE \div \prod Nacionalidad (PARTICIPANTE))\Join CLASIFICACION \Join \prod NombreCompetencia(COMPETENCIA))$
        <br><br>
        En este ejercicio, se utilizó la operación de división $(\div)$ entre la relación $PARTICIPANTE $ y una subconsulta que proyecta únicamente el atributo Nacionalidad de dicha relación. Esta división permite obtener el número de participantes que han participado en al menos una competencia.
        Posteriormente, se realizó una concatenación entre la relación resultante de la división anterior, la relación $CLASIFICACION $ y una subconsulta que proyecta solo el atributo $NombreCompetencia $ de la relación $COMPETENCIA$. Esta unión permite obtener las tuplas correspondientes a los participantes de cada competencia. Finalmente, se aplicó la operación de proyección $(\Pi)$ para proyectar únicamente el atributo $Nacionalidad$, que es el que se requiere en la consulta.

