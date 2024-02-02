import React, { useState, ChangeEvent } from 'react';
import {
    Box, Input, Button, VStack, Stack, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex
  } from '@chakra-ui/react';
  
const playersData = [
    { name: "Player One", points: 25, rebounds: 10, assists: 5 },
    { name: "Player Two", points: 30, rebounds: 7, assists: 8 },
    { name: "Player Three", points: 20, rebounds: 5, assists: 10 },
    { name: "Player Four", points: 15, rebounds: 11, assists: 7 },
    { name: "Player Five", points: 18, rebounds: 4, assists: 6 },
    { name: "Player Six", points: 22, rebounds: 9, assists: 12 },
    { name: "Player Seven", points: 28, rebounds: 13, assists: 4 },
    { name: "Player Eight", points: 16, rebounds: 8, assists: 9 },
    { name: "Player Nine", points: 19, rebounds: 6, assists: 7 },
    { name: "Player Ten", points: 21, rebounds: 10, assists: 5 },
  ];

  const gameData = {'game_id': '401585316', 'game_name': 'Clippers @ Pistons', 'teams': 
  {'Clippers': 
      [
          {'player_name': 'Bagley III', 'points': '9.51091480255127', 'assists': '0.2736431956291199', 'rebounds': '6.967075347900391'}, 
          {'player_name': 'Thompson', 'points': '3.4270100593566895', 'assists': '1.2989405393600464', 'rebounds': '4.205134868621826'}, 
          {'player_name': 'Stewart', 'points': '15.88339900970459', 'assists': '2.9774177074432373', 'rebounds': '2.840456008911133'}, 
          {'player_name': 'Cunningham', 'points': '28.550731658935547', 'assists': '5.81407356262207', 'rebounds': '3.217992067337036'}, 
          {'player_name': 'Hayes', 'points': '0.8742620944976807', 'assists': '1.5135571956634521', 'rebounds': '3.864870309829712'}, 
          {'player_name': 'Knox II', 'points': '6.819648742675781', 'assists': '1.9680206775665283', 'rebounds': '3.001699686050415'}, 
          {'player_name': 'Wiseman', 'points': '1.0673434734344482', 'assists': '-0.32129132747650146', 'rebounds': '0.6646026372909546'}, 
          {'player_name': 'Ivey', 'points': '12.484450340270996', 'assists': '5.557344913482666', 'rebounds': '4.771995544433594'}, 
          {'player_name': 'Burks', 'points': '10.589054107666016', 'assists': '3.0122056007385254', 'rebounds': '2.857074499130249'}, 
          {'player_name': 'Sasser', 'points': '3.423365592956543', 'assists': '-0.18941383063793182', 'rebounds': '1.0379842519760132'}, 
          {'player_name': 'Bogdanovic', 'points': '20.070938110351562', 'assists': '1.5712101459503174', 'rebounds': '2.7947216033935547'}, 
          {'player_name': 'Livers', 'points': '3.1990952491760254', 'assists': '-0.27399617433547974', 'rebounds': '0.986670196056366'}, 
          {'player_name': 'Harris', 'points': '1.7907239198684692', 'assists': '1.792191982269287', 'rebounds': '1.1677581071853638'}, 
          {'player_name': 'Duren', 'points': '14.240283966064453', 'assists': '1.1321794986724854', 'rebounds': '8.165961265563965'}, 
          {'player_name': 'Umude', 'points': '1.0394984483718872', 'assists': '-0.35426658391952515', 'rebounds': '0.7511510252952576'}, 
          {'player_name': 'Boeheim', 'points': '4.54536771774292', 'assists': '-0.4506727457046509', 'rebounds': '0.37406125664711'}, 
          {'player_name': 'Evbuomwan', 'points': '2.030043601989746', 'assists': '-0.3416401147842407', 'rebounds': '4.006101608276367'}, 
          {'player_name': 'Porter', 'points': '1.420650601387024', 'assists': '1.1657558679580688', 'rebounds': '2.9903366565704346'}, 
          {'player_name': 'Simpson', 'points': '8.666943550109863', 'assists': '1.619385004043579', 'rebounds': '1.8469352722167969'}, 
          {'player_name': 'Rhoden', 'points': '2.609591007232666', 'assists': '2.227944850921631', 'rebounds': '-0.013070203363895416'}, 
          {'player_name': 'Cazalon', 'points': '1.6129751205444336', 'assists': '-0.46702033281326294', 'rebounds': '0.700144350528717'}, 
          {'player_name': 'Muscala', 'points': '4.079624176025391', 'assists': '-0.3946111798286438', 'rebounds': '1.042844533920288'}, 
          {'player_name': 'Gallinari', 'points': '6.790478229522705', 'assists': '1.6238524913787842', 'rebounds': '2.5261149406433105'}, 
          {'player_name': 'Morris', 'points': '10.56424617767334', 'assists': '2.760862350463867', 'rebounds': '2.079784393310547'}], 
  'Pistons': 
      [
          {'player_name': 'George', 'points': '18.02863311767578', 'assists': '1.5919723510742188', 'rebounds': '4.699881076812744'}, 
          {'player_name': 'Zubac', 'points': '12.561087608337402', 'assists': '-0.1322973221540451', 'rebounds': '10.041640281677246'}, 
          {'player_name': 'Harden', 'points': '21.478775024414062', 'assists': '4.824407577514648', 'rebounds': '7.110252857208252'}, 
          {'player_name': 'Mann', 'points': '12.043068885803223', 'assists': '3.8463008403778076', 'rebounds': '2.265549421310425'}, 
          {'player_name': 'Coffey', 'points': '13.88724136352539', 'assists': '3.3389525413513184', 'rebounds': '2.6149604320526123'}, 
          {'player_name': 'Westbrook', 'points': '18.764163970947266', 'assists': '5.269656658172607', 'rebounds': '3.47727108001709'}, 
          {'player_name': 'Hyland', 'points': '2.9590306282043457', 'assists': '1.8584612607955933', 'rebounds': '1.500810146331787'}, 
          {'player_name': 'Boston Jr.', 'points': '12.505919456481934', 'assists': '2.9761204719543457', 'rebounds': '3.7275140285491943'}, 
          {'player_name': 'Powell', 'points': '18.813440322875977', 'assists': '3.684556484222412', 'rebounds': '3.702664852142334'}, 
          {'player_name': 'Brown', 'points': '2.9885458946228027', 'assists': '2.798762798309326', 'rebounds': '2.490694999694824'}, 
          {'player_name': 'Leonard', 'points': '28.200546264648438', 'assists': '4.6894636154174805', 'rebounds': '10.893462181091309'}, 
          {'player_name': 'Tucker', 'points': '2.2142980098724365', 'assists': '1.6150474548339844', 'rebounds': '0.6421255469322205'}, 
          {'player_name': 'Plumlee', 'points': '9.31746768951416', 'assists': '1.6153531074523926', 'rebounds': '5.690023899078369'}, 
          {'player_name': 'Diabate', 'points': '2.447115898132324', 'assists': '1.6295133829116821', 'rebounds': '1.611191749572754'}, 
          {'player_name': 'Batum', 'points': '4.42382287979126', 'assists': '2.5796475410461426', 'rebounds': '2.7999637126922607'}, 
          {'player_name': 'Covington', 'points': '2.710031032562256', 'assists': '1.8827189207077026', 'rebounds': '1.1117068529129028'}, 
          {'player_name': 'Williams', 'points': '3.3392715454101562', 'assists': '0.6005539894104004', 'rebounds': '2.9440929889678955'}, 
          {'player_name': 'Martin Jr.', 'points': '2.1124002933502197', 'assists': '2.0590438842773438', 'rebounds': '1.4146393537521362'}, 
          {'player_name': 'Moon', 'points': '3.457333564758301', 'assists': '1.3414186239242554', 'rebounds': '1.5772125720977783'}, 
          {'player_name': 'Miller', 'points': '2.9110300540924072', 'assists': '0.40339231491088867', 'rebounds': '5.423936367034912'}, 
          {'player_name': 'Primo', 'points': '0.5863312482833862', 'assists': '0.09970834851264954', 'rebounds': '0.7662374377250671'}
      ]
  }
}
  
  const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredPlayers, setFilteredPlayers] = useState<any[]>([]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const query = e.target.value;
      setSearchQuery(query);
  
      if (query.length > 0) {
        // Flatten the array of teams and players
        const allPlayers = Object.values(gameData.teams).flat();
        const filtered = allPlayers.filter((player) =>
          player.player_name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPlayers(filtered);
      } else {
        setFilteredPlayers([]);
      }
    };
    
    const handleSearch = (): void => {
      console.log(`Searching for player: ${searchQuery}`);
      // Typically, you'd fetch and filter the data from an external source here.
    };
  
    return (
      <Box p={8}>
        <VStack spacing={4}>
          <Heading>Today's Predictions</Heading>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading size="md" p={4} textAlign="center">{gameData.game_name}</Heading>
          <Flex direction={{ base: 'column', md: 'row' }}>
            {Object.entries(gameData.teams).map(([teamId, players]) => (
              <TableContainer key={teamId} flex="1" minWidth="0">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th colSpan={4}>{teamId}</Th>
                    </Tr>
                    <Tr>
                      <Th>Player</Th>
                      <Th isNumeric>Points</Th>
                      <Th isNumeric>Rebounds</Th>
                      <Th isNumeric>Assists</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {players.map((player: any) => (
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
            ))}
          </Flex>
        </Box>
        <Input
          placeholder="Search for a player"
          value={searchQuery}
          onChange={handleChange}
          width='50%'
        />
        {filteredPlayers.length > 0 && (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mt={4} width="100%">
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
          </Box>
        )}
        </VStack>
      </Box>
    );
  };
  
  export default HomePage;