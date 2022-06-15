import { fetchPlaceDetailsById } from "@/api/foursquare/places";
import Header from "@/components/header";
import Layout from "@/components/layout";
import FOURSQUARE_PLACES from "@/constants/api/foursquare/places";
import PlaceImages from "@/features/details/placeImages";
import PlaceMap from "@/features/details/placeMap";
import PlaceSummary from "@/features/details/placeSummary";
import PlaceSummaryBar from "@/features/details/placeSummaryBar";
import useDetails from "@/hooks/useDetails";
import { Container, Grid, Paper } from "@mui/material";
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
  const { data } = useDetails();

  if (!data) return;

  return (
    <Layout>
      <Container maxWidth="lg">
        <Header />

        <Grid container mb={4} spacing={4}>
          <Grid item gap={6} sm={12} md={7}>
            <Paper
              elevation={6}
              sx={{ height: "250px", mb: "12px", p: "12px" }}
            >
              <PlaceSummary
                address={data.location.formatted_address}
                name={data.name}
              />
              <PlaceSummaryBar
                categories={data.categories}
                fsq_id={data.fsq_id}
                rating={data.rating}
              />
            </Paper>
            <Paper elevation={6} sx={{ p: "12px" }}>
              <PlaceMap geocodes={data.geocodes} id="map" />
            </Paper>
          </Grid>

          <Grid item sm={12} md={5}>
            <Paper elevation={3}>
              <PlaceImages
                images={data.photos.map(({ id, prefix, suffix }) => ({
                  id,
                  src: `${prefix}original${suffix}`,
                }))}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
