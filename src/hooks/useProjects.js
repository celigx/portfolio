import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    projects {
      id
      card {
        name
        title
        description
        image {
          url
        }
        backColor {
          hex
        }
        textColor {
          hex
        }
      }
    }
  }
`;

export const useProjects = () => {
  const { data, error, loading } = useQuery(GET_DATA);

  return {
    data,
    error,
    loading,
  };
};
