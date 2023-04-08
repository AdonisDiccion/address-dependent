import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { Data } from "./addressData";


const App = () => {

  const [Region, setRegion] = useState("")
  const [City, setCity] = useState ("")
  const [Brgy, setBrgy] = useState ([])

  // mapping of ncr cities
  const ncrCities = Data.NCR.map((city) => (
    <MenuItem key={city.id} value={city.cityName}>{city.cityName}</MenuItem>
  ));

  // mapping of calabarzon cities
  const calabarzonCities = Data.CALABARZON.map((city) => (
    <MenuItem key={city.id} value={city.cityName}>{city.cityName}</MenuItem>
  ));
  
  // handle changing of region value
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setCity("");
    setBrgy([]);
  }

  // handle changing of city value
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setBrgy([])
  }

  // handle changing of barangay value
  const handleBrgyChange = (e) => {
    setBrgy(e.target.value);
  }

  // Filter the barangays based on the selected city
  let selectedRegionData;
  if (Region === "NCR") {
    selectedRegionData = Data.NCR;
  } else if (Region === "CALABARZON") {
    selectedRegionData = Data.CALABARZON;
  }
  
  // Filter the barangays based on the selected city
  const barangays = City ? selectedRegionData?.find((city) => city.cityName === City)?.barangayNames : [];



  return (
    <div>
      <h1>Shipping Address</h1>

      <form>
      
        <TextField select fullWidth label="Region" value={Region} onChange={handleRegionChange}>
          {Data.RegionNames.map((rgn) => (
            <MenuItem key={rgn.id} value={rgn.name}>{rgn.name}</MenuItem>
          ))}
        </TextField>

        <TextField select fullWidth label="City" value={City} onChange={handleCityChange}>
          {Region === "NCR" ? ncrCities : calabarzonCities}
        </TextField>

        <TextField select fullWidth label="Barangay" value={Brgy} onChange={handleBrgyChange}>
            {barangays.map((brgy) => (
              <MenuItem key={brgy} value={brgy}>{brgy}</MenuItem>
            ))}
           
        </TextField>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
          sx={{ mx: "auto" }}
        >
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default App;

// import { Button, MenuItem, TextField } from "@mui/material";
// import React, { useState } from "react";
// import { Data } from "./addressData";

// const App = () => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedBarangay, setSelectedBarangay] = useState("");

//   // Filter the barangays based on the selected city
//   const barangays = selectedCity
//     ? Data.cities.find((city) => city.cityName === selectedCity).barangayNames
//     : [];

//   // Update the selected city when the user selects a new city
//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//     setSelectedBarangay("");
//   };

//   const handleBarangayChange = (event) => {
//     setSelectedBarangay(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(selectedCity, selectedBarangay);
//   };

//   return (
//     <div>
//       <h1>hello</h1>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           select
//           type="text"
//           label="city"
//           fullWidth
//           value={selectedCity}
//           onChange={handleCityChange}
//         >
//           {Data.cities.map((city) => (
//             <MenuItem key={city.cityName} value={city.cityName}>
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
//         >
//           {barangays.map((barangay, i) => (
//             <MenuItem key={i} value={barangay}>
//               {barangay}
//             </MenuItem>
//           ))}
//         </TextField>

//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };

// export default App;


// const [selectedRegion, setSelectedRegion] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedBarangay, setSelectedBarangay] = useState("");


//   const ncrCities = Data.NCR.map((city) => (
//     <MenuItem key={city.id} value={city.cityName}>
//       {city.cityName}
//     </MenuItem>
//   ));

//   const calabarzonCities = Data.CALABARZON.map((city) => (
//     <MenuItem key={city.id} value={city.cityName}>
//       {city.cityName}
//     </MenuItem>
//   ));

  // // Filter the barangays based on the selected city
  // const barangays = selectedCity
  //   ? Data.regions.find((city) => city.cityName === selectedCity).barangayNames
  //   : [];

//   // Update the selected region when the user selects a new city
//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//     setSelectedCity("");

//     setSelectedCity(event.target.value === "NCR" ? ncrCities[0].props.value : calabarzonCities[0].props.value);
//   };

//   // Update the selected city when the user selects a new city
//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//     setSelectedBarangay("");
//   };

//   const handleBarangayChange = (event) => {
//     setSelectedBarangay(event.target.value);
//   };


{/* <TextField
        type="text"
        select
        label="Region"
        fullWidth
        size="small"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        <MenuItem value="NCR">NCR</MenuItem>
        <MenuItem value="CALABARZON">CALABARZON</MenuItem>
      </TextField>

        <TextField
          select
          type="text"
          label="City"
          fullWidth
          value={selectedCity}
          onChange={handleCityChange}
          size="small"
        >
          {Data.regions.map((city) => (
            <MenuItem key={city.id} value={city.cityName}>
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
          size="small"
        >
          {barangays.map((barangay, i) => (
            <MenuItem key={i} value={barangay}>
              {barangay}
            </MenuItem>
          ))}
        </TextField> */}