import React, { Component } from "react";
import Action from "../../../action/order-action";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import "./addOrder.scss";
import { getSagaType } from "../../../utils/sagaType";

class AddOrder extends Component {
    handleChange(e) {
        let name = e.target.value;
        let type = Action.CHANGE_ORDER_VALUE;
        this.props.dispatch({
            type,
            payload: {
                name
            }
        })
    }
    handleAdd() {
        let { name } = this.props.order;
        if (!name) {
            return;
        }
        let type = getSagaType(Action.ADD_ORDER);
        this.props.dispatch({
            type,
            param: {
                name
            }
        });
    }
    render() {
        let { name } = this.props.order;
        return (
            <div className="add-box">
                <span className="add-input">
                    <Input value={name}
                        placeholder="add..."
                        onChange={this.handleChange.bind(this)} />
                </span>
                <span className="add-btn">
                    <Button onClick={this.handleAdd.bind(this)} type="primary">add</Button>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    order: state.order
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);