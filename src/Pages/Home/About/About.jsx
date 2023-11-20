import img from '../../../assets/home/amy-shamblen-h5yMpgOI5nI-unsplash.jpg'
import img1 from '../../../assets/home/jacopo-maia--gOUx23DNks-unsplash.jpg'
const About = () => {
    return (
        <div className='mb-10'>
           <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            </div>
            <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                    <img alt="daisy" src={img} />
                </div>
                <div className="diff-item-2">
                    <img alt="daisy" src={img1} />
                </div>
                <div className="diff-resizer"></div>
            </div>
        </div>
    );
};

export default About;