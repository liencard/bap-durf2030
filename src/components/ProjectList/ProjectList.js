import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const ITEMS_QUERY = gql`
  {
    allItems {
      data {
        _id
        name
      }
    }
  }
`;

const ProjectList = () => {
  const { data, loading } = useQuery(ITEMS_QUERY);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {data.allItems.data.map((item) => {
        return <li key={item._id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default ProjectList;
