export default function menu(){
    //import all the food images
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
  
    const images = importAll(require.context('./images/food', false, /\.(png|jpe?g|svg)$/));
    
    //change your content
    const waffleList = [
        {name:"Liege Waffle",
        summary:"Crispy on the outside, fluffy on the inside."},
        "waffle","Honey", "Chocolate", "Matcha", "Coffee"];
    const rollList = [
        {name:"Cinnamon Roll",
        summary:"A swirl of perfection that captivates your senses with every bite."},
        "roll","Original", "Almond", "Chocolate", "Coffee"];
    const cakeList = [
        {name:"Protein Cupcake",
        summary:"Packed with goodness, without compromising on the irresistible taste."},
        "cake","Nuts", "Peanut", "Oats", "Crumb"];

    const title = "Our Menu";

    //run the page
    function menuPage() {

        const mainContent = document.createElement('div');
        mainContent.classList.add("menuContent");
        const header = document.createElement('h1');
        header.classList.add("header");
        header.textContent=title;
        mainContent.append(header);
        //create container
        mainContent.append(
            createCatalog(waffleList),
            createCatalog(rollList),
            createCatalog(cakeList));
        return mainContent;
    }
    //create content by catalog in card style
    function createCatalog(catalog) {
        const food = document.createElement('div');
        food.classList.add("foodContent");
        const summary = document.createElement('div');
        summary.classList.add("summary");
        const catalogName = document.createElement('h2');
        const catalogIntro = document.createElement('p');
        catalogName.textContent = catalog[0].name;
        catalogIntro.textContent = catalog[0].summary;
        summary.append(catalogName, catalogIntro);
        food.appendChild(summary);
        //loop through the catalog list to get all the products
        for (let i = 2; i < catalog.length; i++){
            const p = catalog[i];
            const c = catalog[1];
            food.appendChild(createCards(c,p));
        }
        return food;
    }
    
    function createCards(c,p) {
        const card = document.createElement("div");
        card.classList.add("menu-item");
        const itemName = document.createElement("h2");
        itemName.classList.add("itemName");
        itemName.textContent = p;
        const picture = document.createElement("img");
        picture.src = images[`${c}_${p.toLowerCase()}.jpg`]; //photo named in "catalog_product" style
        picture.alt = p;
        card.append(picture, itemName);
        return card
    };
    return menuPage();
}