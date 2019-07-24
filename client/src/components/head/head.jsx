import React, {Component} from "react";
import "./head.scss";

const menuMap = [
    {
        name: "order",
        path: "order"
    },
    {
        name: "knowledge",
        path: "knowledge"
    },
    {
        name: "sensitive",
        path: "sensitive"
    }
];

class Head extends Component {
    handleClick(path) {
        console.log(this.props);
        this.props.history.push(path);
    }

    render() {
        return (
            <ul className="app-header">
                {
                    menuMap.map((item, index) => {
                        let {name, path} = item;
                        return (
                            <li className={"menu-item"} key={index} onClick={this.handleClick.bind(this, path)}>
                                {name}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Head;