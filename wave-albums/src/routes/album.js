import { Router } from "express";
import db from "../database/db.js";

const router = Router();

router.get("/", (req, res) => {
  const albums = db.prepare("SELECT * FROM albums").all();
  res.json(albums.map((album) => ({
    ...album,
    artists: JSON.parse(album.artists), 
    genres: JSON.parse(album.genres), 
    images: JSON.parse(album.images), 
    songs: JSON.parse(album.songs) 
  })));
});

router.post("/", (req, res) => {
  const { albumId, title } = req.body;
  db.prepare("INSERT INTO albums (albumId, title) VALUES (?, ?)").run(albumId, title);
  res.status(201).json({ message: "Álbum criado com sucesso" });
});

router.put("/:albumId", (req, res) => {
  const { title } = req.body;
  const { albumId } = req.params;
  db.prepare("UPDATE albums SET title = ? WHERE albumId = ?").run(title, albumId);
  res.json({ message: "Álbum atualizado" });
});

router.delete("/:albumId", (req, res) => {
  const { albumId } = req.params;
  db.prepare("DELETE FROM albums WHERE albumId = ?").run(albumId);
  res.json({ message: "Álbum deletado" });
});

export default router;
