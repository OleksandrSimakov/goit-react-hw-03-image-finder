import css from './Modal.module.css'
// import * as basicLightbox from 'basiclightbox'

function Modal({ largeImageURL, tags }) {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  )
}

export default Modal
