import React, { useState } from 'react';

const MilkCollectionForm = () => {
  const [formData, setFormData] = useState({
    animalId: '',
    date: '',
    shift: '',
    morningYield: '',
    milkerMethod: '',
    milkerName: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // you can call your backend API here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border mt-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Milk Collection Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium">Animal ID</label>
          <input
            type="text"
            name="animalId"
            value={formData.animalId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Shift</label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block font-medium">Morning Yield</label>
            <input
              type="number"
              name="morningYield"
              value={formData.morningYield}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              step="0.01"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Milker Method</label>
          <select
            name="milkerMethod"
            value={formData.milkerMethod}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select</option>
            <option value="Manual">Manual</option>
            <option value="Machine">Machine</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Milker Name</label>
          <input
            type="text"
            name="milkerName"
            value={formData.milkerName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MilkCollectionForm;
