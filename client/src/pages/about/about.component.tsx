import React from 'react';
import { StorySection, StoryListContainer, StoryListEven, StoryListOdd } from './about.style';

const About = () => {
    return(
        <StorySection>
            <StoryListContainer>
                    <li>
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
                    <li>
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
                    <li>
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
                </StoryListContainer>
        </StorySection>
    );
}

export default About;