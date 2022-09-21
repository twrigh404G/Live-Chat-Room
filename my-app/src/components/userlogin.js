export default function Userlogin(){
    return(
        <>
            <div className="loginform">
                <label>USERNAME</label>
                <input type="text" name="user" className="input" placeholder="Type something here...."></input>
                <label>USERNAME</label>
                <input type="text" name="user" className="input" placeholder="Type something here...."></input>
                <div className="dropdown">
                    <selectmenu name="room" id="topic" className="joinroom">
                        <option value="javascript">Javascript</option>
                        <option value="react">react</option>
                        <option value="node">node</option>
                        <option value="databases">databases</option>
                    </selectmenu>
                </div>
            </div>       
        </>
    )
}