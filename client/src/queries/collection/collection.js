import gql from "graphql-tag";


const COLLECTION_QUERY = gql`
    query{
        collections{
        id
        title
        description
        price
        thumb{
            url
            }
        detailImages{
            url
        }
        }
    }
`;

export default COLLECTION_QUERY;