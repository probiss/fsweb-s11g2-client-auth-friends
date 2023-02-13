import axios from "axios";
import {useForm} from "react-hook-form";

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({ mode: "onChange"})

    const onSubmitLog = (data) => {
        const config = {
            method:"post",
            url: "http://localhost:9000/api/login",
            headers: {"Content-Type":"application/json"},
            data:data,
        };
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (err) {
            console.log(err);
        });
        // axios
        // .post("http://localhost:9000/api/login",data, {
        //     headers:{"Content-Type":"application/json"},
        // })
        // .then((res) => JSON.parse(console.log(res.data)))
        // .catch((err) => console.log(err));
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmitLog)} >
                <div>
                <input type="text" placeholder="username" {...register("username",{required:"Bu alan zorunludur..."})} />
                </div>
                <div>
                    <input type="password" placeholder="password" {...register("password",{required:"Bu alan zorunludur..."})} />
                </div>
                <button type="submit"> Login </button>
            </form>
        </div>
    );
}