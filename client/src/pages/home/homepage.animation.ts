import gsap from 'gsap';
import ScrollMagic from "scrollmagic";
let contoller = new ScrollMagic.Controller;

export const mainVisualAnimation = (mainSection) => {
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

export const designerSectionAnimation = (aboutTextBox) => {
    new ScrollMagic.Scene({
        triggerElement: aboutTextBox
        }).on("enter", () => {
            gsap.to((aboutTextBox as HTMLElement).querySelector('h2'),{
                duration:2,
                opacity: 1,
                y:0,
                ease: 'Expo.easeOut'
            });
            gsap.to((aboutTextBox as HTMLElement).querySelector('p'), {
                delay: 0.5,
                duration:2,
                opacity: 1,
                y:0,
                ease: 'Expo.easeOut'
            });
        }).on("leave", () => {
            gsap.to((aboutTextBox as HTMLElement).querySelector('h2'), {
                opacity: 0,
                y: 50
            });
            gsap.to((aboutTextBox as HTMLElement).querySelector('p'), {
                opacity: 0,
                y: 50
            });
        }).addTo(contoller);
};

export const designerAnimation = (designerInnerContainer) => {
    new ScrollMagic.Scene({
        triggerElement: designerInnerContainer
        }).on("enter", () => {
            gsap.to((designerInnerContainer as HTMLElement).querySelector('p'), {
                delay: 1,
                duration:2,
                opacity: 1,
                y:0,
                ease: 'Expo.easeOut'
            });
            gsap.to((designerInnerContainer as HTMLElement).querySelector('ul'), {
                delay: 1.5,
                duration:2,
                opacity: 1,
                y:0,
                ease: 'Expo.easeOut'
            });
        }).on("leave", () => {
            gsap.to((designerInnerContainer as HTMLElement).querySelector('p'), {
                opacity: 0,
                y: 50
            });
            gsap.to((designerInnerContainer as HTMLElement).querySelector('ul'), {
                opacity: 0,
                y: 50
            });
        }).addTo(contoller);
};

export const shopListAnimation = (shopList) => {
    shopList.map(shop => {
        let list = shop.querySelectorAll('li');
        new ScrollMagic.Scene({
            triggerElement: shop
            }).on("enter", () => {
                gsap.to(shop, {
                    delay: 1,
                    duration:2,
                    opacity: 1,
                    y:0,
                    ease: 'Expo.easeOut'
                });
            }).on("leave", () => {
                gsap.to(shop, {
                    opacity: 0,
                    y: 50
                });
            }).addTo(contoller);
    })
}