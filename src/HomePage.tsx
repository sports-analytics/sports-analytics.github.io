import React, { useState, ChangeEvent } from 'react';
import {
    Box, Input, Button, VStack, Stack, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, useBreakpointValue
} from '@chakra-ui/react';
import gameData from './data/gamesData.json';

interface Player {
  player_name: string;
  points: string;
  assists: string;
  rebounds: string;
}

interface Game {
  game_id: string;
  game_name: string;
  teams: Record<string, Player[]>;
}

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const allPlayers = gameData.flatMap(game =>
        Object.values(game.teams).flat()
      );
      const filtered = allPlayers.filter(player =>
        player.player_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPlayers(filtered);
    } else {
      setFilteredPlayers([]);
    }
  };

  const inputWidth = useBreakpointValue({ base: '100%', md: '50%' });

  return (
    <Box p={8}>
      <VStack spacing={4}>
        <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>Today's Predictions</Heading>

        <Input
          placeholder="Search for a player"
          value={searchQuery}
          onChange={handleChange}
          width={inputWidth}
        />
        {filteredPlayers.length > 0 && (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mt={4} width="100%">
            <TableContainer overflowX="auto">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Player</Th>
                    <Th isNumeric>Points</Th>
                    <Th isNumeric>Rebounds</Th>
                    <Th isNumeric>Assists</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredPlayers.map((player) => (
                    <Tr key={player.player_name}>
                      <Td>{player.player_name}</Td>
                      <Td isNumeric>{parseFloat(player.points).toFixed(2)}</Td>
                      <Td isNumeric>{parseFloat(player.rebounds).toFixed(2)}</Td>
                      <Td isNumeric>{parseFloat(player.assists).toFixed(2)}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}

        
        {gameData.map(game => (
        <Box key={game.game_id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading size="md" p={4} textAlign="center">{game.game_name}</Heading>
          <Flex direction={{ base: 'column', md: 'row' }}>
            {Object.entries(game.teams).map(([teamId, players]) => (
              <TableContainer key={teamId} flex="1" minWidth="0" overflowX="auto">
                <Table variant="simple">
                  {players.map((player: Player) => (
                    <Tr key={player.player_name}>
                      <Td>{player.player_name}</Td>
                      <Td isNumeric>{parseFloat(player.points).toFixed(2)}</Td>
                      <Td isNumeric>{parseFloat(player.rebounds).toFixed(2)}</Td>
                      <Td isNumeric>{parseFloat(player.assists).toFixed(2)}</Td>
                    </Tr>
                  ))}
                </Table>
              </TableContainer>
            ))}
          </Flex>
        </Box>
        ))}

      </VStack>
    </Box>
  );
};

export default HomePage;
