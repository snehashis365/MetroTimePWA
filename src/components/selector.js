import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from "@mui/material";

const stations = [
    'SALT LAKE SECTOR V',
    'KARUNA MOYEE',
    'CENTRAL PARK',
    'CITY CENTER',
    'BENGAL CHEMICAL',
    'SALT LAKE STADIUM',
    'PHOOL BAGAN',
    'SEALDAH'
  ];

const Selector = ({onSelChange, type}) => {
    //const [station, setStation] = useState('')
    const handleChange = (event) => {
        //setStation(event.target.value);
        console.log(stations[event.target.value]);
        onSelChange(event.target.value)
    }

    return(
    <Box sx={{m: 2}}>
        <FormControl fullWidth>
        <InputLabel>{type}</InputLabel>
        <Select
          variant="filled"
          //value={station}
          label="Station"
          onChange={handleChange}
        >
            <MenuItem value=""><em>Select a station</em></MenuItem>
            {stations.map((stationName, index) => (
                <MenuItem key={index} value={index}>
                    {stationName}
                </MenuItem>
            ))}
        </Select>
        <FormHelperText>Select {type} station</FormHelperText>
      </FormControl>
    </Box>
    )
}

export default Selector;