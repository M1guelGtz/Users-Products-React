import './App.css';
import ViewUsers from './users/Presetation/UI/ViewUsers';
function App() {

  return (
    <ProductProvider>
        <Products />
        <ViewUsers/>
    </ProductProvider>
);
}

export default App
