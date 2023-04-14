import React from 'react'

const Menu = ({isDarkMode}) => {
    
    const textColor = isDarkMode ? 'white' : 'black'
        
  return (
    <div id='menu' style={{color: textColor}}>
        <h2>MENU</h2>
        <div className='menu-items'>
        <div className='barbecue category'>
            <h3>BARBECUE</h3>
            <div className='item'>
                <h4>Sandwich</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>1/2 LB</h4>
                <p>7.50</p>
            </div>
            <div className='item'>
                <h4>1 LB</h4>
                <p>15</p>
            </div>
            <div className='item'>
                <h4>BBQ Plate</h4>
                <p>9.50</p>
            </div>
        </div>
        <div className='stew category'>
            <h3>STEW</h3>
            <div className='item'>
                <h4>1/2 PT</h4>
                <p>3.50</p>
                <h5>w/meat</h5>
                <p>5.50</p>
            </div>
            <div className='item'>
                <h4>Pint</h4>
                <p>6.50</p>
                <h5>w/meat</h5>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Quart</h4>
                <p>12</p>
                <h5>w/meat</h5>
                <p>14.50</p>
            </div>
        
        
        </div>
        <div className='sandwiches category'>
            <h3>Burgers & Other Sandwiches</h3>
            <div className='item'>
                <h4>Hamburger</h4>
                <p>4</p>
            </div>
            <div className='item'>
                <h4>Double Hamburger</h4>
                <p>6.25</p>
            </div>
            <div className='item'>
                <h4>Cheeseburger</h4>
                <p>4.25</p>
            </div>
            <div className='item'>
                <h4>Double Cheeseburger</h4>
                <p>6.50</p>
            </div>
            <div className='item'>
                <h4>Grill Cheese</h4>
                <p>2.50</p>
            </div>
            <div className='item'>
                <h4>Steak Sandwich</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>Fish</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>BLT</h4>
                <p>3.75</p>
            </div>
            <div className='item'>
                <h4>Chick-Fil-A</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>Grill Chicken</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>Pork Chop Sandwich</h4>
                <p>5.50</p>
            </div>
        </div>
        <div className='dogs category'>
            <h3>Dogs</h3>
            <div className='item'>
                <h4>Hot Dog</h4>
                <p>2.25</p>
            </div>
            <div className='item'>
                <h4>Chili Dog</h4>
                <p>2.75</p>
            </div>
            <div className='item'>
                <h4>Slaw Dog</h4>
                <p>2.75</p>
            </div>
            <div className='item'>
                <h4>Chili / Cheese</h4>
                <p>3.05</p>
            </div>
            <div className='item'>
                <h4>Chili / Cheese</h4>
                <p>3.05</p>
            </div>
            <div className='item'>
                <h4>Chili / Cheese / Slaw</h4>
                <p>3.75</p>
            </div>
            <div className='item'>
                <h4>Chili / Slaw</h4>
                <p>3.50</p>
            </div>
        </div>
        <div className='dinner category'>
            <h3>Dinner - Include Cole Slaw and French Fries</h3>
            <div className='item'>
                <h4>Hamburger Steak</h4>
                <p>9.50</p>
            </div>
            <div className='item'>
                <h4>Regular Hamburger Plate</h4>
                <p>7.25</p>
            </div>
            <div className='item'>
                <h4>Regular Cheeseburger Plate</h4>
                <p>7.50</p>
            </div>
            <div className='item'>
                <h4>Chicken Strip Plate</h4>
                <p>7.75</p>
            </div>
            <div className='item'>
                <h4>Shrimp Plate</h4>
                <p>8</p>
            </div>
            <div className='item'>
                <h4>Catfish Plate</h4>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Whiting Plate</h4>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Pork Chop Plate</h4>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Chicken Philly Combo</h4>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Cheeseburger Philly</h4>
                <p>8</p>
            </div>
            <div className='item'>
                <h4>BBQ Sandwich Plate</h4>
                <p>8.50</p>
            </div>
            <div className='item'>
                <h4>Hot Wing Plate</h4>
                <p>8.25</p>
            </div>
        </div>
        <div className='sides category'>
            <h3>Side Items</h3>
            <div className='item'>
                <h4>French Fries</h4>
                <p>2.25</p>
            </div>
            <div className='item'>
                <h4>Onion Rings</h4>
                <p>2.25</p>
            </div>
            <div className='item'>
                <h4>Okra</h4>
                <p>2.25</p>
            </div>
            <div className='item'>
                <h4>Slaw</h4>
                <p>1.75</p>
            </div>
            <div className='item'>
                <h4>Chili / Cheese Fries</h4>
                <p>4.75</p>
            </div>
            <div className='item'>
                <h4>Cheese Fries</h4>
                <p>2.50</p>
            </div>
        </div>
        <div className='drinks category'>
            <h3>Drinks</h3>
                <h4>Coke, Sprite, Diet Coke & Tea</h4>
            <div className='item'>
                <h4>Med</h4>
                <p>1</p>
            </div>
            <div className='item'>
                <h4>LG</h4>
                <p>1.75</p>
            </div>
            <div className='item'>
                <h4>X-LG</h4>
                <p>2.50</p>
            </div>
        </div>
        <div className='lemonade category'>
            <h3>Lemonade</h3>
            <div className='item'>
                <h4>Med</h4>
                <p>2.50</p>
            </div>
            <div className='item'>
                <h4>LG</h4>
                <p>2.75</p>
            </div>
            <div className='item'>
                <h4>X-LG</h4>
                <p>4.25</p>
            </div>
        </div>
        <div className='additional category'>
            <h3>Additional Items</h3>
            <div className='item'>
                <h4>Grill Chicken Salad</h4>
                <p>7.50</p>
            </div>
            <div className='item'>
                <h4>Chicken Strip Salad</h4>
                <p>7.50</p>
            </div>
            <div className='item'>
                <h4>Slaw 1/2 PT</h4>
                <p>3.50</p>
            </div>
            <div className='item'>
                <h4>Slaw Pint</h4>
                <p>6.50</p>
            </div>
            <div className='item'>
                <h4>Slaw Quart</h4>
                <p>12</p>
            </div>
        </div>
        <div className='sauce category'>
            <h3>BBQ Sauce</h3>
            <div className='item'>
                <h4>1/2 PT</h4>
                <p>3.50</p>
            </div>
            <div className='item'>
                <h4>Pint</h4>
                <p>2.75</p>
            </div>
            <div className='item'>
                <h4>Quart</h4>
                <p>12</p>
            </div>
            <div className='item'>
                <h4>Lettuce & Tomatoes</h4>
                <p>.60</p>
            </div>
            <div className='item'>
                <h4>Bacon</h4>
                <p>.60</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Menu