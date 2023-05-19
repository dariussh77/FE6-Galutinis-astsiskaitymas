const NavLogin = () => {
    return ( 
        <div>
            <form>
                <div>
                    <label htmlFor="userName"></label>
                    <input type="text" id="userName" name="userName" />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" />
                </div>
            </form>
            <input type="submit" value='Prisijungti'/>
        </div>
     );
}
 
export default NavLogin;