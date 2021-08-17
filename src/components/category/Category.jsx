import React from 'react'
import './Category.css'
const Category = () => {
    return (
        <div className="categories">
            <div className="category">
               <h2>Fashion</h2>
               <ui>
                   <li><h3>Category 1</h3></li>
                   <li><h3>Category 2</h3></li>
                   <li><h3>Category 3</h3></li>
                   <li><h3>Category 4</h3></li>
                   <li><h3>Category 5</h3></li>
                   <li><h3>Category 6</h3></li>
               </ui>
            </div>
            <div className="category alter">
                <h2>Electronics</h2>
                <ui>
                    <li><h3>Category 1</h3></li>
                    <li><h3>Category 2</h3></li>
                    <li><h3>Category 3</h3></li>
                    <li><h3>Category 4</h3></li>
                </ui>
            </div>
            <div className="category">
                <h2>Home and Living</h2>
                <ui>
                    <li><h3>Category 1</h3></li>
                    <li><h3>Category 2</h3></li>
                    <li><h3>Category 3</h3></li>
                    <li><h3>Category 4</h3></li>
                    <li><h3>Category 5</h3></li>
                </ui>
            </div>
            <div className="category alter">
                <h2>Cosmetics</h2>
                <ui>
                    <li><h3>Category 1</h3></li>
                    <li><h3>Category 2</h3></li>
                    <li><h3>Category 3</h3></li>
                    <li><h3>Category 4</h3></li>
                    <li><h3>Category 5</h3></li>
                    <li><h3>Category 6</h3></li>
                </ui>
            </div>
        </div>
    )
}

export default Category
