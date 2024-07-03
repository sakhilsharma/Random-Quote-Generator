const text = document.querySelector(".text");
const author = document.querySelector(".author");
const quote_btn = document.querySelector(".create_quote");
const tweet_btn = document.querySelector("#tweet");
const content = document.querySelector(".content");
let count = 0;
async function RandomQuoteGenerator(){
    let url = "https://api.quotable.io/random";
    let quote_content = await fetch(url).then(res => res.json() );
    console.log(quote_content);

    text.innerHTML = `${quote_content.content}`;
    author.innerHTML = `${quote_content.author}`;
    
    if(quote_content.length > 110)
        {
            
            text.style.fontSize = "18px";
             content.style.gap = "45px";
        }
        
      
} 
function stopQuotes(){
    alert("max-qoute reached");
    text.innerHTML = "Be always self-Motivated";
    author.innerHTML ="Sakhil Sharma";
    author.style.fontWeight = "Bold";
}

quote_btn.addEventListener("click",()=>{
    confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
});
    count++;
if(count <= 5){
    RandomQuoteGenerator();
   
}else{
           stopQuotes();
    }
});

//window.open() method of JS opens a new window
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+text.innerHTML+ "---- by"+ author.innerHTML,"Tweet Window","width=600px,height=500px")
}
tweet_btn.addEventListener("click",()=>{
    tweet();
})

    
    

