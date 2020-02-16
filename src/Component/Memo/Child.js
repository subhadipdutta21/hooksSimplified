import React from 'react';

const Child = (props) => {
    return ( 
        <div>
            {console.log('child rendered')}
            <div>Score is {props.score}</div>
        </div>
     );
}
 
export default React.memo(Child);