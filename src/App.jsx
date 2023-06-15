import { PageRoutes } from "./routes/Routes";
import { GlobalReset } from "./styles/reset";
import { GlobalVariables } from "./styles/variables";
function App() {
  return (
    <>
      <GlobalReset />
      <GlobalVariables />
      <PageRoutes />
    </>
  );
}

export default App;
