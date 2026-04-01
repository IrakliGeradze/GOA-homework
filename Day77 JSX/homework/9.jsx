function App(){
    function EventExample(){
        return (
            <button onClick={console.log("Clicked")}>Click Me</button>
        )
    }
    return(
        <>
        <EventExample/>
        </>
    )
}

export default App