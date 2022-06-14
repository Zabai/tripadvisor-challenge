import Header from "@/components/header";
import Layout from "@/components/layout";
import PlaceList from "@/features/search/placeList";
import Searcher from "@/features/search/searcher";
import { Container } from "@mui/material";
import type { NextPage } from "next";

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
