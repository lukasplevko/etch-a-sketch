const container = document.querySelector(".grid-container");
const gridItems = document.getElementsByClassName("grid-item")
const reset = document.getElementById("btn");
const clear = document.getElementById("clear")

reset.addEventListener("click", resetGrid);
clear.addEventListener("click", clearGrid);
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
       this.classList.add("colored");

    }

        createGrid(gridSize);
      
    
    function resetGrid(){
        location.reload("index.html");
    }
    
    function clearGrid(){
        for(let i = 0; i < gridItems.length; i++){
            gridItems[i].classList.remove("colored");
        }
        
    }

    
    
    
    
       




