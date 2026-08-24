

    const userLoggedIn = true;
    const username = "ZyRØ";
    function Render(){
    
    return (
        <>
            {userLoggedIn ? <h2>Welcome {username}</h2> : <h2>Please log in to continue</h2>} 
        </>
    )
    
    
}

export default Render