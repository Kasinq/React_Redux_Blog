import React from 'react'
import './SubscriptionForm.scss'

const SubscriptionForm = () => {
    return (
        <form>
            <div className="subMe">SUBSCRIBE TO MY NEWSLETTER</div>
            <div className="subscribeForm">
                <input  type="text" placeholder="Your email address" />
                <button>SUBSCRIBE</button>
            </div>
        </form>
    )
}

export default SubscriptionForm