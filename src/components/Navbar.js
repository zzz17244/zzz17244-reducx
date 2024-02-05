import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"

function Navbar() {

    return (
        <div
            style={{ width: '100%', height: '35px', display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}


export default Navbar