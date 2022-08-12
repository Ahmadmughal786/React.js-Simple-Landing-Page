// import icon13 from '../../assets/icon13.svg'
// import icon14 from '../../assets/icon14.svg'
// import { Footers } from '../../data'
import './Footer.css'
function Footer({footer})
{
    console.log(footer, "rugbrghbrhjrbg")

    return (
        
       <div className="mainDiv">
        { footer.map((footer , index) => 
        (
            <div className='div1' key = {index}>
          <div><img className = "footer_icon" src = {footer.footer_img} /></div>
          <div className = "inner_div">
              <p className = "text_heading">{footer.footer_heading}</p>
              <p className = "text" >{footer.footer_text}</p>
              <button className = "footer_button">DOCUMENTATION</button>
          </div>
      </div>

        ) ) 

        }

      {/* <div className='div2'>
          <div> <img className = "footer_icon2" src = {icon14} ></img></div>
          <div className = "inner_div">
              <p className = "text_heading1">Support Forum</p>
              <p className = "text1">We offer an online platform to support all the superprops Customer! Browse and ask any kinds of queries there.</p>
              <button className = "footer_button1">VISIT SUPPORT</button>
          </div>
      </div> */}
  </div>
    
          
          
    )
}
export default Footer;