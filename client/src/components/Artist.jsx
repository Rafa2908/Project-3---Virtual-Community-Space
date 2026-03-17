import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistByName } from "../service/client.service";
import { formatDate, formatTime } from "../utils/utils.js";

const Artist = () => {
  const { name } = useParams();

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        await getArtistByName(name)
          .then((res) => setArtist(res))
          .catch((error) => console.log(error));
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtist();
  }, [artist, name]);

  // console.log(JSON.stringify(artist?.time));

  return (
    <div className="artist-container">
      <div className="main-container">
        <img src={artist?.image} alt="" />
      </div>
      <div className="info-container">
        <h3>{artist?.name}</h3>
        <p>
          <i className="fa-solid fa-headphones text-warning"></i> Event:{" "}
          {artist?.event}
        </p>
        <p>
          <i className="fa-solid fa-location-dot text-primary"></i> Location:{" "}
          {artist?.location}
        </p>
        <p>
          <i className="fa-solid fa-calendar text-danger"></i> Date:{" "}
          {formatDate(artist?.date)}
        </p>
        <p>
          <i className="fa-solid fa-clock text-success"></i> Time:{" "}
          {formatTime(artist?.date, artist?.time)}
        </p>
      </div>
    </div>
  );
};

export default Artist;
