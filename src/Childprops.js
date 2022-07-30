import React from 'react';

// const Childprops = (props) => {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//         </div>
//     );
// }

class Childprops extends React.Component{
    constructor(){
        super()
        this.state={data:"Anil" }
    }
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default Childprops;
