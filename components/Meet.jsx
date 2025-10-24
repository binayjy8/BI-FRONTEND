
import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Meet = () => {

    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    console.log(data);

    if (loading) {
        return <div className="container my-5"><p>Loading events...</p></div>;
    }

    if (error) {
        return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
    }

    const events = data?.event || [];

    return (
        <div className="container my-5" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
            <div className="header-container">
                <div className="header-left">Meetup</div>
                <div className="header-right">Search by title & t..</div>
            </div>
            <hr />
        <div className="container my-5">
            <h2 className="mb-4">Meetup Events</h2>
            
           
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {events.map((event, index) => (
                    <div className="col" key={event.id || index}>
    
                        <div className="card h-100 overflow-hidden shadow-sm">
                            
                          
                            <div className="position-relative">
                    
                                <img 
                                    src={event.imageUrl} 
                                    className="card-img-top" 
                                    alt={event.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                
                                
                                <span className={`badge position-absolute top-0 start-0 m-2 text-white p-2 ${
                                    event.type === 'Online' ? 'bg-warning' : 'bg-dark'
                                }`} style={{ zIndex: 1, opacity: 0.9 }}>
                                    {event.eventType || 'Offline'} Event
                                </span>
                            </div>

             
                            <div className="card-body">
                                
                       
                                <p className="card-text text-muted mb-1 small">
                                    {event.dateTime || 'Date N/A'} 
                                </p>

                        
                                <h5 className="card-title fw-bold text-dark">
                                    {event.title}
                                </h5>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </div>
    );
}

export default Meet;