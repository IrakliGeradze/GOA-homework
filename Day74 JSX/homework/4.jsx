function App() {
  function JsInJsx(){
    const name = "React Student"
    return <h2>Hello {name}</h2>
  }
  return (
    <>
      <JsInJsx/>
    </>
  )
}

export default App