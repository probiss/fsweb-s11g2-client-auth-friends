import axios from "axios";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
    let loggedInToken = localStorage.getItem("s11g2");
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({ mode: "onChange"})
    const history= useHistory();
    const onSubmitLog = (data) => {
        const config = {
            method:"post",
            url: "http://localhost:9000/api/friends",
            headers: {
                "Content-Type":"application/json",
                Authorization: loggedInToken
            },
            data: JSON.stringify(data),
        };
        axios(config)
        .then(function (response) {
            history.push("/friendss");
            console.log(response.data);
        })
        .catch(function (err) {
            console.log(err);
        });

    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit(onSubmitLog)} >
                <div>
                <input type="text" placeholder="name" {...register("name",{required:"Bu alan zorunludur..."})} />
                </div>
                <div>
                    <input type="email" placeholder="email" {...register("email",{required:"Bu alan zorunludur..."})} />
                </div>
                <button type="submit"> Add Friend </button>
            </form>
        </div>
    );
}
}