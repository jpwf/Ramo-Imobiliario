import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';

export default function PaginationLink() {
    let { page } = parseInt(useParams());

    const handleChange = (event, value) => {
        history.push(`/busca/${value}`);
    }

    return (
        <Pagination
            className='mb-16'
            color='primary'
            size='large'
            shape='rounded'
            defaultPage={1}
            page={page}
            count={4}
            onChange={handleChange}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/busca${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    );
}