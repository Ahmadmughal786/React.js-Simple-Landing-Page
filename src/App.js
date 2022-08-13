import './App.css';
import './index.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Items from './Components/Items/Items'
import SuperProps from './Components/SuperProps/SuperProps';
import Footer from './Components/Footer/Footer';
import {Cards, Data , Footers} from './data';
console.log(Data[0])

function App() {
  return (
    <div className="App">
<Header data={Data[0]}/>
      {/* <Header 
      className  = "Uper_section"
      logo_heading  = {Data[0].logoHeading}
      nav_item = {Data[0].navItems[0]}
      nav_item1 = {Data[0].navItems[1]}
      nav_item2  = {Data[0].navItems[2]}
      nav_item3 = {Data[0].navItems[3]}
      navBtn = {Data[0].navBtn}
       /> */}

      <Main
      // main_heading = {Data[1].main_heading}
      // main_text = {Data[1].main_text}
       />

      <Items  
      item = {Cards}

      // item_image = {Data[2].cards.item_image}
      // item_heading = {Data[2].cards.item_image} 
      // item_text = {Data[2].cards.item_text}
       />
      <SuperProps 
      // super_text = {Data[3].super_text}
      // super_heading = {Data[3].super_heading}
      // light_text = {Data[3].light_text}

      />
      <Footer 
      footer = {Footers}

      // ft_img = {Data[4].footer_cards[0].footer_img}
      // ft_heading = {Data[4].footer_cards[0].footer_img}
      // ft_text =  {Data[4].footer_cards[0].footer_text}

      />
  {/* <Footer 

       ft_img = {Data[4].footer_cards[1].footer_img}
       ft_heading = {Data[4].footer_cards[1].footer_img}
       ft_text =  {Data[4].footer_cards[1].footer_text}

/> */}


    </div>
  );
}

export default App;
