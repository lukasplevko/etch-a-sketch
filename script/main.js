const container = document.querySelector(".grid-container");
const btn = document.getElementById("btn");
btn.addEventListener("click", resetGrid)
let gridSize = prompt();


   
    function createGrid(x)
    {

        for(let i = 0; i < x; i++){   
            for(let j = 0; j <x; j++){
                let div = document.createElement("div");
                div.classList.add("grid-item");
                container.appendChild(div);
                div.addEventListener("mouseover", colorGrid)    
          }     
        }
        container.setAttribute("style",`grid-template-columns:  repeat(${x}, 1fr);`)
    } 
 
    function colorGrid(){
       this.setAttribute("style","background:pink");

    }

        createGrid(gridSize);
      
    
    function resetGrid(){
        location.reload("index.html");
    }

    
       




