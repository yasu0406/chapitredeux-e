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

export const designerSectionAnimation = (aboutTextBox: any) => {
    new ScrollMagic.Scene({
        triggerElement: aboutTextBox,
        reverse:false
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
        }).addTo(contoller);
};

export const designerAnimation = (designerInnerContainer: any) => {
    new ScrollMagic.Scene({
        triggerElement: designerInnerContainer,
        reverse:false
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
        }).addTo(contoller);
};

export const shopListAnimation = (shopList: any) => {
    shopList.map((shop:any) => {
        new ScrollMagic.Scene({
            triggerElement: shop,
            reverse:false
            }).on("enter", () => {
                gsap.to(shop, {
                    duration:2,
                    opacity: 1,
                    y:0,
                    ease: 'Expo.easeOut'
                });
            }).addTo(contoller);
    })
}