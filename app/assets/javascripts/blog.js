$( document ).ready(function() {
	$('.timestring').each(function() {
		this.textContent = moment(this.textContent, 'YYYY-MM-DD hh:mm:ss').format('lll'); // 2018-01-20 19:51:44 UTC
	});
});