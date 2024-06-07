import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

interface IProps {
  handleApplyFilters: (turn: "lunch" | "dinner", date: Date) => void;
}

export function HomeFilterComponent({ handleApplyFilters }: IProps) {
  const [turn, setTurn] = useState<"lunch" | "dinner">("lunch");
  const [date, setDate] = useState<Date>(new Date());
  return (
    <Box bg={"white"} borderRadius="lg" p={8} h="100%">
      <VStack spacing={5} h="100%">
        <Heading
          fontWeight={800}
          fontFamily={"var(--font-inter)"}
          fontSize={"xx-large"}
        >
          Turno
        </Heading>
        <RadioGroup
          onChange={(value: "lunch" | "dinner") => setTurn(value)}
          value={turn}
        >
          <Stack spacing={4} direction="row">
            <Radio size={"lg"} value="lunch" colorScheme="blue">
              Almoço
            </Radio>
            <Radio size={"lg"} value="dinner" colorScheme="blue">
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
          <Text>
            {date
              ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
              : "18 de Fevereiro de 2024"}
          </Text>
          <ReactDatePicker
            selected={date}
            onChange={(value: Date) => setDate(value)}
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
          onClick={() => handleApplyFilters(turn, date)}
        >
          Aplicar
        </Button>
      </VStack>
    </Box>
  );
}
