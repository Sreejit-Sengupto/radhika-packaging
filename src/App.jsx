import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import Navbar from './utils/Navbar';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Navbar />}
        >
            <Route
                index
                element={<Home />}
            />
            <Route
                path="products"
                element={<Products />}
            />
            <Route
                path="services"
                element={<Services />}
            />
            <Route
                path="about"
                element={<About />}
            />
            <Route
                path="blogs"
                element={<Blogs />}
            />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
