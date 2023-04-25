let totalItem = document.getElementsByClassName('heading');
let openIcon = document.getElementsByClassName('icon-open');
let closeIcon = document.getElementsByClassName('icon-close');

// console.log(totalItem);

for(let i =0 ;i < totalItem.length; i++){
    totalItem[i].addEventListener('click',()=>{
       let act =  totalItem[i].classList.toggle("active");
            if(act){
                openIcon[i].style.display="none";
                closeIcon[i].style.display="block";
            }else{
                openIcon[i].style.display="block";
                closeIcon[i].style.display="none";
            }

    })
}