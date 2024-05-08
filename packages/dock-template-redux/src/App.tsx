import { Grid, Flex, View } from '@adobe/react-spectrum';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <Grid
      areas={{
        base: ['header', 'nav', 'content', 'footer'],
        M: [
          'header   header',
          'nav      content',
          'nav      content',
          'footer   footer',
        ],
        L: [
          'header header  header',
          'nav    content toc',
          'nav    content toc',
          'footer footer  footer',
        ],
      }}
      columns={{
        M: ['size-2000', '1fr'],
        L: ['size-2000', '1fr', 'size-2000'],
      }}
      gap="size-100"
    >
      <View backgroundColor="gray-200" gridArea="header">
        <img src={logo} className="App-logo" alt="logo" />
      </View>
      <View backgroundColor="gray-200" gridArea="nav">
        <Flex
          direction={{ base: 'row', M: 'column' }}
          gap="size-100"
          margin="size-100"
        >
          <View
            backgroundColor="static-gray-50"
            height="size-250"
            minWidth="size-900"
          />
          <View
            backgroundColor="static-gray-50"
            height="size-250"
            minWidth="size-900"
          />
          <View
            backgroundColor="static-gray-50"
            height="size-250"
            minWidth="size-900"
          />
        </Flex>
      </View>
      <View  gridArea="content" height="size-4600">
        <Counter />
      </View>
      <View
        backgroundColor="gray-200"
        gridArea="toc"
        minHeight="size-1000"
        isHidden={{ base: true, L: false }}
      />
      <View
        backgroundColor="gray-200"
        gridArea="footer"
        height="size-1000"
      />
    </Grid>
  );
}

export default App;
