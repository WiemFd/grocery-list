const Footer = ({length}) => {
    
    return(
       <footer>
            <p> {length > 1 ? `${length} items` : length === 1 ? "1 item" : "No items!"}</p>
       </footer> 
    )
}

export default Footer