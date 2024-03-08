import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hook/useMenu";

const PopularMenu = () => {

    // const [menu,setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTitle>
            <div className=" grid md:grid-cols-2 gap-8">
                {
                    popular.map((item)=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className=" btn btn-outline mt-4 border-0 border-b-4">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;