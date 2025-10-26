
import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Meet = () => {
  const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");

  if (loading) {
    return <div className="container my-5"><p>Loading events...</p></div>;
  }

  if (error) {
    return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
  }

  const events = data?.event || [];

  return (
    <div className="container my-5">
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <Link to={`/events/env/${event._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
