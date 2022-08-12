import './Item.css'
// import icon1 from '../../assets/icon1.svg'
// import icon2 from '../../assets/icon2.svg'
// import icon3 from '../../assets/icon3.svg'
// import icon4 from '../../assets/icon4.svg'

function Items ({item})
{
  console.log(item[0]);
    return (
       <section className="section"> 
         <div className = "item_container">
           <div className = "item_response">
           <h1 className = "item_heading"> More than <span className = "span_text">3,800+ </span>customers loved our Superprops template.</h1>
            <p className = "item_heading2">With due respect to envato, we <span className = "span_seperated">separated</span> the Next JS & Gatbsy JS</p>
           </div>

            <div className  = "img_items">
              {
                item?.map((item,index)=>
                (
                 <div key = {index}>
                  <img className = "item_img" src = {item.item_image} alt = {"----"}/>
                  <p className = "img_heading">{item.item_heading}</p>
                  <p className = "img_below_text">{item.item_text}</p>
                 </div>
                ) )
              }
                 
              </div>
                  

                {/* <div>
                <img className = "item_img1" src = {icon2} alt = {"----"}/>
                  <p className = "img_heading_1">Highest react landing</p>
                  <p className = "img_below_text_1" >WIth almost 3700+ sales, superprops is the pioneer of react landing in themeforest</p>
                </div> */}
                  
               {/*} <div>
                <img className = "item_img2" src = {icon3} alt = {"----"}/>
                <p className = "img_heading_2">Easy to deploy</p>
                <p className = "img_below_text_2">It's super easy to deploy, we have provided guide for vercel & firebase integration with it.</p>
                </div>
                <div>
                <img className = "item_img3" src = {icon4} alt = {"----"}/>
                  <p className = "img_heading_3">Fast Customer Support</p>
                  <p className = "img_below_text_3">As an elite author, quick response with customer satisfaction is our main goal</p>
                </div> */}

            </div>
      
       </section>

    )
  //   {data.navItems.map((item)=>{
  //     return (

  //         <div><a className = "nav_between"  href= "#">Demos</a></div>
  //         )
  // })}
}
export default Items;