import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
}
