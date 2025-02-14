const Header = (props) => {
    return (
    <header className="header">
      <p>{props.title}</p>
    </header>
    )
}

Header.defaultProps = {
  title: "Groceries List"
}

export default Header
