import React from 'react';
import { clientPartnerships } from '../../data/business';
import { Users, Building2, Landmark, UserCircle } from 'lucide-react';

const iconMap = {
  institutional: Users,
  private: Building2,
  state: Landmark,
  retail: UserCircle
};

export default function Partnerships() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Building Strong Partnerships With Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientPartnerships.map((partnership) => {
            const Icon = iconMap[partnership.category];
            return (
              <div key={partnership.type} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  {Icon && <Icon className="h-6 w-6 text-blue-600" />}
                  <h3 className="text-xl font-semibold">{partnership.type}</h3>
                </div>
                <p className="text-gray-600">{partnership.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}