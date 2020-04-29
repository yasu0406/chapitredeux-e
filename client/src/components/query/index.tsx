import React from "react";  
import { useQuery } from "@apollo/react-hooks";
import { PromiseWithChild } from "child_process";

interface Props {
  id?: string,
  query: any,
  children: any
}

const Query:React.FC<Props> = ({ id, query, children }):any => {  
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Error: {JSON.stringify(error)}</p>);
  return children({ data });
};

export default Query;  