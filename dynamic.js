var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);
        //console.log(targetSectionID);
    });
}


var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}

initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+ '%';
        },10);
    }
}

function checkScroll(){
    //You have to check whether skill container is visible
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initializeBars();
    }
}
























// var targetPos=1500;
// var currentPos=0;
// function scrollControl(){
//     if(currentPos>=targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentPos +=50;
//     window.scrollBy(0,50);
// }
// var scrollInterval=setInterval(scrollControl,50);



// var educationSection=document.getElementById('education');
// var coordinates=educationSection.getBoundingClientRect();

