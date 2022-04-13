// Your code here
// GET https://restcountries.com/v2/all
const countriesAPI = "https://restcountries.com/v2/all";
const fetchCountries = async () => {
  try {
    const res = await fetch(countriesAPI);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
////method that accept a country name as input and search for that country, either by international or native name
const fetchCountryByUserInput = async (userInput) => {
  const countryLists = await fetchCountries();
  countryLists.filter((country) => {
    if (country.name === userInput||country.nativeName===userInput) {
      console.log(country);
    }
  });
};

/////method that accepts a country name, find out what other countries it's bordering with
const fetchCountryAndNeighbors = async (name) => {
  const countries = await fetchCountries();
  console.log(countries);
  const neighbors = await countries.filter((country) => {
    if (country.name === name || country.nativeName === name) {
      return console.log(
        `The neighbouring countries of ${name} are ${country.borders}`
      );
    }
  });
};

fetchCountryAndNeighbors("Finland");
fetchCountryByUserInput('Suomi');
