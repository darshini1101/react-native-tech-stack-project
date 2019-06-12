import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem    from './ListItem';

//Class Component
class LibraryList extends Component {

    //helper function
    renderItem(library) {
        return <ListItem library={library} />;
    }


    render() {
        return (
        
            <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={library => library.id.toString()}
           />

        );
    }
}

//This Function is to take the glbal sate object
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

//It call the function connect and connect helper 
export default connect(mapStateToProps)(LibraryList);