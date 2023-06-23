import { PageRoutes } from "./routes/Routes";
import { GlobalReset } from "./styles/reset";
import { GlobalVariables } from "./styles/variables";

function App() {
  return (
    <div className="MainPage">
      <GlobalReset />
      <GlobalVariables />
      <PageRoutes />
    </div>
  );
}

export default App;
