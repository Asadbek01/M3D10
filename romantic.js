let row = document.querySelector(".row")
const genres = ['horror', 'action']

  
const getData =  () =>{
     fetch('https://striveschool-api.herokuapp.com/api/movies/romantic',{
      headers: {
        method: "GET",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzU5NDYzNzQsImV4cCI6MTYzNzE1NTk3NH0.6imtX9f9iWxIVzzBvcrBsauI1w-Q-CwrEhE3jWo_i88",
      },
    })
     .then(response=> response.json())
     .then(data=>console.log(data))
   
  
    }
    
    const displayMovies= (movie)=>{
      
      movie.forEach(element => {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add( "col-12 col-sm-6 col-md-3 col-lg-4")
        columnDiv.innerHTML = `
        <div class="card">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `
      });
    }
    
    window.onload =()=>{
      getData()
    }
    
      
    // window.onload = async ()=>{
      // let Getdata= await getData()
      // }

    
//     const displayItems= (products) =>{
//     products.forEach(item => {
//       const row = document.querySelector(".row")
//       const columnDiv = document.createElement("div")
//       columnDiv.classList.add("col-6","col-md-3", "col-lg-4")
//       columnDiv.innerHTML += `
//       <div class="card" >
//             <img src="${item.imageUrl}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${item.brand}</h5>
//               <p class="card-text">${item.description}</p>
//               <a href="./details.html?itemId=${item._id}" class="btn btn-primary">Details</a>
//               <button class = 'btn btn-success'>${item.price}$</button>
//             </div>
//           </div>
//       `
//       row.appendChild(columnDiv)
    
//     });
//     }
        
    
        
    
//     window.onload = async() =>{
//       let GetData = await getData()
//      displayItems(GetData)
//     }