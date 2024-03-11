async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    const itemTextElements = document.getElementsByClassName('item_text');

    for (let i = 0; i < itemTextElements.length && i < json.programming_languages_popular.length; i++) {
        itemTextElements[i].textContent = json.programming_languages_popular[i];
    }

    let logoNormal = document.getElementsByClassName("eltdf-normal-logo")[0];
    logoNormal.src = 'https://lh3.googleusercontent.com/g9IX9me9bu0_PZjrggb3hsxYuiCV6yqJGZUlEjVVmgwH3LgRizJ1Yc9NxLN5fpHUdW8';

    let wikipediaUrlBase = "https://it.wikipedia.org/wiki/";

    for (let i = 0; i < itemTextElements.length && i < json.programming_languages_popular.length; i++) {

        let link = document.createElement("a");

        link.textContent = json.programming_languages_popular[i];

        link.href = wikipediaUrlBase + encodeURIComponent(json.programming_languages_popular[i]);

        link.target = "_blank";

        itemTextElements[i].innerHTML = '';
        itemTextElements[i].appendChild(link);
    }


}


exampleFetch();