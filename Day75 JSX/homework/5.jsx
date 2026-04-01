function ternarSimon(){
    const active = true;

    return(
        <>
            <div>
                {active ? <p>User is active</p> : <p>User is not active</p>}
            </div>
        </>
    )
}