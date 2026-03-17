import "../App.css";
import { useEffect, useState } from "react";
import { getAllEvents } from "../service/client.service";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await getAllEvents()
        .then((res) => setEvents(res))
        .catch((error) => console.log(error));
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2 className="text-center mb-5 mt-5">Checkout the Latest Events</h2>
      <div className="d-flex justify-content-around align-items-center">
        {events ? (
          events.map((event) => {
            return (
              <div key={event?.id} className="card-container">
                <div className="card" style={{ width: "30rem" }}>
                  <img
                    className="card-img-top"
                    src={event?.flyer}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event?.event}</h5>
                    <Link
                      to={`/events/${event?.event}`}
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

export default Events;
