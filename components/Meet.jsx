import { useState } from "react";
import useFetch from "../useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Meet = () => {
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    console.log(data);

    return (
    <div>
        <h2>All Events</h2>
        <ul>
            {data?.event?.map((event) => (
                <li>{event.title}</li>
            ))}
        </ul>
    </div>
)

}

export default Meet;