function AdBlockEnabled() {
	var ad = document.createElement('ins');
	ad.className = 'AdSense';
	ad.style.display = 'block';
	ad.style.position = 'absolute';
	ad.style.top = '-1px';
	ad.style.height = '1px';
	document.body.appendChild(ad);
	var AdHeight = ad.clientHeight;
	if (AdHeight == '0' ) {
		isAdBlockEnabled = true;
	} else {
		isAdBlockEnabled = false;
	}
	document.body.removeChild(ad);
	return isAdBlockEnabled;
}