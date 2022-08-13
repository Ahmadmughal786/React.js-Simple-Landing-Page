
 import './Superprops.css'
 import video from '../../assets/trailer_hd.mp4'
 function SuperProps()
{
    return (

       <section className = "sec1">
         <div className = "section_container">
         <i> <span className = "props_intro">Introducing Superprops Landing</span></i>

         <p className = "props_heading">Scalable landing pages with trending designs</p>
         <p className = "light_props_heading">Pick one of our landing templates, or create your custom landing pages form our different landings by using our different components.</p>
        <video className = "video"  controls >
          <source src={video} type ={ "video/mp4"}></source>
        </video>
        </div>
       </section>
    )
}
export default SuperProps; 
