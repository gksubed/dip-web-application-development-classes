import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import sculptureList from "./data/sculptureList";
// import "./App.css";

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (parameters) => {
    const apiKey = "icjc67U8rnhdy6R0k9z2v5HxB65dGprq5jaYMEKP";
    // const apiKey = "GurS0wJyr12na3jhvOraArdY3br64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    for (const key in parameters) {
      apiUrl += `&${key}=${parameters[key]}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setError("");
      // Once done use the nested ternary below
      console.log(`Before setting state: ${data}`);
      data.error.code != undefined
        ? setError(data.error.message)
        : setApodData(data);
    } catch (err) {
      console.log(` Catch ${data[0]}`);
      setError(`Error fetching data: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <ApodForm fetchApodData={fetchApodData} />
          {/* <ApodContent apodData={apodData} /> */}
        </div>
      </section>
    </div>
  );
};

export default App;
