import { useState } from 'react';
import BillingInf from './billingInf';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    name: '',
    street: '',
    apartment: '',
    town: '',
    city: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shipping and Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Street</label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Apartment</label>
          <input
            type="text"
            name="apartment"
            placeholder="Apartment"
            value={formData.apartment}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Town</label>
          <input
            type="text"
            name="town"
            placeholder="Town"
            value={formData.town}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Postal Code *</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="border p-2 rounded placeholder-center"
            required
          />
        </div>
        <div className='flex justify-center'><button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
          Submit
        </button></div>
        
      </form>    
      
    </div>
  );
}
