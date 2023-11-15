import { Request, Response } from "npm:express@4.18.2";
import {_Tardis} from "../db/schemas.ts";

const borrarTardis = async (req: Request, res: Response) => {
        try {
          const { _id} = req.params;
          const tardis = await _Tardis.findOneAndDelete({ _id }).exec();
          if (!tardis) {
            res.status(404).send("Tardis no encontrado");
            return;
          }
          res.status(200).send("Tardis eliminado");
        } catch (error) {
          res.status(404).send(error.message);
          return;
        }
      };

export default borrarTardis;