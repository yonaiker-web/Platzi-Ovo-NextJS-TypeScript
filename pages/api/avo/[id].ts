import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  //creamos una nueva instancia de la base de datos
  const db = new Database();

  //capturamos el valor id que nos pasen en el request
  const id = request.query.id;

  //obtenemos un valor por id, le pasamos el id por parametros y espesidicacmos que es tipo string
  const avo = await db.getById(id as string);

  //confirmamos que es una respuesta 200 o exitosa
  //   response.statusCode = 200;
  //   //seteamos en el encabeado el tipo de contenido
  //   response.setHeader("Content-type", "application/json");

  //   //finalizamos el response y mandamos un JSON
  //   response.end(JSON.stringify({ data: avo }));

  response.status(200).json(avo);
};

export default allAvos;
