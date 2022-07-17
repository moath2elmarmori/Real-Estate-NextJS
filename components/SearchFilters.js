import React from "react";
import { Flex, Select, Box } from "@chakra-ui/react";
import { filterData, getFilterValues } from "../utils/filterData";
import { useRouter } from "next/router";

function SearchFilters() {
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((filterValue) => {
      if (filterValue.value && filterValues?.[filterValue.name]) {
        query[filterValue.name] = filterValue.value;
      }
      
    });
    router.push({pathname: path, query})
  };
  return (
    <Flex flexWrap="wrap" m="5" gap="5" justifyContent="center">
      {filterData.map((filter) => {
        return (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter.items.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </Box>
        );
      })}
    </Flex>
  );
}

export default SearchFilters;
