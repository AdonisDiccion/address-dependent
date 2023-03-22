// import { Button, MenuItem, TextField } from "@mui/material";
// import React, { useState } from "react";
// import { Data } from "./addressData";

// const App = () => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedBarangay, setSelectedBarangay] = useState("");

//   // Filter the barangays based on the selected city
//   const barangays = selectedCity
//     // ? Data.barangays.filter((barangay) => barangay.cityName === selectedCity)
//     // : [];
//     ? Data.cities.find((city) => city.cityName === selectedCity).barangayNames
//     : [];

//   // Update the selected city when the user selects a new city
//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//     setSelectedBarangay('')
//   };

//   const handleBarangayChange = (event) => {
//     setSelectedBarangay(event.target.value);
//   };


//   return (
//     <div>
//       <h1>hello</h1>
//       <form>
//         <TextField
//           select
//           type="text"
//           label="city"
//           fullWidth
//           value={selectedCity}
//           onChange={handleCityChange}
//         >
//           {Data.cities.map((city) => (
//             <MenuItem key={city.id} value={city.cityName}>
//               {city.cityName}
//             </MenuItem>
//           ))}
//         </TextField>

//         <TextField
//           select
//           type="text"
//           label="Barangay"
//           fullWidth
//           value={selectedBarangay}
//           onChange={handleBarangayChange}
//           >
//           {barangays.map((barangay , i) => (
//             <MenuItem key={i} value={barangay.barangayNames}>
//               {barangay.barangayNames}
//             </MenuItem>
//           ))}
//         </TextField>

//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };

// export default App;


import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { Data } from "./addressData";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBarangay, setSelectedBarangay] = useState("");

  // Filter the barangays based on the selected city
  const barangays = selectedCity
    ? Data.cities.find((city) => city.cityName === selectedCity).barangayNames
    : [];

  // Update the selected city when the user selects a new city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedBarangay("");
  };

  const handleBarangayChange = (event) => {
    setSelectedBarangay(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedCity, selectedBarangay);
  };

  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          type="text"
          label="city"
          fullWidth
          value={selectedCity}
          onChange={handleCityChange}
        >
          {Data.cities.map((city) => (
            <MenuItem key={city.cityName} value={city.cityName}>
              {city.cityName}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          type="text"
          label="Barangay"
          fullWidth
          value={selectedBarangay}
          onChange={handleBarangayChange}
        >
          {barangays.map((barangay, i) => (
            <MenuItem key={i} value={barangay}>
              {barangay}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default App;
