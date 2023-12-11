let searchBtn = document.getElementById("search-btn");




const API_KEY = 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4';



searchBtn.addEventListener('click', function () {
    let categoryContent = document.getElementById("enterCategoryName").value;

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${categoryContent}&client_id=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            imageContainer.textContent = "";
            data.results.slice(0, 5).forEach(imgData => {
                createImageElements(imgData.alt_description, imgData.urls.regular)
            });
        })
        .catch((error) => console.log(error));
});

const imageContainer = document.getElementById('image-container');
const createImageElements = (description, url) => {
    const div = document.createElement('div');
    div.classList.add('image');

    const image = document.createElement('img');
    image.src = url;
    image.alt = description;

    div.appendChild(image);
    imageContainer.appendChild(div);
};



let categoryContent = document.getElementById("enterCategoryName");

categoryContent.addEventListener("input", () => {
    let contentValue = categoryContent.value;
    let upperCase = contentValue.toUpperCase();
    categoryContent.value = upperCase;
});