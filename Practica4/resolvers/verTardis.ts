import { Request, Response } from "npm:express@4.18.2";
import {_Tardis} from "../db/schemas.ts";

const verTardis = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const tardis = await _Tardis.findById(_id)
          .populate('dimensiones', )
          .populate('planetas')
          .populate('personas')
          .exec();
    
          if (!tardis) {
            res.status(404).send("Tardis no encontrado");
            return;
          }
          res.status(200).send({
            id:tardis._id,
            dimensiones: tardis.dimensiones,
            planetas: tardis.planetas,
            personas: tardis.personas,
            camuflaje: tardis.camuflaje,
            regeneracion: tardis.regeneracion,
            anioActual: tardis.anioActual,
          });

      } catch (error) {
        res.status(404).send(error.message);
      }
};

export default verTardis;