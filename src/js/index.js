/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    
window.genCard= function(){
    
    var suit = ["♥","♠️","♣️","♦"];
    var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    
        function randomCard(){
          
            var randomSuit = suit[Math.floor(Math.random()*suit.length)];
            var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
            
            document.querySelector(".icon").innerHTML = randomSuit;
            document.querySelector(".cardContentContainer").innerHTML = randomNumber;
            document.querySelector(".iconTwo").innerHTML = randomSuit;
            
            if (randomSuit=="♥" || randomSuit=="♦"){
                document.querySelector("#maincardcontainer").style.color = "red";
            }
            
            else if (randomSuit=="♠" || randomSuit=="♣️"){
                document.querySelector("#maincardcontainer").style.color = "black";
            
            }
        
        }
    
    randomCard();

    
    };
    
    window.genCard();
};