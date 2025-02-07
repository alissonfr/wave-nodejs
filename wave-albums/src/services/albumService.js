// services/albumService.js
import db from "../database/db.js";

const parseAlbum = (album) => ({
  ...album,
  artists: JSON.parse(album.artists),
  genres: JSON.parse(album.genres),
  images: JSON.parse(album.images),
  songs: JSON.parse(album.songs),
});

const getAllAlbums = (genreId) => {
  const albums = db.prepare("SELECT * FROM albums").all().map(parseAlbum);
  return genreId ? albums.filter(album => album.genres.some(g => g.genreId === genreId)) : albums;
};

const getTrendingAlbums = (genreId) => {
  const trendings = [
    "Álbuns Mais Ouvidos", "Novidades da Semana", "Lançamentos Recentes",
    "Top 10 Favoritos", "Sugestões Baseadas no Seu Gosto", "Em Alta",
    "Músicas Recomendadas", "Álbuns Clássicos"
  ];
  const albums = getAllAlbums(genreId).slice(0, 10);
  return trendings.map(title => ({ title, albums }));
};

const getTrendingGenres = () => {
  const genres = db.prepare("SELECT * FROM albums").all()
    .flatMap(album => JSON.parse(album.genres));
  return Array.from(new Map(genres.map(genre => [genre.genreId, genre])).values()).slice(0, 2);
};

const getSongs = (title, limit = 15, page = 1) => {
  const offset = (page - 1) * limit;
  const albums = db.prepare("SELECT * FROM albums").all();
  const allSongs = albums.flatMap(album => {
    return title ? JSON.parse(album.songs).filter(song => song.title.includes(title)) : JSON.parse(album.songs);
  });
  return allSongs.slice(offset, offset + Number(limit));
};

const getAlbumById = (albumId) => {
  const album = db.prepare("SELECT * FROM albums WHERE albumId = ?").get(albumId);
  return album ? parseAlbum(album) : null;
};

const createAlbum = ({ albumId, title, artists, genres, images, songs }) => {
  db.prepare("INSERT INTO albums (albumId, title, artists, genres, images, songs) VALUES (?, ?, ?, ?, ?, ?)")
    .run(albumId, title, JSON.stringify(artists), JSON.stringify(genres), JSON.stringify(images), JSON.stringify(songs));
  return { message: "Álbum criado com sucesso" };
};

const updateAlbum = (albumId, { title, artists, genres, images, songs }) => {
  db.prepare("UPDATE albums SET title = ?, artists = ?, genres = ?, images = ?, songs = ? WHERE albumId = ?")
    .run(title, JSON.stringify(artists), JSON.stringify(genres), JSON.stringify(images), JSON.stringify(songs), albumId);
  return { message: "Álbum atualizado" };
};

const deleteAlbum = (albumId) => {
  db.prepare("DELETE FROM albums WHERE albumId = ?").run(albumId);
  return { message: "Álbum deletado" };
};

export default { getAllAlbums, getTrendingAlbums, getTrendingGenres, getSongs, getAlbumById, createAlbum, updateAlbum, deleteAlbum };
