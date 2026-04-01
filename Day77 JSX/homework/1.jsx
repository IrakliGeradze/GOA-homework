function AgeCheck() {
    const age = 20;
    let result;
    if (age >= 18) {
        result = "Adult";
    } else {
        result = "Minor";
    }

    return (
        <div>
        <p>{result}</p>
        </div>
    );
}

export default AgeCheck;