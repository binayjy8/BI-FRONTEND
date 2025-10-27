import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import "bootstrap/dist/css/bootstrap.min.css";

const EventDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://bi-backend-beige.vercel.app/events/env/${id}`
  );

  if (loading)
    return (
      <div className="container my-5 text-center">
        <p>Loading event details...</p>
      </div>
    );
  if (error)
    return (
      <div className="container my-5 text-center">
        <p>Error: {error.message}</p>
      </div>
    );

  const event = data?.event;
  if (!event)
    return (
      <div className="container my-5 text-center">
        <p>No event found.</p>
      </div>
    );

  const eventDate = new Date(event.dateTime);
  const formattedDate = eventDate.toDateString();
  const formattedTime = eventDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold" style={{ color: "#f64060" }}>
          Meetup
        </h3>
        <Link to="/" className="btn btn-outline-danger">
          ← Back to Events
        </Link>
      </div>

      {/* Title + Info */}
      <div className="row g-5">
        {/* Left Column */}
        <div className="col-lg-8">
          <h2 className="fw-bold">{event.title}</h2>
          <p className="text-muted mb-4">
            Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
          </p>

          <img
            src={event.imageUrl}
            alt={event.title}
            className="img-fluid rounded-3 mb-4"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
            }}
          />

          {/* Description */}
          <h5 className="fw-bold">Details:</h5>
          <p className="text-secondary" style={{ lineHeight: "1.7" }}>
            {event.description ||
              "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by industry experts. This event will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, located at 789 Marketing Avenue, City. Join leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they explore the latest strategies in digital marketing, analytics, and content creation. Designed for professionals and students alike, this session offers insights into the evolving marketing landscape, hands-on experiences, and opportunities to network with peers. The dress code is smart casual, and the event is open to individuals aged 18 and above with a ticket price of ₹3,000."}
          </p>

          {/* Additional Info */}
          <div className="mt-4">
            <h5 className="fw-bold">Additional Information:</h5>
            <p>
              <strong>Dress Code:</strong> Smart casual
            </p>
            <p>
              <strong>Age Restrictions:</strong> 18 and above
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <h5 className="fw-bold mb-2">Event Tags:</h5>
            <div className="d-flex flex-wrap gap-2">
              {(event.tags || ["marketing", "digital"]).map((tag, i) => (
                <span
                  key={i}
                  className="badge px-3 py-2"
                  style={{
                    backgroundColor: "#f64060",
                    color: "white",
                    borderRadius: "10px",
                    fontWeight: "500",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          <div
            className="p-4 rounded-3 shadow-sm bg-white mb-4"
            style={{ border: "1px solid #eee" }}
          >
            <p className="mb-2">
              🗓️ {formattedDate} • {formattedTime}
            </p>
            <p className="mb-2">📍 {event.location || "Marketing City, 789 Avenue"}</p>
            <p className="fw-bold fs-5 mb-0">₹ {event.price || 3000}</p>
          </div>

          {/* Speakers */}
          <h6 className="fw-bold mb-3">Speakers:</h6>
          <div className="d-flex flex-wrap gap-3">
            {(event.speakers || [
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                image: "https://i.pravatar.cc/100?img=47",
              },
              {
                name: "Michael Brown",
                role: "SEO Specialist",
                image: "https://i.pravatar.cc/100?img=49",
              },
            ]).map((speaker, i) => (
              <div
                key={i}
                className="text-center p-3 bg-white rounded-3 shadow-sm"
                style={{ width: "140px" }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-circle mb-2"
                  width="70"
                  height="70"
                />
                <p className="fw-bold mb-0">{speaker.name}</p>
                <p className="text-muted small">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;



