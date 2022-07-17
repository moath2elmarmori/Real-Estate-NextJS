import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Select,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import { fetchApi, baseUrl } from "../utils/fitchApi";
import Property from "../components/Property";
import {useRouter} from "next/router"

function Search({ properties }) {
  //   console.log("this is the props of search", props);
  const [isFiltering, setIsFiltering] = useState(false);
  const router = useRouter()
  return (
    <>
      <Box bg="gray.300" p="5" mx="5">
        <Flex
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          fontWeight="black"
          fontSize="lg"
          onClick={() => setIsFiltering((previousState) => !previousState)}
        >
          <Text px="5">Search Property By Filter</Text>
          <Icon as={BsFilter} w="7"></Icon>
        </Flex>
        {isFiltering && <SearchFilters />}
      </Box>
      <Text fontWeight="bold" fontSize="lg" mx="5" pt="5">Properties {router.query.purpose}</Text>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap=".5rem" margin="5rem">
        {properties.map((property) => (
          <GridItem key={property.id}>
            <Property propertyData={property} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
