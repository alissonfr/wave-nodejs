import { Router } from "express";
import albumService from "../services/albumService.js";

const router = Router();

router.get("/trending-albums", (req, res) => {
  res.json(albumService.getTrendingAlbums(req.query.genreId));
});

router.get("/trending-genres", (req, res) => {
  res.json(albumService.getTrendingGenres());
});

router.get("/songs", (req, res) => {
  res.json(albumService.getSongs(req.query.title, req.query.limit, req.query.page));
});

router.get("/", (req, res) => {
  res.json(albumService.getAllAlbums(req.query.genreId));
});

router.get("/:albumId", (req, res) => {
  const album = albumService.getAlbumById(req.params.albumId);
  if (!album) return res.status(404).json({ message: "Álbum não encontrado" });
  res.json(album);
});

router.post("/", (req, res) => {
  res.status(201).json(albumService.createAlbum(req.body));
});

router.put("/:albumId", (req, res) => {
  res.json(albumService.updateAlbum(req.params.albumId, req.body));
});

router.delete("/:albumId", (req, res) => {
  res.json(albumService.deleteAlbum(req.params.albumId));
});

export default router;
