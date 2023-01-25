import React from 'react'
import './posts.css'

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import { MdOutlineReport } from 'react-icons/md'

function Posts() {

    return(
        <div className="post-container">
            <div className='post'>
                <div className='post-wrapper'>
                    <div className='post-top'>
                        <div className='post-top-left'>
                            <img className="post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"></img>
                            <span className="post-username">Monkey D. Luffy</span>
                            <span className="post-date">1 min ago</span>
                        </div>
                        <div className='posts-top-right'>
                            <BiDotsVerticalRounded />
                        </div>
                    </div>
                    <div className='post-center'>
                        <span className="post-text">This is where the content of the post will be.</span>
                        <img className="post-img" src="https://wallpapercave.com/wp/wp6057124.jpg"></img>
                    </div>
                    <div className='post-bottom'>
                        <div className="post-bottom-left">
                            <BiDonateHeart className="post-icon-1"/>
                            <BiXCircle className="post-icon-2"/>
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