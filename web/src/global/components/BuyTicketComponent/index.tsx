import { Avatar, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export function BuyTicketComponent() {
  return (
    <Flex
      direction="row"
      h="100%"
      w="100%"
      bg="white"
      justify={"center"}
      align={"center"}
      rounded={10}
    >
      <Flex
        w="40%"
        direction={"row"}
        align={"center"}
        // justify={"space-around"}
        gap={4}
        pl={10}
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size={"lg"}
          outlineOffset={4}
          outline={"1px solid gray"}
        />
        <Flex direction={"column"}>
          <Text fontWeight={500} fontSize={"4xl"}>
            Janta
          </Text>
          <Text fontWeight={500} fontSize={"medium"}>
            Turno da Noite
          </Text>
        </Flex>
      </Flex>

      <Flex
        w="20%"
        direction={"column"}
        align={"center"}
        borderLeft={"1px solid gray"}
      >
        <Text fontWeight={500} fontSize={"5xl"}>
          7
        </Text>
        <Text fontWeight={500} fontSize={"medium"}>
          Total: R$2.20
        </Text>
      </Flex>
      <Flex
        w="10%"
        h="100%"
        bg={"gray"}
        direction={"column"}
        justify={"center"}
        align={"center"}
      >
        <Center
          h="100%"
          w="100%"
          fontWeight={500}
          fontSize={"4xl"}
          bg={"gray"}
          transition="all 0.3s ease"
          _hover={{
            filter: "brightness(80%)",
            cursor: "pointer",
          }}
          _active={{
            filter: "brightness(100%)",
          }}
        >
          <Plus size={64} opacity={0.3} />
        </Center>
        <Divider color={"white"} />
        <Center
          h="100%"
          w="100%"
          fontWeight={500}
          fontSize={"4xl"}
          bg={"gray"}
          transition="all 0.3s ease"
          _hover={{
            filter: "brightness(80%)",
            cursor: "pointer",
          }}
          _active={{
            filter: "brightness(100%)",
          }}
        >
          <Minus size={64} opacity={0.3} />
        </Center>
      </Flex>
      <Flex
        w="30%"
        h="100%"
        direction={"column"}
        bg={"red"}
        align={"center"}
        justify={"center"}
        borderRightRadius={10}
        transition="all 0.3s ease"
        _hover={{
          filter: "brightness(80%)",
          cursor: "pointer",
        }}
        _active={{
          filter: "brightness(100%)",
        }}
      >
        <ShoppingCart size={64} opacity={0.3} />
      </Flex>
    </Flex>
  );
}
