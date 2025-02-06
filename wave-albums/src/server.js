import express from "express";
import albumRoutes from "./routes/album.js";

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/albums", albumRoutes);

app.listen(PORT, () => {
  console.log(`Serviço wave-albums rodando na porta ${PORT}`);
});
