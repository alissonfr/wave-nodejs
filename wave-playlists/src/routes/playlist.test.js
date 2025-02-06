import request from "supertest";
import express from "express";
import playlistRouter from "./playlist.js";
import { v4 as uuidv4 } from 'uuid';

const PLAYLIST_ID = uuidv4();

const app = express();
app.use(express.json());
app.use("/playlists", playlistRouter);

describe("Playlist API Endpoints", () => {
  test("POST /playlists - Deve criar uma nova playlist", async () => {
    const newPlaylist = {
      playlistId: PLAYLIST_ID,
      title: "Playlist #1",
      image: "assets/images/playlist.png",
      songs: JSON.stringify([
        { songId: uuidv4(), title: "Juicy", artists: [{ artistId: uuidv4(), name: "The Notorious B.I.G." }], url: "juicy.mp3" },
        { songId: uuidv4(), title: "N.Y. State of Mind", artists: [{ artistId: uuidv4(), name: "Nas" }], url: "ny_state_of_mind.mp3" }
      ])
    };

    const postResponse = await request(app).post("/playlists").send(newPlaylist);
    expect(postResponse.status).toBe(201);
    expect(postResponse.body.message).toBe("Playlist criada");
    
    const getResponse = await request(app).get(`/playlists/${newPlaylist.playlistId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.title).toBe("Playlist #1");
  });

  test("GET /playlists - Deve retornar lista de playlists", async () => {
    const response = await request(app).get("/playlists");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /playlists/:playlistId - Deve retornar uma playlist específica", async () => {
    const response = await request(app).get(`/playlists/${PLAYLIST_ID}`);
    expect(response.status).toBe(200);
    expect(response.body.playlistId).toBe(PLAYLIST_ID);
    expect(response.body.songs).toBeInstanceOf(Array);
  });

  test("GET /playlists/:playlistId - Deve retornar 404 quando a playlist não for encontrada", async () => {
    const response = await request(app).get("/playlists/nonexistentId");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Playlist não encontrada");
  });

  test("PUT /playlists/:playlistId - Deve atualizar uma playlist", async () => {
    const updatedPlaylist = {
      title: "Updated Playlist",
      image: "assets/images/updated_playlist.png",
      songs: JSON.stringify([
        { songId: uuidv4(), title: "Juicy", artists: [{ artistId: uuidv4(), name: "The Notorious B.I.G." }], url: "juicy.mp3" },
      ])
    };

    const putResponse = await request(app).put(`/playlists/${PLAYLIST_ID}`).send(updatedPlaylist);
    expect(putResponse.status).toBe(200);
    expect(putResponse.body.message).toBe("Playlist atualizada");

    const getResponse = await request(app).get(`/playlists/${PLAYLIST_ID}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.title).toBe("Updated Playlist");
  });

  test("DELETE /playlists/:playlistId - Deve deletar uma playlist", async () => {
    const deleteResponse = await request(app).delete(`/playlists/${PLAYLIST_ID}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe("Playlist deletada");

    const getResponse = await request(app).get(`/playlists/${PLAYLIST_ID}`);
    expect(getResponse.status).toBe(404);
  });
});
