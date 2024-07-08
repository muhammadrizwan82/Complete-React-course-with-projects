import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'

export default function User() {
    const { userid } = useParams()
    usePageTitle('Home - User')
    return (
        <div>
            User : {userid}
        </div>
    )
}
