// component with props (thumbnailItem)

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imageClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImage = () => {
    updateImageId(id)
  }

  return (
    <>
      <li className="thumbnail-image">
        <button className="image-button" type="button" onClick={onClickImage}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={imageClassName}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
