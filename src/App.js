import { Container, Typography } from "@mui/material";
import Selector from "./components/selector";
import { useEffect, useState } from "react";
import CountdownTimer from "./components/CountDownTimer";
import { getNextTrainTime, convertTo12HourFormat } from "./components/TrainTimes";

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

  const [srcStation, setSrcStation] = useState(0)
  const [destStation, setDestStation] = useState(7)
  
  const [nextTime, setNextTime] = useState(getNextTrainTime(stations[srcStation]))

  const handleEnd = () => {
    setNextTime(getNextTrainTime(stations[srcStation]))
  }

  useEffect(() => {
    setNextTime(getNextTrainTime(stations[srcStation]))
  }, [srcStation])

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
      <Selector type="Source" defaultStn={srcStation} onSelChange={handleSrcChange}/>
      <Selector type="Destination" defaultStn={destStation} onSelChange={handleDestChange}/>
      <Typography sx={{color: 'white', m: 4}}>Selected {stations[srcStation]} as source and {stations[destStation]} as destination</Typography>
      <CountdownTimer nextTrainTime={nextTime} onEnd={handleEnd} />
    </Container>
  );
}

export default App;
