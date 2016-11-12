/**
 * Created by mary on 5/29/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchMyItems } from '../actions';



class MyItems extends Component {

    componentWillMount() {

        this.props.fetchMyItems();

       
    }

    renderItems() {
        const items = this.props.myItems.list;
        return items.map((item) => (

            <div className="item-container" key={item._id}>
                <Link to={"items/" + item._id}>
                    <img className="closetItem" src={item.image}/>
                </Link>
            </div>

            )
        );
    }


    render() {


        return (

            <div className="panel panel-default well well-white-bg col-md-12">
                <div className="panel-heading">
                    <div className="col-sm-6">
                        <h3 class-name="panel-title "><strong>Your App</strong></h3>
                    </div>
                    <div className=" col-sm-6">

                    </div>
                </div>
                <div className="panel-body required-panel">
                    <div className="">
                        <div className="image-container">

                                {this.renderItems()}

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


function mapStateToProps(state) {
    return {myItems: state.myItems};
}

export default connect(mapStateToProps, {fetchMyItems})(MyItems);