import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, Spinner, Text } from "@chakra-ui/react";

interface Props { 
  onSelectGenre: (genre: Genre) => void ; 
}

const GenreList = ({onSelectGenre} : Props ) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {data.map((genre) => (
        <li key={genre.id} style={{ padding: "5px 0" }}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="ghost"
              fontSize="lg"
              fontWeight="normal"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
