function names(){
  const users = [
    { id: 1, name: "Nika" },
    { id: 2, name: "Luka" },
    { id: 3, name: "Giorgi" }
  ];

  return(
    <>
    <ul>
      {users.map((user) => {
        return(
          <li key={user.id}>{user.name}</li>
        )
      })}
    </ul>
    </>
  )
  }