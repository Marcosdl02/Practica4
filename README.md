# Practica4

# Enunciado de la practica

Doctor Who cumple 60 años y los episodios especiales están a la vuelta de esquina, así que vamos a hacer un API REST para ayudar a la TARDIS (Time And Relative Dimension In Space) organizarse ante la nueva reiterada llegada de David Tennant.

La Tardis guarda los siguientes datos en sus memorias Gallifreyanas según lo que ha visitado en sus diferentes viajes.
- Dimensiones  --> Con los planetas visitados en la misma
- Planetas --> Con las personas relevantes a las experiencias en el mismo
- Personas
- Actual camuflaje de la TARDIS
- Número de regeneración del Time Lord que la use
- Año en el que se encuentra actualmente
Las dimensiones, planetas y personas se deberán guardar en diferentes colecciones de mongo atlas y ser relacionadas por id's entre si llegando a una sola final en la que se guarde cada TARDIS.
El api deberá de poseer llamadas para ver, crear y modificar TARDISs además de todos los elementos de su interior, cada llamada tendrá que ser del método requerido por su funcionalidad.

Para realizar esta practica, he generado 4 endpoints que son los siguientes

1. GET /verTardis/:_id : Con ello, veremos todos los Tardis que se han generado en la base de datos con el _id correspondiente
2. POST /crearTardis : Creación de Tardis. Para ello, dejaré un ejemplo de la creación de uno de ellos para dar sencillez al usuario
   
   {
  "_id": "60d6a2c4f0aeb10f20d7358d",

  "dimensiones": [
    {
      "_id": "60d6a2c4f0aeb10f20d7358e",
      
      "planetas": [
        {
          "_id": "60d6a2c4f0aeb10f20d7358f",
          "people": [
            { "_id": "60d6a2c4f0aeb10f20d73590" },
            { "_id": "60d6a2c4f0aeb10f20d73591" }
          ]
        }
      ]
    }
  ],
  
  "planetas": [
    "60d6a2c4f0aeb10f20d7358e"
  ],
  
  "personas": [
    "60d6a2c4f0aeb10f20d73590",
    "60d6a2c4f0aeb10f20d73591"
  ],
  
  "camuflaje": "Azul",
  
  "regeneracion": 12,
  
  "anioActual": 2023
}

4. PUT /actualizarTardis/:_id : Actualiza un tardis ya existente en la base de datos.
5. DELETE /borrarTardis/:_id: Borra un tardis de la basede datos

Esta practica la he desarrollado usando como bases de datos mongo, empleando mongoose
