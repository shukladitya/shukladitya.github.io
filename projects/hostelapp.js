let cursor = document.querySelector('.cursor');
let curX=0;
let curY=0;
document.addEventListener('mousemove',(e)=>{
	curX=e.clientX;
	curY=e.clientY;
	cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;`);
});
document.addEventListener('scroll',(e)=>{
	cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;`);	
});


document.querySelector(".fa-link").addEventListener("click",copyfunction);
function copyfunction(){
	let linktext=document.querySelector("input[type='text']");
	linktext.select();
	linktext.setSelectionRange(0, 9999)
	document.execCommand('copy');
	function tempAlert(msg,duration)
	{
 	var el = document.createElement("div");
 	el.setAttribute("style",`position:absolute;top:${document.querySelector(".fa-link").offsetTop-37}px;left:${document.querySelector(".fa-link").offsetLeft-15}px;background-color:var(--backgroundgradient);padding:5px;border-radius:5px;`);
 	el.innerHTML = msg;
 	setTimeout(function(){
  	el.parentNode.removeChild(el);
 	},duration);
 	document.body.appendChild(el);
	}
	tempAlert("Copied",1200);
}


daynight=document.querySelector(".fa-moon");
daynight.addEventListener("click",toggle);
var daynightflag=0;
function toggle(){
	this.classList.toggle("fa-sun");
	if(daynightflag==0){
						document.documentElement.style.setProperty('--backgroundcolor','#111216');
						document.documentElement.style.setProperty('--backgroundgradient','#2E3742');
						document.documentElement.style.setProperty('--iconnotselected','#88888A');
						document.documentElement.style.setProperty('--iconhover','white');
						document.documentElement.style.setProperty('--text','white');
						document.documentElement.style.setProperty('--shadowcolor','black');
						document.getElementById('logo').style.backgroundImage = "url('../css/asset/logolight.png')";
						curcolour='white';
						daynightflag=1;
					   }
	else{   
			document.documentElement.style.setProperty('--backgroundcolor','#FAFAFA');
			document.documentElement.style.setProperty('--backgroundgradient','#D8D8D8');
		    document.documentElement.style.setProperty('--iconnotselected','#7D7D7D');
			document.documentElement.style.setProperty('--iconhover','black');
			document.documentElement.style.setProperty('--text','black');
			document.documentElement.style.setProperty('--shadowcolor','#7D7D7D');
			document.getElementById('logo').style.backgroundImage = "url('../css/asset/logodark.png')";
			curcolour='black';
			daynightflag=0;
	}
}

