export type Persona = {
    _id: string;
    nombre: string;
  };

export type Planeta={
  _id: string;
  personas: Persona[];
};

export type Dimensiones ={
  _id: string;
  planetas: Planeta[];
};

export type Tardis={
  dimensiones: Dimensiones[];
  planetas: Planeta[];
  personas: Persona[];
  camuflaje: string;
  regeneracion: number;
  anioActual: number;
  _id:string,
};

