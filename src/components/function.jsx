import { useEffect, useState } from "react";

function FunctionalComponents() {
    const [users, setUsers] = useState([])
    const [pending, setPending] = useState(false)

    // useEffect(() => {
    //     FetchUsers()
    // }, [])
    async function FetchUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch("https://dummyjson.com/users")
            const result = await apiResponse.json()
            setPending(false)
            setUsers(result.users)
        } catch (err) {
            console.log(err);
        }
    }

    if (pending) return <h1>Fetching Users</h1>
    return (
        <div>
            <h1>Fetched users</h1>
            {
                users.map((user) => {
                    return <p>{user.firstName}</p>
                })
            }
            <button onClick={FetchUsers}>Fetch users</button>
        </div>
    )
}
export default FunctionalComponents

