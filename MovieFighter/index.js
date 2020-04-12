let left;
let right;


const movieSummary = async (id,loc,apex) =>{
    const movieDetails = await axios.get("http://www.omdbapi.com",{params:{
        apiKey : 'dc898ab7',
        i : `${id}` 
    }})
   if(apex.classList.contains('left-containers')){
       left=movieDetails;
   }else{
       right=movieDetails;
   }
   let num1 = numMaker(`${movieDetails.data.BoxOffice}`);
   let num2 = comma(`${movieDetails.data.imdbVotes}`);
    loc.innerHTML=`
    <section data-val="${num1}" class="hero is-link is-bold value">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
        ${movieDetails.data.BoxOffice}
        </h1>
        <h2 class="subtitle">Box Office</h2>
      </div>
    </div>
  </section>
  <section data-val="${movieDetails.data.imdbRating}" class="hero is-link is-bold value">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      ${movieDetails.data.imdbRating}
      </h1>
      <h2 class="subtitle">IMDB Ratings</h2>
    </div>
  </div>
</section>
<section data-val="${movieDetails.data.Metascore}" class="hero is-link is-bold value">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      ${movieDetails.data.Metascore}
      </h1>
      <h2 class="subtitle">Metascore</h2>
    </div>
  </div>
</section>
<section data-val="${num2}" class="hero is-link is-bold value">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      ${movieDetails.data.imdbVotes}
      </h1>
      <h2 class="subtitle">IMDB Votes</h2>
    </div>
  </div>
</section>`;

   if(left && right){
    performCompare(root1,root2);
   } 

}


function performCompare(r1,r2){
    const comp1 = r1.querySelectorAll('.value')
    const comp2 = r2.querySelectorAll('.value')
    console.log(comp1,comp2);
    comp1.forEach((x,index)=>{
        console.log(parseFloat(x.dataset.val),parseFloat(comp2[index].dataset.val));
        if(parseFloat(x.dataset.val)>parseFloat(comp2[index].dataset.val)){
            x.classList.remove('is-link');
            x.classList.add('is-success');
            comp2[index].classList.remove('is-link');
            comp2[index].classList.add('is-warning');
            console.log('1>2')
        }else{
            comp2[index].classList.remove('is-link');
            comp2[index].classList.add('is-success');
            x.classList.remove('is-link');
            x.classList.add('is-warning');
            console.log('2>1');
        }
    })
}
const config ={
    onOptionSelect(movie,location,apexVal){
        movieSummary(movie.imdbID,location,apexVal)
    },
    getTitle(movie){
        return movie.Title;
    },
    getOptionHtml(movie){
        if(movie.Poster==='N/A')
            {
                movie.Poster = '';
            }
        return `    
        <img src="${movie.Poster}"/>
        ${movie.Title}
        (${movie.Year})`;

    },async fetchData (searchKey) {
        const response = 
        await axios.get("http://www.omdbapi.com",{params :{
           apiKey : 'dc898ab7',
           s:`${searchKey}`}});
    
        if(response.data.Error){
            return false;
        
           }
           return response.data.Search;
    
        }

}
    const root1 = document.querySelector('.left-containers');
    const root2 = document.querySelector('.right-containers');

    autocomplete({'root' :root1,...config});
    autocomplete({'root' :root2,...config});

   
function numMaker(str){
    let val = str.replace('\$','');
    return val.replace(/,/g,'');
}
function comma(str){
   
    return str.replace(/,/g,'');
}
