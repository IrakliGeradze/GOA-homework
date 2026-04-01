function App(){
    function ConditionalRender(){
        const isLoggedIn = true;
        if(isLoggedIn){
            return <h1>Welcome</h1>
        } else{
            return <h1>Please Log In</h1>
        }
    }
    return(
        <>
            <ConditionalRender/>
        </>
    )
}

export default App