import './Category.css';

import { Container, Row } from 'react-bootstrap';
import Column from './Column/Column';
import category from '../../../json-api/category.json';

const Category = () => {
    const design = (
        <>
            <Container className='category-box'>
                <Row>
                    {
                        category.map((data, index) => {
                            return <Column key={index} data={data} />
                        })
                    }
                </Row>
            </Container>
        </>
    );
    return design;
}

export default Category;