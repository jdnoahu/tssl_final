import React, { useEffect } from 'react';



const YTRedirect = () => {

    let path = window.location.pathname

    useEffect(() => {

        window.location = `https:/${path}.com/thesimplesoberlife2019`
    }, [])


    return (
        <div>

        </div>
    );
};

export default YTRedirect;