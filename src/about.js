import Icon from './images/main-1.JPG';

export default function about(){
    //change your content
    const title = "About Us";
    const subtopic = "Simply Ingridents";
    const content = "Humility is the practice of recognions with a sense of openness and curiosity, humility can help us meaningful ways.";
    //run the page
    function aboutPage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add("aboutContent");
    const header = document.createElement('h1');
    header.classList.add("header");
    header.textContent=title;
    //create container
    const background1 = document.createElement('div');
    background1.classList.add("aboutInfo");
    //create content
    const intro = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Icon;
    const subtopic1 = document.createElement('h2');
    subtopic1.textContent = subtopic;
    const para1 = document.createElement('p');
    para1.textContent= content;
    //append content into container
    intro.append(subtopic1, para1);
    background1.append(myIcon,intro);
    mainContent.append(header, background1);
    return mainContent;
    }
    return aboutPage();
}