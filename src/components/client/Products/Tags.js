import React from 'react';
import {map} from 'lodash';
import { useSelector } from 'react-redux';

export default function Tags(props) {
    const { title } = props;
    const productsList = useSelector((state) => state.articlesList.articles);
    const { tags } = productsList;

    return (
        <div>
            <div className="section-title">
                <h2>{title}</h2>
            </div>
            <div className="featured__controls">
                <ul>
                    <li className="active" data-filter="*">Todo</li>
                    {map(tags, (tag, index) => (
                        <li data-filter={tag.slug} key={index}>{tag.tagName}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
