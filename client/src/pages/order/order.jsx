import React from 'react';
import './order.scss';
import { connect } from "react-redux";
import Action from "../../action/order-action";
import { getSagaType } from "../../utils/sagaType";
import { dispatch } from "../../store";
import AddOrder from "./addOrder/addOrder";
import OrderList from './orderList/orderList';
class Order extends React.Component {
    componentDidMount() {
        let type = getSagaType(Action.GET_ORDER_LIST);
        dispatch({ type })
    }
    render() {
        return (
            <div className="order-container">
                <h1>hello order!</h1>
                <AddOrder />
                <OrderList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.order
});


export default connect(mapStateToProps, null)(Order);
