import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";

function Layout({ children }) {

    let navigate = useNavigate()
    const [loading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate("/login")
        }
    },[navigate,loading])

    return (
        <section>
            <div className="container">
                <main>{children}</main>
            </div>
        </section>
    )
}

export default Layout