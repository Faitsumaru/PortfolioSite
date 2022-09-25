/////////////////////////////////////////////////////////
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import langArr from './lang.js'

ReactDOM.render(<App/>, document.querySelector("#root"));
/////////////////////////////////////////////////////////

//Language Changing
const allLang = ['en', 'ru'];

let select = document.querySelector(".change-lang");
select.addEventListener('change', changeURL_Language);

function changeURL_Language() {
    let lang = select.value; //'ua' or 'ru'
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    //default url
    let hash = window.location.hash; //language code
    hash = hash.substr(1); //without '#'
    //console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;

    //changing lang
    document.querySelector('title').innerHTML = langArr['site_title'][hash]; //title lang

    document.querySelector('.form__name').placeholder = langArr['form__name'][hash]; //ph lang
    document.querySelector('.form__email').placeholder = langArr['form__email'][hash]; //ph lang
    document.querySelector('.form__message').placeholder = langArr['form__message'][hash]; //ph lang
    
    for (let key in langArr) { //searching by key in array
        let elem = document.querySelectorAll('.lng-' + key);
        if (elem && hash != undefined) {
            for (let i = 0; i < elem.length; i++) //to output all the repeating info (with the same class)
                elem.item(i).innerHTML = langArr[key][hash]; //changing hash by key
        }
    }
}

changeLanguage();
