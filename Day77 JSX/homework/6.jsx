function io(){
    let nums = [10, 20, 30];
    return(
        <>
        <div>
            {nums.map((value, index) => {
                return(
                    <p key={index}>
                        Index: {index} Value: {value}
                    </p>
                )
            })}
        </div>
        </>
    )
}