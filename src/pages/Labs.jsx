import React, {useEffect} from 'react'
import Cards from "../components/Cards.jsx";

const Labs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div><Cards/></div>
    )
}
export default Labs
