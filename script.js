let url = "https://dog.ceo/api/breeds/image/random";

let btn =document.querySelector("button");

async function api(){
     
    try{
     let f1= await axios.get(url);
     let result=f1.data.message;
    //  console.log("Data : 1",f1.data.message);
    return result;
       
    }
     catch(err){
        console.log("Promises is Rejected");
        return "No Found";
    
     }

}


btn.addEventListener("click",async function(){
   let result= await api();
   console.log("Data -",result);

   let img=document.querySelector("img");
   img.src=result;
  
});