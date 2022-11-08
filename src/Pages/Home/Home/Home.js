import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DiscoverSection></DiscoverSection>
            <Discount></Discount>
            <Services></Services>
        </div>
    );
};

export default Home;