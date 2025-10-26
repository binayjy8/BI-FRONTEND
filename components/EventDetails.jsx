import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://bi-backend-beige.vercel.app/events/env/${id}`);

  if (loading) return <div className="container my-5"><p>Loading event details...</p></div>;
  if (error) return <div className="container my-5"><p>Error: {error.message}</p></div>;

  const event = data?.event;
  if (!event) return <div className="container my-5"><p>No event found.</p></div>;

  const formattedDate = new Date(event.dateTime).toLocaleDateString();
  const formattedTime = new Date(event.dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="card-img-top img-fluid"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title mb-3">{event.title}</h2>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Type:</strong> {event.eventType}
            </li>
            <li className="list-group-item">
              <strong>Category:</strong> {event.category}
            </li>
            <li className="list-group-item">
              <strong>Date:</strong> {formattedDate}
            </li>
            <li className="list-group-item">
              <strong>Time:</strong> {formattedTime}
            </li>
            <li className="list-group-item">
              <strong>Location:</strong> {event.location}
            </li>
          </ul>

          <Link to="/" className="btn btn-primary mt-3">
            ← Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
