import { useState } from "react";
import useFetch from "../useFetch";

const Meet = () => {
    const { data, loading, error } = useFetch("https://bi-backend-beige.vercel.app/events");
}