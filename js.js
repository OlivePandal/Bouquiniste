
function rememberValues( ID, keyName){
	var element=document.getElementsByName(ID);
	for(var i=0;i<element.length;i++){
		if(element[i].checked){
			localStorage.setItem(keyName,element[i].value);
		}
	}
}
function writeValues(){
	var value;
	for(var i=1;i<11;i++){
		value=localStorage.getItem("test"+i);
		document.getElementById('id'+i).innerHTML=value;
	}
}