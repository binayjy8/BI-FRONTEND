
// import { useState } from "react";
// import useFetch from "../useFetch";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";

// const Meet = () => {
//   const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");

//   if (loading) {
//     return <div className="container my-5"><p>Loading events...</p></div>;
//   }

//   if (error) {
//     return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
//   }

//   const events = data?.event || [];

//   return (
//     <div className="container my-5">
//       <div className="row">
//         {events.map((event) => (
//           <div key={event.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <Link to={`/events/env/${event._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <img
//                   src={event.imageUrl}
//                   alt={event.title}
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{event.title}</h5>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Meet;

// import { useState } from "react";
// import useFetch from "../useFetch";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";

// const Meet = () => {
//   const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");

//   if (loading) {
//     return <div className="container my-5"><p>Loading events...</p></div>;
//   }

//   if (error) {
//     return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
//   }

//   const events = data?.event || [];

//   return (
//     <div className="container my-5">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="fw-bold">Meetup Events</h1>
//         <input
//           type="text"
//           placeholder="🔍 Search by title and type"
//           className="form-control w-25"
//           style={{ borderRadius: "20px", fontSize: "0.9rem" }}
//         />
//       </div>

//       {/* Events Grid */}
//       <div className="row g-4">
//         {events.map((event) => {
//           const eventDate = new Date(event.dateTime);
//           const formattedDate = eventDate.toDateString();
//           const formattedTime = eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//           return (
//             <div key={event._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//               <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "15px", overflow: "hidden" }}>
//                 <div className="position-relative">
//                   <img
//                     src={event.imageUrl}
//                     alt={event.title}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <span
//                     className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-3 py-2 shadow-sm"
//                     style={{ borderRadius: "12px", fontWeight: "500" }}
//                   >
//                     {event.eventType}
//                   </span>
//                 </div>

//                 <div className="card-body">
//                   <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
//                     {formattedDate} • {formattedTime} IST
//                   </p>
//                   <h5 className="fw-bold mb-0">
//                     <Link
//                       to={`/events/env/${event._id}`}
//                       style={{ textDecoration: "none", color: "black" }}
//                     >
//                       {event.title}
//                     </Link>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Meet;

import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Meet = () => {
  const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
  const [selectedType, setSelectedType] = useState("Both");

  if (loading) {
    return <div className="container my-5"><p>Loading events...</p></div>;
  }

  if (error) {
    return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
  }

  const events = data?.event || [];

  // Filter events based on selected event type
  const filteredEvents = events.filter(event => {
    if (selectedType === "Both") return true;
    return event.eventType === selectedType;
  });

  return (
    <div className="container my-5">
      {/* Header and Filter */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h1 className="fw-bold mb-3 mb-sm-0">Meetup Events</h1>

        <select
          className="form-select w-auto shadow-sm"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{
            borderRadius: "20px",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          <option value="Both">Both</option>
          <option value="Online Event">Online</option>
          <option value="Offline Event">Offline</option>
        </select>
      </div>

      {/* Events Grid */}
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
                  className="card border-0 shadow-sm h-100"
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
                      className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-3 py-2 shadow-sm"
                      style={{ borderRadius: "12px", fontWeight: "500" }}
                    >
                      {event.eventType}
                    </span>
                  </div>

                  <div className="card-body">
                    <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                      {formattedDate} • {formattedTime} IST
                    </p>
                    <h5 className="fw-bold mb-0">
                      <Link
                        to={`/events/env/${event._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {event.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center mt-4">No events found for this type.</p>
        )}
      </div>
    </div>
  );
};

export default Meet;

