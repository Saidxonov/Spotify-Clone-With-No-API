import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/home/Home";
import Likes from "./pages/likes/Likes";
import Playlist from "./pages/playlist/Playlist";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/likes"
          element={
            <MainLayout>
              <Likes />
            </MainLayout>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <MainLayout>
              <Playlist />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
