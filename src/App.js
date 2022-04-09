import StartpagePresenter from './presenters/startpagepresenter'

const changeText = (input) => console.log(input);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Dummy App!!! 
        </h1>
      </header>
          <div>
              <StartpagePresenter/>
          </div>
      </div>
  );
}

export default App;
