function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  icon = null,
  required = false,
  readOnly = false,
  disabled = false,
  className = ''
}) {

  return (

    <div
      className={`ui-input-group ${className}`}
    >

      {label && (

        <label>
          {label}
        </label>

      )}

      <div className="ui-input-box">

        {icon && icon}

        <input
          type={type}

          name={name}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          required={required}

          readOnly={readOnly}

          disabled={disabled}
        />

      </div>

    </div>

  )
}

export default Input