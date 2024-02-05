import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

function NavbarRight() {
    const username = useSelector((state) => state.user.username);
    const userImg = useSelector(state => state.user.userImg);
    const dispatch = useDispatch();

    const login = async () => {
        const user = (await axios.get('https://randomuser.me/api/')).data.results[0];
        const username = user.login.username;
        const userImg = user.picture.thumbnail;
        const actionObject = {
            type: 'LOGIN',
            payload: { username, userImg }
        }
        dispatch(actionObject);
    }

    const userloggedIn = username !== '';
    return (
        <div style={{ height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {userloggedIn ?
                <>
                    <span style={{ marginRight: '5px' }}> {username} </span>
                    <span style={{ borderRadius: '50%', backgroundImage: `url(${userImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', height: '30px', width: '30px', marginRight: '20px' }}></span>
                </>
                :
                <span onClick={login} style={{ marginRight: '20px', cursor: 'pointer' }}>Click to Login </span>
            }
        </div>
    )
}

export default NavbarRight;