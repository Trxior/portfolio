$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('.toggleMenu').click(function () {
    $('#sidebar-btn').toggleClass('fa-times fa-bars');
    $('.sidebar').toggleClass('sidebar--active');
});
/*
const about = document.getElementById("about"),
    technologies = document.getElementById("technologies"),
    project = document.getElementById("project"),
    arr = [about, technologies, project];

let index = 0;

window.addEventListener('wheel', (e) => {

    if (e.deltaY > 0) {
        if (index === 3) {
            index = 3;
        } else {
            index++;
        }
    } else {
        if (index === 0) {
            index = 0;
        } else {
            index--;
        }
    }
    console.log(index);
    window.scroll(0, arr[index].offsetTop);
})*/









/*

$(window).scroll(function () {

	var $window = $(window),
		$panel = $('.animation');
	
	var	$scroll = $window.scrollTop() + $window.height() - 160;

	$panel.each(function () {
		var $this = $(this);

		if ($this.position().top <= $scroll) {

			$($this).css('transform', 'translate(0, 0)');
			$($this).css('opacity', '1');
		}
	});

}).scroll();
*/
