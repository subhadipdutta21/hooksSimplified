import React from 'react';
// import Child from './Child';   -----------Normal import---------
const ChildComp = React.lazy(()=>import ('./Child'))  /**--------------Lazy import------------- */

const Parent = () => {
    return ( 
        <React.Suspense fallback={<div>...loading</div>}>
        <>
            <p>Hi there , I'm about to load some data below --</p>
            <hr/>
            <ChildComp />
        </>
        </React.Suspense>
     );
}
 
export default Parent;  