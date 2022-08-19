import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("europe");

 
  useEffect(() => {
    fetch(` https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, [region]);

  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="mb-3 xl:w-96">
          <select
            name="region"
            onChange={(e) => setRegion(e.target.value)}
            id="countries"
            className="form-select 
                  appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 
                  focus:bg-white 
                  focus:border-blue-600 
                  focus:outline-none"
          >
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="americas">Americas</option>
            <option value="oceania">Oceania</option>
          </select>

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-8">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6">Country</th>
                <th className="py-3 px-6">capital</th>
              </tr>
            </thead>
            <tbody>
            {countries.map((country) => {
              return (
                <>
                 
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <td>
                        <h3>{country.name.common}</h3>
                      </td>
                      <td>
                        <p>{country.capital}</p>
                      </td>
                    </tr>
                   
                 
                </>
             
              );
              
            })}            

                </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
