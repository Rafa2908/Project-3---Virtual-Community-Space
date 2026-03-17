import { client } from "../config/database.js";

const artists = [
  {
    name: "Chris Brown",
    event: "Live Jam",
    location: "SoFi Stadium, Los Angeles, CA",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710237/vlrfbmt8psgwbbgkf0ly.png",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Chris_Brown_-_11_Deluxe.jpg/250px-Chris_Brown_-_11_Deluxe.jpg",
    date: "2026-06-15",
    time: "8:00 PM",
  },
  {
    name: "Jhené Aiko",
    event: "Soul Sessions",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710318/kk7shycrrffiwc03cokb.png",
    location: "Hollywood Bowl, Los Angeles, CA",
    image: "https://i.ebayimg.com/images/g/P1MAAOSwPRpksbyP/s-l1200.jpg",
    date: "2026-07-04",
    time: "7:30 PM",
  },
  {
    name: "Maeta",
    event: "Vibe Nights",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710372/krxfiuylrqbi3teeu3fe.png",
    location: "The Roxy, West Hollywood, CA",
    image:
      "https://images.genius.com/7b966a495195189f280520fac40d43d8.300x300x1.png",
    date: "2026-06-20",
    time: "9:00 PM",
  },
  {
    name: "Summer Walker",
    event: "Live Jam",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710237/vlrfbmt8psgwbbgkf0ly.png",
    location: "State Farm Arena, Atlanta, GA",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Summer_Walker_-_Still_Over_It.png",
    date: "2026-06-15",
    time: "7:00 PM",
  },
  {
    name: "Bryson Tiller",
    event: "Soul Sessions",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710318/kk7shycrrffiwc03cokb.png",
    location: "Barclays Center, Brooklyn, NY",
    image:
      "https://external-preview.redd.it/fresh-album-bryson-tiller-bryson-tiller-v0-gt-T7RQyKATSDwFyF-8pzsY9V0iVT8HQFB0dc3fMjmo.jpg?auto=webp&s=fb54690fee1d025c89b32d9abbca593faab6d995",
    date: "2026-07-04",
    time: "8:30 PM",
  },
  {
    name: "SZA",
    event: "Vibe Nights",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710372/krxfiuylrqbi3teeu3fe.png",
    location: "Madison Square Garden, New York, NY",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png",
    date: "2026-06-20",
    time: "8:00 PM",
  },
  {
    name: "Giveon",
    event: "Live Jam",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710237/vlrfbmt8psgwbbgkf0ly.png",
    location: "United Center, Chicago, IL",
    image:
      "https://m.media-amazon.com/images/I/61i2dcmFWSL._UF1000,1000_QL80_.jpg",
    date: "2026-06-15",
    time: "6:30 PM",
  },
  {
    name: "Trey Songz",
    event: "Soul Sessions",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710318/kk7shycrrffiwc03cokb.png",
    location: "The Fillmore, Miami Beach, FL",
    image:
      "https://fastly-s3.allmusic.com/artist/mn0000128143/600/t9FAHj9l-3IuFbPcvtbAqB_TZlp6n_cq-Emr2zx15tU=.jpg",
    date: "2026-07-04",
    time: "6:00 PM",
  },
  {
    name: "Tory Lanez",
    event: "Vibe Nights",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710372/krxfiuylrqbi3teeu3fe.png",
    location: "The Paramount, Seattle, WA",
    image:
      "https://bookingagentinfo.com/wp-content/uploads/2023/06/Tory-Lanez-1.png",
    date: "2026-06-20",
    time: "7:00 PM",
  },
  {
    name: "H.E.R.",
    event: "Live Jam",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710237/vlrfbmt8psgwbbgkf0ly.png",
    location: "Chase Center, San Francisco, CA",
    image: "https://iscale.iheart.com/catalog/artist/31653802",
    date: "2026-06-15",
    time: "9:30 PM",
  },
  {
    name: "Khelani",
    event: "Soul Sessions",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710318/kk7shycrrffiwc03cokb.png",
    location: "Scotiabank Arena, Toronto, ON",
    image:
      "https://www.euphoriazine.com/wp-content/uploads/2025/11/kehlani.jpg",
    date: "2026-07-04",
    time: "9:00 PM",
  },
  {
    name: "Jacquees",
    event: "Vibe Nights",
    flyer:
      "https://res.cloudinary.com/dubjse9qs/image/upload/v1773710372/krxfiuylrqbi3teeu3fe.png",
    location: "Red Rocks Amphitheatre, Denver, CO",
    image:
      "https://static.wikitide.net/excellentmusicwiki/thumb/e/e9/Jacquees.jpg/330px-Jacquees.jpg",
    date: "2026-06-20",
    time: "10:00 PM",
  },
];

export const createEventTable = () => {
  try {
    const res = client.query(`
      CREATE TABLE IF NOT EXISTS events
      (
      id SERIAL PRIMARY KEY,
      name varchar(30) NOT NULL,
      event varchar(25) NOT NULL,
      flyer text NOT NULL,
      location varchar(256) NOT NULL,
      image text NOT NULL,
      date date NOT NULL,
      time time NOT NULL
      )
      `);

    if (res) {
      console.log("Table created successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export const insertEvents = async () => {
  try {
    for (let i = 0; i < artists.length; i++) {
      await client.query(
        `
        INSERT INTO events(name, event, flyer, location, image, date, time)
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [
          artists[i].name,
          artists[i].event,
          artists[i].flyer,
          artists[i].location,
          artists[i].image,
          artists[i].date,
          artists[i].time,
        ],
      );
    }
    console.log("Data inserted correctly");
  } catch (error) {
    console.error(error);
  }
};
