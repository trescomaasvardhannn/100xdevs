function updateCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
    // Use carriage return to overwrite the previous line
    process.stdout.write('\rCurrent Time: ' + currentTime);
  }
  
  // Update the time every second
  setInterval(updateCurrentTime, 1000);
  