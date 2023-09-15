let stranger= document.querySelector("h5")

let add = document.querySelector(".add")

let flag=0;

add.addEventListener("click",function(){
    if(flag==0){
        stranger.innerHTML="friends"
        stranger.style.color="green";
        add.innerHTML="Remove Friend"
        flag=1;
    }
    else{
        stranger.innerHTML="Stranger";
        stranger.style.color="red";
        add.innerHTML="Add Friend"
        flag=0;
    }

    
})

