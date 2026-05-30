import { useParams, useNavigate } from 'react-router-dom'

import services from '../data/services'

import './CategoryPage.scss'

function CategoryPage() {

  const { slug } = useParams()

  const navigate = useNavigate()

  const filteredServices =
    services.filter(
      service =>
        service.categorySlug === slug
    )

  if (!filteredServices.length) {

    return (

      <section className="category-page section">

        <div className="container">

          <h1>
            لا توجد خدمات
          </h1>

        </div>

      </section>

    )

  }

  return (

    <section className="category-page section">

      <div className="container">

        <div className="category-header">

          <h1>

            {filteredServices[0].category}

          </h1>

          <p>

            اختر الخدمة المناسبة لك

          </p>

        </div>

        <div className="category-grid">

          {filteredServices.map(service => (

            <div
              key={service.id}

              className="category-card"

              onClick={() =>
                navigate(
                  `/service/${service.id}`
                )
              }
            >

              <div className="category-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="category-content">

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.description}

                </p>

                <div className="category-bottom">

                  <span>

                    يبدأ من

                  </span>

                  <strong>

                    $
                    {service.packages?.[0]?.price ||
                      service.price}

                  </strong>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default CategoryPage