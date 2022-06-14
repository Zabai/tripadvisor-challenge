import { fetchPlaceDetailsById } from "@/api/foursquare/places";
import Layout from "@/components/layout";
import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import { Container } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "react-query";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{
  id: string;
}>) {
  const queryClient = new QueryClient();
  if (params) {
    await queryClient.prefetchQuery(
      [FOURSQUARE_PLACES.QUERIES.PLACE_DETAILS, params.id],
      () => fetchPlaceDetailsById(params.id)
    );
  }

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function PlaceDetails() {
  return (
    <Layout>
      <Container maxWidth="lg"></Container>
    </Layout>
  );
}
