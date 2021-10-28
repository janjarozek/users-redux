import React, { Component } from 'react'
import '../TextList/TextList.scss'

export default class TextList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const { list } = this.props;
        return (
            <ul className="b-list">
            {list.map((item, index) => (
                <li className="b-list__item" key={`list-item-${index}`}>
                    {
                        <>
                            <b>{item.slice(0, item.search(" - "))}</b>
                            {item.slice(item.search(" - "))}
                        </>
                    }
                </li>
            ))}
            </ul>
        )
    }
}
