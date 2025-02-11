// components/PricingTable.js
import React from 'react';

const pricingData = [
  { item: 'Blanket Single', pressOnly: 5, dryCleaning: 8 },
  { item: 'Blanket Double', pressOnly: 7, dryCleaning: 10 },
  { item: 'Bed Sheet (King)', pressOnly: 3, dryCleaning: 4.5 },
  { item: 'Bed Sheet (Twin)', pressOnly: 2, dryCleaning: 4 },
  { item: 'Duvet Cover (Small)', pressOnly: 4, dryCleaning: 6 },
  { item: 'Duvet Cover (Double)', pressOnly: 4.5, dryCleaning: 7 },
  { item: 'Pillow', pressOnly: 5, dryCleaning: 8 },
  { item: 'Bath Towel', pressOnly: 2, dryCleaning: 4 },
  { item: 'Hand Towel', pressOnly: 1.5, dryCleaning: 3 },
  { item: 'Face Towel', pressOnly: 1.5, dryCleaning: 2.5 },
  { item: 'Pillow Case', pressOnly: 1.5, dryCleaning: 2.5 },
  { item: 'Curtain', pressOnly: '3 per m.', dryCleaning: '5 per m.' },
  { item: 'Net Curtain', pressOnly: '2 per m.', dryCleaning: '4 per m.' },
  { item: 'Table Clothes', pressOnly: 'As per size', dryCleaning: 'As per size' },
  { item: 'Table Napkin', pressOnly: 1, dryCleaning: 2 },
  { item: 'Carpet', pressOnly: '7 per m.', dryCleaning: '10 per m.' },
  { item: 'Sofa Cover', pressOnly: 'As per size', dryCleaning: 'As per size' },
  { item: 'Bath Robe', pressOnly: 7, dryCleaning: 10 },
  { item: 'Shoes', pressOnly: '-', dryCleaning: 10 },
  { item: 'Comforter', pressOnly: 7, dryCleaning: 10 },
];

const PricingTable = () => {
  return (
    <div className="container w-[700px] mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 border-gray-300 text-left bg-green-500 text-white">Items</th>
              <th className="px-4 py-2 border-2 border-gray-300 text-left bg-blue-600 text-white">Press only</th>
              <th className="px-4 py-2 border-2 border-gray-300 text-left bg-blue-500 text-white">Dry Cleaning or Laundry</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-2 border-gray-300">{data.item}</td>
                <td className="px-4 py-2 border-2 border-gray-300">{data.pressOnly}</td>
                <td className="px-4 py-2 border-2 border-gray-300">{data.dryCleaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
