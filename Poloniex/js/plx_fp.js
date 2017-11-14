try {
	var nv_p = "";
	for (var i=0; i<navigator.plugins.length; i++)
		nv_p += navigator.plugins[i].name;
	var device_id = [md5(navigator.userAgent),md5(navigator.language + new Date().getTimezoneOffset()),md5(navigator.productSub),md5(screen.width * screen.height),md5(navigator.platform),md5(nv_p)].join("");
} catch (e) {
	var device_id = null;
}