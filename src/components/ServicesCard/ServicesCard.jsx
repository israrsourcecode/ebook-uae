import ServicesCardImg from '../../assets/images/servicesCard1.webp'
const ServicesCard = ({heading, para, img, icon}) => {
    return (
        <div className="Servicecard">
            <div className="ServicesCardIcon">
               {icon}
            </div>
            <div className="ServicesCardData">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
            <div className="ServicesCardImg">
                <img className='img-fluid' src={img} alt="" />
            </div>
        </div>
    )
}

export default ServicesCard
