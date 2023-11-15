import mongoose from "npm:mongoose@7.6.3";
import { Dimensiones } from "../types.ts";
import { Persona } from "../types.ts";
import { Planeta } from "../types.ts";
import { Tardis } from "../types.ts";


const Schema = mongoose.Schema;

const dimensionSchema = new Schema(
  {
    planetas: [{ type: Schema.Types.ObjectId, ref: 'Planeta' }],
  },
  { timestamps: true }
);

const Schema2 = mongoose.Schema;

const personaSchema = new Schema2(
  {
    nombre: { type: String, required: true },
  },
  { timestamps: true }
);

const Schema3 = mongoose.Schema;

const planetaSchema = new Schema3 (
  {
    personas: [{ type: Schema.Types.ObjectId, ref: 'Persona' }],

  },
  { timestamps: true }
);



const Schema4 = mongoose.Schema;

const tardisSchema = new Schema4 (
  {
  _id: { type: String, unique:true },
  dimensiones: [{ type: Schema.Types.ObjectId, ref: 'Dimension' }], // ref: usar id de otro modelo 
  planetas: [{ type: Schema.Types.ObjectId, ref: 'Planeta' }],
  personas: [{ type: Schema.Types.ObjectId, ref: 'Persona' }],
  camuflaje: { type: String },
  regeneracion: { type: Number },
  anioActual: { type: Number },
  },
  { timestamps: true }
);

export const Dimension = mongoose.model('Dimension', dimensionSchema);
export const _Planeta = mongoose.model('Planeta', planetaSchema);
export const _Persona = mongoose.model('Persona', personaSchema);
export const _Tardis = mongoose.model('Tardis', tardisSchema);



