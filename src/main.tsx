import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import CountryCapital from "./components/CountryCapital.tsx";
import DetectScroll from "./components/DetectScroll.tsx";
import { countryCapitalData, quizData } from "./data/game-data.ts";
import Quiz from "./components/Quiz.tsx";
import TrafficLights from "./components/TrafficLights.tsx";
import Explorer from "./components/Explorer.tsx";
import Accordion from "./components/Accordion.tsx";
import MovingBlock from "./components/MovingBlock.tsx";
import Timer from "./components/Timer.tsx";
import Search from "./components/Search.tsx";
import searchData from "./data/search.json";
import fruits from "./data/fruits.json";
import LocationSwap from "./components/LocationSwap.tsx";
import locationData from "./data/locations.json";
import SearchFruits from "./components/SearchFruits.tsx";
import Debouncing from "./components/Debouncing.tsx";
import NumberFormat from "./components/NumberFormat.tsx";

const routes = (
  <Route path="/coding-challenges" element={<App />}>
    <Route path="" element={<Home />} />
    <Route
      path="country-capital"
      element={<CountryCapital data={countryCapitalData} />}
    />
    <Route path="detect-scroll" element={<DetectScroll />} />
    <Route path="quiz" element={<Quiz questions={quizData} />} />
    <Route path="traffic-lights" element={<TrafficLights />} />
    <Route path="explorer" element={<Explorer />} />
    <Route path="accordion" element={<Accordion />} />
    <Route path="moving-block" element={<MovingBlock />} />
    <Route path="timer" element={<Timer />} />
    <Route path="search" element={<Search data={searchData} />} />
    <Route path="search-fruits" element={<SearchFruits data={fruits} />} />
    <Route path="debouncing" element={<Debouncing />} />
    <Route path="number-format" element={<NumberFormat />} />
    <Route
      path="location-swap"
      element={<LocationSwap data={locationData} />}
    />
    <Route path="*" element={<div>Error</div>} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
