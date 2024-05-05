// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabIdClassName = isActive ? 'active' : 'tab-button'
  const onClickBtn = () => {
    setActiveTabId(tabId)
  }
  return (
    <li className="tab-items">
      <button
        type="button"
        className={activeTabIdClassName}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
