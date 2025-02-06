import { Router } from "express";
import db from "../database/db.js";

const router = Router();

router.get("/", (req, res) => {
  const playlists = db.prepare("SELECT * FROM playlists").all();
  res.json(playlists.map((album) => ({
    ...playlists,
    songs: JSON.parse(album.songs)
  })));
});

router.post("/", (req, res) => {
  const { playlistId, title, image } = req.body;
  db.prepare("INSERT INTO playlists (playlistId, title, image) VALUES (?, ?, ?)").run(playlistId, title, image);
  res.status(201).json({ message: "Playlist criada" });
});

router.put("/:playlistId", (req, res) => {
  const { title, image } = req.body;
  const { playlistId } = req.params;
  db.prepare("UPDATE playlists SET title = ?, image = ? WHERE playlistId = ?").run(title, image, playlistId);
  res.json({ message: "Playlist atualizada" });
});

router.delete("/:playlistId", (req, res) => {
  const { playlistId } = req.params;
  db.prepare("DELETE FROM playlists WHERE playlistId = ?").run(playlistId);
  res.json({ message: "Playlist deletada" });
});

export default router;
