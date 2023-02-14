btn = document.getElementById("menu-bar");

navbar = document.getElementsByClassName("navbar")[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('show');
})


// var accordion = document.getElementsByClassName('accordion_item');
// for(var x of accordion)
// {
//     x.addEventListener('click',()=>{
//         // console.log(accordion[i].classList);
//         this.classList.toggle('accordion_active');
//     });
// }

function accordionToggle(item){
    item.classList.toggle('accordion_active');
}