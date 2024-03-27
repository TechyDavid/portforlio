// let currentTime = new Date()
// let hour = currentTime.getHours()
// let min = currentTime.getMinutes()

// document.getElementById("current-time").innerHTML ="Time:" + hour + ":" + min; 

// function updateTime(){
//     var currentTime = new Date();
//     var hours = currentTime.getHours( );  
//     var minutes = currentTime.getMinutes();  
//     var seconds = currentTime.getSeconds();  
    
//     if (hours < 10) {
//         hours = '0' + hours;
//     }  
//     if (minutes < 10) {  
//         minutes = '0' + minutes;
//     }  
//     document.getElementById("current-time").innerHTML = hours + ':' + minutes + ':' + seconds;
// }
const timeElement = document.getElementById('current-time');

// Define the function to update the time
const updateTime = () => {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const timeString = now.toLocaleString('en-US', options);

  // Update the time element with the current time
  timeElement.innerHTML ="Time: " + timeString;
};

// Call the updateTime function every second
setInterval(updateTime, 1000);

// Call the updateTime function once at the start to display the current time
updateTime();