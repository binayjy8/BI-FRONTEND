import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Meet = () => {
     const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");

       if (loading) {
        return <div className="container my-5"><p>Loading events...</p></div>;
    }

    if (error) {
        return <div className="container my-5"><p>Error fetching data: {error.message}</p></div>;
    }

    const events = data?.event || [];

    return(
        <div>
            {events.map((event) => (
                <div>
                    <p>{event.id}</p>
                    <Link><img src={event.imageUrl}/></Link>
                    <p>{event.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Meet;