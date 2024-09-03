import MainSecation from "./components/MainSecation";
import MainSecationPhone from "./components/MainSecationPhone";
import Navbar from "./components/Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
function App() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      {matches && <MainSecationPhone />}
      {!matches && <MainSecation />}
    </div>
  );
}

export default App;
