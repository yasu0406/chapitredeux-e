import React, { useEffect, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import { InnerContainer, Button } from '../../styles/common.style.component';
import { DetailMain } from './collection-detail.style';
import "react-image-gallery/styles/scss/image-gallery.scss";

const CollectionDetail = () => {
    const slider = useRef<HTMLLIElement>(null);
    const test = document.querySelector('.t') as HTMLElement;
    let sliderImages:Array<HTMLDivElement> = [];
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    useEffect(() => {
        console.log((slider.current as HTMLElement).offsetWidth);
    })
    return(
        <>
            <DetailMain>
                <InnerContainer>
                    <ul>
                        <li ref={slider} className='t'>
                        <ImageGallery items={images} />
                        </li>
                        <li>
                            <h1>Collection name</h1>
                            <p>$400</p>
                            <dl>
                                <dt>Quantity </dt>
                                <dd><input type="number" name="" id="" value='1'/></dd>
                            </dl>
                            <Button>Add Cart</Button>
                        </li>
                    </ul>
                </InnerContainer>
            </DetailMain>
        </>
    );
};

export default CollectionDetail;