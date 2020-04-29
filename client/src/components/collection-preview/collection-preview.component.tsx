import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { collectionAnimation, collectionCloseAnimation } from './collection.animation';

interface CollecitonPreviewProps { collection: any; }

const CollecitonPreview: React.FC<CollecitonPreviewProps> = ({collection}:any) => {
    const collections:Array<HTMLLIElement> = [];
    let history = useHistory();
    useEffect(() => {
        collectionAnimation(collections);
    },[]);
    const changePage = (e: any, destination:string) => {
        e.preventDefault();
        collectionCloseAnimation(collections);
        setTimeout(() => {
          history.push(destination);
        }, 950);
    };
    const previewRender = () => {
        return collection.collections.map((preview:any) => {
            let slug:string = preview.title.replace(/\s/g, '');
            return (
                <li key={preview.id} ref={(e:HTMLLIElement) => {collections.push(e)} }>
                    <Link to={`/collection-detail/${slug},${preview.id}`}><img src={`http://localhost:1337${preview.thumb.url}`} alt={preview.title}/></Link>
                </li>
            )
        })
    }
    return(
        <>
            {previewRender()}
        </>
    )
};

export default CollecitonPreview;