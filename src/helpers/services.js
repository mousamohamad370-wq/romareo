import services
from '../data/services'

/* GET ALL SERVICES */

export const getServices = () => {

  return services

}

/* GET SERVICE BY ID */

export const getServiceById = (id) => {

  return services.find(
    service =>
      service.id === Number(id)
  )

}

/* GET SERVICE BY SLUG */

export const getServiceBySlug = (
  slug
) => {

  return services.find(
    service =>
      service.slug === slug
  )

}

/* GET POPULAR SERVICES */

export const getPopularServices = () => {

  return services.filter(
    service => service.popular
  )

}

/* GET SERVICES BY CATEGORY */

export const getServicesByCategory = (
  category
) => {

  if (category === 'الكل') {

    return services

  }

  return services.filter(
    service =>
      service.category === category
  )

}