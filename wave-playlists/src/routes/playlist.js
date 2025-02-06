import { Router } from "express";
import db from "../database/db.js";

const router = Router();

router.get("/", (req, res) => {
  const playlists = db.prepare("SELECT * FROM playlists").all();
  res.json(playlists.map((playlist) => ({
    ...playlist,
    songs: JSON.parse(playlist.songs)
  })));
});

router.get("/:playlistId", (req, res) => {
  const { playlistId } = req.params;
  const playlist = db.prepare("SELECT * FROM playlists WHERE playlistId = ?").get(playlistId);

  if(!playlist) res.status(404).json({ message: "Playlist não encontrada" });

  res.json({
    ...playlist,
    songs: JSON.parse(playlist.songs)
  });
});

router.post("/", (req, res) => {
  const { playlistId, title, image, songs } = req.body;
  db.prepare("INSERT INTO playlists (playlistId, title, image, songs) VALUES (?, ?, ?, ?)").run(playlistId, title, image, songs);
  res.status(201).json({ message: "Playlist criada" });
});

router.put("/:playlistId", (req, res) => {
  const { playlistId } = req.params;
  const { title, image, songs } = req.body;
  db.prepare(`
    UPDATE playlists SET 
    title = ?, image = ?, songs = ?
    WHERE playlistId = ?  
  `).run(title, image, songs, playlistId);
  res.json({ message: "Playlist atualizada" });
});

router.delete("/:playlistId", (req, res) => {
  const { playlistId } = req.params;
  db.prepare("DELETE FROM playlists WHERE playlistId = ?").run(playlistId);
  res.json({ message: "Playlist deletada" });
});

export default router;
