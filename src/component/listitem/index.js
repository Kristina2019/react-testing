import React from 'react';
import PropTypes from 'prop-types';
class ListItem extends React.Component{


    render(){
        const {title, description} = this.props;
        if(!title){
            return null;
        }
        return(
            <div data-test = "listitemcomponent">
                <h3 data-test ="title">{title}</h3>
                <p data-test="description">{description}</p>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ListItem;