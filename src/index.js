import './style.css';
import Icon from './images/main-1.JPG';
import home from "./home";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

//pre-load
const content = document.querySelector("#content")
content.appendChild(home()); 

//page btn switch
const pageBtn = document.querySelectorAll(".buttonNav");

const eventAction = () => {
    pageBtn.forEach(page => {page.addEventListener('click', pages)})
};
export default
function pages(e) {
    content.textContent = "";
    const page = e.target.textContent.toLowerCase();
    switch (page){
        case 'home':
        content.appendChild(home()); 
        break;
        case 'about':
        content.appendChild(about()); 
        break;  
        case 'menu':
        content.appendChild(menu()); 
        break;
        case 'contact':
        content.appendChild(contact());
        break;
        default:
        content.appendChild(home()); 
    }
}

eventAction();

