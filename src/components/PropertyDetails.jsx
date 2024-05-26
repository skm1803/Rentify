// display property details
// curl -X 'GET' \
//   'http://127.0.0.1:8000/v1/property/2' \
//   -H 'accept: application/json'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function PropertyDetails() {
    const [property, setProperty] = useState([]);
    const [sellerId, setSellerId] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/v1/property/${id}`)
            .then(response => {
                setProperty(response.data);
                setSellerId(response.data.seller_id);
            });
    }
    , []);

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Property Details</h1>
            </div>

            <div className="grid grid-cols-8 gap-4 m-4">
                <div className="col-span-2">
                    <img className="w-full" src={property.image} alt="Sunset in the mountains" />
                </div>
                <div className="col-span-6">
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
                </div>

                {/* //button saying i am interested */}
                <div className="col-span-8 flex justify-center">
                    <a href={`/seller/${sellerId}`} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">I am Interested</a>
                </div>

                <div className="col-span-8 flex justify-center">
                    <a href={`/property/${id}/update`} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Update Property</a>
                </div>

                <div className="col-span-8 flex justify-center">
                    <a href={`/property/${id}/delete`} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Delete Property</a>
                </div>
        </div>
    </div>
    )
}