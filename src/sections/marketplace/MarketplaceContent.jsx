import './Marketplace.scss'

import { useState } from 'react'
import { FiSearch, FiStar, FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

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
  const user = JSON.parse(localStorage.getItem('user')) // مثال: بيانات المستخدم
  const canBuy = user?.isAuthenticated && user?.wallet > 0

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
                    يبدأ من <strong>${service.price}</strong>
                  </div>

                  <button
                    disabled={!canBuy}
                    onClick={e => {
                      e.stopPropagation()
                      if (canBuy) navigate(`/service/${service.id}`)
                    }}
                    title={
                      canBuy
                        ? 'عرض التفاصيل'
                        : 'لا يمكن الطلب إلا بعد تسجيل الدخول وتعبئة الرصيد'
                    }
                  >
                    {canBuy ? 'طلب الآن' : 'تسجيل / شحن الرصيد'}
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