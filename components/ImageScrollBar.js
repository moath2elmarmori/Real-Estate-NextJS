import React, { useContext } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Icon, Box, Flex } from "@chakra-ui/react";
import Image from "next/dist/client/image";

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => {
          console.log("clicked the previous button")
          scrollPrev()
        }}
        cursor="pointer"
        alignItems="center"
        fontSize="2.5rem"
        p="2"
      />
    </Flex>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex alignItems="center" justifyContent="center">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => {
          console.log("clicked the next button")
          scrollNext()
        }}
        cursor="pointer"
        alignItems="center"
        fontSize="2.5rem"
        p="2"
      />
    </Flex>
  );
}

function ImageScrollBar({ photos }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {photos.map((photo) => {
        return (
          <Box
            width="910px"
            key={photo.id}
            // overflow="hidden"
            p="1"
          >
            <Image
              placeholder="blur"
              blurDataURL={photo.url}
              src={photo.url}
              width={1000}
              height={500}
              alt="an image for the property"
            />
          </Box>
        );
      })}
    </ScrollMenu>
  );
}

export default ImageScrollBar;
