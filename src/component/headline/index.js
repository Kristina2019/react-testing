import React from 'react';

import './styles.scss';
class Headline extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {header, desc} = this.props;
        if(!header){
            return null;
        }
        return(
            <div className = "headline" data-test = "HeadlineComponent">
                <h1 data-test = "header">{header}</h1>
                <p data-test = "desc">
                    {desc}
                </p>
            </div>
        );
    }
}
export default Headline;