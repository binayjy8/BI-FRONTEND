// import { useState } from "react";
// import useFetch from "../useFetch";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Meet = () => {
//     const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
//     console.log(data);

//     return (
//     <div className="container my-5">
//             <h2 className="mb-4">All Events</h2>
//         <ul>
//             {data?.event?.map((event) => (
//                 <li>{event.title}{" "}
//                 </li>
//             ))}
//         </ul>
//     </div>
// )

// }

// export default Meet;

import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Meet = () => {
    // Assuming useFetch returns an object like { data: { event: [...] }, loading: false, error: null }
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    console.log(data);

    if (loading) {
        return <div className="container my-5"><p>Loading events...</p></div>;
    }

    if (error) {
        return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
    }

    // Ensure data and data.event exist before attempting to map
    const events = data?.event || [];

    return (
        <div className="container my-5" style="background-color: #f0f0f0;">
            <h2 className="mb-4">Meetup Events</h2>
            
            {/* Grid layout for the events */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {events.map((event, index) => (
                    <div className="col" key={event.id || index}>
                        {/* Bootstrap Card for each event */}
                        <div className="card h-100 overflow-hidden shadow-sm">
                            
                            {/* Event Image with overlay for event type */}
                            <div className="position-relative">
                                {/* Replace 'event.imageUrl' with the actual field from your data if available */}
                                {/* Using a placeholder image for demonstration */}
                                <img 
                                    src={event.imageUrl} 
                                    className="card-img-top" 
                                    alt={event.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                
                                {/* Overlay badge for event type (Online/Offline Event) */}
                                <span className={`badge position-absolute top-0 start-0 m-2 text-white p-2 ${
                                    event.type === 'Online' ? 'bg-warning' : 'bg-dark'
                                }`} style={{ zIndex: 1, opacity: 0.9 }}>
                                    {event.type || 'Offline'} Event
                                </span>
                            </div>

                            {/* Card Body for text content */}
                            <div className="card-body">
                                
                                {/* Date and Time */}
                                <p className="card-text text-muted mb-1 small">
                                    {event.date || 'Date N/A'} &bull; {event.time || 'Time N/A'}
                                </p>

                                {/* Event Title - Bold and prominent */}
                                <h5 className="card-title fw-bold text-dark">
                                    {event.title}
                                </h5>

                                {/* Add more details if your data provides them, e.g., location or a short description */}
                                {/* <p className="card-text small text-truncate">
                                    {event.description || 'A quick event description.'}
                                </p> 
                                */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Removing the initial placeholder card and the simple <ul> list */}
        </div>
    );
}

export default Meet;