import React from "react";
import SEO from '../components/SEO';

export default class IndexPage extends React.Component {
    render () {
        return (
        <>
            <SEO/>
            <div>
                Here is my portfolio
            </div>
            <a href="https://krushiraj.github.io/mini-terminal/">Click here to open Mini-Terminal</a>
        </>
        )
    }
}
