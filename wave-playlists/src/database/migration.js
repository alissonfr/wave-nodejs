import db from "./db.js";

const playlists = [
  {
    "playlistId": "1",
    "title": "Playlist #1",
    "image": "assets/images/playlist.png",
    "songs": [
      { "songId": "1000", "title": "Juicy", "artists": [{ "artistId": "13", "name": "The Notorious B.I.G." }], "url": "assets/audios/classics/juicy.mp3" },
      { "songId": "1001", "title": "N.Y. State of Mind", "artists": [{ "artistId": "14", "name": "Nas" }], "url": "assets/audios/classics/ny_state_of_mind.mp3" },
      { "songId": "1002", "title": "C.R.E.A.M.", "artists": [{ "artistId": "15", "name": "Wu-Tang Clan" }], "url": "assets/audios/classics/cream.mp3" },
      { "songId": "1003", "title": "Straight Outta Compton", "artists": [{ "artistId": "16", "name": "N.W.A" }], "url": "assets/audios/classics/straight_outta_compton.mp3" },
      { "songId": "1004", "title": "California Love", "artists": [{ "artistId": "17", "name": "2Pac" }, { "artistId": "18", "name": "Dr. Dre" }], "url": "assets/audios/classics/california_love.mp3" },
      { "songId": "1005", "title": "Lose Yourself", "artists": [{ "artistId": "19", "name": "Eminem" }], "url": "assets/audios/classics/lose_yourself.mp3" },
      { "songId": "1006", "title": "It Was a Good Day", "artists": [{ "artistId": "20", "name": "Ice Cube" }], "url": "assets/audios/classics/it_was_a_good_day.mp3" },
      { "songId": "1007", "title": "Rapper's Delight", "artists": [{ "artistId": "21", "name": "The Sugarhill Gang" }], "url": "assets/audios/classics/rappers_delight.mp3" },
      { "songId": "1008", "title": "Paid in Full", "artists": [{ "artistId": "22", "name": "Eric B. & Rakim" }], "url": "assets/audios/classics/paid_in_full.mp3" },
      { "songId": "1009", "title": "The Message", "artists": [{ "artistId": "23", "name": "Grandmaster Flash & The Furious Five" }], "url": "assets/audios/classics/the_message.mp3" },
      { "songId": "1010", "title": "Ms. Jackson", "artists": [{ "artistId": "24", "name": "OutKast" }], "url": "assets/audios/classics/ms_jackson.mp3" },
      { "songId": "1011", "title": "Hip Hop Hooray", "artists": [{ "artistId": "25", "name": "Naughty By Nature" }], "url": "assets/audios/classics/hip_hop_hooray.mp3" },
      { "songId": "1012", "title": "Push It", "artists": [{ "artistId": "26", "name": "Salt-N-Pepa" }], "url": "assets/audios/classics/push_it.mp3" },
      { "songId": "1013", "title": "Gin and Juice", "artists": [{ "artistId": "27", "name": "Snoop Dogg" }], "url": "assets/audios/classics/gin_and_juice.mp3" },
      { "songId": "1014", "title": "Fight the Power", "artists": [{ "artistId": "28", "name": "Public Enemy" }], "url": "assets/audios/classics/fight_the_power.mp3" },
      { "songId": "1015", "title": "Can't Touch This", "artists": [{ "artistId": "29", "name": "MC Hammer" }], "url": "assets/audios/classics/cant_touch_this.mp3" },
      { "songId": "1016", "title": "Big Pimpin'", "artists": [{ "artistId": "30", "name": "JAY-Z" }], "url": "assets/audios/classics/big_pimpin.mp3" },
      { "songId": "1017", "title": "Stan", "artists": [{ "artistId": "19", "name": "Eminem" }], "url": "assets/audios/classics/stan.mp3" },
      { "songId": "1018", "title": "Hard Knock Life", "artists": [{ "artistId": "30", "name": "JAY-Z" }], "url": "assets/audios/classics/hard_knock_life.mp3" },
      { "songId": "1019", "title": "The Real Slim Shady", "artists": [{ "artistId": "19", "name": "Eminem" }], "url": "assets/audios/classics/the_real_slim_shady.mp3" },
      { "songId": "1020", "title": "Dear Mama", "artists": [{ "artistId": "17", "name": "2Pac" }], "url": "assets/audios/classics/dear_mama.mp3" }
    ]
  }
]

db.exec(`
  CREATE TABLE IF NOT EXISTS playlists (
    playlistId TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    songs TEXT NOT NULL
  );
  `
);

const insertPlaylist = db.prepare(`INSERT INTO playlists (playlistId, title, image, songs) VALUES (?, ?, ?, ?)`);

for (const playlist of playlists) {
  insertPlaylist.run(
    playlist.playlistId, 
    playlist.title, 
    playlist.image, 
    JSON.stringify(playlist.songs)
  );
}

console.log("Dados inseridos com sucesso!");