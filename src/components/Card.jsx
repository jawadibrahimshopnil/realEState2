import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Card = () => {
    return (
        <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div>
                    <div className="badge badge-outline mr-1">Apartment</div>
                    <div className="badge badge-outline">Sale</div>
                </div>

                <h2 className="card-title text-green-600">$1,989-$2,000</h2>

                <div>
                    <h2 className="card-title -mt-2">Luxury Beach House</h2>
                    <p>
                        <span className="font-bold">Area:</span> 2000 sqft
                    </p>
                    <p>
                        <span className="font-bold">Location:</span> Downtown,
                        Nework
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Facilities:</h3>
                    <ul className="list-disc">
                        <li className="ml-4">3 Bedroom</li>

                        <li className="ml-4">2 Bathroom</li>
                    </ul>
                </div>
                <div className="card-action">
                    <Link className="btn w-full bg-green-600 text-white">
                        View Property
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Card;
