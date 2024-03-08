import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Oct 20 2028</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reiciendis tempora vitae possimus harum blanditiis eligendi ex sint accusantium quasi voluptates expedita odio, aliquam labore doloremque! Repellendus, nesciunt delectus repellat nam aliquid vitae vel obcaecati aut sequi. Sit quisquam, dignissimos in quaerat impedit, eveniet ipsam possimus harum error ipsum placeat?</p>
                    <button className=" btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;