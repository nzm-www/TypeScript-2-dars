import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

function Mainlayout({ children }) {
  return (
    <div>
      <div className="left-bar w-[20vw] fixed h-[100vw] text-white bg-[#222]">
        <LeftBar />
      </div>
      <div className="w-[60vw] mx-auto flex justify-center pt-[100px]">
        {children}
      </div>

      <div className="right-bar right-0 top-0 w-[20vw] fixed h-[100vw] text-white bg-[#222]">
        <RightBar />
      </div>
    </div>
  );
}

export default Mainlayout;
