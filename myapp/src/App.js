import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import arrys from  '../src/Components/books (1)/history.json'

function App() {
  return (
    <>
      <WarningSign text='this is  a alert' />

      <MyBadge color="danger" content='this is a badge'/>
      <SingleBook Img={arrys[0].img} Title={arrys[0].title}  ></SingleBook>
      
     </>
  );
}

export default App;
