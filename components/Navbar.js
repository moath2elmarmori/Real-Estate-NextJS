import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {FiKey} from "react-icons/fi";
import {FcAbout} from "react-icons/fc"

function Navbar() {
  return (
    <Box p="5">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="1rem 0"
        borderBottom="3px"
        borderColor="gray.400"
        borderStyle="solid"
      >
        <Text fontSize="2rem" fontWeight="bold" color="blue.400">
          Realtor
        </Text>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<GiHamburgerMenu />}
            color="gray.400"
            variant="outline"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<AiFillHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy A Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent A Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default Navbar;
