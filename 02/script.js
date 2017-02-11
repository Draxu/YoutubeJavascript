function createHTMLElement(){
	var myBox = document.getElementById("myBox");
	var element = document.createElement("div");
	element.style.width = "200px";
	element.style.height = "200px";
	element.style.marginLeft = "10%";
	element.style.marginTop = "10%";
	element.style.float = "left";
	element.style.backgroundColor = "black";
	createHtmlText(element);
	myBox.appendChild(element);
}


function createHtmlText(ele){
	var text = document.createElement("p");
	text.innerHTML = "This is a text";
	text.style.color ="white";
	ele.appendChild(text);
}	

function createElmentsWithAmount(amount){
	for(var i = 0; i < amount;i++){
		createHTMLElement();
	}
}

createElmentsWithAmount(10000);
