// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from '../../../Hook/UseManu'

const Popularmenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
              subHeading='---Check it out---' 
              heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </section>
    );
};

export default Popularmenu;