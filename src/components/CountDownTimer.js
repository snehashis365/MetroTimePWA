import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function CountdownTimer({ nextTrainTime }) {
  const calculateTimeLeft = () => {
    var currentTime = new Date();
    
    // Parse the provided time string
    var timeParts = nextTrainTime.split(":");
    var targetTime = new Date();
    targetTime.setHours(parseInt(timeParts[0], 10));
    targetTime.setMinutes(parseInt(timeParts[1], 10));
    targetTime.setSeconds(0); // Ensure seconds are set to 0 for comparison
    
    // Calculate the time difference in milliseconds
    var difference = targetTime.getTime() - currentTime.getTime();
    
    // Convert milliseconds to hours, minutes, and seconds
    var hoursDifference = Math.floor(difference / (1000 * 60 * 60));
    var minutesDifference = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

    // Construct the difference string
    if (hoursDifference > 0)
        var differenceString = `${hoursDifference < 10 ? `0${hoursDifference}` : hoursDifference}:${minutesDifference < 10 ? `0${minutesDifference}` : minutesDifference}:${secondsDifference < 10 ? `0${secondsDifference}` : secondsDifference}`;
    else if (hoursDifference === 0 && (minutesDifference > 0 || secondsDifference > 0))
        var differenceString = `${minutesDifference < 10 ? `0${minutesDifference}` : minutesDifference}:${secondsDifference < 10 ? `0${secondsDifference}` : secondsDifference}`;
    else
        var differenceString = '00:00'
    return differenceString;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box
    sx={{p: 4}}
    >
      <Typography align='center' variant='h3' sx={{color: 'primary.main'}}>{timeLeft}</Typography>
    </Box>
  );
}

export default CountdownTimer;