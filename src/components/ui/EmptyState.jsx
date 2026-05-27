import {
  FiInbox
} from 'react-icons/fi'

function EmptyState({
  icon = <FiInbox />,
  title = 'لا توجد بيانات',
  description = 'لا يوجد محتوى متاح حاليًا',
  action = null,
  className = ''
}) {

  return (

    <div
      className={`ui-empty-state ${className}`}
    >

      <div className="empty-icon">

        {icon}

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      {action && (

        <div className="empty-action">

          {action}

        </div>

      )}

    </div>

  )
}

export default EmptyState