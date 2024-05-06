import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BANNER_DATA } from "./static/listData";
import Banner from "./components/banner/Banner";

function App() {
  let banners = BANNER_DATA?.map((el) => <Banner key={el.id} {...el} />);

  return (
    <Fragment>
      <Header />
      <Main />
      {banners}
    </Fragment>
  );
}

export default App;
