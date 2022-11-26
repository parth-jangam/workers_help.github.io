function vit(){
    var p= document.getElementById("parth").value;
    if(p=="wheat" || p=="गेहू"){
        window.location.href= "/cropinfo/gehu"
        return false;
    }
    else{
        if(p=="gram"|| p=="चना"){
			window.location.href= "/cropinfo/chana"
        	return false;
        }
    	else{
        	alert("wrong input")
        	return ;
    	}
    }

}