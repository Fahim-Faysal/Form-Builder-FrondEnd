import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormList from './Pages/Home/FormList/FormList';
import FormView from './Pages/Home/FormView/FormView';
import GenerateForm from './Pages/Home/GenerateForm/GenerateForm';
import Home from './Pages/Home/Home/Home';
import SecondForm from './Pages/Home/SecondFrom/SecondForm';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/homepage' element={<FormList />} />
        <Route path='/formgenerate' element={<GenerateForm />} />
        <Route path='/secondfrom/:id' element={<SecondForm />} />
        <Route path='/fromview' element={<FormView />} />

      </Routes>

    </div>
  );
}

export default App;
