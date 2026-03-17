import React, { useEffect, useState } from "react";
import { getAllArtist } from "../service/client.service";
import { Link } from "react-router-dom";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      await getAllArtist()
        .then((res) => setArtists(res))
        .catch((error) => console.error(error));
    };

    fetchArtists();
  }, []);

  return (
    <div className="artists-div">
      <h3 className="text-center mb-2">Next Stop: Live & Unforgettable</h3>
      <div className="artists-container">
        {artists ? (
          artists.map((artist) => {
            return (
              <div key={artist?.id} className="card-container mt-5">
                <div className="card" style={{ width: "20rem" }}>
                  <img
                    className="card-img-top card-image"
                    src={artist?.image}
                    alt="Card image cap"
                    style={{ height: "320px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{artist?.name}</h5>
                    <Link
                      to={`/artists/${artist.name}`}
                      className="btn btn-primary"
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Artists Available</h2>
        )}
      </div>
    </div>
  );
};

export default Artists;
