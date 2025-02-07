import db from "../database/db.js";

const getAllPlaylists = () => {
  return db.prepare("SELECT * FROM playlists").all().map(playlist => ({
    ...playlist,
    songs: JSON.parse(playlist.songs)
  }));
};

const getPlaylistById = (playlistId) => {
  const playlist = db.prepare("SELECT * FROM playlists WHERE playlistId = ?").get(playlistId);
  return playlist ? { ...playlist, songs: JSON.parse(playlist.songs) } : null;
};

const createPlaylist = ({ image, songs }) => {
  const playlistId = db.prepare("SELECT MAX(playlistId) + 1 as nextPlaylistId FROM playlists").get().nextPlaylistId.toString();
  const title = `Playlist #${playlistId}`;
  db.prepare("INSERT INTO playlists (playlistId, title, image, songs) VALUES (?, ?, ?, ?)")
    .run(playlistId, title, image, JSON.stringify(songs));
  return { playlistId, title, image, songs };
};

const updatePlaylist = (playlistId, { title, image, songs }) => {
  return db.prepare(
    "UPDATE playlists SET title = ?, image = ?, songs = ? WHERE playlistId = ?"
  ).run(title, image, JSON.stringify(songs), playlistId);
};

const deletePlaylist = (playlistId) => {
  db.prepare("DELETE FROM playlists WHERE playlistId = ?").run(playlistId);
  return { message: "Playlist deletada" };
};

export default { getAllPlaylists, getPlaylistById, createPlaylist, updatePlaylist, deletePlaylist };