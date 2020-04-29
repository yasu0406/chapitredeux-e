import React, { useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Button } from '../../styles/common.style.component';
import "react-image-gallery/styles/scss/image-gallery.scss";

interface CollecitonDetailProps { collectionDetail: any; }

const CollectionDetailView: React.FC<CollecitonDetailProps> = ({collectionDetail}:any) => {
    const {title, description, price, detailImages} = collectionDetail.collection;
    const [quantity, setQuantity] = useState<number>(1);
    const slider = useRef<HTMLLIElement>(null);
    const images:any[] = [];
    const imagesMap = () => {
        detailImages.map((detailImage:any) => {
            images.push({
                original: `http://localhost:1337${detailImage.url}`,
                thumbnail: `http://localhost:1337${detailImage.url}`,
            });
        });
    };
    imagesMap();
    const onChange = (e:any) => {
        console.log(e.target.value); 
        setQuantity(parseInt(e.target.value));
    }
    return (
        <ul>
            <li ref={slider} className='t'>
            <ImageGallery items={images} lazyLoad={true} thumbnailPosition='bottom' showPlayButton={false} showNav={false} />
            </li>
            <li>
                <h1>{title}</h1>
                <p>${price}</p>
                <p className='description'>{description}</p>
                <dl>
                    <dt>Quantity </dt>
                    <dd><input type="number" name="" id="" value={quantity} onChange={onChange}/></dd>
                </dl>
                <Button>Add Cart</Button>
            </li>
        </ul>
    )
};

export default CollectionDetailView;