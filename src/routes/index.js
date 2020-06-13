import Home from "../components/Home";
import Login from "../components/Login";

export default [
    {
        name: "root",
        path: "/",
        component: Home,
        isExact: true
    },
    {
        name: "signin",
        path: "/account/signin",
        component: Login,
        isExact: false
    }
];