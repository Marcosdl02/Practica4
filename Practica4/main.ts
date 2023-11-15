import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import verTardis from "./resolvers/verTardis.ts";
import crearTardis from "./resolvers/crearTardis.ts";
import borrarTardis from "./resolvers/BorrarTardis.ts";
import actualizarTardis from "./resolvers/actualizarTardis.ts";

try{
await mongoose.connect("mongodb+srv://Marcos:12345@nebrija-cluster.7yxmiyx.mongodb.net/TardisDB?retryWrites=true&w=majority");
console.info("Conexion con Mongo realizada");
const app = express();
app.use(express.json());
app
  .get("/verTardis/:_id", verTardis )
  .post("/crearTardis", crearTardis)
  .put("/actualizarTardis/:_id", actualizarTardis)
  .delete("/borrarTardis/:_id", borrarTardis);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

} catch (e) {
  console.error(e);
}