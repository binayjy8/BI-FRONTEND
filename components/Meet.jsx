import { useState } from "react";
import useFetch from "../useFetch";

const Meet = () => {
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
    console.log(data);

    return (
    <div>
        <h2>All Events</h2>
        <ul>
            {data.map((event) => (
                <li>{event.title}</li>
            ))}
        </ul>
    </div>
)

}

export default Meet;