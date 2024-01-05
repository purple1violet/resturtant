import pages from "./index"

export default function home(){
    //change your content
    const title = "Violet Bakery";
    const summary = "#LiegeWaffle #CinnamonRoll #ProteinCupcake";
    const btn1 = "Menu";
    const btn2 = "Contact";
    //run the page
    function homePage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add("homeContent")
    //create container
    const homeInfo = document.createElement('div');
    homeInfo.classList.add("homeInfo");
    const btnContent = document.createElement('div');
    btnContent.classList.add("btnContent");
    //create content
    const header = document.createElement('h1');
    const intro = document.createElement('p');
    const quickBtn1 = document.createElement('button')
    const quickBtn2 = document.createElement('button')
    header.textContent = title;
    header.classList.add("header");
    intro.textContent = summary;
    intro.classList.add("intro");
    quickBtn1.textContent = btn1;
    quickBtn2.textContent = btn2;
    quickBtn1.addEventListener('click', pages);
    quickBtn2.addEventListener('click', pages);
    //append content into container
    btnContent.append(quickBtn1, quickBtn2);
    homeInfo.append(header, intro, btnContent);
    mainContent.append(homeInfo);
    return mainContent;
    }
    return homePage();
}