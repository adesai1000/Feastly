import React from "react";

const OrdersPage = () => {
  const orders = [
    { id: '1237861238721', date: '19.07.2023', price: '89.90', products: 'Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)', status: 'En Route (approx. 10min)' },
    { id: '1237861238722', date: '18.07.2023', price: '79.90', products: 'Chicken Wrap (2), Margarita Pizza (1), Sprite 1L (1)', status: 'Delivered' },
    { id: '1237861238723', date: '17.07.2023', price: '99.90', products: 'Pepperoni Pizza (3), Fanta 1L (3)', status: 'Canceled' },
    { id: '1237861238724', date: '16.07.2023', price: '49.90', products: 'Cheese Burger (1), Veggie Pizza (1), Pepsi 1L (1)', status: 'Delivered' },
    { id: '1237861238725', date: '15.07.2023', price: '59.90', products: 'Chicken Nuggets (1), Hawaiian Pizza (1)', status: 'En Route (approx. 20min)...' },
    { id: '1237861238726', date: '14.07.2023', price: '69.90', products: 'Fish Burger (2), Meat Lover Pizza (1), 7UP 1L (1)', status: 'Delivered' },
    { id: '1237861238727', date: '13.07.2023', price: '89.90', products: 'Veggie Burger (1), Supreme Pizza (2), Mountain Dew 1L (1)', status: 'Delivered' },
    { id: '1237861238728', date: '12.07.2023', price: '79.90', products: 'Double Cheese Burger (1), BBQ Chicken Pizza (1), Coca Cola 1L (1)', status: 'Canceled' },
    { id: '1237861238729', date: '11.07.2023', price: '109.90', products: 'Spicy Chicken Wings (1), Four Cheese Pizza (2), Fanta 1L (2)', status: 'En route (approx. 15min)' },
    { id: '1237861238730', date: '10.07.2023', price: '99.90', products: 'Bacon Burger (1), Pepperoni Pizza (2), Sprite 1L (2)', status: 'Delivered' },
  ];

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-0 shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left text-chick-red uppercase text-sm leading-normal">
            <th className="hidden md:table-cell py-3 px-6">Order ID</th>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Price</th>
            <th className="hidden md:table-cell py-3 px-6">Products</th>
            <th className="py-3 px-6">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm md:text-base">
          {orders.map((order, index) => (
            <tr key={order.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
              <td className="hidden md:table-cell py-4 px-6">{order.id}</td>
              <td className="py-4 px-6">{order.date}</td>
              <td className="py-4 px-6">${order.price}</td>
              <td className="hidden md:table-cell py-4 px-6">{order.products}</td>
              <td className="py-4 px-6">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
