const addBtn = document.getElementById('add');
const inputAdd = document.getElementById('inputAdd');
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');



function addItem() {
    const text = inputAdd.value;
    if (text !== '') { // Provjeram je li polje prazno
        const li = document.createElement('li');
        li.textContent = text; // Postavljanje teksta novog elementa
        list.appendChild(li); // Dodavanje novog elementa u <ul> popis
        inputAdd.value = ''; // Vracam input polje prazno
    }
};


function removeItem() {
    const liElements = list.getElementsByTagName('li'); // Dobivanje svih <li> elemenata
    const lastLiElement = liElements[liElements.length -1]; // Dobivanje posljednjeg <li> elementa

    if (lastLiElement) { // Provjeravam postoji li <li> element za brisanje
        list.removeChild(lastLiElement); // Uklanjanje posljednjeg <li> elementa
    }
};


addBtn.addEventListener('click', addItem);
removeBtn.addEventListener('click', removeItem);


document.getElementById('getPosts').addEventListener('click', getPosts)

// function getPosts(){
//     fetch("https://jsonplaceholder.typicode.com/posts") // Ova linija koristi fetch api za slanje zahtjeva prema urlu kako bi dohvatio podatke
//     .then((res) => res.json()) //Ova linija tretira rezultat HTTP zahtjeva kao obećanje (Promise) i poziva .json() metodu kako bi pretvorila odgovor u JSON format.
//     .then((data) => { //Kada su podaci dobiveni, ova linija definira funkciju koja će se izvršiti kada su podaci spremni. Ovdje se podaci nazivaju data.
//         let output ='<h2>Posts</h2>'; //Ova linija stvara varijablu output i dodjeljuje joj HTML oznaku <h2> koja prikazuje naslov "Posts".
//         data.forEach(function(post){ //Ova linija prolazi kroz svaki post u dobivenim podacima i izvršava zadanu funkciju za svaki od njih.
//             output+= `
//                 <div>
//                   <h3>${post.title}</h3>
//                   <p>${post.body}</p>
//                 </div>
//             `; //Ovdje se za svaki post dodaje HTML kod koji prikazuje naslov i tijelo posta unutar <div> elementa.
//         });
//         document.getElementById('output').innerHTML = output;
//     })
// }

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //await se koristi kako bi se sačekao odgovor od servera prije nego što se nastavi s izvođenjem koda.
        const data = await response.json();
        let output = '<h2>Posts</h2>';
        data.forEach(function(post) { //data niz objekata, gdje svaki objekat postavlja jedan post sa atributima title i body
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    } catch (error) {   //Ovaj blok catch osigurava da se greške neće proširiti i prekinuti izvođenje koda.
        console.error(error);
    }
}


const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};
 console.log(myCar)


const turtles = ["Raphael", "Michelangelo", "Leonardo", "Donatello"]

function turtlePower(turtles) {
  return "Donatello"
}




function addition(a, b){
    const result = a + b;
    return result;
}

const additions = (a,b) => a + b;

const person = {
    firstName:"Emir",
    lastName:"Muratspahic",
    email:"emir@gmail.com"
}
console.log(person)



const fruit = ["apple", "banana", "orange", "mango", "tomato"]

console.log(fruit)

const fruits = ["apple", "banana", "orange"];
const result = fruits.join("-");
console.log(result)



function getAllParaElems() {
    const allParas = document.getElementsByTagName("p");
    const num = allParas.length;
    console.log(allParas);
}

function div1ParaElems() {
    const div1 = document.getElementById("div1");
    const div1Paras = div1.getElementsByTagName("p");
    const num = div1Paras.length;
    console.log(div1Paras)
}

function div2ParaElems() {
    const div2 = document.getElementById("div2");
    const div2Paras = div2.getElementsByTagName("p");
    const num = div2Paras.length;
    console.log(div2Paras)
}


const info = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
    isMarried: true
}

    for(const key in info) {
      console.log(key, info[key])
    }


//find

const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

const results = inventory.find(({ name }) => name === "cherries");

console.log(results);


//forEach
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

//.map()

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr);

//addEventListener

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
};


//filter

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const add = words.filter((word) => word.length > 6);

console.log(add);



//Form Validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
 e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove("success")
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const reg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

   if(emailValue === '') {
    setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 5 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2)
        saveUserData(usernameValue, emailValue, passwordValue);
    }
};

const saveUserData = (username, email, password) => {
  const userData = {
    username: username,
    email: email,
    password: password
  };
  localStorage.setItem('userData', JSON.stringify(userData));
};

const loginForm = document.getElementById('formLogin');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const em = document.getElementById('userEmail').value.trim();
  const password = document.getElementById('passwordd').value.trim();

  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData && userData.email === em && userData.password === password) {
      alert('Uspjesna prijava');
  } else {
    alert("Prijava nije uspjesna");
  }
});




/* Github Search Users By Username API */

document.getElementById('searchForm').addEventListener('submit', searchUser);

async function searchUser(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    if (userData.message === 'Not Found') {
        displayError('User not found');
    } else {
        displayUserProfile(username, userData);
    }
}

function displayUserProfile(username, user) {
    const userProfile = document.getElementById('userProfile');
    userProfile.innerHTML = `
        <h2>${user.name}</h2>
        <p>Username: ${username}</p>
        <img src="${user.avatar_url}" alt="${user.name}">
        <p>${user.bio ? user.bio : 'No bio available'}</p>
        <a href="${user.html_url}" target="_blank">View your profile in GitHub</a>
    `;
}

