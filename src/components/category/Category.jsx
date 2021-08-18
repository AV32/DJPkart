import React from 'react'


import './Category.css'
import SubCat from './SubCat'
const Category = () => {
 

    const fash =[   
        {
            category:"Topwear",
            subcategory1:"T-Shirt",
            subcategory2:"Casual Shirt",
            subcategory3:"Jackets",
        },
        {
            category:"Indian Wear",
            subcategory1:"Kurtas & Suit",
            subcategory2:"Leggings & Salwars ",
            subcategory3:"Sarees",
        },
        {
            category:"Footwear",
            subcategory1:"Flats",
            subcategory2:"Heels ",
            subcategory3:"Boots",
        },
        {
            category:"Infants",
            subcategory1:"Rompers & Onesies",
            subcategory2:"Dresses",
        }
    ]


    const electric =[
        {
            category:"Camera",
            subcategory1:"DSLR",
            subcategory2:"Lens",
            subcategory3:"Drone",
        },
        {
            category:"Desktop",
            subcategory1:"Moniter",
            subcategory2:"Mini Pc's ",
            subcategory3:"Keyboard",
            subcategory4:"Mouse",
        },
        {
            category:"Gaming",
            subcategory1:"Gamepads",
            subcategory2:"Controller",
            subcategory3:"Consoles",
        },
        {
            category:"Accessories",
            subcategory1:"Printer",
            subcategory2:"Projector",
        }
    ]


    const home =[
        {
            category:"Living Room",
            subcategory1:"Recliners",
            subcategory2:"Dinning Sets",
            subcategory3:"Sofa Beds",
        },
        {
            category:"Bedroom",
            subcategory1:"Bedsheet",
            subcategory2:"Wardrobes ",
            subcategory3:"Mattresses",
        },
        {
            category:"Home Decore",
            subcategory1:"Clocks",
            subcategory2:"Wall paints ",
            subcategory3:"Flowers",
        },
        {
            category:"Gardening",
            subcategory1:"Pots",
            subcategory2:"Soil",
        }
    ]

    const beauty =[
        {
            category:"Men's Groming",
            subcategory1:"Fash Washes",
            subcategory2:"Beard-oil",
            subcategory3:"Aftershave",
        },
        {
            category:"Personal Care",
            subcategory1:"Makeup",
            subcategory2:"Lipstick ",
            subcategory3:"Hair Oil",
        },
        {
            category:"Baby Care",
            subcategory1:"Diapers",
            subcategory2:"Skin care ",
        },
        // {
        //     category:"",
        //     subcategory1:"Rompers & Onesies",
        //     subcategory2:"Dresses",
        // }
    ]
    return (
        <div className="categories">
            <div className="category">
               <h2 style={{ "color": "#ee5f73" }}>Fashion</h2>

             {
                   fash.map((item, index) => <SubCat category={item.category}  subcategory1={item.subcategory1} subcategory2={item.subcategory2}
                   subcategory3={item.subcategory3} />)
               } 

            </div>
            <div className="category alter">
                <h2 style={{ "color": "#fb56c1" }}>Electronics</h2>
                {
                   electric.map((item, index) => <SubCat category={item.category}  subcategory1={item.subcategory1} subcategory2={item.subcategory2}
                   subcategory3={item.subcategory3} />)
               } 
             
            </div>


            <div className="category">
                <h2 style={{ "color": "##f26a10" }}>Home and Living</h2>
                {
                   home.map((item, index) => <SubCat category={item.category}  subcategory1={item.subcategory1} subcategory2={item.subcategory2}
                   subcategory3={item.subcategory3} />)
               } 
            </div>

            <div className="category alter">
                <h2 style={{ "color": "#f2c210" }}>Cosmetics</h2>
                {
                    beauty.map((item, index) => <SubCat category={item.category}  subcategory1={item.subcategory1} subcategory2={item.subcategory2}
                   subcategory3={item.subcategory3} />)
               } 
            </div>
        </div>
    )
}

export default Category;
