const Footer = ({length, searchItem, count, totalPrice}) => {
    
    return(
       <footer>
            {!searchItem && <div className="footerPrice">{`Total price = ${totalPrice} DTN`}</div>}
            <p>{searchItem ? count ===1 ? '1 item found':`${count} items found` :  
            length > 1 ? `${length} items in Grocery List` : length === 1 ? "1 item in Grocery List" : "No items in Grocery List!"}
            </p>
       </footer> 
    )
}

export default Footer