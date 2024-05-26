// curl -X 'DELETE' \
//   'http://127.0.0.1:8000/v1/property/5' \
//   -H 'accept: application/json'


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DeleteProperty() {
    const { id } = useParams();

    useEffect(() => {
        axios.delete(`http://127.0.0.1:8000/v1/property/${id}`)
            .then(response => {
                console.log(response);
            });
    }
    , []);

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Property Deleted</h1>
            </div>
        </div>
    )
}