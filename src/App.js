import logo from './logo.svg';
import './App.css';
import { StateUse } from './Components/useState';
import { Effecthook } from './Components/useEffect';
import { MemoHook } from './Components/useMemo';
import { ContextHook } from './Components/useContext';
import { CallbackHook } from './Components/useCallback';
import { ReducerHook } from './Components/useReducer';
import CustomHook from './Components/customHook';
import { Hierarchy } from './Components/Hierarchy';
import { ComponentA } from './Components/ComponentA';
import { RefuseHook } from './Components/useRef';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User';
import UserFetch from './Components/UserFetch';
function App() {
  return (
    <>
    {/* <StateUse/> */}
    {/* <Effecthook/> */}
    {/* <MemoHook/> */}
    {/* <ContextHook/> */}
    {/* <CallbackHook/> */}
    {/* <ReducerHook/> */}
    {/* <CustomHook/> */}
    {/* <Hierarchy/> */}
    {/* <ComponentA/> */}
    {/* <RefuseHook/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/useState" element={<StateUse/>}></Route>
      <Route path="/useEffect" element={<Effecthook/>}></Route>
      <Route path="/useContext" element={<ContextHook/>}></Route>
      <Route path="/useRef" element={<RefuseHook/>}></Route>
      <Route path="/useCallback" element={<CallbackHook/>}></Route>
      <Route path="/useMemo" element={<MemoHook/>}></Route>
      <Route path="/useReducer" element={<ReducerHook/>}></Route>
      <Route path="/customHook" element={<CustomHook/>}></Route>
      <Route path="/users" element={<User/>}></Route>
      <Route path="/userfetch" element={<UserFetch/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
