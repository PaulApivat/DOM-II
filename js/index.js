// Your code goes here


//mouseover
document.getElementById('headerpic').style.filter = "sepia(100%)";

let headerpic = document.getElementById('headerpic');
headerpic.addEventListener("mouseover", function(event) {
    //this = event.target
    event.target.style.filter = "sepia(0%)";
    // reset color so once mouseover, effect takes place
    // setTimeout(function(){
    //     event.target.style.filter = "sepia(100%)";
    // }, 1000);
});
headerpic.addEventListener("mouseleave", function(event){
    event.target.style.filter = "sepia(100%)";
})


//keydown

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(event) {
    if (event.keyCode == '65') {
        alert("The 'a' letter key has been pressed!");
    }
}


//click - each click rotates Hue by 90deg - pic1
let picHue = document.getElementById('pic1');
picHue.addEventListener('click', function(event) {
   event.target.style.filter += "hue-rotate(90deg)";
});

let picInvert = document.getElementById('pic2');
picInvert.addEventListener('click', function(event){
    event.target.style.filter += "saturate(8)";
});

let picContrast = document.getElementById('pic3');
picContrast.addEventListener('click', function(event) {
    event.target.style.filter += "drop-shadow(8px 8px 10px gray)";
})


//wheel

//drag/drop

//identify WHAT is draggable
function dragstart_handler(event) {
    console.log("dragStart");
    // add the target element's id to the data transfer object
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log("data added");
}

//define the drag's data - - is this redundant?
// function dragstart_handler(event) {
//     //add the drag data
//     event.dataTransfer.setData("text/plain", event.target.id);
// }

//define a drop zone
function dragover_handler(event) {
    event.preventDefault();
    //set dropeffect to move
    event.dataTransfer.dropEffect = "move";
    console.log("drag effect move added");
}

function drop_handler(event) {
    event.preventDefault();
    //get the id of the target and add the moved element to the target's DOM
    let data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
}



//load

window.addEventListener('load', function(){
    let windowload = this.window.open('','', 'width=500,height=500');
    windowload.document.write(`<h1>Welcome to the Fun Bus!</h1> \n <h2>Flash Sale Everything 50% Off</h2>`);
    // windowload.focus()
    this.setTimeout(function() {windowload.close();}, 2000);
})


//focus

//resize




//scroll
window.addEventListener('scroll', function(){
    //take actual height of entire document, subtract height of window
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;  //scrollable === 1107 max
    
    //if scrolled value is equal to scrollable, page bottom has been reached
    if(Math.ceil(scrolled) === scrollable){
        // alert(`Now that you've scrolled to the bottom, sign up for a program! :) `);

        //alternative to alert - window with timer, must enable pop-ups
        let w = this.window.open('','', 'width=200,height=100');
        w.document.write(`Now that you've scrolled to the bottom, sign up for a program! :) `)
        // w.focus()
        this.setTimeout(function() {w.close();}, 2500)
    }
});



//select - - why does this not work? 

// var selectevent = document.getElementById("select-label");
// selectevent.addEventListener('select', function(){
//     alert('Good Choice!');
// }, false);


//dblclick

//dbclick to create pop-up window to choose your package
let clickbutton = document.getElementById("btn1");
clickbutton.addEventListener("dblclick", function(){
    //.open() method takes three arguments
    window.open("signup.html", "newWindow", "menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=200,left=200");
})

//incorporate "focus" + "resize"

// function getFocus() {
//     document.getElementById("name-label").focus();
// }

// Night Mode - - how to 'click' again and make Night Mode go away?
let desti = document.getElementById('night');   //.destination p

desti.addEventListener('click', function(event){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
})

// Event Propagation and preventDefault()

const buttonGone = document.querySelector('#btn3');
const containerButtonGone = document.querySelector('.destination #btn3');
const container = document.querySelector('.gone');

const buttonDisappear = function(event) {
    event.stopPropagation();      //what is being stopped here?
    // this.parentNode.style.display = 'none';
    this.style.display = 'none';

}

containerButtonGone.addEventListener('click', buttonDisappear);

const containerClickBlue = function(event) {
    this.style.backgroundColor = 'dodgerblue';
}

container.addEventListener('click', containerClickBlue);

const onlyButtonDisappear = document.querySelector('#btn3');

// what is this doing?
// onlyButtonDisappear.addEventListener('click', function(event){ event.preventDefault() })
