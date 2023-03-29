const dataSLider = [

{
    id: 1,
    imageUrl:"https://images.unsplash.com/photo-1619872752556-f0f148e6c724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGp1bXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "slider title 1",
},

{
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGp1bXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "slider title 2",
},
{
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8anVtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "slider title 3",
},
{
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1613122707153-070406e9fd27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGp1bXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "slider title 4",
},



];

const sliderContent = document.getElementById("slider-content");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const dotElement = document.getElementsByClassName('dot-child');

let sliderIndex = 0;

// დივის შექმნის ფუნქცია
function createDivTag(){
    let div = document.createElement("div");
    return div;
}
// იმიჯის შექმნის ფუნქცია
 function createImgTag(item){
//     let imgTag = document.createElement("img");
//     imgTag.setAttribute ("src", `${item.imageUrl}`);
    
//     //აბრუნებ ახალ შექმნილ ტეგს ატრიბუტებით
//     return imgTag;
// 

//background image 
let backgroungImageTag = document.createElement('div');
backgroungImageTag.style.backgroundImage = `url(${item.imageUrl})`;
backgroungImageTag.classList.add('backgroung-image');

return backgroungImageTag;
}

//სათაურის შექმნის ფუნქცია
function createTitle(item){
    let titleTag = document.createElement("h2");
    titleTag.innerText = `${item.title}`;
return titleTag;

}

//dot-შექმნა

function createDots(){
let dotParentElement = document.createElement("div");
dotParentElement.classList.add('dots-parent');

//foreach რომ გავიგოთ რამდენი ელემენტია მასივში
dataSLider.forEach(element => {
let dotItem = document.createElement('div');
dotItem.classList.add('dot-child');
dotItem.setAttribute('data-id', `${element.id-1}`);

dotItem.addEventListener('click', function(event){
    console.log(event.target);
    let dotId = event.target.getAttribute("data-id");
    sliderIndex = dotId;
slide();


    console.log(dotId);
});


dotParentElement.appendChild(dotItem);


})
console.log(dotParentElement);
return dotParentElement;

}

//მთავარი ფუნქცია
function slide(){
    //console.log(dataSLider[sliderIndex]);

    sliderContent.innerText = " ";

    let slideItem = createDivTag();
    let imgItem = createImgTag(dataSLider[sliderIndex]);
let titleItem = createTitle(dataSLider[sliderIndex]);
let dots = createDots();


slideItem.appendChild(imgItem);
slideItem.appendChild(titleItem);
sliderContent.appendChild(slideItem);
sliderContent.appendChild(dots);


console.log(slideItem, imgItem,titleItem );
dotElement[sliderIndex].classList.add("activeDot");




}
slide();



function arrowLeftClick (){
   if (sliderIndex == 0){
    sliderIndex ==dataSLider.length-1;
    slide();
        return;
    }
sliderIndex -= 1;
slide();  
}


function arrowRightClick (){
 if (sliderIndex == dataSLider.length-1){
    sliderIndex == 0;
    slide();
        return;
    }
    sliderIndex += 1;
    slide();

}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowRightClick);

// setInterval( (arrowRightClick) => {

// }, 3000); 

