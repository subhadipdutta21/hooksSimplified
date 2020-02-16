import React from 'react';
import Child from './Child';
import { render } from '@testing-library/react';


class Parent extends React.Component {

    state = {
        score: 0
    }

    componentDidMount() {
        setInterval(() => {
            console.log('parent : score updated')
            this.setState({ score: 3 })
        }, 3000)
    }

    // const [score,setScore] = React.useState(0)

    // React.useEffect(()=>{
    //     setInterval(()=>{
    //         console.log('parent : score updated')
    //         setScore(3)
    //     },3000)
    // },[score])
    render() {
        return (
            <>
                <div>Hi there , its parent</div>
                <Child score={this.state.score} />
            </>
        );
    }

}

export default Parent;