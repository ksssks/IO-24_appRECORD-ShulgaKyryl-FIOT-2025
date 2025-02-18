import React from 'react';

const Figma1 = () => {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Інтеграція з Figma</h1>

            <section className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-center">
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="800"
                        height="450"
                        src="https://embed.figma.com/design/ywgxykEDTQ7EukLRLITMul/web_2025?node-id=20-22&embed-host=share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Figma1;
