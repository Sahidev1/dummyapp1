import StartpagePresenter from './presenters/startpagepresenter'
import AnotherPagePresenter from './presenters/anotherpagepresenter'
import LoginPresenter from './presenters/loginpresenter';
import { Routes, Route } from 'react-router-dom';
import SignUpViewPresenter from './presenters/signupviewpresenter';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<StartpagePresenter />} />
            <Route exact path="/anotherpage" element={<AnotherPagePresenter/>}/>
            <Route exact path="/login" element={<LoginPresenter/>}/>
            <Route exact path="/register" element={<SignUpViewPresenter/>}/>
        </Routes>
  );
}

export default App;
