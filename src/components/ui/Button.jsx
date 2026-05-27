function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon = null,
  className = ''
}) {

  return (

    <button
      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`
        ui-button
        ${variant}
        ${size}
        ${fullWidth ? 'full' : ''}
        ${className}
      `}
    >

      {children}

      {icon && icon}

    </button>

  )
}

export default Button