// list of all the properties
// curl -X 'GET' \
//   'http://127.0.0.1:8000/v1/properties' \
//   -H 'accept: application/json'

import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/v1/properties")
            .then(response => {
                setProperties(response.data);
            });
    }
    , []);

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">List of Properties</h1>
            </div>

            <div className="flex flex-wrap justify-center">
                {properties.map(property => (
                    // list properties in 3 cards in a row
                    <div key={property.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-400">
                        <img className="w-full" src={property.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{property.flat_type}</div>
                            <p className="text-gray-700 text-base">
                                {property.address}
                            </p>
                        </div>

                        <div className='flex flex-wrap'>
                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{property.status}</span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Hospital Radius: {property.hospital_radius}</span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Airport Radius: {property.airport_radius}</span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Number of Collages: {property.number_of_collages}</span>
                            </div>
                        </div>
                        
                        <div className="px-2 py-4">
                            <a href={`/property/${property.id}`} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-2 rounded">View Property</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


