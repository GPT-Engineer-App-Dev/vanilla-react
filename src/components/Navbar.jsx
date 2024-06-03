import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" color="white">My React App</Text>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" px={2}>Home</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;