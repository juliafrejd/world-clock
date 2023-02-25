function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )} `;
  }
  let kievElement = document.querySelector("#kiev");
  if (kievElement) {
    let kievDateElement = kievElement.querySelector(".date");
    let kievTimeElement = kievElement.querySelector(".time");
    let kievTime = moment().tz("Europe/Kiev");

    kievDateElement.innerHTML = kievTime.format("dddd, MMMM Do YYYY");
    kievTimeElement.innerHTML = `${kievTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )} `;
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    )} `;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone == "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace(`_`, ` `).split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "hh:mm:ss [<small>]A[</small>]"
            )}
            </div>
          </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
