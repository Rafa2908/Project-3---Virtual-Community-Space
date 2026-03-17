import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArtistsByEvent } from "../service/client.service";

const Event = () => {
  const { eventName } = useParams();
  const [event, setEvent] = useState([]);

  console.log(eventName);

  useEffect(() => {
    const fetchEvent = async () => {
      await getArtistsByEvent(eventName)
        .then((res) => setEvent(res))
        .catch((error) => console.log(error));
    };
    fetchEvent();
  }, [eventName]);

  return (
    <div>
      <h2 className="text-center mb-5 mt-5">
        Checkout the Artist coming to {eventName}
      </h2>
      <div className="d-flex justify-content-around align-items-center">
        {event ? (
          event.map((artist) => {
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
          <h2>No Events Available</h2>
        )}
      </div>
    </div>
  );
};

export default Event;
