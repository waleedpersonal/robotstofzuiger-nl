'use client';

export default function ComplianceBar() {
  // Get yesterday's date dynamically
  const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const day = yesterday.getDate();
    const monthNames = [
      'januari', 'februari', 'maart', 'april', 'mei', 'juni',
      'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ];
    const month = monthNames[yesterday.getMonth()];
    const year = yesterday.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2">
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-600">
        <div>
          Laatste update: <span className="font-semibold">{getYesterdayDate()}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-primary">🔍 Onafhankelijk keuzehulp</span>
          <a href="#disclosure" className="underline hover:text-primary">
            Affiliate disclosure
          </a>
        </div>
      </div>
    </div>
  );
}
