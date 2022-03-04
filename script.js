let searchable = [


    "Arya Spars With Brienne",
    "Brienne vs. The Hound",
    "Battle of Castle Black",
    "Battle of the Bastards",
    "The Long Night",
    "The Viper vs. The Mountain",
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
        results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }
    renderResults(results);
});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    const content = results
        .map((item) => {
            return `<li>${item}</li>`;
        })
        .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

function openPage() {
    var x = document.getElementById("search").value;
    if (x === "Arya Spars With Brienne") {
        window.open("/Frontend/Arya Spars With Brienne.html");

    }
    if (x === "Battle of Castle Black") {
        window.open("/Frontend/Battle of Castle Black.html");

    }
    if (x === "Battle of the Bastards") {
        window.open("/Frontend/Battle of the Bastards.html");

    }
    if (x === "Brienne vs. The Hound") {
        window.open("/Frontend/Brienne vs. The Hound.html");

    }
    if (x === "The Long Night") {
        window.open("/Frontend/The Long Night.html");

    }
    if (x === "The Viper vs. The Mountain") {
        window.open("/Frontend/The Viper vs. The Mountain.html");

    }
}