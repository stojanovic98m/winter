import { VStack, Center, Image, Text } from "native-base";
import { CardInterface } from "../../sections/services";

interface CardProps {
  cardsData: CardInterface[];
}
export const Card = (props: CardProps) => {
  return (
    <>
      {props?.cardsData.map((card) => {
        const { id, title, bgr_url, icon_url } = card;
        return (
          <VStack
            key={id}
            w={["100%", "22%", "22%", "22%"]}
            height={["300px", "300px", "400px", "400px"]}
            mt={["30px", "0px", "0px", "0px"]}
            mb="2rem"
          >
            <Center h="100%" w="100%">
              <Image
                resizeMode="cover"
                source={{ uri: bgr_url }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: icon_url }}
                position="absolute"
                top={["20%", "30%", "30%", "10%"]}
                alt="Alternate Text"
                width="100%"
                height={["30%", "10%", "10%", "30%"]}
              />
              <Text
                mt={["50px", "0px", "0px", "0px"]}
                zIndex="9"
                color="white"
                textTransform="uppercase"
                fontWeight="600"
              >
                {title}
              </Text>
            </Center>
          </VStack>
        );
      })}
    </>
  );
};
