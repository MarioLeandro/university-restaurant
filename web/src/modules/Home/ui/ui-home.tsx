"use client";
import { BuyTicketComponent } from "@app/global/components/BuyTicketComponent";
import { Carousel } from "@app/global/components/Carousel";
import { DishComponent } from "@app/global/components/DishComponent";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

registerLocale("ptBR", ptBR as unknown as Locale);

import "react-datepicker/dist/react-datepicker.css";
import { Locale } from "date-fns";

interface IUiHome {}

export default function UiHome({}: IUiHome) {
  return (
    <Grid
      h="100%"
      w="100%"
      px={"15%"}
      py={10}
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={6}
    >
      <GridItem rowSpan={3} colSpan={2}>
        <DishComponent />
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <Box bg={"white"} borderRadius="lg" p={8} h="100%">
          <VStack spacing={5} h="100%">
            <Heading
              fontWeight={800}
              fontFamily={"var(--font-inter)"}
              fontSize={"xx-large"}
            >
              Turno
            </Heading>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="row">
                <Radio size={"lg"} value="2" colorScheme="yellow">
                  Almoço
                </Radio>
                <Radio size={"lg"} value="3" colorScheme="yellow">
                  Janta
                </Radio>
              </Stack>
            </RadioGroup>

            <Flex
              h="80%"
              w="100%"
              align={"center"}
              direction={"column"}
              justify={"center"}
              gap={5}
            >
              <Heading
                fontWeight={800}
                fontFamily={"var(--font-inter)"}
                fontSize={"xx-large"}
              >
                Dia
              </Heading>
              <Text>18 de Fevereiro de 2024</Text>
              <DatePicker
                selected={new Date()}
                onChange={(date) => console.log(date)}
                inline
                locale="ptBR"
              />
            </Flex>

            <Button
              colorScheme="blue"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
            >
              Aplicar
            </Button>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <BuyTicketComponent />
      </GridItem>
      <GridItem colSpan={3} color="white">
        <Carousel />
      </GridItem>
    </Grid>
  );
}
