  const errorDiv = document.getElementById('error');
   // search function
  const inputSearch = () =>{
  const searchInput = document.getElementById('input-search');
  const searchText = searchInput.value;
    //  clear
   searchInput.value='';
    // error
  if(searchText ===''){
      errorDiv.innerText="search field cannot be empty";
  }
  else{
    errorDiv.innerText='';
      const url=`https://openlibrary.org/search.json?q=${searchText}`;
      fetch(url)
     .then(res => res.json())
     .then(data => bookDetails(data))
  }
}
  //show books
  const bookDetails = (details) =>{
  const showTotalResult = document.getElementById('total-result');
  if(details.numFound === 0)
     {
      showTotalResult.innerText='No result found';
     }
  else{
      showTotalResult.innerText=`${details.numFound}result found`;
      } 
  const bookInformation = document.getElementById('get-books');
  bookInformation.innerHTML='';
  let total = details.docs;
  total?.forEach(detail => {
  const showBookDetails = document.createElement('div');
  showBookDetails.classList.add("col-md-4");
  showBookDetails.innerHTML=`
     <div class="shadow rounded h-100 p-3 m-2">
     <img src="https://covers.openlibrary.org/b/id/${detail.cover_i? detail.cover_i:'' }-M.jpg" class="card-img-top img-fluid" alt="...">
     <br>
     <h5>${detail.title}</h5>
     <p>${detail.author_name}</p>
     <p>${detail.publisher.slice(0, 50)}</p>
     <p>${detail.first_publish_year}</p>
    </div>
    `;
    bookInformation.appendChild(showBookDetails);
});
};
  