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
			daynightflag=0;
	}
}

function toogletasto(){
	if (document.getElementById('tastovideo').style.display=='block') {
		document.getElementById('tastovideo').style.display='none';
		document.getElementById('vid1').pause();
	}
	else 
		document.getElementById('tastovideo').style.display='block';

}
function toogleatmo(){
	if (document.getElementById('atmovideo').style.display=='block') {
		document.getElementById('atmovideo').style.display='none';
		document.getElementById('vid2').pause();
	}
	else 
		document.getElementById('atmovideo').style.display='block';
}

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