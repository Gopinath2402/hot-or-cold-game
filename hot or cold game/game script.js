let getUICont=(function(){
   var DOMString={
        startGame:".start",
        userInput:".input",
        ansBtn:".guessbtn",
        guessCount:".guess-count",
        playerGuess:".guess-num",
        newGame:".new",
        gameBox:".gaming",
        rulesBox:".rulebar",
        what:".what",
        showTemp:".guessbox",
        playerGuess:".guess-num",
        guessCount:".guess-count"
   }
        return{
            getDOMString:function(){
                return DOMString;
            }
}
})()

window.onload=(function(){
    console.log("app started");
    let userAns;
    let count=0;
    let randomNum=Math.floor(Math.random()*100+1);
   console.log(randomNum);
      var  DOM=getUICont.getDOMString();
        document.querySelector(DOM.startGame).addEventListener("click",function(){
            document.querySelector(DOM.gameBox).style.display="block";
            document.querySelector(DOM.rulesBox).style.display="none";
            

        })
        document.querySelector(DOM.what).addEventListener("click",function(){
            document.querySelector(DOM.gameBox).style.display="none";
            document.querySelector(DOM.rulesBox).style.display="block";
        })

        document.querySelector(DOM.newGame).addEventListener("click",function(){
         randomNum=Math.floor(Math.random()*100+1);
         count=0;
         document.querySelector(DOM.guessCount).innerHTML=0;
         document.querySelector(DOM.playerGuess).innerHTML="";
         document.querySelector(DOM.showTemp).innerHTML="Make your Guess!";
         document.querySelector(DOM.showTemp).style.backgroundColor="#e7405c"
         start;
           console.log("new random number: "+randomNum);
            
        })

     let start=document.querySelector(DOM.ansBtn).addEventListener("click",function(){
        userAns=document.querySelector(DOM.userInput).value;
         if (isNaN(userAns)||userAns=="") {
             alert("enter numbers only")
             document.querySelector(DOM.userInput).value="";
         }
         else{   
             count++;
             document.querySelector(DOM.guessCount).innerHTML=count;
             document.querySelector(DOM.userInput).value="";
            getDifference(randomNum);
            let li=document.createElement("li");
            li.append(userAns);
            document.querySelector(DOM.playerGuess).append(li);
           // console.log(userAns);
         }
            
        })
        function getDifference(randomNum) {
          let difference=Math.abs(userAns-randomNum);
             //console.log(difference);
             tempFeedBack(difference);
            }
            function  tempFeedBack(difference) {
                if (difference>=1&&difference<=10) {
                    //console.log("All Most Closer!");
                    document.querySelector(DOM.showTemp).innerHTML="All Most Closer!";
                    document.querySelector(DOM.showTemp).style.backgroundColor="coral";
                }
               else if (difference>=11&&difference<=25) {
                //console.log("Its Very Hot!");
                document.querySelector(DOM.showTemp).innerHTML="Its Very Hot!";
                document.querySelector(DOM.showTemp).style.backgroundColor="#e74b3c";
                }
                else if (difference>=26&&difference<=50) {
                   // console.log("Its Hot!");
                    document.querySelector(DOM.showTemp).innerHTML="Its Hot!";
                    document.querySelector(DOM.showTemp).style.backgroundColor="#e74b3c";
                }
                else if (difference>=51&&difference<=75) {
                   // console.log("Its Chill!");
                    document.querySelector(DOM.showTemp).innerHTML="Its Chill!";
                    document.querySelector(DOM.showTemp).style.backgroundColor="#10a8ab";
                }
                else if (difference>=76&&difference<=100) {
                   // console.log("Its Freezing!");
                    document.querySelector(DOM.showTemp).innerHTML="Its Freezing!";
                    document.querySelector(DOM.showTemp).style.backgroundColor="#10a8ab";
                }
                else if (difference==0) {
                   // console.log("You Got It!!!");
                    document.querySelector(DOM.showTemp).innerHTML="You Got It !!!";
                    document.querySelector(DOM.showTemp).style.backgroundColor="#e7405c";
                    document.querySelector(DOM.userInput).disabled=true;
                }
            }
})()
