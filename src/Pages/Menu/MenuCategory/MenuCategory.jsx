import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const MenuCategory = ({ items , title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
           <Link to={`/order/${title}`}>
           <button className="btn btn-outline border-0 border-b-4 mt-4">Order New!</button>
           </Link>
        </div>
    );
};

export default MenuCategory;