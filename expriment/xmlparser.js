function getAllete(xmlfile,allete){
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET",xmlfile,false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	return(xmlDoc.getElementsByTagName(allete)[0].childNodes[0].nodeValue);
}