
function Header()
{
    return(
        <div className="navBarLogo">
            <img className="navBarLogo" src="https://www.trawell.in/images/tw_logo3.png"/>
            <p>Tour Enquiry</p>
            <input style={{width:"230px"}} type="text" placeholder="Search Tour. Places,Getaways" /><span > </span>
        </div>
    );
}

export default Header;