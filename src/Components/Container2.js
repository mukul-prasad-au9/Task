import { Button } from "@material-ui/core"

const Container2=()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"80vh"}}>
            <div className=" mt-5 mb-5 container d-flex flex-row">
                <img src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/subscription-graphic.svg" alt="company"/>
                <div className="d-flex flex-column px-5 py-4">
                    <p className="text-primary">No more developer dependency</p>
                    <h3 className="text-weight-bold">Smarter Subscription Management</h3>
                    <p>Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.</p>
                    <div className="d-flex flex-row flex-wrap px-4 mt-5">
                        <li>Price modeling</li>
                        <li>Product Catalog</li>
                        <li>Trial management</li>
                        <li>Lifecycle automation</li>
                    </div>
                    <div className="mt-5">
                        <Button variant="outlined" color="primary">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Container2;