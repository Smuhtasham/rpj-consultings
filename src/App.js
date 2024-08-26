import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";

function App() {
  return (
    <>
      <div className="flex w-[100%]">
        <div className="flex-col w-[20%]">
          <LeftPanel />
        </div>
        <div className="flex w-[80%]">
          <RightPanel />
        </div>
      </div>
    </>
  );
}

export default App;
