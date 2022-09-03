import { productData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;

  const shirt = productData.shirts.find((shirt) => shirt.id === parseInt(id));
  res.status(200).json(shirt);
}
