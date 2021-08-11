import data from "./data.json";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Paint from "./components/Paint/Paint";
import { useState } from "react";

const App = () => {
  data.forEach((d) => {
    d["urlPath"] = d.name.replace(/\s/g, "-");
  });

  const [slideShow, setSlideShow] = useState(true);

  const handleSlideShow = () => {
    setSlideShow(!slideShow);
  };

  return (
    <div className="App">
      <div>
        <Menu datas={data} clickEvent={handleSlideShow} slideShow={slideShow} />
        <Switch>
          <Route exact path="/galleria">
            <Gallery datas={data} clickEvent={handleSlideShow} />
          </Route>
          <Route path="/galleria/:urlPath">
            <Paint datas={data} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
