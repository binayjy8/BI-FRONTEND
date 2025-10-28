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
      <div className="text-center my-5">
        <p>Loading event details...</p>
      </div>
    );
  if (error)
    return (
      <div className="text-center my-5">
        <p>Error: {error.message}</p>
      </div>
    );

  const event = data?.event;
  if (!event)
    return (
      <div className="text-center my-5">
        <p>No event found.</p>
      </div>
    );

  const eventDate = new Date(event.dateTime);
  const formattedDate = eventDate.toDateString();

  
  const startTime = eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const endTime = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000).toLocaleTimeString([], {
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

      <div className="row g-5">
  
        <div className="col-lg-8">
          <h2 className="fw-bold">{event.title}</h2>
          <p className="text-muted mb-4">
            Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
          </p>

          <img
            src={event.imageUrl}
            alt={event.title}
            className="img-fluid rounded-3 mb-4"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />

          <h5 className="fw-bold">Details:</h5>
          <p className="text-secondary" style={{ lineHeight: "1.7" }}>
            {event.description ||
              "Join this exciting professional meetup where you'll gain valuable insights from top experts in the field. This session will cover the latest trends, real-world case studies, and hands-on discussions to help you grow your skills. Networking opportunities, live Q&A, and interactive activities make this event a must-attend for learners and professionals alike. Don’t miss out — reserve your spot today!"}
          </p>

          <div className="mt-4">
            <h5 className="fw-bold">Additional Information:</h5>
            <p><strong>Dress Code:</strong> Smart casual</p>
            <p><strong>Age Restrictions:</strong> 18 and above</p>
          </div>

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

        
        <div className="col-lg-4">
          <div className="p-4 rounded-3 bg-white border mb-4">
            <p className="mb-2">🗓️ {formattedDate}</p>
            <p className="mb-2">
              ⏰ {startTime} – {endTime} 
            </p>
            <p className="mb-2"> {event.location || "Venue to be announced"}</p>
            <p className="fw-bold fs-5 mb-0">₹ {event.price || 3000}</p>
          </div>

          
          <h6 className="fw-bold mb-3">Speakers:</h6>
          <div className="d-flex flex-wrap gap-3">
            {(event.speakers || [
              { name: "Sarah Johnson", role: "Marketing Manager", image: "https://i.pravatar.cc/100?img=47" },
              { name: "Michael Brown", role: "SEO Specialist", image: "https://i.pravatar.cc/100?img=49" },
            ]).map((speaker, i) => (
              <div
                key={i}
                className="text-center p-3 bg-white rounded-3 border"
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




