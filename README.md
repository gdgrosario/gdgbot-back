# GDG-bot-backend
***
En produccion sera llamada botitojs, es un bot de discord de comunidad en desarrollo, pensado especificamente para el servidor de discord GDG Rosario.

## Tecnologias utilizadas
***
*[discord.js](https://www.npmjs.com/package/discord.js):Version 13.3.1

*[@discordjs/rest]():Version ^0.1.0-canary.0

*[@discord-api-types]():Version ^0.23.1

*[@discordjs/builders](): Version 0.8.2

## Instalacion
***
```bash
$ git clone https://github.com/gdgrosario/gdgbot-back
$ cd [ubicacion donde se clono el repositorio]
$ npm install
$ npm start
```
```
*NOTA 
Para que el bot funcione correctamente se debe crear el archivo config.json, consulte el archivo config.json.example para crear el suyo.
```
##Colaborar al proyecto
***
1* Como primer paso debe forkear el repositorio [https://github.com/gdgrosario/gdgbot-back]

2* A continuacion debemos clonar el repositorio forkeado 
*Ejemplo*  
```bash
$ git clone https://github.com/mirepo/gdgbot-back
```

3* Una vez este clonado el repositorio forkeado podemos realizar los cambios con los que vamos a contribuir

4* Añadir los cambios a una rama propia
*Ejemplo*
# COMANDOS PARA CREAR RAMA

- Para crear una rama, utilizaremos el comando git branch. Vamos a crear una rama

```bash
$ git branch [nombre]
```
- Ahora tenemos una nueva rama. Para acceder a ella, utilizaremos el comando git checkout

```bash
$ git checkout [nombre]
```
- Ahora añadimos todos los cambios realizados, utilizando el comando git add *(Es recomandable que verifiques bien tus cambios antes de añadirlos para no crear conflitos ni perjudicar al proyecto o evitar que el pr sea rechazado)*.

```bash
$ git add .
```
- A continuacion commiteamos los cambios, utilizando el comando git commit -m *(Este comentario debe ser lo mas corto posible)*.

```bash
$ git commit -m [cambios realizdos]
```
5* Pushear los cambios al repositorio

*Ejemplo*

Si es la primera vez que pusheamos esta rama
```bash
$ git push -u origin [nombre de nuestra rama] 
```
Si ya hemos pusheado esta rama anteriormente
```bash
$ git push origin [nombre de nuestra rama]
```
6* Vamos a nuestro repositorio y presionamos el boton "Compare & pull request"
*Ejemplo*
<img src="src/utils/readme.images/compare.jpg" />

7* Escribimos un comentario mas detallado de los cambios o la contribucion realizada y creamos el Pull request


### Team

Esdras Santiago <santiagoesdras501@gmail.com> [Github] [https://github.com/santiagoesdras]

Nacho Belando <ignaciobelando@gmail.com>   [Github] [https://github.com/iBelando]

Ulysses Torres <ulyssestorres2003@gmail.com>   [Github] [https://github.com/ulyssesRizzo]
