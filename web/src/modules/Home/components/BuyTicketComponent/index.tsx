import { Flex, Tooltip } from "@chakra-ui/react";
import { ShoppingCart, ArrowUpDown } from "lucide-react";
import { TurnsCarousel } from "../TurnsCarousel";

interface IProps {
  quantities: {
    dinner: number;
    lunch: number;
  };
  prices: {
    dinner: number;
    lunch: number;
  };
  setQuantities: React.Dispatch<
    React.SetStateAction<{
      dinner: number;
      lunch: number;
    }>
  >;
}

export function BuyTicketComponent({
  prices,
  quantities,
  setQuantities,
}: IProps) {
  return (
    <Flex
      direction="row"
      h="100%"
      w="100%"
      bg="white"
      justify={"center"}
      align={"center"}
      rounded={10}
      pl={4}
    >
      <Tooltip
        label="Segure e arraste verticalmente para alternar entre as refeições"
        aria-label="A tooltip"
      >
        <ArrowUpDown cursor={"help"} size={52} />
      </Tooltip>

      <Flex
        w="70%"
        h="100%"
        cursor={"grab"}
        _active={{
          cursor: "grabbing",
        }}
      >
        <TurnsCarousel
          quantities={quantities}
          setQuantities={setQuantities}
          prices={prices}
        />
      </Flex>

      <Flex
        w="30%"
        h="100%"
        direction={"column"}
        bg="blue.400"
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
        <ShoppingCart size={64} opacity={0.2} />
      </Flex>
    </Flex>
  );
}
