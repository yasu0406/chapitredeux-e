import gsap from 'gsap';
import ScrollMagic from "scrollmagic";
let contoller = new ScrollMagic.Controller;

export const collectionAnimation = (collections: any) => {
    collections.map((collection:any, index:any) => {
        gsap.to(collection, {
            delay:index / 2,
            duration:2,
            opacity: 1,
            ease: 'Expo.easeOut'
        });
    })
}

export const collectionCloseAnimation = (collections: any) => {
    collections.map((collection:any, index:any) => {
        gsap.to(collection, {
            duration:2,
            opacity: 0,
            ease: 'Expo.easeOut'
        });
    })
}