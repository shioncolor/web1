function getFileName()
{
return window.location.href.split('/').pop();
}

var filename=getFileName();
var opt;
if(filename==='other.html'){
opt=document.querySelector('option[value="other.html"]');
}
else if(filename==='other2.html'){
  opt=document.querySelector('option[value="other2.html"]');
}else{
  opt=document.querySelector('option[value="index.html"]');
}
opt.selected=true;

document.getElementById('form').select.onchange=function(){
location.href=document.getElementById('form').select.value;
}
