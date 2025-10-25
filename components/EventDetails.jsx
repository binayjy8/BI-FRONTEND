
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetails = () => {
    const { id } = useParams(); 
    
    const API_URL = `https://bi-backend-beige.vercel.app/events/env/${id}`;

    
    const { data: response, loading, error } = useFetch(API_URL);

    
    const event = response?.event?.[0]; 

    if (loading) return <div className="container my-5">Loading event details...</div>;
    if (error) return <div className="container my-5">Error fetching data: {error.message}</div>;
    if (!event) return <div className="container my-5">Event not found.</div>;
    
    
    return (
        <div className="container my-5">
            <h1>{event.title}</h1>
            <p>Type: {event.eventType}</p>
            <p>Date: {event.dateTime}</p>
            <img src={event.imageUrl} alt={event.title} style={{maxWidth: '100%'}}/>
            
        </div>
    );
};

export default EventDetails;