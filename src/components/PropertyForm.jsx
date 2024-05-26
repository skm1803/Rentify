// due to time contraint we are hardcoding the image url for now 
// due to time contraint we are hardcoding the bearer token for now
import axios from "axios";
import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import NavHeader from './Header/NavHeader'

export default function PropertyForm() {
  const [property, setProperty] = useState({
    flat_type: "",
    status: "",
    flat_number: "",
    address: "",
    image: "",
    hospital_radius: "",
    airport_radius: "",
    number_of_collages: "",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      property.image = "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
      axios.post("http://127.0.0.1:8000/v1/property", property, {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGxlckBleGFtcGxlLmNvbSIsImV4cCI6MTcxODAyMzIwMX0.VahDhuuHosnDub-7WxS6S72k3l8U4xBzV0Tah8AmBj8"
        },
      }).then((response) => {
        console.log(response.data);
      }
      );
    }
    catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <>
    <NavHeader/>
    <form>
      <div className="space-y-12 p-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10  border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Property Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                BHK Type
              </label>
              <div className="mt-2">
                <select
                  id="flat_type"
                  name="flat_type"
                  onChange={handleChange}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>1RK</option>
                  <option>1BHK</option>
                  <option>2BHK</option>
                  <option>3BHK</option>
                  <option>4BHK</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  onChange={handleChange}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Under Construction</option>
                  <option>Ready to Possession</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="flatNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Flat Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="flat_number"
                  onChange={handleChange}
                  id="flat_number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  id="address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="hospitalRadius" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital Radius
              </label>
              <div className="mt-2">
                {/* options of 1km, 2km, 3km, 4km, 5km  */}
                <select
                  id="hospitalRadius"
                  name="hospital_radius"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>1km</option>
                  <option>2km</option>
                  <option>3km</option>
                  <option>4km</option>
                  <option>5km</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="airportRadius" className="block text-sm font-medium leading-6 text-gray-900">
                Airport Radius
              </label>
              <div className="mt-2">
                {/* options of 1km, 5km, 10km, 15km, 20km  */}
                <select
                  id="airportRadius"
                  name="airport_radius"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>1km</option>
                  <option>5km</option>
                  <option>10km</option>
                  <option>15km</option>
                  <option>20km</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="collages" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Collages
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="number_of_collages"
                  onChange={handleChange}
                  id="collages"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input 
                      type="text"
                      name="image"
                      // hardcoded value for now https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600
                      onChange={handleChange}
                      id="image"
                      value="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                     />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-6 py-2 text-sm font-semibold leading-6 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
    </>
  );
}
