const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div>
                    <div className="badge badge-outline mr-1">Apartment</div>
                    <div className="badge bg-green-300">Sale</div>
                </div>

                <h2 className="card-title text-green-600">$1,989-$2,000</h2>
                <h2 className="card-title -mt-2">Luxury Beach House</h2>
                <p className="flex gap-1">
                    <span>
                        <span className="font-bold">3</span> Bedroom
                    </span>
                    <span>
                        <span className="font-bold">2</span> Bathroom
                    </span>
                </p>
                <p>
                    <span className="font-bold">Location:</span> Downtown, Nework
                </p>
                <div className="card-action justify-center">
                    <button className="btn w-full bg-green-600 text-white">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Card;
