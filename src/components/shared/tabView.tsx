import { useState } from 'react';

export const TabView = () => {
    const [activeTab, setActiveTab] = useState('Today');

    return (
        <div className="flex justify-between">
            {['Today', 'This Week', 'This Month', 'All Time'].map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex w-1/4 justify-center items-center font-semibold py-2 focus:outline-none 
                        ${activeTab === tab ? 'text-text border-b-2 border-text' : 'text-caption-label-text'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};
