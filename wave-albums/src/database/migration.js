import db from "./db.js";

const albums = [
  {
    "albumId": "1",
    "title": "GNX",
    "artists": [
      { "artistId": "1", "name": "Kendrick Lamar" }
    ],
    "genres": [{"genreId": "1", "name": "hip-hop" }, {"genreId": "2", "name": "rap" }],
    "images": { 
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/c2/cc/50c2cc95-3658-9417-0d4b-831abde44ba1/24UM1IM28978.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music211/v4/50/c2/cc/50c2cc95-3658-9417-0d4b-831abde44ba1/24UM1IM28978.rgb.jpg"
    },
    "songs": [
      { "songId": "1", "title": "wacced out murals", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-2.mp3" },
      { "songId": "3", "title": "squabble up", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-3.mp3" },
      { "songId": "4", "title": "luther (with sza)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "3", "name": "SZA" }], "url": "assets/audios/music-4.mp3" },
      { "songId": "5", "title": "man at the garden", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-5.mp3" },
      { "songId": "6", "title": "hey now (featuring dody6)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "4", "name": "Dody6" }], "url": "assets/audios/music-6.mp3" },
      { "songId": "7", "title": "reincarnated", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-7.mp3" },
      { "songId": "8", "title": "tv off (featuring lefty gunplay)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "5", "name": "Lefty Gunplay" }], "url": "assets/audios/music-8.mp3" },
      { "songId": "9", "title": "dodger blue (featuring wallie the sensei, siete7x, and roddy ricch)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "6", "name": "Wallie the Sensei" }, { "artistId": "7", "name": "Siete7x" }, { "artistId": "8", "name": "Roddy Ricch" }], "url": "assets/audios/music-9.mp3" },
      { "songId": "10", "title": "peekaboo (featuring azchike)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "9", "name": "AzChike" }], "url": "assets/audios/music-10.mp3" },
      { "songId": "11", "title": "heart pt. 6", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-11.mp3" },
      { "songId": "12", "title": "gnx (featuring hitta j3, youngthreat, and peysoh)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "10", "name": "Hitta J3" }, { "artistId": "11", "name": "YoungThreat" }, { "artistId": "12", "name": "Peysoh" }], "url": "assets/audios/music-12.mp3" },
      { "songId": "13", "title": "gloria (with sza)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "3", "name": "SZA" }], "url": "assets/audios/music-13.mp3" }
    ]
  },
  {
    "albumId": "2",
    "title": "good kid, m.A.A.d city",
    "artists": [
      { "artistId": "1", "name": "Kendrick Lamar" }
    ],
    "genres": [{"genreId": "1", "name": "hip-hop" }, {"genreId": "2", "name": "rap" }],
    "images": { 
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ca/5b/c0/ca5bc0b3-d81d-cc6c-0d19-54b9eedb6dbd/12UMGIM52990.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music122/v4/ca/5b/c0/ca5bc0b3-d81d-cc6c-0d19-54b9eedb6dbd/12UMGIM52990.rgb.jpg"
    },
    "songs": [
      { "songId": "14", "title": "Sherane a.k.a Master Splinter's Daughter", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-1.mp3" },
      { "songId": "15", "title": "Bitch, Don't Kill My Vibe", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-2.mp3" },
      { "songId": "16", "title": "Money Trees (featuring Jay Rock)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "2", "name": "Jay Rock" }], "url": "assets/audios/music-3.mp3" },
      { "songId": "17", "title": "Poetic Justice (featuring Drake)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "13", "name": "Drake" }], "url": "assets/audios/music-4.mp3" },
      { "songId": "18", "title": "good kid", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-5.mp3" },
      { "songId": "19", "title": "m.A.A.d city", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-6.mp3" },
      { "songId": "20", "title": "Swimming Pools (Drank)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-7.mp3" },
      { "songId": "21", "title": "Sing About Me, I'm Dying of Thirst", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-8.mp3" },
      { "songId": "22", "title": "Real", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-9.mp3" },
      { "songId": "23", "title": "Compton (featuring Dr. Dre)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "14", "name": "Dr. Dre" }], "url": "assets/audios/music-10.mp3" }
    ]
  },
  {
    "albumId": "3",
    "title": "To Pimp a Butterfly",
    "artists": [
      { "artistId": "1", "name": "Kendrick Lamar" }
    ],
    "genres": [{"genreId": "1", "name": "hip-hop" }, {"genreId": "3", "name": "jazz" }, {"genreId": "4", "name": "soul" }],
    "images": { 
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0d/ae/61/0dae6140-d4af-d0df-eae0-3c92eb392a33/15UMGIM11922.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music112/v4/0d/ae/61/0dae6140-d4af-d0df-eae0-3c92eb392a33/15UMGIM11922.rgb.jpg"
    },
    "songs": [
      { "songId": "24", "title": "Wesley's Theory (featuring George Clinton and Thundercat)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "15", "name": "George Clinton" }, { "artistId": "16", "name": "Thundercat" }], "url": "assets/audios/music-1.mp3" },
      { "songId": "25", "title": "For Free? (Interlude)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-2.mp3" },
      { "songId": "26", "title": "King Kunta", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-3.mp3" },
      { "songId": "27", "title": "Institutionalized (featuring Bilal, Thundercat, and Anna Wise)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "17", "name": "Bilal" }, { "artistId": "16", "name": "Thundercat" }, { "artistId": "18", "name": "Anna Wise" }], "url": "assets/audios/music-4.mp3" },
      { "songId": "28", "title": "These Walls (featuring Bilal, Thundercat, and Anastasia)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "17", "name": "Bilal" }, { "artistId": "16", "name": "Thundercat" }, { "artistId": "19", "name": "Anastasia" }], "url": "assets/audios/music-5.mp3" },
      { "songId": "29", "title": "u", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-6.mp3" },
      { "songId": "30", "title": "Alright", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-7.mp3" },
      { "songId": "31", "title": "For Sale? (Interlude)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-8.mp3" },
      { "songId": "32", "title": "Momma", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-9.mp3" },
      { "songId": "33", "title": "Hood Politics", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-10.mp3" }
    ]
  },
  {
    "albumId": "4",
    "title": "DAMN.",
    "artists": [
      { "artistId": "1", "name": "Kendrick Lamar" }
    ],
    "genres": [{"genreId": "1", "name": "hip-hop" }, {"genreId": "2", "name": "rap" }],
    "images": { 
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/86/c9/bb/86c9bb30-fe3d-442e-33c1-c106c4d23705/17UMGIM88776.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music112/v4/86/c9/bb/86c9bb30-fe3d-442e-33c1-c106c4d23705/17UMGIM88776.rgb.jpg"
    },
    "songs": [
      { "songId": "34", "title": "BLOOD.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-1.mp3" },
      { "songId": "35", "title": "DNA.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-2.mp3" },
      { "songId": "36", "title": "YAH.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-3.mp3" },
      { "songId": "37", "title": "ELEMENT.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-4.mp3" },
      { "songId": "38", "title": "FEEL.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-5.mp3" },
      { "songId": "39", "title": "LOYALTY. (featuring Rihanna)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "20", "name": "Rihanna" }], "url": "assets/audios/music-6.mp3" },
      { "songId": "40", "title": "PRIDE.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-7.mp3" },
      { "songId": "41", "title": "HUMBLE.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-8.mp3" },
      { "songId": "42", "title": "LUST.", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }], "url": "assets/audios/music-9.mp3" },
      { "songId": "43", "title": "XXX. (featuring U2)", "artists": [{ "artistId": "1", "name": "Kendrick Lamar" }, { "artistId": "21", "name": "U2" }], "url": "assets/audios/music-10.mp3" }
    ]
  },
  {
    "albumId": "5",
    "title": "The College Dropout",
    "artists": [
      { "artistId": "15", "name": "Kanye West" }
    ],
    "genres": [
      { "genreId": "1", "name": "hip-hop" }
    ],
    "images": {
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/73/b1/0d73b181-2716-f7a6-a340-0a3f81eacfb9/06UMGIM15686.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music116/v4/0d/73/b1/0d73b181-2716-f7a6-a340-0a3f81eacfb9/06UMGIM15686.rgb.jpg"
    },
    "songs": [
      { "songId": "25", "title": "Intro", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "26", "title": "We Don't Care", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "27", "title": "Graduation Day", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "28", "title": "All Falls Down", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "16", "name": "Syleena Johnson" }], "url": "" },
      { "songId": "29", "title": "I'll Fly Away", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "30", "title": "Spaceship", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "17", "name": "GLC" }, { "artistId": "18", "name": "Consequence" }], "url": "" },
      { "songId": "31", "title": "Jesus Walks", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "32", "title": "Never Let Me Down", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "19", "name": "Jay-Z" }, { "artistId": "20", "name": "J. Ivy" }], "url": "" },
      { "songId": "33", "title": "Get Em High", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "21", "name": "Talib Kweli" }, { "artistId": "22", "name": "Common" }], "url": "" },
      { "songId": "34", "title": "Workout Plan", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "35", "title": "The New Workout Plan", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "36", "title": "Slow Jamz", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "23", "name": "Twista" }, { "artistId": "24", "name": "Jamie Foxx" }], "url": "" },
      { "songId": "37", "title": "Breathe In Breathe Out", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "25", "name": "Ludacris" }], "url": "" },
      { "songId": "38", "title": "School Spirit", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "39", "title": "Two Words", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "26", "name": "Mos Def" }, { "artistId": "27", "name": "Freeway" }], "url": "" },
      { "songId": "40", "title": "Through the Wire", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "41", "title": "Family Business", "artists": [{ "artistId": "15", "name": "Kanye West" }], "url": "" },
      { "songId": "42", "title": "Last Call", "artists": [{ "artistId": "15", "name": "Kanye West" }, { "artistId": "28", "name": "Evidence" }, { "artistId": "29", "name": "Porse" }], "url": "" }
    ]
  },
  {
    "albumId": "6",
    "title": "The Misfits",
    "artists": [
      { "artistId": "16", "name": "Misfits" }
    ],
    "genres": [	
      { "genreId": "5", "name": "Punk rock" },
      { "genreId": "6", "name": "Rock" }
    ],
    "images": {
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/25/de/22/25de22f3-98ec-8dcb-c5fb-33c4706051d2/20UMGIM05660.rgb.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music124/v4/25/de/22/25de22f3-98ec-8dcb-c5fb-33c4706051d2/20UMGIM05660.rgb.jpg"
    },
    "songs": [
      { "songId": "43", "title": "She", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "44", "title": "Hollywood Babylon", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "45", "title": "Horror Business", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "46", "title": "Teenagers from Mars", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "47", "title": "Night of the Living Dead", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "48", "title": "Where Eagles Dare", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "49", "title": "Vampira", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "50", "title": "I Turned into a Martian", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "51", "title": "Skulls", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "52", "title": "London Dungeon", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "53", "title": "Ghouls Night Out", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "54", "title": "Astro Zombies", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "55", "title": "Mommy, Can I Go Out and Kill Tonight", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "56", "title": "Die, Die My Darling", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "57", "title": "Cough/Cool", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "58", "title": "Children in Heat", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "59", "title": "Horror Hotel", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "60", "title": "Halloween", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "61", "title": "Halloween II", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "62", "title": "Hate Breeders", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "63", "title": "Braineaters", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "64", "title": "Nike-A-Go-Go", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "65", "title": "Devil's Whorehouse", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "66", "title": "Mephisto Waltz", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "67", "title": "Rat Fink", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" },
      { "songId": "68", "title": "We Bite", "artists": [{ "artistId": "16", "name": "Misfits" }], "url": "" }
    ]
  },
  {
    "albumId": "7",
    "title": "Is This It",
    "artists": [
      { "artistId": "17", "name": "The Strokes" }
    ],
    "genres": [	
      { "genreId": "6", "name": "Rock" },
      { "genreId": "7", "name": "Indie rock" }
    ],
    "images": {
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/ea/04/d4/ea04d45d-6f5d-ede6-fb64-71f3e6a6e62f/dj.ojkzzidd.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Features115/v4/ea/04/d4/ea04d45d-6f5d-ede6-fb64-71f3e6a6e62f/dj.ojkzzidd.jpg"
    },
    "songs": [
      { "songId": "69", "title": "Is This It", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "70", "title": "The Modern Age", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "71", "title": "Soma", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "72", "title": "Barely Legal", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "73", "title": "Someday", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "74", "title": "Alone, Together", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "75", "title": "Last Nite", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "76", "title": "Hard to Explain", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "77", "title": "New York City Cops", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "78", "title": "Trying Your Luck", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "79", "title": "Take It or Leave It", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" }
    ]
  },
  {
    "albumId": "8",
    "title": "The New Abnormal",
    "artists": [
      { "artistId": "17", "name": "The Strokes" }
    ],
    "genres": [	
      { "genreId": "6", "name": "Rock" },
      { "genreId": "7", "name": "Indie rock" },
      { "genreId": "8", "name": "New Wave" }
    ],
    "images": {
      "lowQuality": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/a6/ff/62a6ff2a-95c9-5302-31f4-2dcca9e40323/886448281085.jpg/600x600bb.jpg",
      "highQuality": "https://a5.mzstatic.com/us/r1000/0/Music115/v4/62/a6/ff/62a6ff2a-95c9-5302-31f4-2dcca9e40323/886448281085.jpg"
    },
    "songs": [
      { "songId": "80", "title": "The Adults are Talking", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "81", "title": "Selfless", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "82", "title": "Brooklyn Bridge to Chorus", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "83", "title": "Bad Decisions", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "84", "title": "Eternal Summer", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "85", "title": "At the Door", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "86", "title": "Why Sundays Are So Depressing", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "87", "title": "Not the Same Anymore", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" },
      { "songId": "88", "title": "Ode to the Mets", "artists": [{ "artistId": "17", "name": "The Strokes" }], "url": "" }
    ]
  }
]

db.exec(`
  CREATE TABLE IF NOT EXISTS albums (
    albumId TEXT PRIMARY KEY,
    title   TEXT NOT NULL,
    artists TEXT NOT NULL,
    genres  TEXT NOT NULL,
    images  TEXT NOT NULL,
    songs   TEXT NOT NULL
  );
  `
);

const insertAlbum = db.prepare(`INSERT INTO albums (albumId, title, artists, genres, images, songs) VALUES (?, ?, ?, ?, ?, ?)`);

for (const album of albums) {
  insertAlbum.run(
    album.albumId, 
    album.title, 
    JSON.stringify(album.artists), 
    JSON.stringify(album.genres), 
    JSON.stringify(album.images), 
    JSON.stringify(album.songs)
  );
}

console.log("Dados inseridos com sucesso!");