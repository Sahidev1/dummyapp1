import StartpagePresenter from './presenters/startpagepresenter'
import AnotherPagePresenter from './presenters/anotherpagepresenter'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartpagePresenter />} />
            <Route path="/anotherpage" element={<AnotherPagePresenter/>}/>
        </Routes>
  );
}

export default App;
