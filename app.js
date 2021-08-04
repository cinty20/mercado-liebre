const express = require ("express");
const app = express();
const path = require ("path");
const port = 3030 ;

app.get ("/", (req,res) => res.sendFile(path.join(__dirname, "views","home.html")))
/* configuracion de recursos estaticos(imagenes y estilos)para que se vean las imagenes */
app.use(express.static("public"));

app.listen(port,() => console.log("servidor corriendo en el puerto http://localhost:" + port));