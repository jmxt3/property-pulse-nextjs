import { ReactNode } from 'react';

interface ButtonInfo {
    text: string;
    link: string;
    backgroundColor: string;
}

const InfoBox = ({
    heading,
    backgroundColor = 'bg-gray-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children
}: { heading: string; backgroundColor: string; textColor: string; buttonInfo: ButtonInfo; children: ReactNode }) => {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={` ${textColor} text-2xl font-bold`}>{heading}</h2>
            <p className="mt-2 mb-4">
                {children}
            </p>
            <a href={buttonInfo.link}
                className={`inline-block px-4 py-2 rounded-lg ${buttonInfo.backgroundColor} text-white font-bold hover:bg-gray-700`}>
                {buttonInfo.text}
            </a>
        </div>
    );
}
export default InfoBox;