import React from 'react';
import Query from '../../components/query';
import COLLECTION_QUERY from '../../queries/collection/collection';
import { InnerCollection, CollectionGrid, Categories } from './collection.style';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Collection: React.FC = () => {
    return(
        <InnerCollection>
            <CollectionGrid>
                <Query query={COLLECTION_QUERY}>
                {({ data: collection }:any) => {
                    return <CollectionPreview collection={collection} />;
                }}
                </Query>
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