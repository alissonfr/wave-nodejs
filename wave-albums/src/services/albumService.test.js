import { describe, it, expect, vi, beforeEach } from "vitest";
import albumService from "../services/albumService.js";
import db from "../database/db.js";

vi.mock("../database/db.js", () => {
  const mockDb = {
    prepare: vi.fn(),
  };
  return { default: mockDb };
});

describe("Album Service", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("deve retornar todos os álbuns", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        {
          albumId: 1,
          title: "Rock Classics",
          artists: '["Queen"]',
          genres: '[{"genreId": 1, "name": "Rock"}]',
          images: '["image1.jpg"]',
          songs: '[{"title": "Bohemian Rhapsody"}]'
        }
      ]),
    });

    const albums = albumService.getAllAlbums();
    expect(albums).toEqual([
      {
        albumId: 1,
        title: "Rock Classics",
        artists: ["Queen"],
        genres: [{ genreId: 1, name: "Rock" }],
        images: ["image1.jpg"],
        songs: [{ title: "Bohemian Rhapsody" }],
      }
    ]);
  });

  it("deve retornar álbuns de um gênero específico", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        {
          albumId: 1,
          title: "Rock Classics",
          artists: '["Queen"]',
          genres: '[{"genreId": 1, "name": "Rock"}]',
          images: '["image1.jpg"]',
          songs: '[{"title": "Bohemian Rhapsody"}]'
        },
        {
          albumId: 2,
          title: "Pop Hits",
          artists: '["Madonna"]',
          genres: '[{"genreId": 2, "name": "Pop"}]',
          images: '["image2.jpg"]',
          songs: '[{"title": "Like a Virgin"}]'
        }
      ]),
    });

    const rockAlbums = albumService.getAllAlbums(1);
    expect(rockAlbums.length).toBe(1);
    expect(rockAlbums[0].title).toBe("Rock Classics");
  });

  it("deve retornar álbuns em alta", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        { albumId: 1, title: "Album 1", artists: "[]", genres: "[]", images: "[]", songs: "[]" },
        { albumId: 2, title: "Album 2", artists: "[]", genres: "[]", images: "[]", songs: "[]" }
      ]),
    });

    const trending = albumService.getTrendingAlbums();
    expect(trending.length).toBe(8);
    expect(trending[0].albums.length).toBeGreaterThan(0);
  });

  it("deve retornar os gêneros em alta", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        { albumId: 1, genres: '[{"genreId": 1, "name": "Rock"}, {"genreId": 2, "name": "Pop"}]' },
        { albumId: 2, genres: '[{"genreId": 1, "name": "Rock"}]' }
      ]),
    });

    const trendingGenres = albumService.getTrendingGenres();
    expect(trendingGenres.length).toBe(2);
    expect(trendingGenres).toEqual([
      { genreId: 1, name: "Rock" },
      { genreId: 2, name: "Pop" }
    ]);
  });

  it("deve buscar músicas pelo título", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        { songs: '[{"title": "Song A"}, {"title": "Song B"}]' },
        { songs: '[{"title": "Song C"}]' }
      ]),
    });

    const songs = albumService.getSongs("Song A");
    expect(songs).toEqual([{ title: "Song A" }]);
  });

  it("deve buscar um álbum pelo ID", () => {
    db.prepare.mockReturnValue({
      get: vi.fn().mockReturnValue({
        albumId: 1,
        title: "Rock Classics",
        artists: '["Queen"]',
        genres: '[{"genreId": 1, "name": "Rock"}]',
        images: '["image1.jpg"]',
        songs: '[{"title": "Bohemian Rhapsody"}]'
      }),
    });

    const album = albumService.getAlbumById(1);
    expect(album).toEqual({
      albumId: 1,
      title: "Rock Classics",
      artists: ["Queen"],
      genres: [{ genreId: 1, name: "Rock" }],
      images: ["image1.jpg"],
      songs: [{ title: "Bohemian Rhapsody" }]
    });
  });

  it("deve criar um novo álbum", () => {
    const mockRun = vi.fn();
    db.prepare.mockReturnValue({ run: mockRun });

    const newAlbum = {
      albumId: 3,
      title: "Jazz Vibes",
      artists: ["Miles Davis"],
      genres: [{ genreId: 3, name: "Jazz" }],
      images: ["image3.jpg"],
      songs: [{ title: "So What" }]
    };

    const response = albumService.createAlbum(newAlbum);
    expect(mockRun).toHaveBeenCalled();
    expect(response).toEqual({ message: "Álbum criado com sucesso" });
  });

  it("deve atualizar um álbum", () => {
    const mockRun = vi.fn();
    db.prepare.mockReturnValue({ run: mockRun });

    const updatedAlbum = {
      title: "Jazz Vibes Remastered",
      artists: ["Miles Davis"],
      genres: [{ genreId: 3, name: "Jazz" }],
      images: ["image3.jpg"],
      songs: [{ title: "So What" }]
    };

    const response = albumService.updateAlbum(3, updatedAlbum);
    expect(mockRun).toHaveBeenCalled();
    expect(response).toEqual({ message: "Álbum atualizado" });
  });

  it("deve deletar um álbum", () => {
    const mockRun = vi.fn();
    db.prepare.mockReturnValue({ run: mockRun });

    const response = albumService.deleteAlbum(3);
    expect(mockRun).toHaveBeenCalledWith(3);
    expect(response).toEqual({ message: "Álbum deletado" });
  });
});
