import Home from './Pages/Home';
import Review from './Pages/Review';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
    // uri:"https://flyby-gateway.herokuapp.com/"
  })

  return (
  <ApolloProvider client={client}>
    <div className="App">
      <Home />
      {/* <Review/> */}
    </div>
  </ApolloProvider>
  )
}

export default App
