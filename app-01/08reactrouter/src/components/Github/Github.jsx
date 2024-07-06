import React, { useEffect, useState, useRef } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    //const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const hasFetched = useRef(false);
    const data = useLoaderData()
    // useEffect(() => {
    //     if (!hasFetched.current) {
    //         hasFetched.current = true;

    //         fetch('https://api.github.com/users/muhammadrizwan82')
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Network response was not ok');
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setData(data);
    //             })
    //             .catch(error => {
    //                 console.error('Fetch error:', error);
    //                 setError(error);
    //             });
    //     }
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            {error ? (
                <div>Error fetching data: {data ? '' : 'Error loading'}</div>
            ) : (
                <div>
                    <img src={data ? data.avatar_url : ''} alt="" />
                    Github Followers: {data ? data.followers : 'Loading...'}</div>
            )}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/muhammadrizwan82')
    return response.json();
}