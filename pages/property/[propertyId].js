import React from "react";
import { baseUrl, fetchApi } from "../../utils/fitchApi";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import millify from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import ImageScrollBar from "../../components/ImageScrollBar";

function PropertyDetail({
  propertyDetailData: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) {
  console.log("this is the ameneties", amenities);
  return (
    <Box p="5" m="5">
      <ImageScrollBar photos={photos} />
      <Box m="10">
        <Flex alignItems="center" justifyContent="space-between" w="30%">
          <Flex alignItems="center">
            <Text p={"5px 5px 5px 0"} color="green">
              {isVerified && <GoVerified />}
            </Text>
            <Text p={"5px 5px 5px 0"} fontWeight="bold">
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar src={agency.logo.url} size="sm" />
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          color="blue.400"
          justifyContent="space-between"
          p="1"
          w="40%"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BiArea />
        </Flex>
        <Text fontWeight="black" fontSize="1rem">
          {title}
        </Text>
        <Text my="5">{description}</Text>
        <Flex gap="10%" flexWrap="wrap" textTransform="uppercase">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="45%"
            py="2"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="45%"
            py="2"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="45%"
            >
              <Text>FurnishingStatus</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box my="5">
          {amenities.length !== 0 && (
            <Text fontWeight="bold" fontSize="1rem">
              Ameneties:
            </Text>
          )}
          {amenities.map((items) => {
            return (
              <Flex flexWrap="wrap">
                {items.amenities.map((amenity) => {
                  return <Text key={amenity.text} p="2" bg="blue.200" m="2" borderRadius="5px">{amenity.text}</Text>;
                })}
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyDetail;

export async function getServerSideProps({ params: { propertyId } }) {
  const data = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${propertyId}`
  );
  return {
    props: {
      propertyDetailData: data,
    },
  };
}
