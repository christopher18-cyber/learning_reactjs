import { useState } from "react";

function FunctionalComponent() {
    const [users, setUsers] = useState([])
    const [pending, setPending] = useState(false)

    async function fetchUser() {
        try {
            setPending(true)
            const result = await fetch("https://dummyjson.com/users")
            const fetchedUser = await result.json()
            setPending(false)
            setUsers(fetchedUser.users)
        } catch (err) {
            console.error(err);
        }
    }

    if (pending) return <h1>Fetching users</h1>

    if (users.length === 0) {
        return <button onClick={fetchUser}>Fetch Users</button>
    }

    return (
        <div>
            <h1>Fetched users</h1>
            {
                users.map((user) => {
                    <p key={user.id}>{user.firstName}</p>
                })
            }
        </div>
    )
}

export default FunctionalComponent