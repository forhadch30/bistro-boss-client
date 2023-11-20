import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/shop/order.jpg.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../Hook/UseManu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup',  'dessert', 'drinks']
    const {category} = useParams()
    const initilIndex = categories.indexOf(category)
    const [index, setIndex] = useState(initilIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className='text-center'>
            <Helmet>
                <title>Bistro | Boss Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={"Order Food"}></Cover>
            <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;