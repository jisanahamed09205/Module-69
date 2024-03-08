
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import useAxiosSecure from "../../Hook/useAxiosSecure"
import useCart from '../../Hook/useCart';

const FoodCard = ({item}) => {

    const {name,image,price,recipe, _id} = item;

    const {user} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure()

    const [,refetch] = useCart();

    const handleAddToCart = () =>{
        // console.log(food,user.email);
        if(user && user.email){
            //TODO: send cart item to the database
            // console.log(user.email,food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch the cart to update the cart item count
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Login",
                text: "Please Login to add cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to the login page
                  navigate('/login',{state: {from:location}})
                }
              });
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button onClick={handleAddToCart} className="btn btn-outline mt-4 border-0 bg-slate-200 border-orange-400 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;