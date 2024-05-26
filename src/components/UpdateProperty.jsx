// curl -X 'GET' \
//   'http://127.0.0.1:8000/v1/property/2' \
//   -H 'accept: application/json'

// curl -X 'PUT' \
//   'http://127.0.0.1:8000/v1/property/4' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "flat_type": "string",
//   "status": "string",
//   "flat_number": "string",
//   "address": "string",
//   "image": "string",
//   "hospital_radius": "string",
//   "airport_radius": "string",
//   "number_of_collages": "string"
// }'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function UpdateProperty() {
    const [property, setProperty] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/v1/property/${id}`)
            .then(response => {
                setProperty(response.data);
            });
    }
    , []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/v1/property/${id}`, property)
            .then(response => {
                console.log(response);
            });
    }

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Update Property</h1>
            </div>

            <form onSubmit={handleSubmit}>
                {/* labels and input fields to update the property */}
                <div className="grid grid-cols-8 gap-4 m-4">
                    <div className="col-span-2">
                        <img className="w-full" src={property.image} alt="Sunset in the mountains" />
                    </div>
                    <div className="col-span-6">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <input type="text" name="flat_type" value={property.flat_type} onChange={handleChange} />
                            </div>
                            <p className="text-gray-700 text-base">
                                <input type="text" name="address" value={property.address} onChange={handleChange} />
                            </p>
                        </div>

                        <div className='flex flex-wrap'>
                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    <input type="text" name="status" value={property.status} onChange={handleChange} />
                                </span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    <input type="text" name="hospital_radius" value={property.hospital_radius} onChange={handleChange} />
                                </span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    <input type="text" name="airport_radius" value={property.airport_radius} onChange={handleChange} />
                                </span>
                            </div>

                            <div className="px-2 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    <input type="text" name="number_of_collages" value={property.number_of_collages} onChange={handleChange} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-2 rounded">Update Property</button>
                </div>
            </form>
        </div>
    )
}