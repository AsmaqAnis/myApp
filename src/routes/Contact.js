import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <TextFile>
        Hello
      </TextFile>
      <TextFile2 heading="CONTACT." text="Lets have a chat"  
      click={click} setClick={setClick} />
      <Footer />
    </div>
  )
}

export default Contact

//global component that cannot be export
//function with '()' does not have return
const TextFile = ({children}) => (
  <div style={{backgroundColor:'blue'}}>
    {children}
  </div>
)

//function with '{}' have return
const TextFile2 = (props) => {
  console.log(props)
  //local component
  const TextFile3 = (props2) => {
    console.log(props2)
    return(
      <p>{props2.heading}</p>
    )
  }
  return(
  <div style={{backgroundColor:'green'}}>
    {/* property inheritance from TextFile2 to TextFile3 
        {...props} <- to inherit property with same name*/}
    <TextFile3 heading3={props.heading}  {...props}/>
    {/* inherit useEffect in both component TextFile2 & TextFile3 */}
    <button onClick={() => props.setClick(props.click+1)}>
      Click Me
    </button>
  </div>
  )
}
