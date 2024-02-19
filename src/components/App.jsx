// App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            <Note  /> {/* eslint-disable-next-line */}
            <Footer />
        </div>
    );
}

export default App;
