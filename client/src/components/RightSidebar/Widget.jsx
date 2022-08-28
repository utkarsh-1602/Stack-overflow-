import React from 'react'
import './RightSidebar.css';
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/stack-overflow-brands.svg';

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>How a very average programmer became GitHub’s CTO (Ep. 447)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Talking blockchain, functional programming, and the future with Tezos..</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18' />
                <p>Announcing the arrival of Valued Associate #1214: Dalmarus</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18' />
                <p>Improvements to site status and incident communication</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="pen" width='18' />
                <p>Retiring Our Community-Specific Closure Reasons for Server Fault and Super User</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>30</p>
                <p>I stepped on another [lego]. Let's clean these up</p>
            </div>
            {/* <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Talking blockchain, functional programming, and the future with Tezos..</p>
            </div> */}
        </div>
    </div>
  )
}

export default Widget