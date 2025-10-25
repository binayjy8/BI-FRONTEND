
// import { useState } from "react";
// import useFetch from "../useFetch";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";

// const Meet = () => {

//     const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
//     const [gotTitle, setGotTitle] = useState("");
//     const [select, setSelect] = useState("both");

//     const selectHandler = (event) => {
//         setGotTitle(event.target.value);
//     }

//     const inputHandler = (event) => {
//         setSelect(event.target.value);
//     }

//     if (loading) {
//         return <div className="container my-5"><p>Loading events...</p></div>;
//     }

//     if (error) {
//         return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
//     }

//     const events = data?.event || [];

//     const filteredEvents = events.filter(event => {
        
//         if (select === "both") {
//             return true;
//         }
    
//         return event.eventType === select;
//     });

//     return (
//         <div className="container my-5" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
                
//             <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
//                 <div style={{ color: '#E51963', fontWeight: 'bold', fontSize: '24px', fontFamily: 'Pacifico, cursive' }}>
//                          Meetup
//                 </div>
                
//                 <div className="header-right">
//                     <label for="title-search">Search by title & t..</label>
//                     <input 
//                         id="title-search"
//                         type="text"
//                         value={gotTitle}
//                         onChange={selectHandler} 
//                     />
                    
//                 </div>
//             </div>
//             <hr />
//         <div className="container my-5">
//             <div className="d-flex justify-content-between align-items-center ">
//                 <div ><h2 className="mb-4">Meetup Events</h2></div>
//                 <div className="header-right">
//                     <label for="mode">Select event type</label>
//                     <select id="mode" onChange={inputHandler} value={select}>
//                         <option value="Online Event">Online</option>
//                         <option value="Offline Event">Offline</option>
//                         <option value="both">Both</option>
//                     </select>
//                 </div>
//             </div>
           
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                
//                 {filteredEvents.map((event, index) => (
                    
//                     <div className="col" key={event.id || index}>
//                         <div className="card h-100 overflow-hidden shadow-sm">
//                             <div className="position-relative">
//                                 <img 
//                                     src={event.imageUrl} 
//                                     className="card-img-top" 
//                                     alt={event.title}
//                                     style={{ height: '200px', objectFit: 'cover' }}
//                                 />
                              
//                                 <span className={`badge position-absolute top-0 start-0 m-2 text-white p-2 ${
//                                     event.type === 'Online' ? 'bg-warning' : 'bg-dark'
//                                 }`} style={{ zIndex: 1, opacity: 0.9 }}>
//                                     {event.eventType || 'Offline'} 
//                                 </span>
//                             </div>

//                             <div className="card-body">
//                                 <p className="card-text text-muted mb-1 small">
//                                     {event.dateTime || 'Date N/A'} 
//                                 </p>
//                                 <h5 className="card-title fw-bold text-dark">
//                                 <Link 
//                                 to={`/events/env/${event.id}`} 
//                         >       {event.title} </Link>
//                                 </h5>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Meet;

import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"; // Link is still useful for the title

const Meet = () => {
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    const [gotTitle, setGotTitle] = useState("");
    const [select, setSelect] = useState("both");
    
    // 1. ADDED STATE FOR DETAIL VIEW
    const [showDetails, setShowDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const selectHandler = (event) => {
        setGotTitle(event.target.value);
    }

    const inputHandler = (event) => {
        setSelect(event.target.value);
    }

    // 2. ADDED CLICK HANDLER
    const eventClickHandler = (eventData) => {
        setSelectedEvent(eventData); // Store the clicked event's data
        setShowDetails(true);       // Open the details view/modal
    }

    // Handler to close the detail view/modal
    const closeDetailsHandler = () => {
        setShowDetails(false);
        setSelectedEvent(null);
    }

    if (loading) {
        return <div className="container my-5"><p>Loading events...</p></div>;
    }

    if (error) {
        return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
    }

    const events = data?.event || [];

    // Filter logic (combines type filter and title search)
    const filteredEvents = events.filter(event => {
        const typeMatch = select === "both" || event.eventType === select;
        const titleMatch = event.title
            .toLowerCase()
            .includes(gotTitle.toLowerCase());

        return typeMatch && titleMatch;
    });

    return (
        <div className="container my-5" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
            
            <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <div style={{ color: '#E51963', fontWeight: 'bold', fontSize: '24px', fontFamily: 'Pacifico, cursive' }}>
                    Meetup
                </div>
                
                <div className="header-right">
                    <label htmlFor="title-search">Search by Title</label>
                    <input 
                        id="title-search"
                        type="text"
                        value={gotTitle}
                        onChange={selectHandler} 
                    />
                </div>
            </div>
            <hr />
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center ">
                    <div><h2 className="mb-4">Meetup Events</h2></div>
                    <div className="header-right">
                        <label htmlFor="mode">Select event type</label>
                        <select id="mode" onChange={inputHandler} value={select}>
                            <option value="Online Event">Online</option>
                            <option value="Offline Event">Offline</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                </div>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    
                    {filteredEvents.map((event, index) => (
                        
                        <div className="col" key={event.id || index}>
                            {/* 3. ADDED onClick HANDLER TO CARD */}
                            <div 
                                className="card h-100 overflow-hidden shadow-sm"
                                onClick={() => eventClickHandler(event)} // <-- CALLS NEW HANDLER
                                style={{ cursor: 'pointer' }} 
                            >
                                <div className="position-relative">
                                    <img 
                                        src={event.imageUrl} 
                                        className="card-img-top" 
                                        alt={event.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    
                                    <span className={`badge position-absolute top-0 start-0 m-2 text-white p-2 ${
                                        event.eventType === 'Online Event' ? 'bg-warning' : 'bg-dark'
                                    }`} style={{ zIndex: 1, opacity: 0.9 }}>
                                        {event.eventType || 'Offline Event'} 
                                    </span>
                                </div>

                                <div className="card-body">
                                    <p className="card-text text-muted mb-1 small">
                                        {event.dateTime || 'Date N/A'} 
                                    </p>
                                    <h5 className="card-title fw-bold text-dark">
                                    {/* Link still wraps the title for direct navigation if needed */}
                                    <Link 
                                    to={`/events/env/${event.id}`} 
                                    onClick={(e) => e.stopPropagation()} // Prevent card click handler from firing
                                    > 
                                    {event.title} </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. DETAIL VIEW / MODAL PLACEHOLDER */}
            {showDetails && selectedEvent && (
                <div 
                    className="modal d-block" 
                    tabIndex="-1" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedEvent.title} Details</h5>
                                <button type="button" className="btn-close" onClick={closeDetailsHandler}></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="img-fluid mb-3" />
                                <p><strong>Date/Time:</strong> {selectedEvent.dateTime || 'N/A'}</p>
                                <p><strong>Type:</strong> {selectedEvent.eventType || 'N/A'}</p>
                                {/* Assuming you have a 'description' field in your event data */}
                                <p><strong>Description:</strong> {selectedEvent.description || 'No detailed description available.'}</p> 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeDetailsHandler}>Close</button>
                                {/* You can put the original Link navigation here */}
                                <Link to={`/events/env/${selectedEvent.id}`} className="btn btn-primary">View Full Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Meet;