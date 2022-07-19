// component with props (thumbnailItem)

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrl, thumbnailAltText} = props

  return (
    <>
      <li className="thumbnail-image">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </li>
    </>
  )
}

export default ThumbnailItem
