function getAllete(xmlfile,allete){
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET",xmlfile,false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	return(xmlDoc.getElementsByTagName(allete)[0].childNodes[0].nodeValue);
}