import gql from "graphql-tag";


const COLLECTIONFIND_QUERY = gql`
    query collection($id: ID!){
        collection(id: $id) {
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

export default COLLECTIONFIND_QUERY;