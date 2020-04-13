import gsap from 'gsap';
import ScrollMagic from "scrollmagic";
let contoller = new ScrollMagic.Controller;

export const mainVisualAnimation = (mainSection: any) => {
    gsap.to(mainSection, {
        duration: 1.5,
        delay: 1.5,
        opacity: 1,
        width: 'calc(100% - 10rem)',
        ease: 'Expo.easeOut'
    });
    gsap.fromTo((mainSection as HTMLElement).querySelector('h1'), {
        opacity: 0,
        y: 50
    },{
        delay: 2.5,
        duration:2,
        opacity: 1,
        y:0,
        ease: 'Expo.easeOut'
    });
}

export const storyListAnimation = (storyList: any) => {
    storyList.map((story:any) => {
        new ScrollMagic.Scene({
            triggerElement: story,
            reverse:false
            }).on("enter", () => {
                gsap.to(story, {
                    duration:2,
                    opacity: 1,
                    y:0,
                    ease: 'Expo.easeOut'
                });
            }).addTo(contoller);
    })
}