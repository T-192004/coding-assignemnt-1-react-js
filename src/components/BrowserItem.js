import './BrowserItem.css'

const BrowserItem = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const ondelete = () => {
    deleteItem(id)
  }
  const deleteIcon = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
      alt="delete"
    />
  )
  return (
    <li className="item-container">
      <div className="item-info">
        <p className="item-time-access">{timeAccessed}</p>
        <img className="item-logo" src={logoUrl} alt="app logo" />
        <p className="item-title">{title}</p>
        <img className="item-domain-url" src={domainUrl} alt="domain url" />
      </div>
      <button data-testid="delete" onClick={ondelete} type="button">
        {deleteIcon}
      </button>
    </li>
  )
}

export default BrowserItem
