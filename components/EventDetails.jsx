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

  const formattedDate = new Date(event.dateTime).toLocaleDateString();
  const formattedTime = new Date(event.dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container text-center">
        
        <div className="mb-4">
          <Link to="/" className="btn btn-outline-danger">
            ← Back to Events
          </Link>
        </div>

        {/* Title */}
        <h3
          className="fw-bold mb-3"
          style={{
            color: "#f64060",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Meetup
        </h3>

        <h2 className="fw-bold">{event.title}</h2>
        <p className="text-muted mb-4">
          Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
        </p>

        
        <img
          src={event.imageUrl}
          alt={event.title}
          className="img-fluid rounded-3 mb-4"
          style={{ maxHeight: "400px", objectFit: "cover", width: "100%", maxWidth: "700px" }}
        />

        
        <h5 className="fw-bold">Details:</h5>
        <p className="text-secondary" style={{ lineHeight: "1.7" }}>
          {event.description ||
            "Join us for an inspiring and knowledge-packed event designed to bring together curious minds, professionals, and innovators from across the industry. This gathering is not just about listening — it’s about engaging, learning, and building meaningful connections. Throughout the event, attendees will gain deep insights into the latest trends, emerging tools, and best practices driving real change in today’s competitive world. Experienced speakers will share their personal journeys, case studies, and hands-on strategies to help you understand complex concepts in a simple, practical way. In addition to the main sessions, there will be opportunities for Q&A, open networking, and interactive workshops aimed at fostering collaboration and creativity. Whether you’re a student eager to learn, a working professional looking to upgrade your skills, or simply passionate about innovation, this event promises to offer valuable experiences and actionable takeaways that can make a lasting impact on your personal and professional growth."}
        </p>

        
        <div className="my-4">
          <p className="mb-2">
            📅 {formattedDate} at {formattedTime}
          </p>
          <p className="mb-2">
            📍 {event.location || "Marketing City, 789 Avenue, City"}
          </p>
          <p className="fw-bold fs-5 mb-4">₹ {event.price || 3000}</p>
        </div>

        
        <h6 className="fw-bold mb-3">Speakers</h6>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {(event.speakers || [
            { name: "Sarah Johnson", role: "Marketing Manager", image: "https://i.pravatar.cc/100?img=47" },
            { name: "Michael Brown", role: "SEO Specialist", image: "https://i.pravatar.cc/100?img=49" },
          ]).map((speaker, i) => (
            <div key={i} className="text-center">
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
  );
};

export default EventDetails;

