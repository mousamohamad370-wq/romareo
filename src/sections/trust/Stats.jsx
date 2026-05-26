import './Trust.scss'

const stats = [
  {
    number: '+15K',
    label: 'طلب مكتمل'
  },

  {
    number: '+8K',
    label: 'عميل نشط'
  },

  {
    number: '99%',
    label: 'رضا العملاء'
  },

  {
    number: '24/7',
    label: 'دعم متواصل'
  }
]

function Stats() {
  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              className="stats-card"
              key={index}
            >

              <h2>
                {item.number}
              </h2>

              <p>
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Stats