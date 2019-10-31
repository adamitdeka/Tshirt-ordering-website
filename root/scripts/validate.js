/*

	Your JavaScript will go here!
	To learn more about JavaScript, please visit this link
	
	https://www.w3schools.com/js/default.asp
	
*/
window.onload = pageReady;
function pageReady(){
    var mainImage = document.getElementById("shirtType");
    var Grey = document.getElementById("colorGrey");
    var Black = document.getElementById("colorBlack");
    var Red = document.getElementById("colorRed");
    var Blue = document.getElementById("colorBlue");
    var Green = document.getElementById("colorGreen");
    var Purple = document.getElementById("colorPurple");
    var ColorDesc = document.getElementById("tshirtColorDesc")
    var Size = document.getElementById("sizeType");
    var SizeDesc = document.getElementById("tshirtSizeDesc");
    var Style = document.getElementById("styleType");
    var StyleDesc = document.getElementById("tshirtStyleDesc");
    var sizeTypeValue;
    var styleTypeValue;
    
    Grey.onclick = switchGreyShirt;
    Black.onclick = switchBlackShirt;
    Red.onclick = switchRedShirt;
    Blue.onclick = switchBlueShirt;
    Green.onclick = switchGreenShirt;
    Purple.onclick = switchPurpleShirt;
    Size.onchange = sizeDescription;
    Style.onchange = styleDescription;
    
    function sizeDescription(){
      
        SizeDesc.innerHTML= Size.options[Size.selectedIndex].text;
        
    }
    function styleDescription(){
        StyleDesc.innerHTML = Style.options[Style.selectedIndex].text;
    }
    
    function switchGreyShirt(){
        mainImage.src = "images/tshirt-white.png"; 
        ColorDesc.innerHTML= "grey";
    }
    function switchBlackShirt(){
        mainImage.src = "images/tshirt-black.png";  
        ColorDesc.innerHTML= "black";
    }
    function switchRedShirt(){
        mainImage.src = "images/tshirt-red.png"; 
        ColorDesc.innerHTML= "red";
    }
    function switchBlueShirt(){
        mainImage.src = "images/tshirt-blue.png";
        ColorDesc.innerHTML= "blue";
    }
    function switchGreenShirt(){
        mainImage.src = "images/tshirt-green.png"; 
        ColorDesc.innerHTML= "green";
    }
    function switchPurpleShirt(){
        mainImage.src = "images/tshirt-purple.png";  
        ColorDesc.innerHTML= "purple";
    }
}

