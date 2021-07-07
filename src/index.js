import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";

import "./styles.scss";
import HomePage from "./components/HomePage";
import CoinOverviewPage from "./components/CoinOverview";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  const parseCoinData = () => {
    return coinData.map(coin => ({id: coin.id, name: coin.name}));
  }
  return (
    <div className="App">
      <Navbar coinData={parseCoinData()} />
      <Route exact path="/" render={() => <HomePage coinData={coinData} />} />
      <Route exact path="/coins/:id" render={props => <CoinOverviewPage {...props} coinData={coinData.filter(coin => coin.id === props.match.params.id)} />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
rootElement);
