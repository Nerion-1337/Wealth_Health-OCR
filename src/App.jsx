import { BrowserRouter, Routes, Route } from "react-router-dom";
// DATA
import { Links } from "#data/links";
// PAGE
import Error from "#page/error";
import Home from "#page/home";
import Employee from "./page/employee";
// BUILDER
import Header from "#/components/build/header";
import Footer from "#/components/build/footer";
//
//
function App() {
//
// BUILD
const navigationContent = (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path={Links[0].url} element={<Home />} />
    <Route path={Links[1].url} element={<Employee />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer />
</BrowserRouter>
)
//
//

    return (
<>
{Links ? (
  navigationContent
) : (
  <Error id="1337" errorText="Error system !" nolink="true"/>
)}
</>
    );
}

export default App;
