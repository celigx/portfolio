import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetProject($id: ID!) {
    project(where: { id: $id }) {
      card {
        id
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
      idea {
        id
        title
        description
        image {
          url
        }
        bgColor {
          hex
        }
        textColor {
          hex
        }
      }
      design {
        id
        title
        description
        image {
          url
        }
        bgColor {
          hex
        }
        textColor {
          hex
        }
      }
      development {
        id
        title
        description
        image {
          url
        }
        bgColor {
          hex
        }
        textColor {
          hex
        }
      }
    }
  }
`;

export const useProjectDetail = (id) => {
  const { data, error, loading } = useQuery(GET_DATA, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
