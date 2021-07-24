import css from './ImageGalleryItem.module.css'

function ImageGalleryItem({ webformatURL, tags, onImgClick }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={onImgClick}
      />
    </li>
  )
}

export default ImageGalleryItem
