import request from "supertest";
import express from "express";
import albumRouter from "./album.js";
import { v4 as uuidv4 } from 'uuid';

const ALBUM_ID = uuidv4();

const app = express();
app.use(express.json());
app.use("/albums", albumRouter);

describe("Album API Endpoints", () => {
  test("POST /albums - Deve criar e verificar um novo álbum", async () => {
    const newAlbum = {
      albumId: ALBUM_ID,
      title: "GNX",
      artists: JSON.stringify([{ artistId: uuidv4(), name: "Kendrick Lamar" }]),
      genres: JSON.stringify([{ genreId: uuidv4(), name: "hip-hop" }, { genreId: uuidv4(), name: "rap" }]),
      images: JSON.stringify({ "lowQuality": "low.jpg", "highQuality": "high.jpg" }),
      songs: JSON.stringify([
        { "songId": uuidv4(), "title": "wacced out murals", "artists": [{ artistId: uuidv4(), name: "Kendrick Lamar" }], url: "music-2.mp3" },
        { "songId": uuidv4(), "title": "squabble up", "artists": [{ artistId: uuidv4(), name: "Kendrick Lamar" }], url: "music-3.mp3" }
      ])
    };

    const postResponse = await request(app).post("/albums").send(newAlbum);
    expect(postResponse.status).toBe(201);
    expect(postResponse.body.message).toBe("Álbum criado com sucesso");
    
    const getResponse = await request(app).get(`/albums/${newAlbum.albumId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.title).toBe("GNX");
  });

  test("GET /albums - Deve retornar lista de álbuns", async () => {
    const response = await request(app).get("/albums");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("PUT /albums/:albumId - Deve atualizar um álbum e verificar", async () => {
    const updatedAlbum = {
      title: "GNX - Updated",
      artists: JSON.stringify([{ artistId: uuidv4(), name: "Kendrick Lamar" }]),
      genres: JSON.stringify([{ genreId: uuidv4(), name: "hip-hop" }]),
      images: JSON.stringify({ "lowQuality": "low.jpg", "highQuality": "high.jpg" }),
      songs: JSON.stringify([])
    };

    const putResponse = await request(app).put(`/albums/${ALBUM_ID}`).send(updatedAlbum);
    expect(putResponse.status).toBe(200);
    expect(putResponse.body.message).toBe("Álbum atualizado");

    const getResponse = await request(app).get(`/albums/${ALBUM_ID}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.title).toBe("GNX - Updated");
  });

  test("DELETE /albums/:albumId - Deve deletar um álbum e verificar", async () => {
    const deleteResponse = await request(app).delete(`/albums/${ALBUM_ID}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe("Álbum deletado");

    const getResponse = await request(app).get(`/albums/${ALBUM_ID}`);
    expect(getResponse.status).toBe(404);
  });
});
