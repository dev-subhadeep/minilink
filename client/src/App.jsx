import { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [url, setUrl] = useState("")
  const [shortenedUrl, setShortenedUrl] = useState("")

  const generateLink = (e) => {
    axios({
      method: "post",
      url: `${import.meta.env.VITE_BASE_URL}/create/quick`,
      data: { link: url },
    })
      .then((res) => setShortenedUrl(res.data.link.shortened))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Paste your link here"
          style={{
            padding: "10px",
            borderRadius: "5px",
            borderColor: "transparent",
          }}
          onChange={(e) => setUrl((prev) => e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Set expiration time in days"
          style={{
            padding: "10px",
            borderRadius: "5px",
            borderColor: "transparent",
          }}
        />
        <button onClick={generateLink}>Shorten</button>
      </div>
      <div>
        {shortenedUrl ? (
          <p>
            Shortened Link:{" "}
            <a href={`${import.meta.env.VITE_BASE_URL}/${shortenedUrl}`}>
              {import.meta.env.VITE_BASE_URL}/{shortenedUrl}
            </a>
          </p>
        ) : null}
      </div>
    </>
  )
}

export default App
