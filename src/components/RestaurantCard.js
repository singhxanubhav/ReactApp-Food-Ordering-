import { CDN_URL } from "../utils/constants";

// ** RestaurantCard component **
const RestaurantCard = (props) => {
    // object destructuring
    const {resData} = props;

    // object destructuring + optional chaining
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;
    
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
            <img
                className="w-[250px] h-[150px] rounded-lg"
                src= {CDN_URL + resData.info.cloudinaryImageId}  
                alt="res-logo" 
            />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    ); 
};


// High order component
// input RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )

    } 
}

export default RestaurantCard;