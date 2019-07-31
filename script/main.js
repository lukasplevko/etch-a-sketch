const container = document.querySelector(".grid-container");

   
    function createGrid(x)
    {
        for(let i = 0; i < x; i++){
        
             
            for(let j = 0; j <x; j++){
                let div = document.createElement("div");
                div.classList.add("grid-item");
                container.appendChild(div); 
                
            }
            
        }
        container.setAttribute("style",`grid-template-columns:  repeat(${x}, 1fr);`)
    }
    
         
        createGrid(16);
      
    

    
       




