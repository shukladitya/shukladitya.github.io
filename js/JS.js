//cursor code and background colour change
let cursorBoundary = [];
projectImages = document.querySelectorAll('.project-image');
forCursor = document.querySelectorAll('.forcursor');

projectImages.forEach((element)=>{
	element.addEventListener('mouseenter',()=>{
		cursorBoundary.push(element.getBoundingClientRect().top);
		cursorBoundary.push(element.getBoundingClientRect().right);
		cursorBoundary.push(element.getBoundingClientRect().bottom);
		cursorBoundary.push(element.getBoundingClientRect().left);
		cursor.classList.add('cursor-big');
	});
});
forCursor.forEach((element)=>{
	element.addEventListener('mouseenter',()=>{
		cursorBoundary.push(element.getBoundingClientRect().top);
		cursorBoundary.push(element.getBoundingClientRect().right);
		cursorBoundary.push(element.getBoundingClientRect().bottom);
		cursorBoundary.push(element.getBoundingClientRect().left);
		cursor.classList.add('cursor-big');
	});
});
document.addEventListener('mousemove',(e)=>{
	if(e.clientY<cursorBoundary[0]||e.clientX>cursorBoundary[1]||e.clientY>cursorBoundary[2]||e.clientX<cursorBoundary[3])
		{	cursor.classList.remove('cursor-big');
			cursorBoundary=[];
		}
});
document.addEventListener('scroll',(e)=>{
			cursor.classList.remove('cursor-big');
			cursorBoundary=[];
		
});

let cursor = document.querySelector('.cursor');
let curX=0;
let curY=0;
let curcolour='black';
document.addEventListener('mousemove',(e)=>{
	curX=e.clientX;
	curY=e.clientY;
	cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
});
document.addEventListener('scroll',(e)=>{
	cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	if(window.scrollY<851){
		daynightflag==1?document.documentElement.style.setProperty('--backgroundcolor','#111216'):document.documentElement.style.setProperty('--backgroundcolor','#FAFAFA');
		daynightflag==1?curcolour='white':curcolour='black';
	}
	if(window.scrollY>850)
	{
		document.documentElement.style.setProperty('--backgroundcolor','#DAF3F4');
		curcolour='#027D7E';
		cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	}
	if(window.scrollY>1870)
	{
		document.documentElement.style.setProperty('--backgroundcolor','#EABBCA');
		curcolour='#8367B2';
		cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	}
	if(window.scrollY>2970)
	{
		document.documentElement.style.setProperty('--backgroundcolor','#C4BCEC');
		curcolour='#7D6BD5';
		cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	}
	if(window.scrollY>4100)
	{
		document.documentElement.style.setProperty('--backgroundcolor','#FFE1E6');
		curcolour='#DA8E8D';
		cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	}
	if(window.scrollY>5465)
	{
		daynightflag==1?document.documentElement.style.setProperty('--backgroundcolor','#111216'):document.documentElement.style.setProperty('--backgroundcolor','#FAFAFA');
		daynightflag==1?curcolour='white':curcolour='black';
		cursor.setAttribute("style",`top:${curY-10+window.scrollY}px;left:${curX-5}px;background-color:${curcolour}`);
	}		
});
//cursor code and background colour change



document.querySelector("#avatar").addEventListener("click",openabout);
function openabout(){
	location.href='about.html';
}
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
///////////////////////////////////above is the recent code(link from avatar and copy url when link icon clicked)/////////////////////
function viewalltoggle(){
	document.querySelector('#viewAll').style.display!='block'?document.querySelector('#viewAll').style.display='block':document.querySelector('#viewAll').style.display='none';
}
///////////////////////////////////above is viewall toggle this is also recent code/////////////////////
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
						document.getElementById('logo').style.backgroundImage = "url('css/asset/logolight.png')";
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
			document.getElementById('logo').style.backgroundImage = "url('css/asset/logodark.png')";
			curcolour='black';
			daynightflag=0;
	}
}

// function toogletasto(){
// 	if (document.getElementById('tastovideo').style.display=='block') {
// 		document.getElementById('tastovideo').style.display='none';
// 		document.getElementById('vid1').pause();
// 	}
// 	else 
// 		document.getElementById('tastovideo').style.display='block';

// }
// function toogleatmo(){
// 	if (document.getElementById('atmovideo').style.display=='block') {
// 		document.getElementById('atmovideo').style.display='none';
// 		document.getElementById('vid2').pause();
// 	}
// 	else 
// 		document.getElementById('atmovideo').style.display='block';
// }



// --------------------------------------------blogs-----------------
var blogview=0;
function toggleview(){
	console.log(blogview);
	if(blogview==0)
	{  
	   document.getElementById('tileview').classList.remove('notselectedicon');
       document.getElementById('listview').classList.remove('selectedicon');
	   document.getElementById('tileview').classList.add('selectedicon');
       document.getElementById('listview').classList.add('notselectedicon');
       //changing tiles  
       document.getElementById('blog1').classList.remove('blog1list');
       document.getElementById('blog1').classList.add('blog1tile');
       document.getElementById('blog2').classList.remove('blog2list');
       document.getElementById('blog2').classList.add('blog2tile');
       document.getElementById('blog3').classList.remove('blog3list');
       document.getElementById('blog3').classList.add('blog3tile');
       document.getElementById('blog4').classList.remove('blog4list');
       document.getElementById('blog4').classList.add('blog4tile');
       document.querySelectorAll('.blogimage').forEach(query=>{query.classList.remove('blogimagelist');}); 
       document.querySelectorAll('.title').forEach(query=>{query.classList.remove('blogtitlelist');});
       document.querySelectorAll('.subtitle').forEach(query=>{query.classList.remove('blogsubtitlelist');});
	}
	else if(blogview==1)
	{  
	   document.getElementById('tileview').classList.remove('selectedicon');
       document.getElementById('listview').classList.remove('notselectedicon')
	   document.getElementById('tileview').classList.add('notselectedicon');
       document.getElementById('listview').classList.add('selectedicon');
 		//changing tiles 
       document.getElementById('blog1').classList.remove('blog1tile');
       document.getElementById('blog1').classList.add('blog1list');
       document.getElementById('blog2').classList.remove('blog2tile');
       document.getElementById('blog2').classList.add('blog2list');
       document.getElementById('blog3').classList.remove('blog3tile');
       document.getElementById('blog3').classList.add('blog3list');
       document.getElementById('blog4').classList.remove('blog4tile');
       document.getElementById('blog4').classList.add('blog4list');
       document.querySelectorAll('.blogimage').forEach(query=>{query.classList.add('blogimagelist');});
       document.querySelectorAll('.title').forEach(query=>{query.classList.add('blogtitlelist');});
       document.querySelectorAll('.subtitle').forEach(query=>{query.classList.add('blogsubtitlelist');});
	}
}