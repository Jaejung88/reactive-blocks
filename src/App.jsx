import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Advertisement from './components/Advertisement';
import Subcontents from './components/Subcontents';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="p-2" style = {{backgroundColor: "#dddddd"}}>
      <Header />
      <div className="d-flex col-12 p-0 my-4 justify-content-start">
        <Navigation />
      <Main>
        <Subcontents />
        <Subcontents />
        <Subcontents />
        <Advertisement />
      </Main>
      </div>
    </div>
  );
}

export default App;
