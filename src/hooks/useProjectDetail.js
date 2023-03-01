import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    project(where: { id: "clena8qgs089p0bw320ykuiar" }) {
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

export const useProjectDetail = () => {
  const { data, error, loading } = useQuery(GET_DATA);

  return {
    data,
    error,
    loading,
  };
};
