'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// visit for current API => https://restcountries.com/
const countriesApi = 'https://restcountries.com/v3.1/';

///////////////////////////////////////

/*
// Our first AJAX call: XMLHttpRequest
const getCountryData = function (countryName) {
  const country = countryName.toLowerCase();
  const request = new XMLHttpRequest();
  request.open('GET', `${countriesApi}/name/${country}`);
  request.send(); // this will run in bg asynchronously to fetch data

  request.addEventListener('load', function () {
    const responseData = JSON.parse(this.responseText);
    if (responseData) {
      //   console.log(responseData);
      const data = country === 'india' ? responseData[1] : responseData[0];
      const curreny =
        country === 'india'
          ? 'INR'
          : country === 'usa'
          ? 'USD'
          : country === 'portugal'
          ? 'EUR'
          : data.currencies[0];
      //   console.log(curreny);
      const languages =
        country === 'india'
          ? 'hin'
          : country === 'usa'
          ? 'eng'
          : country === 'portugal'
          ? 'por'
          : data.languages[0];
      const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[languages]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[curreny].symbol
            } ${data.currencies[curreny].name}</p>
          </div>
        </article>
        `;
      countriesContainer.insertAdjacentHTML('afterbegin', html);
      countriesContainer.style.opacity = 1;
    }
  });
};
// below calls will happend simultaneously without waiting for responses, load will be async
getCountryData('india');
getCountryData('usa');
getCountryData('portugal');
*/

/*
// Welcome to callback hell
const renderCountry = function (data, country, className = '') {
  const curreny =
    country === 'india'
      ? 'INR'
      : country === 'bangladesh'
      ? 'BDT'
      : country === 'portugal'
      ? 'EUR'
      : data.currencies[0];
  const languages =
    country === 'india'
      ? 'hin'
      : country === 'usa'
      ? 'eng'
      : country === 'portugal'
      ? 'por'
      : data.languages[0];
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.official}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${
            data.languages[languages]
          }</p>
          <p class="country__row"><span>💰</span>${
            data.currencies[curreny].symbol
          } ${data.currencies[curreny].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (countryName) {
  // AJAX call country 1
  const country = countryName.toLowerCase();
  const request = new XMLHttpRequest();
  request.open('GET', `${countriesApi}/name/${country}`);
  request.send(); // this will run in bg asynchronously to fetch data

  request.addEventListener('load', function () {
    const responseData = JSON.parse(this.responseText);
    if (responseData) {
      //   console.log(responseData);
      const data = country === 'india' ? responseData[1] : responseData[0];
      // render country 1
      renderCountry(data, country);
      //   get neighbour country 2
      const neighbour = data.borders?.[0];
      if (!neighbour) return;
      //   console.log(neighbour);
      // AJAX call country 2 -> this is dependent on previous callback
      const request2 = new XMLHttpRequest();
      request2.open('GET', `${countriesApi}/alpha/${neighbour}`);
      request2.send(); // this will run in bg asynchronously to fetch data
      request2.addEventListener('load', function () {
        const responseData = JSON.parse(this.responseText)[0];
        if (responseData) {
          //   console.log(responseData, responseData.name.common.toLowerCase());
          renderCountry(
            responseData,
            responseData.name.common.toLowerCase(),
            'neighbour'
          );
        }
      });
    }
  });
};
getCountryAndNeighbour('india');
// getCountryAndNeighbour('portugal');

// The below nested callbacks or callback hell will be executed synchronously
setTimeout(() => {
  console.log('1 passed');
  setTimeout(() => {
    console.log('2 passed');
    setTimeout(() => {
      console.log('3 passed');
    }, 1000);
  }, 1000);
}, 1000);
*/

/*
// Promises and the fetch API
// Promise is placeholder for future result of aysnc call and used to escape callback hell
const request = fetch(`${countriesApi}/name/india`);
console.log(request);
*/

