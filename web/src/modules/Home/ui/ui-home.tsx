"use client";
import { BuyTicketComponent } from "@app/modules/Home/components/BuyTicketComponent";
import { DishCarousel } from "@app/modules/Home/components/DishCarousel";
import { DishComponent } from "@app/modules/Home/components/DishComponent";
import { Card, Grid, GridItem } from "@chakra-ui/react";

import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

registerLocale("ptBR", ptBR as unknown as Locale);

import "react-datepicker/dist/react-datepicker.css";
import { Locale } from "date-fns";
import { HomeFilterComponent } from "../components/HomeFilterComponent";

interface IUiHome {
  setQuantities: React.Dispatch<
    React.SetStateAction<{
      dinner: number;
      lunch: number;
    }>
  >;
  quantities: {
    dinner: number;
    lunch: number;
  };
  prices: {
    dinner: number;
    lunch: number;
  };
  handleApplyFilters: (turn: "lunch" | "dinner", date: Date) => void;
}

export default function UiHome({
  setQuantities,
  quantities,
  prices,
  handleApplyFilters,
}: IUiHome) {
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
        <Card h="100%" w="100%">
          <DishComponent />
        </Card>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <Card h="100%" w="100%">
          <HomeFilterComponent handleApplyFilters={handleApplyFilters} />
        </Card>
      </GridItem>
      <GridItem colSpan={2} overflow={"hidden"}>
        <Card h="100%" w="100%">
          <BuyTicketComponent
            quantities={quantities}
            setQuantities={setQuantities}
            prices={prices}
          />
        </Card>
      </GridItem>
      <GridItem colSpan={3} color="white">
        <DishCarousel />
      </GridItem>
    </Grid>
  );
}
