import css from './Button.module.css'

function Button({ handleMoreBtnClick }) {
  return (
    <button
      type="submit"
      name="more"
      className={css.Button}
      onClick={handleMoreBtnClick}
    >
      Load more
    </button>
  )
}

export default Button
