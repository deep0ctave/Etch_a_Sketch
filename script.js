let COLOR;
let MODE = "single_color";
let MOUSE_FLAG = "false";
let GRID_SIDE_LEN = 600;
let ROWS = 80;
let COLS = 80;


const container = document.querySelector(".etch_area");
const color_picker = document.querySelector("#head");
COLOR = color_picker.value;
color_picker.addEventListener("input", () => {COLOR = color_picker.value;});


window.onmouseup = () => {                        
    MOUSE_FLAG = false;
}
window.onmousedown = () => {                        
    MOUSE_FLAG = true;
}

function get_color(e){
    COLOR = e.value;
}

function create_grid(){
    for(x=0; x<(ROWS*COLS);x++) {
        let cell = document.createElement('div');
        
        cell.className = "cell";
        
        cell.style.height = (GRID_SIDE_LEN/ROWS)+"px";
        cell.style.width = (GRID_SIDE_LEN/COLS)+"px";

        cell.addEventListener("mousedown", () => {
            MOUSE_FLAG = true;
            if(MODE === "single_color")
            {
                cell.style.backgroundColor = COLOR;
            }    
             else if(MODE === "multi_color")
             {
                cell.style.backgroundColor = "red";
             }
             else {
                cell.style.backgroundColor = "green";
             }
          });
        
        cell.addEventListener("mouseup", () => {
            MOUSE_FLAG = false;
          });      
        
        cell.addEventListener("mouseover", () => {
            if(MOUSE_FLAG === true)
            {
                if(MODE === "single_color")
                {
                cell.style.backgroundColor = COLOR;
                }    
             else if(MODE === "multi_color")
                {
                cell.style.backgroundColor = "red";
                }
             else {
                cell.style.backgroundColor = "green";
                } 
            } 
          });
        
          cell.addEventListener("dragstart", (e) => {
          e.preventDefault();
        });  
    
        container.appendChild(cell);
    }    
}

function clear_grid(){
    const cells = document.querySelectorAll(".cell");
    Array.from(cells).forEach((e) => {e.style.backgroundColor = "white"; console.log("oops");})
}

const clrBtn = document.querySelector(".clear_btn");
clrBtn.addEventListener("click",(e) => clear_grid())

const eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click",(e) => {COLOR = "white"})


create_grid();