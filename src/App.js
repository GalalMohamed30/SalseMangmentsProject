import './App.css';
import { Route, Routes } from 'react-router-dom'

import Login from './Pages/Auth/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Analysis from './Pages/Analysis/Analysis';
import Root from './Pages/Root';
import SingUpSalse from './Pages/Salse-Actions/AddSalse/SingUpSalse'
import ShowSalse from './Pages/Salse-Actions/ShowSalses/ShowSalse';
import NicheShow from './Pages/Niche/NicheShow';
import NicheAdd from './Pages/Niche/NicheAdd';
import CliendsShow from './Pages/Niche/Cliends/CliendsShow';
import CliendAdd from './Pages/Niche/Cliends/CliendAdd';
import ShowTasks from './Pages/Tale-Selse/ShowTasks';


function App() {

  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Root />} >
          <Route index element={<Analysis />} />
          <Route path='/sing-up' element={<SingUpSalse />} />
          <Route path='/show-salse' element={<ShowSalse />} />
          <Route path='/show-niche' element={<NicheShow />} />
          <Route path='/show-niche/add' element={<NicheAdd />} />
          <Route path='/show-niche/cliend' element={<CliendsShow />} />
          <Route path='/show-niche/cliend/add' element={<CliendAdd />} />
          <Route path='/show-tasks' element={<ShowTasks />} />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
