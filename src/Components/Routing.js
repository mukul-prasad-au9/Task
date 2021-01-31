import Navbar from "../Components/Navbar";
import Center from "./Center";
import Container from "./Container";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Downbar from "./Downbar";
import Footer from "./Footer";
const Routing =()=>{
    return(
        <div>
            <Navbar/>
            <Center/>
            <Container/>
            <Container2/>
            <Container3/>
            <div style={{backgroundColor:"blueviolet"}}>
                <Container4/>
                <Container5/>
            </div>
            <Footer/>
            <Downbar/>
        </div>
    )
}
export default Routing;