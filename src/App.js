import React, {useState} from 'react';
import { ChakraProvider, CSSReset, Grid, Box, Flex } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './header';
import Editor from './AceEditor'


function App() {
	const [context, setContext] = useState('');
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Header />
			<Flex padding="1.5rem" h="80vh">
				<Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
					<Box w="100%" h="100%"><Editor setContext={setContext} /></Box>
					<Box w="100%" h="100%" id="preview" dangerouslySetInnerHTML={{__html: context}} />
				</Grid>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
