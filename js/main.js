const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');


//Select Tab Content Item 
function selectItem(e){
    // remove border from previous tab
    removeBorder();
    removeShow();
    
    //Border under selected tab
    e.classList.add('tab-border');

    //Grab Content item from DOM
    console.log(e.id);

    const tabContentItem=document.querySelector(`#${e.id}-content`);

    //Add Show Class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

// function addBorder(){
//     console.log("add")
//     const e = document.getElementById('tab-2');
//     e.classList.add('tab-border');
// }

//Listen for Tab Click
tabItems.forEach(item=>item.addEventListener('click',()=>selectItem(item)));



function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}


