function UserStatus() {
    const isActive = true;
    return (
        <div>
            {isActive && <p>User is active</p>}
        </div>
    );
}

export default UserStatus;