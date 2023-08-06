import logo from './logo.svg';
import './App.css';
import { StateUse } from './Components/useState';
import { Effecthook } from './Components/useEffect';
import { MemoHook } from './Components/useMemo';
import { ContextHook } from './Components/useContext';
import { CallbackHook } from './Components/useCallback';
import { ReducerHook } from './Components/useReducer';
import CustomHook from './Components/customHook';

function App() {
  return (
    <>
    <StateUse/>
    <Effecthook/>
    <MemoHook/>
    <ContextHook/>
    <CallbackHook/>
    <ReducerHook/>
    <CustomHook/>
    </>
  );
}

export default App;