function displayError(message) {
    const userProfile = document.getElementById('userProfile');
    userProfile.innerHTML = `<p>${message}</p>`;
}



//POKEMON FETCH API//

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
    pokemonName.value = ""
};

///CALCULATOR///

const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener('click', () => {
  if (value == "clear") {
    input = "";
       display_input.innerHTML = "";
       display_output.innerHTML = "";
         } else if (value == "backspace") {
           input = input.slice(0, -1);
           display_input.innerHTML = CleanInput(input);
        } else if (value == "=") {
           let result = eval(PerpareInput(input));

           display_output.innerHTML = CleanOutput(result);
        } else if (value == "brackets") {
           if (
            input.indexOf("(") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") < input.lastIndexOf(")")
           ) {
               input += "(";
            } else if (
                input.indexOf("(") != -1 &&
                input.indexOf(")") == -1 ||
                input.indexOf("(") != -1 &&
                input.indexOf(")") != -1 &&
                input.lastIndexOf("(") > input.lastIndexOf(")")
            ) {
               input += ")"
            }

           display_input.innerHTML = CleanInput(input);
         } else {
            if (ValidateInput(value)) {
                input += value;
                display_input.innerHTML = CleanInput(input);
            }
        }
    })
}

function CleanInput(input) {
   let input_array = input.split("");
   let input_array_length = input_array.length;

    for (let i = 0; i < input_array_length; i++) {
        if (input_array[i] == "*") {
            input_array[i] = ` <span class="operator">x</span> `;
        } else if (input_array[i] == "/") {
            input_array[i] = ` <span class="operator">÷</span> `;
        } else if (input_array[i] == "+") {
            input_array[i] = ` <span class="operator">+</span> `;
        } else if (input_array[i] == "-") {
            input_array[i] = ` <span class="operator">-</span> `;
        } else if (input_array[i] == "(") {
            input_array[i] = `<span class="brackets">(</span>`;
        } else if (input_array[i] == ")") {
            input_array[i] = `<span class="brackets">)</span>`;
        } else if (input_array[i] == "%") {
            input_array[i] = `<span class="percent">%</span>`;
        }
    }

    return input_array.join("");
}

function CleanOutput (output) {
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");


    if (output_array.length > 3) {
        for (let i = output_array.length - 3; i > 0; i -= 3) {
            output_array.splice(i, 0, ",");
        }
    }


    if (decimal) {
        output_array.push(".");
        output_array.push(decimal);
    }

    return output_array.join("");
}

function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (value == "." && last_input == ".") {
        return false;
    }

    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false;
        } else {
            return true;
        }
    }

    return true;
}

function PerpareInput (input) {
    let input_array = input.split("");

    for (let i = 0; i < input_array.length; i++) {
        if (input_array[i] == "%") {
            input_array[i] = "/100";
        }
    }

    return input_array.join("");
}



// WEATHER APP WITH API //


const apiKey="916a1735be36a9f08eef799784785e55";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox =document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);


    if(response.status == 400){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else{
        var data = await response.json()
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    // if(data.weather[0].main == "Clouds"){
    //     weatherIcon.src = "images/clouds.png";
    // }
    // else if (data.weather[0].main == "Clear"){
    //     weatherIcon.src= "images/clear.png";
    // }
    // else if (data.weather[0].main == "Rain"){
    //     weatherIcon.src="images/rain.png";
    // }
    // else if (data.weather[0].main == "Drizzle"){
    //     weatherIcon.src="images/drizzle.png";
    // }
    // else if (data.weather[0].main == "Mist"){
    //     weatherIcon.src="images/mist.png";
    // }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



// RESTCOUNTRY APP WITH API //

const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data);
        enableSearch();
    });
}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) => {
    return `
        <div class="country-div">
            <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Region: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
    `;
}

const searchCountry = () => {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const countryDivs = document.querySelectorAll('.country-div');

    countryDivs.forEach(countryDiv => {
        const countryName = countryDiv.querySelector('h2').textContent.toLowerCase();
        if (searchTerm.length === 2 && countryName.startsWith(searchTerm)) {
            countryDiv.style.display = 'block';
        } else if (searchTerm.length !== 2 && countryName.includes(searchTerm)) {
            countryDiv.style.display = 'block';
        } else {
            countryDiv.style.display = 'none';
        }
    });
};

const enableSearch = () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchCountry);
};
loadCountryAPI();

//QUIZ APP//


const quizData = [
    {
        question: "Koji je glavni grad Indonesie?",
        a: "Lima",
        b: "Havana",
        c: "Islamabad",
        d: "Jakarta",
        correct: "d",
    },
    {
        question: "Koji je glavni grad Venacuele?",
        a: "Manila",
        b: "Caracas",
        c: "Yerevan",
        d: "Singapore",
        correct: "b",
    },
    {
        question: "Koje godine je poceo prvi svjetski rat?",
        a: "1914",
        b: "1920",
        c: "1910",
        d: "1915",
        correct: "a",
    },
    {
        question: "Koji je glavni grad Kube?",
        a: "Jakarta",
        b: "Havana",
        c: "Riga",
        d: "Lima",
        correct: "b",
    },
];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('next')
let currentQuiz = 0
let score = 0
loadQuiz()


function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button id="reload" onclick="location.reload()">Reload</button>
           `
       }
    }
})

