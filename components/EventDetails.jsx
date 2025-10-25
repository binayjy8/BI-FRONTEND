import { useParams } from "react-router-dom"; 
import useFetch from "../useFetch"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react"; 


const EventDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://bi-backend-beige.vercel.app/events/env/${id}`);
}