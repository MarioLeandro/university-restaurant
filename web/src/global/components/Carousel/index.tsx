"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Badge, Flex } from "@chakra-ui/react";

export function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      style={{ height: "100%", padding: 7 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((slide) => (
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
            outline={slide === 1 ? "2px solid #867200" : ""}
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
              Escondidinho de charque
            </Badge>
          </Flex>
          {/* <Image
            src="https://www.allrecipes.com/thmb/GvGzAzmqmTiCFP9AIisrHZav_Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Copycat-Burger-and-Fries-2000-b09140d301434155bda5a8c8a40f5e95.jpeg"
            alt=""
            objectFit="cover"
            borderRadius={10}
            cursor={"pointer"}
            outlineOffset={10}
            margin={10}
            outline={slide === 1 ? "2px solid #0EA5E9" : ""}
          /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
