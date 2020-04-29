import React from 'react';
import Query from '../../components/query';
import COLLECTIONFIND_QUERY from '../../queries/collection-detail/collection-detail';
import CollectionDetailView from '../../components/collection-detail-view/collection-detail-view.component';
import { InnerContainer } from '../../styles/common.style.component';
import { DetailMain } from './collection-detail.style';

type Props = {
    location: any,
    match:any
}

const CollectionDetail: React.FC<Props> = (props) => {
    const {id} = props.match.params;
    return(
        <>
            <DetailMain>
                <InnerContainer>
                <Query query={COLLECTIONFIND_QUERY} id={id}>
                    {({ data: collection }:any) => {
                        return <CollectionDetailView collectionDetail={collection} />
                    }}
                </Query>
                </InnerContainer>
            </DetailMain>
        </>
    );
};

export default CollectionDetail;