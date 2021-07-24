import css from './ImageGallery.module.css'

function ImageGallery({ children }) {
  return <ul className={css.ImageGallery}>{children}</ul>
}

export default ImageGallery
