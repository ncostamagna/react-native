# Index

# Entorno

## VSC
Extensiones de VSC:
- Bracket Pair Colorizer: pone colores en las llaves
- ES7 React/Redux/GraphQL/React-Native: Crea compomentes con autocompletar
- ESLint: Nos avisa cuado usamos malas practicas
- Material Icon Theme: Agrega iconos en los ficheros
- Path Intellisense: Que tenemos en cada path, me los muestra al momento de importarlo
- Prettier - Code formatter: formatear el codigo

## Expo CLI
La pagina oficial es: https://expo.dev/

```sh
npm install --global expo-cli

expo --version

# Creacion del proyecto
expo init miProyecto
cd miProyecto
npm start
```

- Debemos descargarnos Android Studio y instalamos un SDK
- Debemos crearnos una cuenta en la pagina de **Expo**
- Debemos iniciar sesion en el equipo:
```sh
expo login
# ingresamos usuario y pass

```

# Proyecto

Crear una nueva aplicacion de React Native
```sh
expo init miAplicacion
# Elegimos el template

```

- Assert: Va a ser donde vamos a añadir todas las imagenes
- App.js: Lo primero que se va a ejecutar
- app.json: configuracion; nombre, plataformas disponibles, version, orientacion, icon, pantalla de carga (splash)

<br />
Configuracion para IOs
```json
"ios":{

}
```
Configuracion para Android, por ejemplo, permisos de la aplicacion (camara, localicion, etc..) 
```json
"android":{

}
```

```sh
npm start   # Ejecutar aplicacion
# nos da un QR y lo escaneamos desde la App de expo


npm android # Ejecutar en Android
```

Para subir el proyecto a **expo**, levantamos el servidor, damos click en **Publish or repulish project...** y lo publicamos. Para verlo vamos a *Profile* y vemos la aplicacion