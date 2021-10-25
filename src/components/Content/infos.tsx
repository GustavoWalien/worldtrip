import {
  Flex, Heading, Popover, PopoverTrigger,
  PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody,
  Text, Icon
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continent/[slug]";

export default function Infos({ continent }: ContinentProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
          {continent.countries}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]}>
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
          {continent.languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]}>
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
        {continent.cities}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]}>
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody>
                {continent.cities_list}
              </PopoverBody>
            </PopoverContent>
          </Popover>

        </Text>
      </Flex>
    </Flex>
  )
}