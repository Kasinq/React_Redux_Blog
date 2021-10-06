import Header from './Components/Header/Header';
import { Route } from 'react-router';
import Friends from './Components/Friends/Friends';
import News from './Components/News/News';
import NewDitail from './Components/Posts/NewDitail';
import './app.scss'

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/react_redux_blog' render={() => <News />} />
      <Route exact path='/news' render={() => <News />} />
      <Route path='/friends' render={() => <Friends />} />
      <Route exact path='/new/:id' render={() => <NewDitail />} />
    </div>
  )
}

export default App;
