import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Meet = () => {
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    console.log(data);

//     return (
//     <div className="container my-5">
//             <h2 className="mb-4">All Events</h2>
//         <ul>
//             {data?.event?.map((event) => (
//                 <li>{event.title}</li>
//             ))}
//         </ul>
//     </div>
// )

    return (
        // 1. Use 'container' for centered, responsive content
        <div className="container my-5">
            <h2 className="mb-4">All Events</h2>
            
            {/* 2. Use 'row' and 'g-4' for the grid layout and spacing */}
            <div className="row g-4"> 
                {events.map((event, index) => (
                    // 3. Define the column size: 1 per row on mobile, 2 on medium, 3 on large
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        
                        {/* 4. Use the 'card' component */}
                        <div className="card h-100 shadow-sm"> 
                            
                            {/* Card Image section for the badge overlay */}
                            <div className="position-relative">
                                {/* Use a placeholder if imageUrl is missing */}
                                <img 
                                    src={event.imageUrl || "https://via.placeholder.com/400x200?text=Event+Image"} 
                                    className="card-img-top" 
                                    alt={event.title} 
                                    // Custom style for consistent image height
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                
                                {/* Badge for Event Type */}
                                <span className={`badge position-absolute top-0 start-0 m-2 
                                                  ${event.type === 'Online Event' ? 'bg-success' : 'bg-dark'}`}>
                                    {/* NOTE: You need event.type from your API data */}
                                    {event.type || "Event"} 
                                </span>
                            </div>

                            {/* Card Body for text content */}
                            <div className="card-body">
                                {/* Date and Time */}
                                <p className="card-text text-muted small mb-1">
                                    {/* NOTE: You need event.date and event.time from your API data */}
                                    **{event.date}** • **{event.time}**
                                </p>
                                {/* Event Title */}
                                <h5 className="card-title text-dark">
                                    {event.title}
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Meet;