import { getPlacesByLocationAndCategory } from "@/api/foursquare/places";
import Header from "@/components/header";
import Layout from "@/components/layout";
import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import PlaceList from "@/features/search/placeList";
import Searcher from "@/features/search/searcher";
import {
  getCategoryIdsFromQueryString,
  sanetizeCategoriesIds,
} from "@/utils/categoryUtils";
import { Container } from "@mui/material";
import type { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";

export async function getServerSideProps({
  query: { categories = "", term },
}: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  if (term) {
    await queryClient.prefetchQuery(
      FOURSQUARE_PLACES.QUERIES.PLACE_SEARCH,
      () =>
        getPlacesByLocationAndCategory(
          term.toString(),
          sanetizeCategoriesIds(
            getCategoryIdsFromQueryString(categories.toString())
          )
        )
    );
  }

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth={"lg"}>
        <Header />
        <Searcher />
        <PlaceList />
      </Container>
    </Layout>
  );
};

export default Home;
