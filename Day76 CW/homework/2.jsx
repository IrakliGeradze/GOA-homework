function Example() {
  const isLoggedIn = true;

  let message;
  if (isLoggedIn) {
    message = <p>Welcome back!</p>;
  } else {
    message = <p>Please log in</p>;
  }
  return (
    <div>
      {message}
    </div>
  );
}

export default Example;