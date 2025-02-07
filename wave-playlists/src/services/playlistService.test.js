import { describe, it, expect, vi, beforeEach } from "vitest";
import playlistService from "./playlistService.js";
import db from "../database/db.js";

vi.mock("../database/db.js", () => {
  const mockDb = {
    prepare: vi.fn(),
  };
  return { default: mockDb };
});

describe("Playlist Service", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("deve retornar todas as playlists", () => {
    db.prepare.mockReturnValue({
      all: vi.fn().mockReturnValue([
        { playlistId: 1, title: "Rock", image: "rock.jpg", songs: '["song1", "song2"]' },
      ]),
    });

    const playlists = playlistService.getAllPlaylists();
    expect(playlists).toEqual([
      { playlistId: 1, title: "Rock", image: "rock.jpg", songs: ["song1", "song2"] },
    ]);
  });

  it("deve retornar uma playlist pelo ID", () => {
    db.prepare.mockReturnValue({
      get: vi.fn().mockReturnValue({ playlistId: 1, title: "Rock", image: "rock.jpg", songs: '["song1"]' }),
    });

    const playlist = playlistService.getPlaylistById(1);
    expect(playlist).toEqual({ playlistId: 1, title: "Rock", image: "rock.jpg", songs: ["song1"] });
  });

  it("deve criar uma nova playlist", () => {
    db.prepare
      .mockReturnValueOnce({ get: vi.fn().mockReturnValue({ nextPlaylistId: 2 }) }) // Para obter o próximo ID
      .mockReturnValueOnce({ run: vi.fn() }); // Para inserir a playlist

    const newPlaylist = playlistService.createPlaylist({ image: "pop.jpg", songs: ["song3"] });

    expect(newPlaylist).toEqual({
      playlistId: "2",
      title: "Playlist #2",
      image: "pop.jpg",
      songs: ["song3"],
    });
  });

  it("deve atualizar uma playlist", () => {
    const mockRun = vi.fn();
    db.prepare.mockReturnValue({ run: mockRun });

    playlistService.updatePlaylist(1, { title: "Pop Hits", image: "pop.jpg", songs: ["song3", "song4"] });

    expect(mockRun).toHaveBeenCalledWith("Pop Hits", "pop.jpg", JSON.stringify(["song3", "song4"]), 1);
  });

  it("deve deletar uma playlist", () => {
    const mockRun = vi.fn();
    db.prepare.mockReturnValue({ run: mockRun });

    const response = playlistService.deletePlaylist(1);

    expect(mockRun).toHaveBeenCalledWith(1);
    expect(response).toEqual({ message: "Playlist deletada" });
  });
});
