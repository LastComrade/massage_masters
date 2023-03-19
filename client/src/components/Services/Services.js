import Cards from './Cards'

function Services(){
    const servicesData = [
        {
            id: 1,
            title: "Aroma Body Massage Services",
            description: "Aroma Body Massage Services is good for mind and body, reduces stress and body ache of your loved one." 
        },
        {
            id: 2,
            title: "Ayurvedic Body Massage Centres For Men",
            description: "We also offer ayurvedic massage treatment for men who demand it for relieving stress or cure any illness."
        },
        {
            id: 3,
            title: "Body Massage Centres",
            description: "Rejuvinate your body through the wide range of massages provided by our staff in our body massage centres."
        },
        {
            id: 4,
            title: "Deep Tissue Massage Service For Men",
            description: "Now men can give their body the ultimate relaxation through deep tissue massage performed by our expert staff."
        },
        {
            id: 5,
            title: "Foot Massage Centres",
            description: "Enjoy the experience of Foot Massage at our centre provided by some of our professional experts."
        },
        {
            id: 6,
            title: "Four Hand Massage Services",
            description: "We provide the most relaxing and excellent four hand massage for our prestigious clients. Contact now!"
        },
        {
            id: 7,
            title: "Massage Centres For Women",
            description: "Are you tired with your routine & finding peace? Book your appointment with us & find harmony within you."
        },
        {
            id: 8,
            title: "Massage Services For Men At Home",
            description: "Our range of salons provides the special service of giving massages for men at home at affordable prices."
        },
        {
            id: 9,
            title: "Skin Services",
            description: "A bespoke selection of products, aroma therapeutic oils & techniques to meet your skincare requirements."
        },
        {
            id: 10,
            title: "Massage Services",
            description: "A massage of your choice to give you a world class spa experience with comfort & personalised attention."
        },
    ]

    return (
        <>
            <div className="container-fluid px-5 py-5">
                <h3 className="display-4 text-center mb-4">Services</h3>
                <div className="row d-flex justify-content-center">
                    {
                        servicesData.map((service) => {
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-2 mx-lg-2 my-3">
                                    <Cards data={service}></Cards>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            
        </>
    );
}

export default Services;