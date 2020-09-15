window.onload = () => {
    let tl = new TimelineMax();

    TweenMax.set('h1', {xPercent: -50, yPercent: -50, x:0, y:0})

    if(window.matchMedia("(min-width: 1000px)").matches) {

        tl
            .to('.gauche h2', 2, {delay: 0.5, opacity:0, y:-100, ease: Expo.easeInOut})
            .to('.gauche', 2, {top: "-150%", autoAlpha: 0, ease: Expo.easeInOut}, '-=1')
            .to('.droite h2', 2, {opacity: 0, y: +60, ease: Expo.easeInOut}, '-=2')
            .to('.droite', 2 , {top: "+100%", autoAlpha:0, ease: Expo.easeInOut}, '-=1.5')

            .from('.nav', 1, {opacity: 0, y: -60, ease: Expo.easeInOut} ,3)
            .from('h1', 1, {opacity: 0, x: 200, ease: Expo.easeInOut}, 3)
            .from('.social li', 0.75, {opacity: 0, y: 360, ease: Expo.easeInOut}, 3.5)

            .staggerFrom('i', 0.5, {opacity: 0, x: -160, ease: Expo.easeInOut}, 0.35, 3.75)

    } else if (window.matchMedia("(max-width: 1000px)").matches) {

document. getElementById('gauche').style.display = "none";
document. getElementById('droite').style.display = "none";

        let tl2 = new TimelineMax();

        tl2
            .from('.nav', 1, {opacity: 0, y: -60, ease: Expo.easeInOut} ,0.5)
            .from('h1', 1, {opacity: 0, x: 200, ease: Expo.easeInOut}, 0.5)
            .from('.social li', 0.75, {opacity: 0, y: 360, ease: Expo.easeInOut}, 1)

            .staggerFrom('i', 0.5, {opacity: 0, x: -160, ease: Expo.easeInOut}, 0.35, 1.25)
    }
}