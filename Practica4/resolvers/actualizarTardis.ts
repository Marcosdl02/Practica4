import { Request, Response } from "npm:express@4.18.2";
import {_Tardis} from "../db/schemas.ts"

const actualizarTardis = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { dimensiones, planetas, personas, camuflaje,regeneracion, anioActual} = req.body;

    const tardisActualizado = await _Tardis.findOneAndUpdate(
      { _id },
      { dimensiones, planetas, personas, camuflaje,regeneracion, anioActual },
      { new: true }
    ).exec();

    if (!tardisActualizado) {
      res.status(404).send("Tardis no encontrado");
      return;
    }

    res.status(200).send({
      dimensiones: tardisActualizado.dimensiones,
      planetas: tardisActualizado.planetas,
      personas: tardisActualizado.personas,
      camuflaje: tardisActualizado.camuflaje,
      regeneracion: tardisActualizado.regeneracion,
      anioActual: tardisActualizado.anioActual,

    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default actualizarTardis;