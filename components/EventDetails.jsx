
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import useFetch from "../useFetch";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EventDetails = () => {
//   const { id } = useParams();
//   const { data, loading, error } = useFetch(`https://bi-backend-beige.vercel.app/events/env/${id}`);

//   if (loading) return <div className="container my-5"><p>Loading event details...</p></div>;
//   if (error) return <div className="container my-5"><p>Error: {error.message}</p></div>;

//   const event = data?.event;
//   if (!event) return <div className="container my-5"><p>No event found.</p></div>;

//   const formattedDate = new Date(event.dateTime).toLocaleDateString();
//   const formattedTime = new Date(event.dateTime).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div className="container my-5">
    
//       <div className="d-flex align-items-center mb-4">
//         <h3 className="fw-bold m-0"
//          style={{
//             color: "#f64060",
//             fontFamily: "'Poppins', sans-serif",
//             fontWeight: "700",
//             letterSpacing: "0.5px",
//           }}
//         >Meetup</h3>
//       </div>

//       <h2 className="fw-bold">{event.title}</h2>
//       <p className="text-muted mb-4">
//         Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
//       </p>

  
//       <div className="row g-4">
      
//         <div className="col-lg-8">
//           <img
//             src={event.imageUrl}
//             alt={event.title}
//             className="img-fluid rounded-3 mb-4"
//             style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
//           />

      
//           <h5 className="fw-bold">Details:</h5>
//           <p className="text-secondary" style={{ lineHeight: "1.7" }}>
//             {event.description ||
//               "Stay ahead of the game by attending this event and gaining insights from experts."}
//           </p>

          
//           <h5 className="fw-bold mt-4">Additional Information:</h5>
//           <ul className="list-unstyled">
//             <li><strong>Dress Code:</strong> Smart casual</li>
//             <li><strong>Age Restrictions:</strong> 18 and above</li>
//           </ul>

      
//           <h5 className="fw-bold mt-4">Event Tags:</h5>
//           <div>
//             {event.tags?.map((tag, index) => (
//               <span
//                 key={index}
//                 className="badge bg-danger me-2 mb-2"
//                 style={{ fontSize: "0.9rem" }}
//               >
//                 {tag}
//               </span>
//             )) || (
//               <>
//                 <span className="badge bg-danger me-2">marketing</span>
//                 <span className="badge bg-danger">digital</span>
//               </>
//             )}
//           </div>
//         </div>


//         <div className="col-lg-4">
//           <div className="p-4 border rounded-3 shadow-sm">
//             <p className="mb-2">
//               <i className="bi bi-calendar-event me-2"></i>
//               {formattedDate} at {formattedTime}
//             </p>
//             <p className="mb-2">
//               <i className="bi bi-geo-alt me-2"></i>
//               {event.location || "Marketing City, 789 Avenue, City"}
//             </p>
//             <p className="fw-bold fs-5 mb-4">₹ {event.price || 3000}</p>

            
//             <h6 className="fw-bold mb-3">Speakers:</h6>
//             <div className="d-flex flex-wrap gap-3">
//               {(event.speakers || [
//                 { name: "Sarah Johnson", role: "Marketing Manager", image: "https://i.pravatar.cc/100?img=47" },
//                 { name: "Michael Brown", role: "SEO Specialist", image: "https://i.pravatar.cc/100?img=49" },
//               ]).map((speaker, i) => (
//                 <div key={i} className="text-center">
//                   <img
//                     src={speaker.image}
//                     alt={speaker.name}
//                     className="rounded-circle mb-2"
//                     width="70"
//                     height="70"
//                   />
//                   <p className="fw-bold mb-0">{speaker.name}</p>
//                   <p className="text-muted small">{speaker.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Link to="/" className="btn btn-link mt-3 w-100">
//             ← Back to Events
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import useFetch from "../useFetch";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EventDetails = () => {
//   const { id } = useParams();
//   const { data, loading, error } = useFetch(
//     `https://bi-backend-beige.vercel.app/events/env/${id}`
//   );

//   if (loading)
//     return (
//       <div className="text-center my-5">
//         <p>Loading event details...</p>
//       </div>
//     );
//   if (error)
//     return (
//       <div className="text-center my-5">
//         <p>Error: {error.message}</p>
//       </div>
//     );

//   const event = data?.event;
//   if (!event)
//     return (
//       <div className="text-center my-5">
//         <p>No event found.</p>
//       </div>
//     );

//   const formattedDate = new Date(event.dateTime).toLocaleDateString();
//   const formattedTime = new Date(event.dateTime).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div
//       className="container-fluid py-5 px-lg-5"
//       style={{
//         backgroundColor: "#fafafa",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Back to Events Button */}
//       <div className="mb-4">
//         <Link to="/" className="btn btn-outline-danger">
//           ← Back to Events
//         </Link>
//       </div>

//       {/* Header Section */}
//       <div className="text-center mb-5">
//         <h3
//           className="fw-bold"
//           style={{
//             color: "#f64060",
//             fontWeight: "700",
//             letterSpacing: "0.5px",
//           }}
//         >
//           Meetup
//         </h3>
//         <h2 className="fw-bold">{event.title}</h2>
//         <p className="text-muted">
//           Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
//         </p>
//       </div>

//       {/* Event Image */}
//       <div className="text-center mb-4">
//         <img
//           src={event.imageUrl}
//           alt={event.title}
//           className="img-fluid rounded-4 shadow"
//           style={{
//             maxHeight: "500px",
//             objectFit: "cover",
//             width: "90%",
//           }}
//         />
//       </div>

//       {/* Event Details */}
//       <div className="mx-auto text-center" style={{ maxWidth: "800px" }}>
//         <h5 className="fw-bold mt-4">Details:</h5>
//         <p className="text-secondary" style={{ lineHeight: "1.7" }}>
//           {event.description ||
//             "Stay ahead of the game by attending this event and gaining insights from experts."}
//         </p>

//         <h5 className="fw-bold mt-4">Additional Information:</h5>
//         <ul className="list-unstyled">
//           <li>
//             <strong>Dress Code:</strong> Smart casual
//           </li>
//           <li>
//             <strong>Age Restrictions:</strong> 18 and above
//           </li>
//         </ul>

//         {/* Event Tags */}
//         <h5 className="fw-bold mt-4">Event Tags:</h5>
//         <div>
//           {event.tags?.length ? (
//             event.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="badge bg-danger me-2 mb-2"
//                 style={{ fontSize: "0.9rem", cursor: "pointer" }}
//               >
//                 {tag}
//               </span>
//             ))
//           ) : (
//             <>
//               <span className="badge bg-danger me-2">marketing</span>
//               <span className="badge bg-danger">digital</span>
//             </>
//           )}
//         </div>

//         {/* Venue & Speaker Section */}
//         <div className="mt-5 p-4 border rounded-4 shadow-sm bg-white mx-auto">
//           <p className="mb-2">
//             <i className="bi bi-calendar-event me-2"></i>
//             {formattedDate} at {formattedTime}
//           </p>
//           <p className="mb-2">
//             <i className="bi bi-geo-alt me-2"></i>
//             {event.location || "Marketing City, 789 Avenue, City"}
//           </p>
//           <p className="fw-bold fs-5 mb-4">₹ {event.price || 3000}</p>

//           <h6 className="fw-bold mb-3">Speakers:</h6>
//           <div className="d-flex flex-wrap justify-content-center gap-4">
//             {(event.speakers || [
//               {
//                 name: "Sarah Johnson",
//                 role: "Marketing Manager",
//                 image: "https://i.pravatar.cc/100?img=47",
//               },
//               {
//                 name: "Michael Brown",
//                 role: "SEO Specialist",
//                 image: "https://i.pravatar.cc/100?img=49",
//               },
//             ]).map((speaker, i) => (
//               <div key={i} className="text-center">
//                 <img
//                   src={speaker.image}
//                   alt={speaker.name}
//                   className="rounded-circle mb-2"
//                   width="80"
//                   height="80"
//                 />
//                 <p className="fw-bold mb-0">{speaker.name}</p>
//                 <p className="text-muted small">{speaker.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

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

  const formattedDate = new Date(event.dateTime).toLocaleDateString();
  const formattedTime = new Date(event.dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="p-4 p-md-5 shadow rounded-4 bg-white"
        style={{
          maxWidth: "850px",
          width: "100%",
        }}
      >
        {/* Back Button */}
        <div className="mb-4 text-start">
          <Link to="/" className="btn btn-outline-danger">
            ← Back to Events
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h3
            className="fw-bold"
            style={{
              color: "#f64060",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            Meetup
          </h3>
          <h2 className="fw-bold">{event.title}</h2>
          <p className="text-muted">
            Hosted By: <strong>{event.hostedBy || "Event Organizer"}</strong>
          </p>
        </div>

        {/* Event Image */}
        <div className="text-center mb-4">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="img-fluid rounded-4 shadow-sm"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>

        {/* Event Details */}
        <div className="text-center">
          <h5 className="fw-bold">Details:</h5>
          <p className="text-secondary" style={{ lineHeight: "1.7" }}>
            {event.description ||
              "Stay ahead of the game by attending this event and gaining insights from experts."}
          </p>

          <h5 className="fw-bold mt-4">Additional Information:</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Dress Code:</strong> Smart casual
            </li>
            <li>
              <strong>Age Restrictions:</strong> 18 and above
            </li>
          </ul>

          {/* Tags */}
          <h5 className="fw-bold mt-4">Event Tags:</h5>
          <div>
            {event.tags?.length ? (
              event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-danger me-2 mb-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  {tag}
                </span>
              ))
            ) : (
              <>
                <span className="badge bg-danger me-2">marketing</span>
                <span className="badge bg-danger">digital</span>
              </>
            )}
          </div>

          {/* Venue + Speakers */}
          <div className="mt-5 border rounded-4 p-4 bg-light shadow-sm">
            <p className="mb-2">
              <i className="bi bi-calendar-event me-2"></i>
              {formattedDate} at {formattedTime}
            </p>
            <p className="mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              {event.location || "Marketing City, 789 Avenue, City"}
            </p>
            <p className="fw-bold fs-5 mb-4">₹ {event.price || 3000}</p>

            <h6 className="fw-bold mb-3">Speakers:</h6>
            <div className="d-flex flex-wrap justify-content-center gap-4">
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
                <div key={i} className="text-center">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="rounded-circle mb-2"
                    width="80"
                    height="80"
                  />
                  <p className="fw-bold mb-0">{speaker.name}</p>
                  <p className="text-muted small">{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
