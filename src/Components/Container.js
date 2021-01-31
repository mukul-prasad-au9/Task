import { Button } from "@material-ui/core"

const Container=()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"80vh"}}>
            <div className=" mt-5 mb-5 container d-flex flex-row">
                <div className="d-flex flex-column px-5 py-4">
                    <p className="text-primary">No more spreadsheet errors</p>
                    <h3 className="text-weight-bold">Automate Recurring Billing</h3>
                    <p>Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                    <div className="d-flex flex-row flex-wrap px-2 mt-5">
                        <li>Billing Schedules</li>
                        <li>Proration & Invoicing</li>
                        <li>Tax management</li>
                        <li>Payment Methods</li>
                    </div>
                    <div className="mt-5">
                        <Button variant="outlined" color="primary">
                            Learn More
                        </Button>
                    </div>
                </div>
                <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg" alt="company"/>
            </div>
        </div>
    )
}
export default Container;