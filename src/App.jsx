import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {

  return (
    <ProductProvider>
        {/* Toda la app ahora comparte el mismo estado de productos */}
        <Products />
    </ProductProvider>
);
}

export default App
