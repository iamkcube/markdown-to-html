import { useState, useEffect } from 'react'
import './App.css'
import { marked } from "marked";
import Navbar from './components/Navbar'
import Markdown from './components/Markdown'
import Preview from './components/Preview'

function App()
{
  const [markdown, setMarkdown] = useState("")
  const [html, setHtml] = useState("")

  useEffect(() =>
  {
    const gotMarkdown = localStorage.getItem("markdown.to.html")
    if (gotMarkdown != null)
    {
      setMarkdown(gotMarkdown);
      setHtml(marked(gotMarkdown))
    }

  }, [])

  function handleChange(mdValue)
  {
    setMarkdown(mdValue)
    if (mdValue != null)
    {
      setHtml(marked(mdValue))
    }
  }

  function downloadFile()
  {
    const file = new Blob([html], { type: 'text/html' });
    let htmlURL = window.URL.createObjectURL(file);
    let tempLink = document.createElement('a');
    tempLink.href = htmlURL;
    tempLink.setAttribute('download', 'download.html');
    tempLink.click();
  }

  function saveProgress()
  {
    localStorage.setItem("markdown.to.html", markdown)
    alert("Saved your work.")
  }

  return (
    <div className="App bg-gray-600">
      <Navbar saveProgress={saveProgress} downloadFile={downloadFile} />
      <div className="flex">
        <Markdown handleChange={handleChange} markdown={markdown} />
        <Preview html={html} />
      </div>
    </div>
  )
}

export default App
