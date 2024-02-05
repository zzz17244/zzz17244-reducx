import { useSelector } from "react-redux";

function NavbarRight() {
    const username = useSelector((state) => state.user.username);
    return (
        <div style={{ height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}> {username} </span>
        </div>
    )
}

export default NavbarRight;