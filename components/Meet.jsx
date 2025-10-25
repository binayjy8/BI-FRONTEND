
import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Meet = () => {

    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    const [gotTitle, setGotTitle] = useState("");
    const [select, setSelect] = useState("both");

    const selectHandler = (event) => {
        setGotTitle(event.target.value);
    }

    const inputHandler = (event) => {
        setSelect(event.target.value);
    }

    if (loading) {
        return <div className="container my-5"><p>Loading events...</p></div>;
    }

    if (error) {
        return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
    }

    const events = data?.event || [];

    const filteredEvents = events.filter(event => {
        
        if (select === "both") {
            return true;
        }
    
        return event.eventType === select;
    });

    return (
        <div className="container my-5" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
                
            <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <div style={{ color: '#E51963', fontWeight: 'bold', fontSize: '24px', fontFamily: 'Pacifico, cursive' }}>
                         Meetup
                </div>
                
                <div className="header-right">
                    <label for="title-search">Search by title & t..</label>
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
                <div ><h2 className="mb-4">Meetup Events</h2></div>
                <div className="header-right">
                    <label for="mode">Select event type</label>
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
                        <Link 
                            to={`/events/${event.id}`} 
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
    
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
                                    {event.eventType || 'Offline'} 
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
                    </Link >
                    </div>
                    
                ))}
                
            </div>

        </div>
        
        
        </div>
    );
}

export default Meet;