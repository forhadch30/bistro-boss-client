import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide1.jpg'
import img3 from '../../../assets/home/slide1.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Recommends = () => {
    return (
        <div>
            <SectionTitle
            heading="CHEF RECOMMENDS "
            subHeading="Should Try"
            >
            </SectionTitle>
            <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 '>
            <div className="card w-[320px] h-[500px] bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img1} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#151515] text-2xl font-bold card-center">Caeser Salad</h2>
                    <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="py-3 px-3 border-0 border-b-4 mt-4 btn-outline rounded-lg bg-gray-200 text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-[320px] h-[500px] bg-base-100 shadow-xl">
                <figure><img  className='w-full'  src={img2} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#151515] text-2xl font-bold card-center">Caeser Salad</h2>
                    <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="py-3 px-3 rounded-lg bg-[#1F2937] text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-[320px] h-[500px] bg-base-100 shadow-xl">
                <figure><img  className='w-full'  src={img3} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#151515] text-2xl font-bold card-center">Caeser Salad</h2>
                    <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="py-3 px-3 btn-outline rounded-lg bg-[#E8E8E8] text-[#BB8506]  border-0 border-b-4 mt-4">add to cart</button>
                    </div>
                </div>
            </div>
            </div>
            </div>  
    );
};

export default Recommends;