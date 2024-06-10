"use client";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Image,
  Card,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values: any) {
    await signIn("credentials", {
      ...values,
      callbackUrl: "/view",
    });
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Flex
        w="60%"
        h="100vh"
        bg={
          "linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(17, 133, 189) 0%, rgb(18, 100, 174) 50%, rgb(18, 92, 170) 100%)"
        }
        align={"center"}
        justify={"center"}
      >
        <Image
          width={"30%"}
          src="https://www.ufrpe.br/sites/www.ufrpe.br/files/Logo%20UFRPE%20com%20texto_2.png"
          alt=""
          objectFit="cover"
          borderTopRadius={10}
        />
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        w="40%"
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        gap={8}
      >
        <Image
          width={"70%"}
          src="https://ajuda.ufrpe.br/images/footer/ufrpe-uni.png"
          alt=""
          objectFit="cover"
          borderTopRadius={10}
        />
        <Card rounded={"lg"} boxShadow={"lg"} p={8} w="100%">
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email">
                <FormLabel>E-mail</FormLabel>
                <Input type="email" {...register("email")} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"end"}
                >
                  <Link color={"blue.400"}>Esqueceu a senha?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Entrar
                </Button>
              </Stack>
            </form>
          </Stack>
        </Card>
      </Flex>
    </Flex>
  );
}
