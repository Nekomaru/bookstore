$(function() {
	var hidden = true
	$('.collapsed-menu__show-items').on('click', function(event) {
		if (hidden) {
			$(event.target).find('~ .collapse-menu__items').show()
		} else {
			$(event.target).find('~ .collapse-menu__items').hide()
		}
		hidden = !hidden
	})
})