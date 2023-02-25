function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  let KievElement = document.querySelector("#kiev");
  let KievDateElement = KievElement.querySelector(".date");
  let KievTimeElement = KievElement.querySelector(".time");
  let KievTime = moment().tz("Europe/Kiev");

  KievDateElement.innerHTML = KievTime.format("dddd, MMMM Do YYYY");
  KievTimeElement.innerHTML = `${KievTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  let SydneyElement = document.querySelector("#sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("dddd, MMMM Do YYYY");
  SydneyTimeElement.innerHTML = `${SydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  let LondonElement = document.querySelector("#london");
  let LondonDateElement = LondonElement.querySelector(".date");
  let LondonTimeElement = LondonElement.querySelector(".time");
  let LondonTime = moment().tz("Europe/London");

  LondonDateElement.innerHTML = LondonTime.format("dddd, MMMM Do YYYY");
  LondonTimeElement.innerHTML = `${LondonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;
}

updateTime();
setInterval(updateTime, 1000);
