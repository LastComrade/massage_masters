const introBG = require('../images/intro.jpg');
function Benefits(props){
    return (
        <>
            <section className="ftco-section ftco-intro" style={{ backgroundImage: `url(${introBG})`}}>
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-md-6">
						<div className="heading-section ftco-animate">
	                        <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
	                    </div>
	                    <p className="">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <ul className="mt-5 do-list">
                            <li className=""><a href="#"><span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp; Massage boosts brain power</a></li>
                            <li className=""><a href="#"><span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp; Massage helps you to breathe better</a></li>
                            <li className=""><a href="#"><span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp; Massage improves your strength</a></li>
                            <li className=""><a href="#"><span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp; Massage helps you to focus</a></li>
                            <li className=""><a href="#"><span className="ion-ios-checkmark-circle mr-3"></span>Spa &amp; Massage helps give meaning to your day</a></li>
                        </ul>
					</div>
				</div>
			</div>
		</section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="./js/jquery.min.js"></script>
    <script src="./js/jquery-migrate-3.0.1.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/jquery.easing.1.3.js"></script>
    <script src="./js/jquery.waypoints.min.js"></script>
    <script src="./js/jquery.stellar.min.js"></script>
    <script src="./js/owl.carousel.min.js"></script>
    <script src="./js/jquery.magnific-popup.min.js"></script>
    <script src="./js/aos.js"></script>
    <script src="./js/jquery.animateNumber.min.js"></script>
    <script src="./js/bootstrap-datepicker.js"></script>
    <script src="./js/jquery.timepicker.min.js"></script>
    <script src="./js/scrollax.min.js"></script>
    {/* <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script> --> */}
    <script src="./js/google-map.js"></script>
    <script src="./js/main.js"></script>
        </>
    );
}

export default Benefits;