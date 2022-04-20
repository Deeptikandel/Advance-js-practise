// Your code here
// GET https://restcountries.com/v2/all
const countriesAPI = "https://restcountries.com/v2/all";
const fetchCountries = async (API) => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
////method that accept a country name as input and search for that country, either by international or native name
const fetchCountryByUserInput = async (userInput) => {
  const countryLists = await fetchCountries(countriesAPI);
  countryLists.filter((country) => {
    if (country.name === userInput || country.nativeName === userInput) {
      console.log(country);
    }
  });
};

/////method that accepts a country name, find out what other countries it's bordering with
const fetchCountryAndNeighbors = async (fname) => {
  const countries = await fetchCountries(countriesAPI);
  // console.log(countries);
  const neighbors = await countries.filter((country) => {
    if (country.name === fname || country.nativeName === fname) {
      return console.log(
        `The neighbouring countries of ${fname} are ${country.borders}`
      );
    }
  });
};

//// method that accepts the code (2 characters) of a language, find out what countries are speaking it
const fetchLanguage = async (code) => {
  const countryLanguage = await fetchCountries(countriesAPI);
  const languageSpoken = await countryLanguage.filter((country) => {
    return country.languages.some((language) => language.iso639_1 === code);
  });
  console.log(languageSpoken);
  languageSpoken.map((lang) => console.log(lang.name));
};

//alternative method

// const fetchLanguage = async (lang) => {
//   const countryLanguage = await fetchCountries(`https://restcountries.com/v2/lang/${lang}`);
//   const languageSpoken = await countryLanguage.map(
//     (country) => console.log(country.name)
//   )
// };
// fetchLanguage("fi");

/// method that accepts a population number (in millions), find out what countries have more people than that
const fetchPopulation = async (population) => {
  const countryPopulation = await fetchCountries(countriesAPI);
  countryPopulation.filter((country) => {
    if (country.population >= population) {
      return console.log(`${country.name} :${country.population}`);
    }
  });
};

fetchPopulation(1000000);
fetchLanguage("en");
fetchCountryAndNeighbors("Finland");
fetchCountryByUserInput("Suomi");

