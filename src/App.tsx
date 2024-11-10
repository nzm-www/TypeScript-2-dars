import Todolist from "./components/Todolist";
import Mainlayout from "./layout/Mainlayout";
function App() {
  return (
    <div className="bg-[#161616] h-[700px]">
      <Mainlayout>
        <Todolist />
      </Mainlayout>
    </div>
  );
}

export default App;
