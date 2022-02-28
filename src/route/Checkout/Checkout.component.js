import React from 'react';
import { Checkout as SourceCheckout } from 'SourceComponent/@scandipwa/scandipwa/src/route/Checkout/Checkout.component';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';

import Progressbar from 'Component/Progressbar/Progressbar.component';

import './Checkout.override.style';

export default class Checkout extends SourceCheckout {
    render() {
        return (
            <main block="Checkout">
                <Progressbar step = {this.props.checkoutStep}/>

                <ContentWrapper
                    wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                    label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}
