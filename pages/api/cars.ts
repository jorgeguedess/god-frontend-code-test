import { NextApiResponse, NextApiRequest } from "next";
import cars from "../../public/api/cars.json";
import { ICar } from "../../src/types/car";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ICar[]>
) {
  return res.status(200).json(cars);
}
