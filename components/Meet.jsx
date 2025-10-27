import { useState } from "react";
import useFetch from "../useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Meet = () => {
  const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
  const [selectedType, setSelectedType] = useState("Both");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <div className="text-center my-5">
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-5">
        <p>Error fetching data: {error.message}</p>
      </div>
    );
  }

  const events = data?.event || [];

  // ✅ Only future events
  const now = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.dateTime) > now);

  // ✅ Filter by type and search
  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesType = selectedType === "Both" || event.eventType === selectedType;
    const search = searchTerm.toLowerCase();

    const matchesTitle = event.title?.toLowerCase().includes(search);
    const matchesTags = event.tags?.some((tag) => tag.toLowerCase().includes(search));

    return matchesType && (matchesTitle || matchesTags);
  });

  return (
    <div style={{ width: "100%", margin: 0, padding: "20px" }}>
      {/* Top Bar */}
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4 px-3 py-3"
        style={{
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
          borderRadius: "10px",
        }}
      >
        <h3
          className="fw-bold m-0"
          style={{
            color: "#f64060",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Meetup
        </h3>

        <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center">
          {/* Search */}
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: "25px",
                paddingLeft: "40px",
                width: "250px",
                border: "1px solid #ddd",
              }}
            />
            <i
              className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              style={{ fontSize: "1rem" }}
            ></i>
          </div>

          {/* Filter */}
          <select
            className="form-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              borderRadius: "25px",
              fontSize: "0.9rem",
              width: "180px",
              cursor: "pointer",
              border: "1px solid #ddd",
            }}
          >
            <option value="Both">Both</option>
            <option value="Online Event">Online Event</option>
            <option value="Offline Event">Offline Event</option>
          </select>
        </div>
      </div>

      <h1 className="fw-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Upcoming Meetup Events
      </h1>

      {/* Event Cards */}
      <div className="row g-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const eventDate = new Date(event.dateTime);
            const formattedDate = eventDate.toDateString();
            const formattedTime = eventDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div key={event._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card border-0 h-100"
                  style={{ borderRadius: "15px", overflow: "hidden" }}
                >
                  <div className="position-relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <span
                      className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-3 py-2"
                      style={{ borderRadius: "12px", fontWeight: "500" }}
                    >
                      {event.eventType}
                    </span>
                  </div>

                  <div className="card-body">
                    <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                      {formattedDate} • {formattedTime} IST
                    </p>
                    <h5 className="fw-bold mb-2">
                      <Link
                        to={`/events/env/${event._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {event.title}
                      </Link>
                    </h5>

                    <div>
                      {event.tags?.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="badge bg-danger-subtle text-danger border me-1"
                          style={{ fontSize: "0.8rem" }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center mt-4">No upcoming events found.</p>
        )}
      </div>
    </div>
  );
};

export default Meet;


           
