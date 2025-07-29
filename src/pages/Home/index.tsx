import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <div>
            <h1>Home Səhifəsi</h1>
            <ul>
                <li>
                    <Link to="/login-1">Login 1</Link>
                </li>
                <li>
                    <Link to="/login-2">Login 2</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage