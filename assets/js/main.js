const listElement = document.querySelector(".list");
const fizz = "Fizz";
const buzz = "Buzz";

for (let x = 1; x <= 100; x++) {

    if (x % 3 === 0) {
        console.log(fizz)
        listElement.innerHTML += `<li square f-square> ${fizz} </li>`;;
    } else if (x % 5 === 0) {
        console.log(buzz);
        listElement.innerHTML += `<li square b-square> ${buzz} </li>`;
    } else if (x % 3 === 0 && x % 5 === 0) {
        console.log(fizz + buzz);
        listElement.innerHTML += `<li square fb-square> ${fizz + buzz} </li>`;
    } else {
        console.log(x);
        listElement.innerHTML += `<li square> ${x} </li>`;
    }

}

