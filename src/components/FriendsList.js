import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


export default function FriendsList(props) {
    const history = useHistory();
    const [friends, setFriends] = useState([]);
    let loggedInToken = localStorage.getItem("s11g2");

    useEffect(() => {
        if(!!!loggedInToken) {
            console.log("log", loggedInToken,loggedInToken===null)
            history.push("/login")
        }else{
            axios
            .get("http://localhost:9000/api/friends", {
                headers: {
                    Authorization: loggedInToken,
                }
            })
            .then((res) => setFriends(res.data))
            .catch((err) => console.log(err))
        }
    }, [])
    return (
        <div>
        <h1>FRIEND LIST</h1>
            <div>
                <ul>
                    {friends.map((item) => (
                        <li key={item.id}>- {item.name} - {item.email} -</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}