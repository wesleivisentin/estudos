
import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';
import Cards from './components/cards/cards';

function App() {
  return (
    <>
      <Button label='Baixar CV'/>
      <Button/>
      <Button/>

      <Card>
      <h3>Titulo</h3>
        <p>Esse é um texto card</p>
      </Card>
      <Card></Card>
      <Card></Card>


      
      <Cards/>
      </>
    
  );
};

export default App;
