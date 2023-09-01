let count =0;

const handelCategory = async () =>{

 const rep = await fetch("https://openapi.programming-hero.com/api/news/categories");
const data =await rep.json();
const tabContainer = document.getElementById("tab-container");
const trimeData = data.data.news_category.slice(0,3);


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

     cardContainer.innerHTML =" ";
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
    <p ">${news.details.slice(0,50)}</p>


     <div class="card-actions justify-between mt-8">
     <div class="flex">
       <div>

       <div class="avatar online">
       <div class="w-14 rounded-full">
         <img src=${news.author.img
         } />
       </div>
     </div>
    
       
        
       </div>
     </div>
         <div>
         <p>${news.author.name
         }</p>
         <small>${news.author.published_date
         }</small>

       </div>
       </div class="card-detaild-btn">
       <button onclick="handleModal('${news._id}')"  class="btn btn-primary">DETAILS</button>
     </div>
   </div>
 </div>
   
   
   
   `;
cardContainer.appendChild(div);

  })


}






const handleModal = async (newsid)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsid}`);
  const data =await res.json();
  console.log(data.data[0]);
     
  const modalContainer =document.getElementById('modal-container');
  const div =document.createElement("div");
  div.innerHTML=`
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">${news.author}</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>



  
  
  
  `;

modalContainer.appendChild(div);
const modal = document.getElementById('my_modal_1');
modal.showModal()
};







handelCategory();

handelLoadNews("01");