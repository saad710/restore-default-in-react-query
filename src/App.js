import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { NormalWay } from './components/NormalWay.page'
import { RestoreWay } from './components/RestoreWay.page'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/foods'>Traditional Way Foods</Link>
              </li>
              <li>
                <Link to='/re-foods'>Restore Way Foods</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/foods'>
              <NormalWay />
            </Route>
            <Route path='/re-foods'>
              <RestoreWay />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