/*
// Consuming promises
const renderCountry = function (data, country, className = '') {
  //   console.log(data);
  const curreny =
    country === 'india'
      ? 'INR'
      : country === 'bangladesh'
      ? 'BDT'
      : country === 'portugal'
      ? 'EUR'
      : data.currencies[0];
  const languages =
    country === 'india'
      ? 'hin'
      : country === 'bangladesh'
      ? 'ben'
      : country === 'portugal'
      ? 'por'
      : data.languages[0];
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[languages]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[curreny].symbol
            } ${data.currencies[curreny].name}</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('afterbegin', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage = 'Something went wrong: ') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok)
      // Throwing errors manually
      throw new Error(`${errorMessage} (${response.status}): `);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`${countriesApi}/name/${country}`)
//     .then(
//       //   response => response.json() // returns promise
//       //   err => alert(err) // to handle error for a particular promise
//       response => {
//         console.log(response);
//         if (!response.ok)
//           // Throwing errors manually
//           throw new Error(`Country not found (${response.status})`);
//         return response.json();
//       }
//     )
//     .then(res => {
//       renderCountry(res[1], 'india');
//       //   Chaining promises
//       const neighbour = res[1].borders?.[0];
//       if (!neighbour) return;
//       //   Country 2
//       return fetch(`${countriesApi}/alpha/${neighbour}`);
//       //   don't implement below, as it will be back to callback hell
//       //   fetch(`${countriesApi}/alpha/${neighbour}`).then(neighbourResponse => neighbourResponse.json())
//       //   .then(data => renderCountry(data[0], 'bangladesh', 'neighbour'));
//     })
//     .then(neighbourResponse => neighbourResponse.json())
//     .then(data => renderCountry(data[0], 'bangladesh', 'neighbour'))
//     .catch(err => {
//       // to handle promise errors globally
//       console.error(err);
//       renderError(`Something went wrong: ${err.message}`); // display error on UI
//     }) // catch also returns promise
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`${countriesApi}/name/${country}`, 'Country not found')
    .then(res => {
      renderCountry(res[1], 'india');
      //   Chaining promises
      const neighbour = res[1].borders?.[0];
      //   const neighbour = '';
      if (!neighbour) throw new Error('No neighbour found!');
      //   Country 2
      return getJSON(`${countriesApi}/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'bangladesh', 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong: ${err.message}`); // display error on UI
    }) // catch also returns promise
    .finally(() => (countriesContainer.style.opacity = 1));
};

// Handling rejected promises
btn.addEventListener('click', function () {
  getCountryData('india');
});
*/

/* 
///////////////////////////////////////
// Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀

// Solution:

const renderCountry = function (data) {
  //   console.log(data);
  let currency, language;
  if (data.name.common.toLowerCase() === 'germany') {
    currency = 'EUR';
    language = 'deu';
  }
  if (data.name.common.toLowerCase() === 'british indian ocean territory') {
    currency = 'USD';
    language = 'eng';
  }
  if (data.name.common.toLowerCase() === 'south africa') {
    currency = 'ZAR';
    language = 'afr';
  }
  const html = `
          <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.official}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[language]
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[currency].symbol
              } ${data.currencies[currency].name}</p>
            </div>
          </article>
          `;
  countriesContainer.insertAdjacentHTML('afterbegin', html);
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const getJSON = function (url, errorMessage = 'Something went wrong: ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status}): `);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`${countriesApi}/name/${country}`, 'Country not found')
    .then(res => {
      renderCountry(res[0], 'germany');
    })
    .catch(err => {
      renderError(`Something went wrong: ${err.message}`); // display error on UI
    }) // catch also returns promise
    .finally(() => (countriesContainer.style.opacity = 1));
};

// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
const whereAmI = function (lat, lng) {
  // 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
  // The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=385333053384262873198x9164 `
  )
    .then(res => {
      // 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
      if (!res.ok)
        throw new Error(`Error while fetching data (${res.status}): `);
      return res.json();
    })
    .then(response => {
      // 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
      //   console.log(response);
      console.log(`You are in ${response.city}, ${response.country}`);
      // 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
      // 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
      getCountryData(response.country);
    })
    // 4. Chain a .catch method to the end of the promise chain and log errors to the console
    .catch(err => console.log(err));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

/*
// The event loop in practice
console.log('Test start'); // 1st
// 5th since callback queue has less priority over microtasks queue
setTimeout(() => console.log('0 sec timer'), 0);
// 3rd since microtasks queue has priority over callback queue
Promise.resolve('Resolved promise').then(res => console.log(res));
// 4th since microtasks queue has priority over callback queue
Promise.resolve('Resolved long promise').then(res => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log(res);
});
console.log('Test end'); // 2nd
*/

/*
// Building a simple promise
// build promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery promise is in progress...');
  setTimeout(() => {
    Math.random() >= 0.5 ? resolve('You win') : reject(new Error('You loose'));
  }, 2000);
});
// consume promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// Promisifying is to convert async behaviour to promise based
// Promisifying setTimeout function
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('Waited for 2 seconds');
    return wait(1); // promise chaining
  })
  .then(() => console.log('Waited for 1 more second'));
// below will execute immediately
Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('error occurred')).then(res => console.error(res));
*/

/*
// Promisifying the geolocation api
// navigator.geolocation.getCurrentPosition(
//   pos => console.log(pos),
//   err => console.log(err)
// );
// console.log('Getting position');
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   pos => resolve(pos),
    //   err => reject(err)
    // );
    // above can be replaced with below
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));
const renderCountry = function (data) {
  console.log(data);
  let currency, language;
  if (data.name.common.toLowerCase() === 'india') {
    currency = 'INR';
    language = 'hin';
  }
  const html = `
            <article class="country">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[language]
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[currency].symbol
                } ${data.currencies[currency].name}</p>
              </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const whereAmI = function () {
  getPosition()
    .then(pos => {
      //   console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=385333053384262873198x9164`
      );
    })
    .then(res => {
      //   console.log(res);
      if (!res.ok)
        throw new Error(`Error while fetching data (${res.status}): `);
      return res.json();
    })
    .then(response => {
      //   console.log(response);
      console.log(`You are in ${response.city}, ${response.country}`);
      return fetch(`${countriesApi}/name/${response.country}`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error(`Error while fetching data (${res.status}): `);
      return res.json();
    })
    .then(data => renderCountry(data[1]))
    .catch(err => console.log(err))
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', whereAmI);
*/

