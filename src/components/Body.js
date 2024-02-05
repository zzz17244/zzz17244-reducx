const heightOfNavBar = 35;
const heightOfFooter = 35;

function Body() {

    return (
        <div style={{ width: '100%', height: `calc(100vh - ${heightOfNavBar + heightOfFooter}px)` }}></div>
    )
}

export default Body;