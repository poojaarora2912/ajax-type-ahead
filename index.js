const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
 .then(data => data.json())
 .then(data => cities.push(...data));

// console.log(cities);

function findmatch(wordmatch, cities){
     return cities.filter(info => {
        const regex = new RegExp (wordmatch, 'gi');
        return info.city.match(regex);
        // || data.state.match(regex)
    });
    
}

function display(){
    const matches = findmatch(this.value, cities);
    console.log(matches);
}

const search = document.querySelector('.search');

search.addEventListener('change', display);
search.addEventListener('keyup', display);