import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Center=()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"80vh"}}>
            <div className="col-12 d-flex flex-column text-center">
                <div>
                    <h1 className="text-primary font-weight-bold">Subscription Billing & Revenue Operations</h1>
                    <h1 className="font-weight-bold">for Fast-growth B2B SaaS</h1>
                    <p>Get the operational sophistication to achieve, sustain,</p>
                    <p>and scale recurring revenue.</p>
                    <div>
                        <Button className="mr-4" variant="contained" size="large" color="primary">
                            Schedule a Demo
                        </Button>
                        <Button variant="outlined" size="large" color="primary">
                            Signup for free
                        </Button>
                    </div>
                </div>
            </div>
        </div>            
    )
}
export default Center;