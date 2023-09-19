"use strict";

const search = document.querySelector("#search");
const userName = document.querySelector("#userName");
const name = document.querySelector("#name");
const about = document.querySelector("#about");
const loc = document.querySelector("#location");
const img = document.querySelector("img");
const historyArr = [];
const historyDropDown = document.querySelector("#history");
const input = document.querySelector("input");
search.addEventListener("submit", async function(event){
    
    event.preventDefault();

    const url = `https://api.github.com/users/${input.value}`;
    const response = await get(url);
    userName.innerText = response.login;
    name.innerText = response.name;
    about.innerText = response.bio;
    loc.innerText = response.location;
    img.src = response.avatar_url;

    historyArr.push(input.value);
    console.log(historyArr);
    sessionStorage.setItem(history, historyArr);
    console.log(sessionStorage.getItem(history));
    const option = document.createElement("option");
    option.innerText = input.value;
    ;
    if (response.login == input.value){
        input.value = "";
        historyDropDown.append(option)
    }
});
// const history = document.getElementById(history);
historyDropDown.addEventListener("change", async function (char) {
    const one = char.target[1];
    const two = char.target[2];
    const three = char.target[3];
    const four = char.target[4];
    const five = char.target[5];
    const six = char.target[6];
    const seven = char.target[7];
    const eight = char.target[8];
    const nine = char.target[9];
    const ten = char.target[10];
    console.log(char);
    if (one.selected === true){
        const url = `https://api.github.com/users/${one.innerText}`;
        const response = await get(url);
        userName.innerText = response.login;
        name.innerText = response.name;
        about.innerText = response.bio;
        loc.innerText = response.location;
        img.src = response.avatar_url;
    }
    if (two.selected === true){
        const url = `https://api.github.com/users/${two.innerText}`;
        const response = await get(url);
        userName.innerText = response.login;
        name.innerText = response.name;
        about.innerText = response.bio;
        loc.innerText = response.location;
        img.src = response.avatar_url;
    }
    if (three.selected === true){
        const url = `https://api.github.com/users/${three.innerText}`;
        const response = await get(url);
        userName.innerText = response.login;
        name.innerText = response.name;
        about.innerText = response.bio;
        loc.innerText = response.location;
        img.src = response.avatar_url;
    }
});



