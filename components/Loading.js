import React from 'react';
import logo from'../utils/logo.png'



function Loading() {
    return (
        <center style={{ display: "grid", placeItems: ":center", height: '100vh' }}>
            <div>
                <img
                    src='https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/297148398_743643416923398_1110144728236092661_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=vA6rUGx2zkgAX9a2WDI&_nc_ht=scontent-del1-1.xx&oh=00_AT_cgbO29lbS3-kNS0geCYl8ZJHuy6mg9Hxef2ybKU3gXQ&oe=62FC6A42'
                    alt='LOAdING'
                    height={200}
                    style={{ marginBottom: 10 }}
                />
                <h1>LOADING.....</h1>
              

            </div>
        </center>
    )
}

export default Loading