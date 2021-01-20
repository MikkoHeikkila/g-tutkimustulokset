const $ = jQuery;

$( document ).ready(function() {


    /*
    $("#container").on("mousewheel", function(e, delta) {
        $(this).scrollLeft(this.scrollLeft + (-delta * 40));
        e.preventDefault();
    });
    */

    var controller = new ScrollMagic.Controller({
        vertical: false,
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "150%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // build tween
    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    let scenes = [];

    for (var i=0; i<slides.length; i++) {
    
        scenes[i] = new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            //.duration(0)
            .setTween(tween)
            .setPin(slides[i], { pushFollowers: false })
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    }

    // change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    //Shared function for all scenes
    scenes.forEach(activateScene);

	//Bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();
			// trigger scroll
			controller.scrollTo(id);
			// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});


});

function activateScene(scene, index){

    if(index > 0){
        scene.setClassToggle("body", "scene-bg-" + index);
    }
    
}