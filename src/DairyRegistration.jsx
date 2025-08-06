import React, { useState } from 'react';

function DairyRegistration() {
  const [formData, setFormData] = useState({
    dairyName: '',
    state: '',
    district: '',
    taluka: '',
    village: '',
    pincode: '',
    milkUnion: '',
    dairyRegNo: '',
    managerName: '',
    managerMobile: '',
    managerEmail: '',
    chairmanName: '',
    chairmanMobile: '',
    chairmanEmail: '',
    username: '',
    gender: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Dairy Registered Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Dairy Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dairy Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Dairy Name</label>
              <input type="text" name="dairyName" value={formData.dairyName} onChange={handleChange} placeholder="Enter Dairy Name" className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Milk Union</label>
              <input type="text" name="milkUnion" value={formData.milkUnion} onChange={handleChange} placeholder="Enter Milk Union" className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dairy Registration No.</label>
              <input type="text" name="dairyRegNo" value={formData.dairyRegNo} onChange={handleChange} placeholder="Registration No." className="mt-1 p-2 w-full border rounded-md" required />
            </div>
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded-md" required />
              <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="p-2 border rounded-md" required />
              <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} placeholder="Taluka" className="p-2 border rounded-md" required />
              <input type="text" name="village" value={formData.village} onChange={handleChange} placeholder="Village" className="p-2 border rounded-md" required />
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded-md" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Manager Details</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="managerName" value={formData.managerName} onChange={handleChange} placeholder="Manager Name" className="p-2 border rounded-md" required />
              <input type="tel" name="managerMobile" value={formData.managerMobile} onChange={handleChange} placeholder="Mobile No." className="p-2 border rounded-md" required />
              <input type="email" name="managerEmail" value={formData.managerEmail} onChange={handleChange} placeholder="Email" className="p-2 border rounded-md" required />
            </div>
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chairman Details</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="chairmanName" value={formData.chairmanName} onChange={handleChange} placeholder="Chairman Name" className="p-2 border rounded-md" required />
              <input type="tel" name="chairmanMobile" value={formData.chairmanMobile} onChange={handleChange} placeholder="Mobile No." className="p-2 border rounded-md" required />
              <input type="email" name="chairmanEmail" value={formData.chairmanEmail} onChange={handleChange} placeholder="Email" className="p-2 border rounded-md" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="mt-1 p-2 w-full border rounded-md" required />
            </div>
          </div>

       
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Register Dairy
          </button>
        </form>
      </div>
    </div>
  );
}

export default DairyRegistration;
