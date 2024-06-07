import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function DishComponent() {
  return (
    <Flex direction="column" h="100%" borderRadius={10}>
      <Image
        height={"60%"}
        src="https://www.allrecipes.com/thmb/GvGzAzmqmTiCFP9AIisrHZav_Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Copycat-Burger-and-Fries-2000-b09140d301434155bda5a8c8a40f5e95.jpeg"
        alt=""
        objectFit="cover"
        borderTopRadius={10}
      />

      <Flex
        height={"60%"}
        w={"100%"}
        bg="white"
        justify={"space-around"}
        px={10}
        align={"center"}
        borderBottomRadius={10}
      >
        <Flex direction={"column"} w={"100%"}>
          <Text fontWeight={500} color="#0EA5E9" fontSize={"medium"} w={"100%"}>
            Fast-Grill
          </Text>
          <Heading
            fontWeight={800}
            fontFamily={"var(--font-inter)"}
            fontSize={"xx-large"}
          >
            Burguer com Fritas
          </Heading>
        </Flex>
        <Divider h="70%" px={4} orientation="vertical" />
        <Flex
          w="100%"
          maxH={"8.75rem"}
          h="100%"
          overflow="hidden"
          direction={"column"}
        >
          <Text
            fontWeight={500}
            fontSize="medium"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="normal"
            wordBreak="break-word"
          >
            Prato de Hamburguer com batata frita e ketchupPrato de Hamburguer
            com batata frita e ketchupPrato de Hamburguer com batata frita e
            ketchupPrato de Hamburguer com batata frita e ketchupPrato de
            Hamburguer com batata fritabatata frita e ketchupPrato de Hamburguer
            com batata frita e ketchupPrato de Hamburguer com batata frita e
            ketchupPrato de Hamburguer com batata fritabatata frita e
            ketchupPrato de Hamburguer com batata frita e ketchupPrato de
            Hamburguer com batata frita e ketchupPrato de Hamburguer com batata
            fritabatata frita e ketchupPrato de Hamburguer com batata frita e
            ketchupPrato de Hamburguer com batata frita e ketchupPrato de
            Hamburguer com batata frita
          </Text>
          <span>...</span>
          <Text fontWeight={500} color="#0EA5E9" fontSize={"medium"} w={"100%"}>
            Ver mais
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
