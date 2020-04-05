import gsap from 'gsap';
import { colors } from '../../styles/common.style';

export const headerAnimation = (headerElements: any) => {
    gsap.fromTo(headerElements, {
        opacity: 0,
        y: 50,
    },{
        delay: 0.5,
        duration:2,
        opacity: 1,
        y:0,
        ease: 'Expo.easeOut'
    });
}

export const onClickMenuAnimation = (menu: any, bars: any, navList: any) => {
    gsap.to(menu, {
        duration: 1,
        width: '100%',
        ease: 'Expo.easeInOut'
    });
    gsap.to(bars[0], {
        duration: 0.5,
        transform: 'rotate(48deg) translateY(7px) translateX(9px)',
        backgroundColor:'white'
    });
    gsap.to(bars[1], {
        duration: 0.5,
        width: '100%',
        transform: 'rotate(-48deg)',
        backgroundColor:'white'
    });
    gsap.to(bars[2], {
        duration: 0.5,
        opacity: 0
    });
    gsap.to(navList[0], {
        duration: 0.5,
        delay: 1,
        transform: 'translateY(0)',
    });
    gsap.to(navList[1], {
        duration: 0.5,
        delay: 1.3,
        transform: 'translateY(0)'
    });
    gsap.to(navList[2], {
        duration: 0.5,
        delay: 1.6,
        transform: 'translateY(0)'
    });
    gsap.to(navList[3], {
        duration: 0.5,
        delay: 1.8,
        transform: 'translateY(0)'
    });
    gsap.to(navList[4], {
        duration: 0.5,
        delay: 2,
        transform: 'translateY(0)'
    });
};

export const onCloseMenuAnimation = (menu: any, bars: any, navList: any) => {
    gsap.to(navList[0], {
        duration: 0.5,
        transform: 'translateY(100%)'
    });
    gsap.to(navList[1], {
        duration: 0.5,
        delay: 0.2,
        transform: 'translateY(100%)'
    });
    gsap.to(navList[2], {
        duration: 0.5,
        delay: 0.4,
        transform: 'translateY(100%)'
    });
    gsap.to(navList[3], {
        duration: 0.5,
        delay: 0.6,
        transform: 'translateY(100%)'
    });
    gsap.to(navList[4], {
        duration: 0.5,
        delay: 0.8,
        transform: 'translateY(100%)'
    });
    gsap.to(menu, {
        duration: 0.5,
        delay: 1,
        width: 0,
        ease: 'Expo.easeInOut'
    });
    gsap.to(bars[0], {
        duration: 0.5,
        delay: 1,
        transform: 'unset',
        backgroundColor:colors.colorBlue
    });
    gsap.to(bars[1], {
        duration: 0.5,
        delay: 1,
        width: '70%',
        transform: 'unset',
        backgroundColor:colors.colorBlue
    });
    gsap.to(bars[2], {
        duration: 0.5,
        delay: 1,
        opacity: 1
    });
}