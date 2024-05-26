// curl -X 'GET' \
//   'http://127.0.0.1:8000/v1/seller/1' \
//   -H 'accept: application/json'


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function SellerDetails() {
    const [seller, setSeller] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/v1/seller/${id}`)
            .then(response => {
                setSeller(response.data);
            });
    }
    , []);


    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Seller Details</h1>
            </div>

            <div className="grid grid-cols-8 gap-4 m-4">
                <div className="col-span-6">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{seller.first_name}</div>
                        <p className="text-gray-700 text-base">
                            {seller.email}
                        </p>
                        <p className="text-gray-700 text-base">
                            {seller.phone_number}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
