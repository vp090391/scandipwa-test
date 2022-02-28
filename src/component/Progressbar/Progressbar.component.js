import React, { Component } from 'react';
import './Progressbar.component.style.scss';

export default class Progressbar extends Component {
    render() {
        let step = this.props.step;
        let progressLineWidth;
        const checkMark = '✓';

        switch (step) {
        case 'SHIPPING_STEP':
            progressLineWidth = '37%';
            break;
        case 'BILLING_STEP':
            progressLineWidth = '60%';
            break;
        case 'DETAILS_STEP':
            progressLineWidth = '100%';
            break;
        default:
            progressLineWidth = '';
        }

        const clazz = step === 'SHIPPING_STEP' ? 'not-active' : '';

        return (
            <div className='progressbar'>
                <div className='line-static'>
                </div>
                <div className='line-progress' style={{width: progressLineWidth}}>
                </div>

                <div className='first-point'>
                    <div className='point'
                         data-point={
                             step === 'SHIPPING_STEP'
                             ? 1
                             : checkMark
                         }>
                    </div>
                    <div>Shipping</div>
                </div>

                <div className={`second-point ${clazz}`}>
                    <div className='point'
                         data-point={
                             step === 'DETAILS_STEP'
                             ? checkMark
                             : 2
                         }>
                    </div>
                    <div>Review & Payments</div>
                </div>
            </div>
        )
    }
}
