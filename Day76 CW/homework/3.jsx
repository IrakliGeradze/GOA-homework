function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((num, index) => {
        const result = num % 2 === 0 ? num * 2 : num;
        return <li key={index}>{result}</li>;
      })}
    </ul>
  );
}
export default NumberList;