'use client';

import ClipLoader from 'react-spinners/ClipLoader';

const overwride: React.CSSProperties = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red',
};


const LoadingPage = () => {
    return (
        <ClipLoader color="#3b82f6" loading={true} size={150} cssOverride={overwride} aria-label='Loading Spinner' />
    );
}

export default LoadingPage;