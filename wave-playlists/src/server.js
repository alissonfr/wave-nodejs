import express from "express";
import playlistRoutes from "./routes/playlist.js";

const PORT = 3001;

const app = express();
app.use(express.json());

app.use("/playlists", playlistRoutes);

app.listen(PORT, () => {
  console.log(`Serviço wave-playlists rodando na porta ${PORT}`);
});
