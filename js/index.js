"use strict";

const search = document.querySelector("#search");
const userName = document.querySelector("#userName");
const name = document.querySelector("#name");
const about = document.querySelector("#about");
const loc = document.querySelector("#location");
const img = document.querySelector("img");
const history = document.querySelector("#history");
const input = document.querySelector("input");

search.addEventListener("submit", async function(event){
    event.preventDefault();

    const url = `https://api.github.com/users/${input.value}`;
    const response = await get(url);
    updateUserInfo(response);
    
    const option = document.createElement("option");
    option.innerText = input.value;
    ;
    if (response.login == input.value){
        input.value = "";
        history.append(option)
    }
});

function updateUserInfo(response) {
    userName.innerText = response.login;
    name.innerText = response.name;
    about.innerText = response.bio;
    loc.innerText = response.location;
    img.src = response.avatar_url;
}


// const history = document.getElementById(history);
// history.addEventListener("change", async function (char) {
    
//     const target = char.target;
//     const one = target[1];
//     const two = target[2];
//     const three = target[3];
//     const four = target[4];
//     const five = target[5];
//     console.log(char);
//     if (one.selected === true){
//         const url = `https://api.github.com/users/${one.innerText}`;
//         const response = await get(url);
//         userName.innerText = response.login;
//         name.innerText = response.name;
//         about.innerText = response.bio;
//         loc.innerText = response.location;
//         img.src = response.avatar_url;
//     }
//     if (two.selected === true){
//         const url = `https://api.github.com/users/${two.innerText}`;
//         const response = await get(url);
//         userName.innerText = response.login;
//         name.innerText = response.name;
//         about.innerText = response.bio;
//         loc.innerText = response.location;
//         img.src = response.avatar_url;
//     }
//     if (three.selected === true){
//         const url = `https://api.github.com/users/${three.innerText}`;
//         const response = await get(url);
//         userName.innerText = response.login;
//         name.innerText = response.name;
//         about.innerText = response.bio;
//         loc.innerText = response.location;
//         img.src = response.avatar_url;
//     }
//     if (four.selected === true){
//         const url = `https://api.github.com/users/${four.innerText}`;
//         const response = await get(url);
//         userName.innerText = response.login;
//         name.innerText = response.name;
//         about.innerText = response.bio;
//         loc.innerText = response.location;
//         img.src = response.avatar_url;
//     }
//     if (five.selected === true){
//         const url = `https://api.github.com/users/${five.innerText}`;
//         const response = await get(url);
//         userName.innerText = response.login;
//         name.innerText = response.name;
//         about.innerText = response.bio;
//         loc.innerText = response.location;
//         img.src = response.avatar_url;
//     }
// });

/////same as above but better///////
history.addEventListener("change", async function (char) {
    const target = char.target;
    const selectedOption = target[target.selectedIndex];
    
    if (selectedOption && selectedOption.selected === true) {
        const username = selectedOption.innerText;
        const url = `https://api.github.com/users/${username}`;
        const response = await get(url);
        
        if (response) {
            updateUserInfo(response);
        }
    }
});