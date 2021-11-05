const movies = {
    "name": "Strive School",
    "description": "Horror movie about coding 10 hours per day",
    "category": "horror",
    "imageUrl": "https://bit.ly/3cMc2IH",

   }
   const data = async () => {
       const response = await fetch("https://striveschool-api.herokuapp.com/api/movies", {
         method:"POST",
         body: JSON.stringify(movies),
         headers: {
           "Content-Type": "application/json",
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzYxMDEwNTYsImV4cCI6MTYzNzMxMDY1Nn0.nNnA1_sksu5m3urX8mlDgtSocLBZMKTmQvDDRkQ4JuI"
         }
       })
      
         const declare = await response.json();
         console.log(declare);
         return declare;
    }



    const displayData =(movs)=>{
        movs.forEach(movie => {
         const row = document.querySelector(".row")
            const columnDiv = document.createElement("div");
            columnDiv.classList.add( "col-12 col-sm-6 col-md-3 col-lg-4")
    
           columnDiv.innerHTML =
             `
             <div class="card">
             <img src="${movie.imageUrl}" class="card-img-top img-fluid" alt="...">
             <div class="card-body">
               <h5 class="card-title">${movie.name}</h5>
               <p class="card-text">${movie.description}</p>
               <h5 class="card-title">${movie.category}</h5>
             </div>
             </div>
           `
           row.appendChild(columnDiv)
         });
        }
        
        window.onload = async() => {
            const GetData = await data();
            displayData(GetData)
          }