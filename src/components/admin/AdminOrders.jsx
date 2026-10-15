

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDeliveryStatus } from '../../features/orders/orderSlice'

const deliveryStatuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled']

const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
}).format(amount)

const formatOrderDate = (date) => {
    const parsedDate = new Date(date)
    return Number.isNaN(parsedDate.getTime())
        ? '—'
        : parsedDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
}

const AdminOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders.value)
    const users = useSelector((state) => state.users.value)
    const [searchTerm, setSearchTerm] = useState('')
    const [paymentStatusFilter, setPaymentStatusFilter] = useState('')
    const [deliveryStatusFilter, setDeliveryStatusFilter] = useState('')

    const filteredOrders = orders.filter((order) => {
        const customer = users.find((user) => user.id === order.customerId)

        const customerName = customer
            ? `${customer.firstName} ${customer.lastName}`
            : order.customerId

        const searchValue = searchTerm.trim().toLowerCase()
        const matchesSearch = [
            order.id,
            order.customerId,
            customerName,
            customer?.email,
        ].some((value) => value?.toLowerCase().includes(searchValue))
        
        const matchesPaymentStatus = !paymentStatusFilter
            || order.paymentStatus === paymentStatusFilter
        const matchesDeliveryStatus = !deliveryStatusFilter
            || order.deliveryStatus === deliveryStatusFilter

        return matchesSearch && matchesPaymentStatus && matchesDeliveryStatus
    })

    return (
        <>
            <header className="flex flex-col sm:flex-row sm:items-center
                   justify-between gap-4 mb-6">

                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Orders
                    </h1>
                    <p className="text-sm text-blue-500 mt-1">
                        View and manage customer orders. Update status, track
                        deliveries, and handle orders efficiently.
                    </p>
                </div>

            </header>

            <section className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-12 gap-3 mb-5">

                    <div className="relative lg:col-span-6">
                        <i data-lucide="search"
                            className="absolute left-3 top-1/2 -translate-y-1/2
                          w-4 h-4 text-blue-400"></i>

                        <input id="search"
                            type="search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            aria-label="Search orders"
                            placeholder="Search by order ID, customer name, or email..."
                            className="w-full h-10 pl-10 pr-3 rounded-lg
                              border border-blue-100 text-sm
                              outline-none focus:border-blue-500
                              focus:ring-2 focus:ring-blue-50" />
                    </div>

                    <select
                        id="payment-status-filter"
                        value={paymentStatusFilter}
                        onChange={(event) => setPaymentStatusFilter(event.target.value)}
                        aria-label="Filter by payment status"
                        className="lg:col-span-3 h-10 px-3 rounded-lg
                           border border-blue-100 text-sm
                           outline-none focus:border-blue-500">
                        <option value="">All Payment Statuses</option>
                        <option value="Paid">Paid</option>
                        <option value="Pending">Pending</option>
                    </select>

                    <select
                        id="delivery-status-filter"
                        value={deliveryStatusFilter}
                        onChange={(event) => setDeliveryStatusFilter(event.target.value)}
                        aria-label="Filter by delivery status"
                        className="lg:col-span-3 h-10 px-3 rounded-lg
                           border border-blue-100 text-sm
                           outline-none focus:border-blue-500">
                        <option value="">All Delivery Statuses</option>
                        {deliveryStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                <p className="mb-3 text-xs text-slate-500" aria-live="polite">
                    Showing {filteredOrders.length} of {orders.length} orders
                </p>

                <div className="overflow-x-auto rounded-lg border border-blue-100">
                    <table className="w-full min-w-[1100px] text-left text-xs">

                        <thead className="bg-blue-50 text-[#17477f]">
                            <tr className="bg-blue-50 text-[#17477f]">
                                <th className="px-3 py-3 rounded-l-lg font-bold">
                                    Order ID
                                </th>
                                <th className="px-3 py-3 font-bold">Customer</th>
                                <th className="px-3 py-3 font-bold">Date</th>
                                <th className="px-3 py-3 font-bold">Total Amount</th>
                                <th className="px-3 py-3 font-bold">Payment Method</th>
                                <th className="px-3 py-3 font-bold">Payment Status</th>
                                <th className="px-3 py-3 font-bold">Delivery Status</th>
                                <th className="px-3 py-3 rounded-r-lg font-bold text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody id="orders-body" className="divide-y divide-blue-100">
                            {filteredOrders.map((order) => {
                                const customer = users.find(
                                    (user) => user.id === order.customerId
                                )
                                const customerName = customer
                                    ? `${customer.firstName} ${customer.lastName}`
                                    : order.customerId

                                return (
                                    <tr key={order.id} className="transition hover:bg-blue-50/50">
                                        <td className="whitespace-nowrap px-3 py-4 font-semibold text-[#17477f]">
                                            {order.id}
                                        </td>
                                        <td className="px-3 py-4">
                                            <p className="font-medium text-slate-800">{customerName}</p>
                                            <p className="mt-1 text-slate-500">{customer?.email || '—'}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-slate-600">
                                            {formatOrderDate(order.orderDate)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 font-medium text-slate-800">
                                            {formatCurrency(order.totalAmount)}
                                        </td>
                                        <td className="px-3 py-4 text-slate-600">{order.paymentMethod}</td>
                                        <td className="px-3 py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                                order.paymentStatus === 'Paid'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-amber-100 text-amber-800'
                                            }`}>
                                                {order.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="px-3 py-4">
                                            <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                                order.deliveryStatus === 'Delivered'
                                                    ? 'bg-green-100 text-green-800'
                                                    : order.deliveryStatus === 'Cancelled'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-blue-100 text-blue-800'
                                            }`}>
                                                {order.deliveryStatus}
                                            </span>
                                        </td>
                                        <td className="px-3 py-4 text-center">
                                            <label className="sr-only" htmlFor={`delivery-${order.id}`}>
                                                Update delivery status for {order.id}
                                            </label>
                                            <select
                                                id={`delivery-${order.id}`}
                                                value={order.deliveryStatus}
                                                onChange={(event) => dispatch(updateDeliveryStatus({
                                                    orderId: order.id,
                                                    deliveryStatus: event.target.value,
                                                }))}
                                                className="h-9 rounded-lg border border-blue-100 bg-white px-2 text-xs text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50">
                                                {deliveryStatuses.map((status) => (
                                                    <option key={status} value={status}>{status}</option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                    {filteredOrders.length === 0 && (
                        <p className="py-10 text-center text-sm text-slate-500">
                            {orders.length === 0
                                ? 'There are no orders yet.'
                                : 'No orders match your search or filters.'}
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}

export default AdminOrders