import './Marketplace.scss'

import { useState } from 'react'
import { FiSearch, FiStar, FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

/* DATA */
import services from '../../data/services'

const filters = [
  'الكل',
  'الألعاب',
  'اشتراكات',
  'بطاقات',
  'سوشال',
  'أرقام'
]

function MarketplaceContent() {
  
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()

const canBuy = isAuthenticated
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('الكل')
  const [sort, setSort] = useState('popular')

  /* FILTER */
  let filteredServices = services.filter(service => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesFilter =
      activeFilter === 'الكل' ? true : service.category === activeFilter
    return matchesSearch && matchesFilter
  })

  /* SORT */
  if (sort === 'price') {
    filteredServices.sort((a, b) => a.price - b.price)
  } else if (sort === 'rating') {
    filteredServices.sort((a, b) => b.rating - a.rating)
  } else if (sort === 'popular') {
    filteredServices.sort((a, b) => b.popular - a.popular)
  }

  /* CHECK IF USER CAN BUY */
 
console.log(user)
  return (
    <section className="marketplace-page section">
      <div className="container">
        {/* HEADER */}
        <div className="marketplace-header">
          <div>
            <h1>جميع الخدمات الرقمية</h1>
            <p>اكتشف جميع الخدمات الرقمية المتوفرة داخل المنصة</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="marketplace-search">
          <FiSearch />
          <input
            type="text"
            placeholder="ابحث عن خدمة..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <div className="marketplace-filters">
          <div className="filters-left">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* SORT */}
          <div className="filters-sort">
            <FiSearch />
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="popular">الأكثر طلبًا</option>
              <option value="price">الأرخص</option>
              <option value="rating">الأعلى تقييمًا</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="marketplace-grid">
          {filteredServices.map(service => (
            <div
              className="marketplace-card"
              key={service.id}
              style={{ cursor: 'pointer' }}
            >
              {/* IMAGE */}
              <div className="card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                {service.popular && <div className="card-badge">الأكثر طلبًا</div>}
              </div>

              {/* CONTENT */}
              <div className="card-content">
                <div className="card-top">
                  <span>{service.category}</span>
                  <div>
                    <FiStar />
                    {service.rating}
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="card-bottom">
                  <div className="price">
                   <strong>
  $
  {service.packages?.[0]?.price ||
    service.price}
</strong>
                  </div>

               <button
  onClick={e => {
    e.stopPropagation()

    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    navigate(`/service/${service.id}`)
  }}
>
{isAuthenticated ? 'طلب الآن' : 'تسجيل الدخول'}
                    <FiArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {filteredServices.length === 0 && (
          <div className="empty-state">
            <h3>لا توجد نتائج</h3>
            <p>حاول البحث بكلمات مختلفة</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default MarketplaceContent