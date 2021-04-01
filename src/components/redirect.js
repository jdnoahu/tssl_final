import React, { useEffect } from 'react';



const Redirect = () => {

    let path = window.location.pathname

    useEffect(() => {

        window.location = `https:/${path}.com/thesimplesoberlife`
    }, [])


    return (
        <div>

        </div>
    );
};

export default Redirect;