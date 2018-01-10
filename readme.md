## MDS_Digital Books Challenge
Aplicacion realizada con Express, MongoDD, React y Redux.
### Servidor
Instalar las dependencias 
```
cd MDS_Digital/server

yarn install
``` 
#### Comandos
| Script       | description          |
| ------------- |:-------------:| -----:|
| `yarn dev`      | Inicia el servidor | 
| `yarn build`      | Construye la aplicacion en ./dist      | 
| `yarn start` | Inicia en modo producion      | 
#### Notas
- Debe haber iniciado mongoDB antes de iniciar el servidor
- Documentacion del **API** `http://localhost:3000/docs/#/`
- Para cargar los libros en la Base de Datos usar el comando
 `mongorestore  --db accounts dump/`

### Cliente

Instalar las dependencias 
```
cd MDS_Digital/client

yarn install
``` 
#### Comandos
| Script       | description          |
| ------------- |:-------------:| -----:|
| `yarn start`      | Inicia | 


## Notas 
- El cliente incia en `http://localhost:3334`

### Autor
Vincenzo Bianco