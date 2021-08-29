import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatScreen from './components/chat-screen/ChatScreen';
import ChatsList from './components/chats-list/ChatsList';
import Header from './components/header/Header';
import SwipeButtons from './components/swipe-buttons/SwipeButtons';
import TinderCards from './components/tinder-cards/TinderCards';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Switch>
        <Route exact path="/chat/:person">
          <Header backButton="/chats"/>
          <ChatScreen/>
          </Route>

          <Route exact path="/chats">
          <Header backButton="/"/>
          <ChatsList/>
          </Route>

          <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
