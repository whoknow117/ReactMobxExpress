import React, {useContext} from 'react';
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import classes from './BrandBar.module.scss';

const BrandBar = observer(() => {

    const {device} =  useContext(Context)

       return (
           <div className="d-flex">
               {device.brands.map(brand =>
                   <Card
                       style={{cursor: 'pointer'}}
                       border={brand.id === device.selectedBrand.id ? 'primary' : 'lite'}
                       onClick={() => device.setSelectedBrand(brand)}
                       key={brand.id}
                       className="p-3 ml-1 mr-1"
                   >

                       {brand.name}
                   </Card>
               )}
           </div>
       )

});

export default BrandBar;