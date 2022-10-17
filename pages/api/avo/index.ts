import { IncomingMessage, ServerResponse } from "http";

import Database from "@database";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  //creamos una nueva instancia de la base de datos
  const db = new Database();

  //obtenemos todo lo que nos devuelve el api
  const allEntries = await db.getAll();
  //calculamos la cantidad de datos que contiene la respuesta
  const length = allEntries.length;

  //confirmamos que es una respuesta 200 o exitosa
  response.statusCode = 200;
  //seteamos en el encabeado el tipo de contenido
  response.setHeader("Content-type", "application/json");

  //finalizamos el response y mandamos un JSON
  response.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
