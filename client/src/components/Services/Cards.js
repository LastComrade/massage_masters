
function Cards(props){
    return (
        <div className="card border-0 text-center shadow-lg serviceCards rounded-4" >
            <img src="https://image3.jdomni.in/library/E0/BA/94/FB35BE574510E5A7C001573A8E_1496936836803_cropped_450X450.jpeg" className="card-img-top p-2 rounded-5" alt={props.data.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                <div className="text-center">
                    <a href="#" className="btn btn-primary">Enquire Now</a>
                </div>
            </div>
        </div>
    );
}

export default Cards;