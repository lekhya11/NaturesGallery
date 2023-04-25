import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onImageClicked, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickedImage = () => {
    onImageClicked(id)
  }

  const active = isActive ? 'image image-selected' : 'image'

  return (
    <li>
      <button type="button" onClick={onClickedImage} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className={active} />
      </button>
    </li>
  )
}

export default ThumbnailItem
