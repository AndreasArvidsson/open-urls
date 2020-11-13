import React, { useState } from "react";

const App = () => {
    const [value, setValue] = useState("");
    const [urls, setUrls] = useState("");

    const openAll = () => {
        urls.forEach(newTab);
    }

    const update = (value) => {
        const urls = value.split("\n").map(v => v.trim()).filter(Boolean);
        setValue(value);
        setUrls(urls);
    }

    return (
        <div>
            <label>
                Paste URLs separated by new line. Click button to open all in new tabs.
            </label>
            <textarea
                className="form-control"
                rows="20"
                value={value}
                onChange={e => update(e.target.value)}
                placeholder="http://www.example.com"
            />
            <p />
            <button
                className="btn btn-sm btn-primary"
                onClick={openAll}
                disabled={!urls.length}
            >
                Open {urls.length} tabs
            </button>
        </div>
    );
}

export default App;

function newTab(url) {
    window.open(url, "_blank");
} 