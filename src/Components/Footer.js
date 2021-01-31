const Product=[
    "Subscription Management",
   " Recurring Payments",
   " Accounting and Taxes",
    "SaaS Reporting",
    "Enterprise Billing",
    "Integrations"
]

const renderData=()=>{
    if(Product){
        return Product.map((val,idx)=>{
            return(
                <a to="" key={idx}>{val}</a>
            )
        })
    }
}
const Footer=()=>{
    return(
        <div className="d-flex align-items-center" style={{height:"60vh"}}>
        <div className="container px-5 py-4 mt-5 d-flex flex-row justify-content-around">
            <div className="d-flex flex-column">
                <h4>Product</h4>
                {renderData()}
            </div>
            <div className="d-flex flex-column">
                <h4>Help & support</h4>
                {renderData()}
            </div>
            <div className="d-flex flex-column">
                <h4>Resources</h4>
                {renderData()}
            </div>
            <div className="d-flex flex-column">
                <h4>Company</h4>
                {renderData()}
            </div>
        </div>
    </div>
    )
}
export default Footer;