/* 
///////////////////////////////////////
// Coding Challenge #2
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

// Solution:

// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
const images = document.querySelector('.images');
let image;
const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    image = document.createElement('img');
    image.src = imgPath;
    resolve(images.insertAdjacentElement('beforeend', image)),
      reject('Failed to load image');
  });
};

// 2. Consume the promise using .then and also add an error handler;
createImage('../starter/img/img-1.jpgs')
  .then(res => res)
  .catch(err => console.log(err));

// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2).then(() => {
  console.log('Waited for 2 seconds');

  // 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
  image.style.display = 'NONE';
  createImage('../starter/img/img-2.jpgs')
    .then(res => res)
    .catch(err => console.log(err));

  // 5. After the second image has loaded, pause execution for 2 seconds again;
  wait(2).then(() => {
    console.log('Waited for 2 seconds');

    // 6. After the 2 seconds have passed, hide the current image.
    image.style.display = 'NONE';
  });
});


// Below is tutorial solution and above is mine
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
*/

/*
// Consuming promises with async/await
// const whereAmI = function (country) {
//   fetch(`${countriesApi}/name/${country}`)
//     .then(res => res.json())
//     .then(response => console.log(response));
// };
// below aysnc await will consume promise without using then() and implement sync call
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  // Error handling with try-catch
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=385333053384262873198x9164`
    );
    if (!resGeo.ok) throw new Error('Problem fetching co-ordinates');
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(`${countriesApi}/name/${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem fetching country');
    const data = await res.json();
    // console.log(data);
    // Returning resolved values from async function (async functions always return promise)
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error('Something went wrong: ' + err);
    // Reject promise return from async function
    throw err;
  }
};
console.log('Execute first global call');
// console.log(whereAmI());
// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message))
//   .finally(() => console.log('Finished getting location'));
// converted above promise consume logic to below async await logic
(async function () {
  try {
    const location = await whereAmI();
    console.log(location);
  } catch (err) {
    console.log(err.message);
  }
  console.log('Finished getting location');
})();
console.log('Execute second global call');
*/

/*
// Running promises in parallel
const getJSON = function (url, errorMessage = 'Something went wrong: ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status}): `);
    return response.json();
  });
};
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`${countriesApi}/name/${c1}`);
    // const [data2] = await getJSON(`${countriesApi}/name/${c2}`);
    // const [data3] = await getJSON(`${countriesApi}/name/${c3}`);
    // above promises will load separately and below combinator function will run in parallel
    const data = await Promise.all([
      getJSON(`${countriesApi}/name/${c1}`),
      getJSON(`${countriesApi}/name/${c2}`),
      getJSON(`${countriesApi}/name/${c3}`),
    ]);
    // console.log(data1.capital, data2.capital, data3.capital);
    console.log(data);
    console.log([...data.flatMap(d => d[0].capital)]);
    // all promises will fail in case of a single promise failure
  } catch (err) {
    console.log(err);
  }
};
get3Countries('india', 'usa', 'china');
*/

/*
// Other promise combinators: race, allSettled and any
const getJSON = function (url, errorMessage = 'Something went wrong: ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status}): `);
    return response.json();
  });
};
// 1.Promise.race
// It will return a single response after fetching data for a promise in least time
(async function (c1, c2, c3) {
  try {
    const data = await Promise.race([
      getJSON(`${countriesApi}/name/canada`),
      getJSON(`${countriesApi}/name/india`),
      getJSON(`${countriesApi}/name/usa`),
    ]);
    console.log(data[0]);
  } catch (err) {
    console.log(err);
  }
})(); // iffy function (function that calls itself while load)
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};
Promise.race([getJSON(`${countriesApi}/name/canada`), timeout(0.01)])
  .then(res => console.log(res))
  .catch(err => console.error(err));
// 2.Promise.allSettled
// It is reverse of Promise.all, it won't short-circuit and returns all promises response
Promise.allSettled([
  Promise.resolve('Resolved'),
  Promise.reject('Rejected'),
  Promise.resolve('Resolved'),
]).then(res => console.log(res));
// 3.Promise.any
// It returns the first fullfilled promise and ignores rejected promises
Promise.any([
  Promise.resolve('Resolved'),
  Promise.reject('Rejected'),
  Promise.resolve('Resolved'),
]).then(res => console.log(res));
*/

/* 
///////////////////////////////////////
// Coding Challenge #3
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
// Solution:

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// PART 1
// Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
// Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
const loadNPause = async function () {
  try {
    // load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    // load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
loadNPause();

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
const loadAll = async function (imgArr) {
  try {
    // 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
    const imgs = imgArr.map(async img => await createImage(img)); // 3 promises returned
    // 3. Check out the 'imgs' array in the console! Is it like you expected?
    console.log(imgs);
    // 4. Use a promise combinator function to actually get the images from the array 😉
    const data = await Promise.all(imgs);
    console.log(data);
    // 5. Add the 'paralell' class to all the images (it has some CSS styles).
    data.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
