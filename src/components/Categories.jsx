import React from 'react';
import '../assets/components/Categories.scss';

//{childre} no se llama directamente de los props, si no que se asgina la varaible de props.children
export default function Categories({title, children}){
    return (
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    )
}