(function($) {

	$.jPanelMenu = function() {
		var jpm = {
			animated: true,
			openMenu: function(){
				this.setMenuStyle();
			},
			closeMenu: function(){
				//this.setMenuStyle();
			},
			setMenuStyle: function(){
				console.log('menu style set');
			}
		};

		return {
			open: jpm.openMenu,
			close: jpm.closeMenu
		};
	};
})(jQuery);