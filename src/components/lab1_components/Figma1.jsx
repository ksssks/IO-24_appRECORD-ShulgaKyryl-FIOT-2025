import React from 'react';

const Figma1 = () => {
    return (
        <div className="w-full h-screen p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Інтеграція з Figma</h1>

            <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 h-full">
                <div className="flex justify-center h-full">
                    <iframe
                        className="w-full h-full sm:max-w-4xl sm:h-96 md:h-full"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        src="https://embed.figma.com/design/ywgxykEDTQ7EukLRLITMul/web_2025?node-id=20-22&embed-host=share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Figma1;
