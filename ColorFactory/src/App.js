import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import HomePage from './HomePage';
import Color from './Color'
import NewColorForm from './NewColorForm'
import useColors from './useColors';

function App() {
  const {colors, findColor, addColors} = useColors();
  return (
      <Routes>
        <Route exact path="/colors" element={<HomePage colors={colors}/>} />
        <Route exact path="/colors/:name" element={<Color findColor={findColor}/>}/>
        <Route exact path="/colors/new" element={<NewColorForm addColors={addColors}/>} />
        <Route path="/*" element={<Navigate replace to="/colors" />} />
      </Routes>
  );
}

export default App;