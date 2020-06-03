import React, { useRef, useEffect } from 'react';
import { AboutVisual, StorySection, StoryListContainer, StoryListEven, StoryListOdd } from './about.style';
import { mainVisualAnimation, storyListAnimation } from './aboutpage.animation';

const About = () => {
    const mainSection = useRef<HTMLElement>(null);
    let storyList:Array<HTMLLIElement> = [];
    useEffect(() => {
        mainVisualAnimation(mainSection.current);
        storyListAnimation(storyList);
    }, [storyList]);
    return(
        <>
        <AboutVisual ref={mainSection}>
            <div>
            </div>
            <h1>About Me</h1>
        </AboutVisual>
        <StorySection>
            <StoryListContainer>
                    <ul>
                        <li ref={(e:HTMLLIElement) => {storyList.push(e)}}>
                            <StoryListOdd>
                                <li>
                                    <h2>Beginning</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error veritatis nulla obcaecati dolorum facilis sint quasi rem eum placeat dolore suscipit, dolor nihil? Aliquam ipsam voluptate necessitatibus a eius?</p>
                                </li>
                                <li>
                                    <img src="/images/story-beginning-img.jpg" alt="beginning:image"/>
                                </li>
                            </StoryListOdd>
                        </li>
                        <li ref={(e:HTMLLIElement) => {storyList.push(e)}}>
                            <StoryListEven>
                                <li>
                                    <h2>Carrer</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error veritatis nulla obcaecati dolorum facilis sint quasi rem eum placeat dolore suscipit, dolor nihil? Aliquam ipsam voluptate necessitatibus a eius?</p>
                                </li>
                                <li>
                                    <img src="/images/story-carrer-img.jpg" alt="beginning:image"/>
                                </li>
                            </StoryListEven>
                        </li>
                        <li ref={(e:HTMLLIElement) => {storyList.push(e)}}>
                            <StoryListOdd>
                                <li>
                                    <h2>Products</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error veritatis nulla obcaecati dolorum facilis sint quasi rem eum placeat dolore suscipit, dolor nihil? Aliquam ipsam voluptate necessitatibus a eius?</p>
                                </li>
                                <li>
                                    <img src="/images/story-products-img.jpg" alt="beginning:image"/>
                                </li>
                            </StoryListOdd>
                        </li>
                    </ul>
                </StoryListContainer>
        </StorySection>
        </>
    );
}

export default About;