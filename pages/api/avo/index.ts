import { IncomingMessage, ServerResponse } from "http";

import Database from "@database";
import { json } from "stream/consumers";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new Database();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");

  response.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
