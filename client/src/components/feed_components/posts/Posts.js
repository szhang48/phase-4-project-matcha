import React from 'react'
import './posts.css'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import { MdOutlineReport } from 'react-icons/md'

function Posts({name, content, picture}) {

    // function handDelete(e) { 
    //     e.preventDefault(); 
    //     fetch("/posts", { 
    //         method: "delete",
    //         headers: { 
    //             "Accept": "application/json", 
    //             "Content-Type": "application/json"
    //         }, 
    //     }) 
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }


    return(
        <div className="post-container">
            <div className='post'>
                <div className='post-wrapper'>
                    <div className='post-top'>
                        <div className='post-top-left'>
                            <img className="post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"></img>
                            <span className="post-username">{name}</span>
                            <span className="post-date">1 min ago</span>
                        </div>
                        <div className='posts-top-right'>
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    <div className='post-center'>
                        <span className="post-text">{content}</span>
                        <img className="post-img" src={picture}></img>
                    </div>
                    <div className='post-bottom'>
                        <div className="post-bottom-left">
                            <BiDonateHeart className="post-icon-1"/>
                            <BiXCircle  className="post-icon-2"/>
                        </div>
                        <div className="post-bottom-right">
                            <MdOutlineReport className="post-icon-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts