let color_input = document.getElementById("head");
let COLOR = color_input.value;
let mouse_flag = false;

color_input.addEventListener("input", () => {COLOR = color_input.value;});

const container = document.querySelector(".etch_area");
for(x=0; x<2500;x++) {
    let board = document.createElement('div');
    board.className = "pixel";
    board.style.height = (600/50)+"px";
    board.style.width = (600/50)+"px";

    window.onmouseup = () => {                        
        mouse_flag = false;
    }
    window.onmousedown = () => {                        
        mouse_flag = true;
    }
    board.addEventListener("mousedown", () => {
        mouse_flag = true;
        board.style.backgroundColor = COLOR;
        console.log("over");
      });
    board.addEventListener("mouseup", () => {
        mouse_flag = false;
      });      
    board.addEventListener("mouseover", () => {
        if(mouse_flag === true)
        {
            board.style.backgroundColor = COLOR;
            console.log("over");
        }    
      });
    board.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });  

    container.appendChild(board);
}