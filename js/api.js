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
   <a   onclick="handelLoadNews('${category.category_id}')"   class="tab">${category.category_name}${count}</a> 

   
   
   `;
tabContainer.appendChild(div);

});

//  console.log(data.data.news_category);
};
const handelLoadNews = async (categoryId)=>{

  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
const data = await res.json();
// console.log(data.data);

const cardContainer = document.getElementById('card-container');
  data?.data?.forEach((news)=>{
    console.log(news);
   const div =document.createElement('div');
   div.innerHTML = `
   
   
   
   <div class="card w-96 bg-base-100 shadow-xl">
   <figure><img src=${news?.image_url
   }></figure>
   <div class="card-body ">
     <h2 class="card-title">${news.title.slice(0,30)}</h2>

     <div class="badge badge-secondary p-5" > ${news.rating.badge
     }     </div>
    <p>${news.details.slice(0,50)}</p>


     <div class="card-actions justify-between mt-4">
       <div>
         <p>jimmy Dane</p>
         <small>20-08-24 17:27:34</small>
       </div>
       <button class="btn btn-primary">DETAILS</button>
     </div>
   </div>
 </div>
   
   
   
   `;
cardContainer.appendChild(div);

  })


}


handelCategory();