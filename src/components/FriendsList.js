import axios from "axios";
import { useState, useEffect } from "react";


export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    const loggedInToken = localStorage.getItem("s11g2")
    const isLoggedIn = (loggedInToken) ? true : false


    // axios.create({
    //     headers: {
    //         Authorization: loggedInToken,
    //     },
    // })

    useEffect(() => {
        axios
            .get("http://localhost:9000/api/friends", {
                headers: {
                    Authorization: loggedInToken,
                }
            })
            .then((res) => setFriends(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            {!isLoggedIn && <div> Başaramadım... </div>}
            {isLoggedIn && <div> <h1>Friends List</h1>
                <div>
                    <ul>
                        {friends.map((item) => (
                            <li key={item.id}>- {item.name} - {item.email} -</li>
                        ))}
                    </ul>
                </div>
            </div>}
        </div>
    )
}