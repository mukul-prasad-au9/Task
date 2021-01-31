import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
        <div className="d-flex align-items-center flex-column" style={{height:"60vh"}}>
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
                <div className="container px-5 d-flex flex-row justify-content-between">
                    <h1 className="font-italic">Chargebee</h1>
                    <div className="d-flex flex-row align-items-center justify-content-around">
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <YouTubeIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>
                
    </div>
    )
}
export default Footer;