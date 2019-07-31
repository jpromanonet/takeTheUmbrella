window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/29ba721fbc0945c16918046de04f4228/${lat},${long}`;
    });
  } else {
    h1.textContent =
      "Please allow geolocation for the service to work properly, thank u!";
  }
});
