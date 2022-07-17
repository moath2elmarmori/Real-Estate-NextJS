import React from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import millify from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import Link from "next/link";

function Property({
  propertyData: {
    coverPhoto,
    title,
    price,
    isVerified,
    rentFrequency,
    agency,
    rooms,
    baths,
    area,
    id,
    externalID,
  },
}) {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Box p="5" onClick={() => console.log(id, externalID)}>
        <Image src={coverPhoto.url} width={500} height={300} alt="an image for the property" />
        <Flex alignItems="center" justifyContent="space-between">
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
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BiArea />
        </Flex>
        <Text>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Link>
  );
}

export default Property;
