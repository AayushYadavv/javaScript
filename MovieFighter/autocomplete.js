const autocomplete = ({root,onOptionSelect,getTitle,getOptionHtml,fetchData})=>{



    root.innerHTML =`
    <label><b>Search</b></label>
       
        <input class="input"/>
        <div class= "dropdown">
            <div class="dropdown-menu">
            <div class="dropdown-content">
            </div>
        
            </div>
        </div>
        <div class="summary"></div>
            `;

        const Summary = root.querySelector('.summary');
    const display = async (e)=>   {

        let items = await fetchData(e.target.value);
    
        root.querySelector(".dropdown-content").innerHTML=' ';
        if(items === false)
        {
            root.querySelector(".dropdown").classList.remove('is-active');
            
            return;
        }
        root.querySelector(".dropdown").classList.add('is-active');
    
    
        for (let item of items){
    
            const option = document.createElement('a');
            
            option.innerHTML = getOptionHtml(item);  
            option.classList.add('dropdown-item');
            root.querySelector('.dropdown-content').appendChild(option);
            option.addEventListener('click',(e)=>{
                    root.querySelector(".dropdown").classList.remove('is-active');
                    inputSearch.value=getTitle(item);
                    onOptionSelect(item,Summary,root);
                })
            }
        }
    
    
    
    
    
   
    const inputSearch = root.querySelector(".input");
    
    inputSearch.addEventListener('input',debounce(display));
    
    document.addEventListener('click',(e)=>{
       
        if(!(root.querySelector(".dropdown").contains(e.target))){
            const dropdown= root.querySelector(".dropdown");
            dropdown.classList.remove("is-active");
    
        }
    
    })
}