import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"

function Navbar() {

    return (
        <div style={{ width: '100%', height: '35px', display: 'flex', justifyContent: 'space-between' }}>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}


export default Navbar