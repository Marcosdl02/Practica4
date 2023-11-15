import { Request, Response } from "npm:express@4.18.2";
import  {_Tardis} from "../db/schemas.ts"

const crearTardis = async (req: Request, res: Response) => {
    try {
      const {_id, dimensiones, planetas, personas, camuflaje,regeneracion, anioActual } = req.body;

      const yaExiste = await _Tardis.findOne({ _id }).exec();
      if (yaExiste) {
        res.status(400).send("Tardis ya existente");
        return;
      }
  
      const newTardis = new _Tardis({_id, dimensiones, planetas, personas, camuflaje,regeneracion, anioActual });
      await newTardis.save();
  
      res.status(200).send({
            id:newTardis._id,
            dimensiones: newTardis.dimensiones,
            planetas: newTardis.planetas,
            personas: newTardis.personas,
            camuflaje: newTardis.camuflaje,
            regeneracion: newTardis.regeneracion,
            anioActual: newTardis.anioActual,
      });
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }
};

export default crearTardis;