import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import Action from "../../../action/order-action";
import { getSagaType } from "../../../utils/sagaType";
import {Table} from "antd";

const OrderList = (props) => {
    let { data } = props.order;
    let total = Array.isArray(data) && data.length;
    let colnums = {

    }
    return (
        <div className="list-box">
            {
                Array.isArray(data) && data.map((item, index) => {
                    let { name, id } = item;
                    return (
                        <div key={index}>
                            <span className="name">{name}</span>
                            <Icon type="delete" onClick={props.dispatch.bind(this, {
                                type: getSagaType(Action.DELETE_ORDER),
                                param: { id }
                            })} />
                        </div>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    order: state.order
});
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);