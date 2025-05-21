import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  // Shorts linkini watch?v= formatına dönüştür
  const formatUrl = (url: string) => {
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("youtube.com/shorts/")[1];
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    return url;
  };

  const handleDownload = async () => {
    try {
      const formattedUrl = formatUrl(url);
      console.log("Formatted URL:", formattedUrl); // URL'yi kontrol edin
      const response = await fetch(
        `http://localhost:8000/download?url=${encodeURIComponent(formattedUrl)}`
      );
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message + " - " + data.file_path);
      } else {
        setMessage("Hata: " + data.detail);
      }
    } catch (error) {
      setMessage("İndirme sırasında hata oluştu.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>YouTube Video İndirici</h1>
      <input
        type="text"
        placeholder="YouTube video URL'si"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", padding: 8 }}
      />
      <button onClick={handleDownload} style={{ marginTop: 10, padding: "8px 16px" }}>
        İndir
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
