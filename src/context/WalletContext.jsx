import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

/* CONTEXT */

const WalletContext =
  createContext()

/* PROVIDER */

export function WalletProvider({
  children
}) {

  /* WALLET */

  const [balance, setBalance] =
    useState(0)

  /* TRANSACTIONS */

  const [transactions, setTransactions] =
    useState([])

  /* ORDERS */

  const [orders, setOrders] =
    useState([])

  /* LOAD STORAGE */

  useEffect(() => {

    const storedBalance =
      localStorage.getItem(
        'romario-balance'
      )

    const storedTransactions =
      localStorage.getItem(
        'romario-transactions'
      )

    const storedOrders =
      localStorage.getItem(
        'romario-orders'
      )

    if (storedBalance) {

      setBalance(
        JSON.parse(storedBalance)
      )

    }

    if (storedTransactions) {

      setTransactions(
        JSON.parse(storedTransactions)
      )

    }

    if (storedOrders) {

      setOrders(
        JSON.parse(storedOrders)
      )

    }

  }, [])

  /* SAVE BALANCE */

  useEffect(() => {

    localStorage.setItem(
      'romario-balance',
      JSON.stringify(balance)
    )

  }, [balance])

  /* SAVE TRANSACTIONS */

  useEffect(() => {

    localStorage.setItem(
      'romario-transactions',
      JSON.stringify(transactions)
    )

  }, [transactions])

  /* SAVE ORDERS */

  useEffect(() => {

    localStorage.setItem(
      'romario-orders',
      JSON.stringify(orders)
    )

  }, [orders])

  /* ADD BALANCE */

  const addBalance = (
    amount,
    method = 'تحويل يدوي'
  ) => {

    const numericAmount =
      Number(amount)

    setBalance(prev =>
      prev + numericAmount
    )

    const transaction = {

      id: Date.now(),

      type: 'deposit',

      title: 'إضافة رصيد',

      amount: `+$${numericAmount}`,

      status: 'قيد المراجعة',

      method,

      date:
        new Date().toLocaleString(
          'ar-EG'
        )
    }

    setTransactions(prev => [
      transaction,
      ...prev
    ])

  }

  /* PURCHASE SERVICE */

  const purchaseService = (
    service,
    quantity,
    totalPrice
  ) => {

    if (balance < totalPrice) {

      return {
        success: false,
        message:
          'الرصيد غير كافي'
      }

    }

    /* REMOVE BALANCE */

    setBalance(prev =>
      prev - totalPrice
    )

    /* ORDER */

    const order = {

      id: Date.now(),

      serviceId: service.id,

      serviceTitle:
        service.title,

      quantity,

      totalPrice,

      status: 'قيد التنفيذ',

      date:
        new Date().toLocaleString(
          'ar-EG'
        )
    }

    setOrders(prev => [
      order,
      ...prev
    ])

    /* TRANSACTION */

    const transaction = {

      id: Date.now() + 1,

      type: 'purchase',

      title:
        `شراء ${service.title}`,

      amount:
        `-$${totalPrice}`,

      status: 'مكتملة',

      date:
        new Date().toLocaleString(
          'ar-EG'
        )
    }

    setTransactions(prev => [
      transaction,
      ...prev
    ])

    return {
      success: true
    }

  }

  /* VALUES */

  const values = {

    balance,

    transactions,

    orders,

    addBalance,

    purchaseService
  }

  return (

    <WalletContext.Provider
      value={values}
    >

      {children}

    </WalletContext.Provider>

  )
}

/* HOOK */

export function useWallet() {

  return useContext(
    WalletContext
  )
}