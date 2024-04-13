import { Container } from "@mui/material";
import Selector from "./components/selector";
import { useState } from "react";
import CountdownTimer from "./components/CountDownTimer";

function App() {
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

  const [srcStation, setSrcStation] = useState('')
  const [destStation, setDestStation] = useState('')
  const handleSrcChange = (stn) => {
    setSrcStation(stn)
    console.log("Src: " + stn);
  }
  const handleDestChange = (stn) => {
    setDestStation(stn)
    console.log("Dest: " + stn);
  }
  return (
    <Container sx={{bgcolor: "black", height: '100vh', p: 1}}>
      <Selector type="Source" onSelChange={handleSrcChange}/>
      <Selector type="Destination" onSelChange={handleDestChange}/>
      <CountdownTimer nextTrainTime={'23:00'} />
    </Container>
  );
}

export default App;
