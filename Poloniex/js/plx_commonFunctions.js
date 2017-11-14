function hideAllToolPanels() {
    $('.toolPanel, .helpPanel').fadeOut(200);
    $('.tools.active, .help.active').removeClass('active');
}

function restoreTrollboxSettingsFromStorage(s){
	if (typeof(s.trollboxCollapsed) != 'undefined'){
		if (s.trollboxCollapsed === true) {
			$('#TrollboxContainer').addClass('collapsed');
		}
	}
}