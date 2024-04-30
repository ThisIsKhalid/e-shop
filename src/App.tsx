import { RouterProvider } from "react-router-dom";
import router from "./routes/MainRouter";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
