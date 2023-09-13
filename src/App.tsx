import { UserProvider } from './MobContext'
import Users from './Users';
import Timer from './Timer';
import Settings from './Settings';
import './App.css';
import './Styles.css';

function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <Users />
        <Timer />
        <Settings />
      </UserProvider>
    </div>
  );
}

export default App;
