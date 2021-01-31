import Button from '@material-ui/core/Button';
const navbar=["Pricing","Solutions","Customers","Resources"]
const Navbar=()=>{
    const renderNavber=()=>{
        if(navbar){
            return navbar.map((val,idx)=>{
                return(
                    <h6 key={idx}>{val}</h6>
                )
            })
        }
    }
    return(
        <div className="d-flex flex-row justify-content-between">
            <div className="col-9 d-flex flex-row">
                <h1 className="font-italic">Chargebee</h1>
                <div className="col-4 d-flex flex-row align-items-center justify-content-around">{renderNavber()}</div>
            </div>
            <div className="col-3 d-flex flex-row align-items-center justify-content-around">
                <h5>Log in</h5>
                <Button variant="contained" color="secondary">
                    Schedule a Demo
                </Button>
            </div>
        </div>
    )
}
export default Navbar;