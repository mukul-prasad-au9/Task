import { Button } from "@material-ui/core"
const Container6=()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"80vh"}}>
            <div className="d-flex flex-column container">
            <div className="d-flex flex-row justify-content-around">
                <div className="d-flex flex-column">
                    <h2>Talk to us today about</h2>
                    <h2>your revenue workflow</h2>
                </div>
                <div className="d-flex align-items-center"><Button variant="contained" size="large" color="primary">Schedule a Demo</Button></div>
            </div>
            <div className="mt-5">
                <h1 className="text-center">Great Products Deserve Hyper Growth.</h1>
                <h1 className="text-center">Chargebee Makes it Easy.</h1>
            </div>
        </div>
    </div>
    )
}
export default Container6;