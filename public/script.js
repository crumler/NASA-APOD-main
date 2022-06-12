let apodUrl = 'https://api.nasa.gov/planetary/apod'
const key = 'mXiWwBXqWRi9ZZh91uNN8pScNcnhFH4nk9o2pk5V'
let urlNasa;


//DOM DECLARATIONS
let todayDateAnnounce = document.querySelector('.current-date');
// let sectionTag = document.querySelector('section');
let dayTwoPicture = document.querySelector('.dayTwo');
let dayThreePicture = document.querySelector('.dayThree');
let dayFourPicture = document.querySelector('.dayFour');
let dayFivePicture = document.querySelector('.dayFive');
let currentHD = document.querySelector('.currentHD');
let dayTwoHD = document.querySelector('.dayTwoHD');
let dayThreeHD = document.querySelector('.dayThreeHD');
let dayFourHD = document.querySelector('.dayFourHD');
let dayFiveHD = document.querySelector('.dayFiveHD');


//DATE DECLARATIONS (Endpoint requires format of 'YYYY-MM-DD')


//CURRENT DATE (DAY 1)
let todayDate = new Date();
todayDate = todayDate.toJSON();
todayDate = todayDate.slice(0, 10);

todayDateAnnounce.innerHTML = `Today's date is ${todayDate}`;


//PREVIOUS DATE (DAY 2)
let yesterday = new Date (todayDate);
let yesterdayDate = yesterday.setDate(yesterday.getDate() - 0);
let dayTwoDate = new Date(yesterdayDate);
let yearDayTwo = dayTwoDate.getFullYear();
let monthDayTwo = dayTwoDate.getMonth() + 1;

//Accounts for if the month in question is a month before October since those months use single digits
if (monthDayTwo < 10) {
    monthDayTwo = '0' + monthDayTwo;
}

//Accounts for if the day in question is a day before the 10th of the month since those days use single digits
let dateDayTwo = dayTwoDate.getDate();
if (dateDayTwo < 10) {
    dateDayTwo = '0' + dateDayTwo;
}

let finalDayTwo = yearDayTwo + '-' + monthDayTwo + '-' + dateDayTwo;


//DAY 3
let dayThree = new Date(todayDate);
let dayThreeDate = dayThree.setDate(dayThree.getDate() - 1);
let dThree = new Date(dayThreeDate);
let dThreeYear = dThree.getFullYear();
let dThreeMonth = dThree.getMonth() + 1;

if (dThreeMonth < 10) {
    dThreeMonth = '0' + dThreeMonth;
}

let dThreeDate = dThree.getDate();

if (dThreeDate < 10) {
    dThreeDate = '0' + dThreeDate;
}

let finalDayThree = dThreeYear + '-' + dThreeMonth + '-' + dThreeDate;


//DAY 4
let dayFour = new Date(todayDate);
let dayFourDate = dayFour.setDate(dayFour.getDate() - 2);
let dFour = new Date(dayFourDate);
let dFourYear = dFour.getFullYear();
let dFourMonth = dFour.getMonth() + 1;

if (dFourMonth < 10) {
    dFourMonth = '0' + dFourMonth;
}

let dFourDate = dFour.getDate();

if (dFourDate < 10) {
    dFourDate = '0' + dFourDate;
}

let finalDayFour = dFourYear + '-' + dFourMonth + '-' + dFourDate;


//DAY 5
let dayFive = new Date(todayDate);
let dayFiveDate = dayFive.setDate(dayFive.getDate() - 3);
let dFive = new Date(dayFiveDate);
let dFiveYear = dFive.getFullYear();
let dFiveMonth = dFive.getMonth() + 1;

if (dFiveMonth < 10) {
    dFiveMonth = '0' + dFiveMonth;
}

let dFiveDate = dFive.getDate();

if (dFiveDate < 10) {
    dFiveDate = '0' + dFiveDate;
}

let finalDayFive = dFiveYear + '-' + dFiveMonth + '-' + dFiveDate;


//FUNCTION TO FETCH ALL FIVE PHOTOS
function fetchAllPhotos() {
    //CURRENT DAY
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + todayDate;

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayCurrentPhoto(json);
    })

    //DAY TWO
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayTwo;

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayDayTwoPhoto(json);
    })

    //DAY THREE
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayThree;

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayDayThreePhoto(json);
    })

    //DAY FOUR
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayFour;

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayDayFourPhoto(json);
    })
}

    //DAY FIVE
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayFive;

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayDayFivePhoto(json);
})

fetchAllPhotos();

//FUNCTIONS TO DISPLAY ALL PHOTOS VIA DOM MANIPULATION
function displayCurrentPhoto(json) {
    let currentImage = json;
    let todayImage = document.getElementById('currentDay');
    todayImage.src = currentImage.url;
    //makes thumbnail image a link to a high-def version of image via 'hdurl'
    currentHD.href = currentImage.hdurl;
};

function displayDayTwoPhoto(json) {
    let dayTwoPhoto = json;
    let dayTwoImage = document.getElementById('dayTwo');
    dayTwoImage.src = dayTwoPhoto.url;
    dayTwoHD.href = dayTwoPhoto.hdurl;
}

function displayDayThreePhoto(json) {
    let dayThreePhoto = json;
    let dayThreeImage = document.getElementById('dayThree');
    dayThreeImage.src = dayThreePhoto.url;
    dayThreeHD.href = dayThreePhoto.hdurl;
}

function displayDayFourPhoto(json) {
    let dayFourPhoto = json;
    let dayFourImage = document.getElementById('dayFour');
    dayFourImage.src = dayFourPhoto.url;
    dayFourHD.href = dayFourPhoto.hdurl;
}

function displayDayFivePhoto(json) {
    let dayFivePhoto = json;
    let dayFiveImage = document.getElementById('dayFive');
    dayFiveImage.src = dayFivePhoto.url;
    dayFiveHD.href = dayFivePhoto.hdurl;
}