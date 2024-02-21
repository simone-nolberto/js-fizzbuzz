const listElement = document.querySelector(".list");
const fizz = "Fizz";
const buzz = "Buzz";

for (let x = 1; x <= 100; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        console.log(fizz + buzz)
        listElement.innerHTML += `<li class="square fb"> ${fizz + buzz} </li>`;
    } else if (x % 3 === 0) {
        console.log(fizz);
        listElement.innerHTML += `<li class="square f"> ${fizz} </li>`;
    } else if (x % 5 === 0) {
        console.log(buzz);
        listElement.innerHTML += `<li class="square b"> ${buzz} </li>`;
    } else {
        console.log(x);
        listElement.innerHTML += `<li class="square"> ${x} </li>`;
    }

}

