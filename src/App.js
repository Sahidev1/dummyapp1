import StartpagePresenter from './presenters/startpagepresenter'
import AnotherPagePresenter from './presenters/anotherpagepresenter'

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
          <div>
              <AnotherPagePresenter/>
          </div>
      </div>
  );
}

export default App;
