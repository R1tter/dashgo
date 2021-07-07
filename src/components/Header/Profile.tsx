import { Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (<Box mr="4" textAlign="right">
        <Text>Marcelo Ritter</Text>
        <Text color="gray.300" fontSize="small">
          marcelosori@hotmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md" name="Marcelo Ritter" src="https://github.com/R1tter.png" />
    </Flex>
  )
}