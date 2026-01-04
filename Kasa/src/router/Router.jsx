import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Housing from "../pages/Housing/Housing"
import Error from "../pages/Error/Error"

export default function router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}