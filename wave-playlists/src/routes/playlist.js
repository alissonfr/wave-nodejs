import { Router } from "express";
import playlistService from "../services/playlistService.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(playlistService.getAllPlaylists());
});

router.get("/:playlistId", (req, res) => {
  const playlist = playlistService.getPlaylistById(req.params.playlistId);
  if (!playlist) return res.status(404).json({ message: "Playlist não encontrada" });
  res.json(playlist);
});

router.post("/", (req, res) => {
  res.status(201).json(playlistService.createPlaylist(req.body));
});

router.put("/:playlistId", (req, res) => {
  res.json(playlistService.updatePlaylist(req.params.playlistId, req.body));
});

router.delete("/:playlistId", (req, res) => {
  res.json(playlistService.deletePlaylist(req.params.playlistId));
});

export default router;
