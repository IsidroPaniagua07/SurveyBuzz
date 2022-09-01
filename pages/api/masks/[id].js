import { productData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;

  const mask = productData.masks.find((mask) => mask.id === parseInt(id));
  res.status(200).json(mask);
}
