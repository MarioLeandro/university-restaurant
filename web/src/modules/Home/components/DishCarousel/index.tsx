"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Badge, Flex } from "@chakra-ui/react";

export function DishCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      style={{ height: "100%", padding: 7 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((slide) => (
        <SwiperSlide key={slide}>
          <Flex
            h="100%"
            backgroundImage={
              "url(https://i.ytimg.com/vi/CJj84y5P3_g/maxresdefault.jpg)"
            }
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize={"cover"}
            borderRadius={10}
            cursor={"pointer"}
            outlineOffset={5}
            outline={
              slide === 1 ? "2px solid var(--chakra-colors-blue-400)" : ""
            }
            p={4}
            align={"end"}
            overflow={"hidden"}
            transition="all 0.3s ease"
            _hover={{
              filter: "brightness(80%)",
              cursor: "pointer",
            }}
            _active={{
              filter: "brightness(100%)",
            }}
          >
            <Badge
              h="22%"
              fontSize={"1em"}
              colorScheme="yellow"
              rounded={5}
              textOverflow={"ellipsis"}
              overflow="hidden"
              whiteSpace="nowrap"
              wordBreak="break-word"
            >
              Frango a la king
            </Badge>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
