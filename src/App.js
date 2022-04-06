import React from 'react';
import Analytics from "./pages/Analytics/Analytics";
import useWindowDimensions from "./utils/useWindowDimensions"

function App() {
    const { width, height } = useWindowDimensions();

    return (
        <>
        {width < 918 ? (
            <div className="mobile-not-supported">
                <h1>Use a desktop or laptop for better experience</h1>
            </div>
            ) : (
            <Analytics />
        )}
        </>
    );
}

export default App;
