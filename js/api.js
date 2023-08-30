const handelCategory = async () =>{

 const rep = await fetch("https://openapi.programming-hero.com/api/news/categories");
const data =await rep.json();
const tabContainer = document.getElementById("tab-container");
tabContainer.array.forEach(())

 console.log(data.data.news_category);
}


handelCategory();