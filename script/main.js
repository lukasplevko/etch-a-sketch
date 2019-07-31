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
        document.body.setAttribute("style", "width: calc(100px*8); height:calc(100px*8)")
    }
    
         
        createGrid(8);
      
    

    
       




