import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
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