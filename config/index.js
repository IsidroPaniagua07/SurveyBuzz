const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://caudills-crafts-gfw2nl1uf-isidropaniagua07.vercel.app";
