let count =0;

const handelCategory = async () =>{

 const rep = await fetch("https://openapi.programming-hero.com/api/news/categories");
const data =await rep.json();
const tabContainer = document.getElementById("tab-container");
const trimeData = data.data.news_category.slice(0,4);


trimeData.forEach((category)=>{
  count = count + 1;
   const div =document.createElement("div");
   div.innerHTML = `
   <a class="tab">${category.category_name}${count}</a> 

   
   
   `;
tabContainer.appendChild(div);

});

 console.log(data.data.news_category);
}


handelCategory();