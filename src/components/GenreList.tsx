import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListRoot, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ListRoot>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </ListRoot>
  );
};

export default GenreList;
