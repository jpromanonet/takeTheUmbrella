window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>{
        console.log(position)
      });
  }else{
      h1.textContent = 'Please allow geolocation for the service to work properly, thank u!'
  }
});