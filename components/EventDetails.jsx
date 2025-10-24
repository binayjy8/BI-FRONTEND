// EventDetail.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetail = ({ event }) => {
    if (!event) {
        return <div className="container my-5"><p>Event not found.</p></div>;
    }

    const formatPrice = (price) => {
        return price && price > 0 ? `\$${price.toFixed(2)}` : 'Free';
    };

    return (
        <div className="container my-5 py-4 border rounded shadow-lg" style={{ backgroundColor: '#fff' }}>
            <h1 className="mb-4" style={{ color: '#E51963' }}>{event.title}</h1>
            <p className="lead text-muted">{event.eventType} | {event.dateTime}</p>
            
            <hr />

            {/* Event Image */}
            {event.imageUrl && (
                <div className="text-center mb-4">
                    <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>
            )}

            {/* Detailed Description */}
            <div className="mb-4">
                <h2 className="text-dark">Detailed Description & Features</h2>
                <p>{event.fullDescription || 'A comprehensive description of the event is coming soon.'}</p>
                {event.keyFeatures && (
                    <ul>
                        {event.keyFeatures.map((feature, index) => (
                            <li key={index}><strong>{feature}</strong></li>
                        ))}
                    </ul>
                )}
            </div>
            
            <hr />

            {/* Sessions and Speakers */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h3 className="text-dark">Speakers/Presenters 🎤</h3>
                    {event.speakers && event.speakers.length > 0 ? (
                        <ul className="list-unstyled">
                            {event.speakers.map((speaker, index) => (
                                <li key={index}>
                                    <strong>{speaker.name}</strong> - <em>{speaker.topic}</em>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Speaker details will be announced soon.</p>
                    )}
                </div>
                <div className="col-md-6">
                    <h3 className="text-dark">Session Timings 🕒</h3>
                    {event.sessions && event.sessions.length > 0 ? (
                        <ul className="list-unstyled">
                            {event.sessions.map((session, index) => (
                                <li key={index}>
                                    <strong>{session.time}</strong>: {session.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>A detailed schedule will be available closer to the date.</p>
                    )}
                </div>
            </div>

            <hr />

            {/* Venue, Pricing, and Additional Info */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <h3 className="text-dark">Venue & Location 📍</h3>
                    <p>
                        <strong>Venue:</strong> {event.venueName || 'To Be Announced'}<br/>
                        <strong>Address:</strong> {event.venueAddress || (event.eventType === 'Online Event' ? 'Online via Link' : 'TBA')}
                    </p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-dark">Pricing 💲</h3>
                    <p className="fs-4 fw-bold" style={{ color: '#007bff' }}>
                        {formatPrice(event.price)}
                    </p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-dark">Important Info ℹ️</h3>
                    <p>
                        <strong>Dress Code:</strong> {event.dressCode || 'Casual'}<br/>
                        <strong>Age Restriction:</strong> {event.ageRestriction || 'All Ages Welcome'}
                    </p>
                </div>
            </div>

            <hr />

            {/* Event Tags */}
            <div className="mt-4">
                <h3 className="text-dark">Tags</h3>
                {event.tags && event.tags.map((tag, index) => (
                    <span key={index} className="badge bg-secondary me-2 p-2">#{tag}</span>
                ))}
            </div>

        </div>
    );
}

export default EventDetail;