document.querySelector('.enter').addEventListener("click", myClick)


function myClick(){
	let login = document.querySelector(".login").value;
	let password = document.querySelector(".pass").value;
	

	if (login == "user" && password == "123456"){
		console.log("da")

}	  	document.location.replace("index.html")
}

