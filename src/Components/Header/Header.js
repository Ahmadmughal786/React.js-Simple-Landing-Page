import './Header.css'

import logo from "../../assets/logo-icon.svg";

function Header ({data})
{

    console.log(data.logoHeading,"nav");
    return (
        <div className="bg_div">
           <div className="Uper_section">

            <div className="logo">
                <img className="logo_img" src={data.logo} alt = {"..."} />
             
               <p className= "logo_heading">Superprops</p>
                </div>
             <div className="nav_bar">
                {data.navItems.map((item) => (
                    <div><a className = "nav_between"  href= "#">{item}</a></div> 
                    
                )) 
                }
                </div>
              <div className="button">
              <button className  = "nav_button">Purchase Now</button>
                 </div>
                 

           </div>

        </div>
        
    )
}
export default Header;