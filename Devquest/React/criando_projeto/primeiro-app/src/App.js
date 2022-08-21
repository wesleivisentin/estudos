
import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';

function App() {
  return (
    <>
      <Button/>
      <Button/>
      <Button/>

      <Card>
      <h3>{props.title}</h3>
        <p>esse é um texto card</p>
      </Card>
      <Card></Card>
      <Card></Card>
      </>
    
  );
};

export default App;
