# DeBounce Method

Todos los comando posibles:

`npm run dev` Inicia la interfaz web

`npm test` Inicia el test

`npm run lint` Inicia el lint

## Un poco de información

Ejemplo práctico de como funciona el método deBounce, antes que nada, que es?

- El método deBounce es una función que limita el timepo a la llamada de otra función, es decir, el retardo inicial.

- En nuestro caso, la función deseada es un generador de password aleatoria ==> randomkey()

- Cada vez que le damos al boton, `generar`, llama a esta función.

- Supongamos que es una función muy pesada o que pide muchos recursos, queremos limitarla al uso ideóneo, antes de esta función, la pasaremos por otra que hará de embudo y solo la llamará después de cierto tiempo idóneo (ms) sin que no se haya vuelto a llamar la funcion deBounce.

                deBounce(randomkey, 5000)

## Comandos

- `npm run dev`: Si no se abre automáticamente la pagina, hacer click donde salga [http://localhost], se abrirá la pagina web para poder entender las diferencias de implementarlo.

- `npm test`: Hace unas pruebas predefinidas para obtener la validez de la función.
