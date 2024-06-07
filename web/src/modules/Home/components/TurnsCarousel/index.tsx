"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Avatar, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";

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

export function TurnsCarousel({ prices, quantities, setQuantities }: IProps) {
  return (
    <Swiper
      navigation={true}
      direction={"vertical"}
      style={{ height: "100%", margin: 0, width: "100%" }}
    >
      {["dinner", "lunch"].map((turn) => (
        <SwiperSlide key={turn}>
          <Flex w="100%" h="100%" justify={"center"} align={"center"}>
            <Flex w="50%" direction={"row"} align={"center"} gap={4} pl={4}>
              <Avatar
                name="Dan Abrahmov"
                src={
                  turn === "dinner"
                    ? "https://img.freepik.com/vetores-gratis/lua-espaco-exterior_24908-81153.jpg?w=826&t=st=1717727165~exp=1717727765~hmac=052f5f1f58c5efe8ae0ee768386336c31acdff21649f2f38593392a865e457d7"
                    : "https://img.freepik.com/vetores-gratis/sol-espaco-exterior_24908-82636.jpg?w=826&t=st=1717727247~exp=1717727847~hmac=7cb65d340a9c98c211d2c952760cbc8d6d8e2cfffcd2c510e0776e0ea81e8f84"
                }
                size={"lg"}
              />
              <Flex direction={"column"}>
                <Text fontWeight={500} fontSize={"4xl"}>
                  {turn === "dinner" ? "Janta" : "Almoço"}
                </Text>
                <Text fontWeight={500} fontSize={"medium"}>
                  Preço Individual: R$
                  {prices[turn as "lunch" | "dinner"].toFixed(2)}
                </Text>
              </Flex>
            </Flex>
            <Flex
              w="30%"
              h="80%"
              direction={"column"}
              align={"center"}
              borderLeft={"1px solid #f0f0f0"}
            >
              <Text fontWeight={500} fontSize={"5xl"}>
                {quantities[turn as "lunch" | "dinner"]}
              </Text>
              <Text fontWeight={500} fontSize={"medium"}>
                Total: R${" "}
                {(
                  prices[turn as "lunch" | "dinner"] *
                  quantities[turn as "lunch" | "dinner"]
                ).toFixed(2)}
              </Text>
            </Flex>
            <Flex
              w="20%"
              h="100%"
              direction={"column"}
              justify={"center"}
              align={"center"}
              borderLeft={"1px solid #f0f0f0"}
              gap={4}
            >
              <IconButton
                isRound={true}
                variant="outline"
                colorScheme="blue"
                aria-label="Add"
                size={"lg"}
                icon={<Plus />}
                onClick={() =>
                  setQuantities((prev: { dinner: number; lunch: number }) => {
                    return {
                      ...prev,
                      [turn]: prev[turn as "lunch" | "dinner"] + 1,
                    };
                  })
                }
              />
              <Divider color={"white"} />
              <IconButton
                isRound={true}
                variant="outline"
                colorScheme="red"
                aria-label="Remove"
                size={"lg"}
                icon={<Minus />}
                onClick={() =>
                  setQuantities((prev: { dinner: number; lunch: number }) => {
                    return {
                      ...prev,
                      [turn]:
                        prev[turn as "lunch" | "dinner"] === 0
                          ? 0
                          : prev[turn as "lunch" | "dinner"] - 1,
                    };
                  })
                }
              />
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
