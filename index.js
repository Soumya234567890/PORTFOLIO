//let cross=document.querySelector(".Cross");
document.querySelector(".Cross").style.display="none";
document.querySelector(".hamBurger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display="inline";
        document.querySelector(".Cross").style.display="none";
    }
    else{
        document.querySelector(".ham").style.display="none";
        setTimeout(()=>{
            document.querySelector(".Cross").style.display="inline";

        },400);
        

    }
    
    
})