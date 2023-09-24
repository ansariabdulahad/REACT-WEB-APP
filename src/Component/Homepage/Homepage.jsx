import './Homepage.css';

import Meeting from './Meeting/Meeting';
import Category from './Category/Category';
import Benifits from './Benifits/Benifits';
import Business from './Business/Business';
import BusinessModal from './BusinessModal/BusinessModal';
import Testimonials from './Testimonials/Testimonials';

const Homepage = () => {
    const design = (
        <>
            <Meeting />
            <Category />
            <Benifits />
            <Business />
            <BusinessModal />
            <Testimonials />
        </>
    );
    return design;
}

export default Homepage;