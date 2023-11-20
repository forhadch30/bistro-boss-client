import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Fcatured.css'
const Fcatured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 bg-opacity-40 items-center pb-20 py-26 px-36">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse neque, ex sed quo saepe totam dolor praesentium optio voluptatibus modi nihil, nisi iusto rem dolorem officiis a autem voluptas vitae quis? Recusandae doloremque tenetur eum veritatis, dolorem perspiciatis eveniet quam, ea aperiam dolor perferendis totam laboriosam, reprehenderit sequi cupiditate.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order New!</button>
                </div>
            </div>
        </div>
    );
};

export default Fcatured;