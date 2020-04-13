import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { collectionAnimation, collectionCloseAnimation } from './collection.animation';
import { ContainerSection } from '../../styles/common.style.component';
import { InnerCollection, CollectionGrid, Categories } from './collection.style';

const Collection = () => {
    const collection:Array<HTMLLIElement> = [];
    let history = useHistory();
    useEffect(() => {
        collectionAnimation(collection);
    },[]);
    const changePage = (e: any, destination:string) => {
        e.preventDefault();
        collectionCloseAnimation(collection);
        setTimeout(() => {
          history.push(destination);
        }, 950);
    };
    return(
        <InnerCollection>
            <CollectionGrid>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to='/collection-detail/test'><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img02.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img04.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img05.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img02.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img04.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img05.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img02.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img04.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img05.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img02.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img04.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img05.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img01.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
                <li ref={(e:HTMLLIElement) => {collection.push(e)} }>
                    <Link to=''><img src="/images/collection-thumb-img03.jpg" alt=""/></Link>
                </li>
            </CollectionGrid>
            <Categories>
                <li><a href="">All</a></li>
                <li><a href="">Ring</a></li>
                <li><a href="">Necklace</a></li>
                <li><a href="">Pierce</a></li>
                <li><a href="">Bridal</a></li>
                <li><a href="">Others</a></li>
            </Categories>
        </InnerCollection>
    );
};

export default Collection; 