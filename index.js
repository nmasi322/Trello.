// Tags

const relax = document.getElementById("relax-tag");
const relaxBox = document.getElementById("relax");
const rockBox = document.getElementById("rock");
const popBox = document.getElementById("pop");
const pop = document.getElementById("pop-tag");
const rock = document.getElementById("rock-tag");
const music = document.querySelector(".music");
const musicArr = [relaxBox, popBox, rockBox];
// const containsRelax = if (){};
function click(){
    return relax.addEventListener("click", () =>{
        musicArr.sort(relaxBox);
    });

}

click();
