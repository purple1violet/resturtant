import Icon from './images/main-1.JPG';

export default function contact(){
    const openingList = [
    "Opening Hours",
    {left:"Monday",
    right:"07:00-19:00"},
    {left:"Tuesday",
    right:"Rest"},
    {left:"Wednesday",
    right:"07:00-19:00"},
    {left:"Thursday",
    right:"07:00-19:00"},
    {left:"Friday",
    right:"07:00-19:00"},
    {left:"Saturday",
    right:"Rest"},
    {left:"Sunday",
    right:"07:00-19:00"},
    {left:"Public Holiday",
    right:"Rest"},
]

const contactList = [
    "Contact Information",
    {left:"Email:",
    right:"violetbakery@cs.com"},
    {left:"Phone:",
    right:"XXX-XXX-XXXX"},
    {left:"Address:",
    right:"18 Abc Avenue, XXX, YYY"}
]

const title = "Contact Us";

function contactPage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add("contactContent");
    const header = document.createElement('h1');
    header.classList.add("header");
    header.textContent=title;
    //create container
    const background1 = document.createElement('div');
    background1.classList.add("ContactInfo");
    //create content
    const map = document.createElement('div');
    map.classList.add("map");
    const myIcon = new Image();
    myIcon.src = Icon;
    //append
    map.appendChild(myIcon);
    background1.append(map,createContactInfo(openingList), createContactInfo(contactList));
    mainContent.append(header, background1);
    return mainContent;
    }
    
 //a function to loop through the information list content and create the container
function createContactInfo (lst) {
    const container = document.createElement('div');
    container.classList.add("contactContainer");
    const subTopic = document.createElement('h2');
    subTopic.textContent = lst[0];
    container.append(subTopic);
   
    for (let i = 1; i < lst.length; i++){
        const info = document.createElement('div');
        info.classList.add("infoContainer");
        const l = document.createElement('p');
        l.classList.add("left");
        const r = document.createElement('p');
        r.classList.add("right");
        l.textContent = lst[i].left;
        r.textContent = lst[i].right;
        info.append(l,r);
        container.append(info)
    };
    return container
}
return contactPage();
}