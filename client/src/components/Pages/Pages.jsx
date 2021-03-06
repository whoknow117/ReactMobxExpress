import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import {Context} from "../../index";

const Pages = observer(() => {


    const {device} = useContext(Context)
    console.log(device.limit)
    const pageCount =  Math.ceil(device.totalCount / device.limit)

    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    console.log(pages)
    return (
        <Pagination className='mt-5'>
            {pages.map(page =>
                <Pagination.Item key={page}
                                 onClick={() => device.setPage(page)}
                >{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;