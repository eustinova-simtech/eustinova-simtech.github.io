/// <reference types="react" />
/// <reference types="lodash" />
declare module "utils/notUndefined" {
    /**
     * https://github.com/microsoft/TypeScript/issues/20707#issuecomment-351874491
     */
    function notUndefined<T>(x: T | undefined): x is T;
    export default notUndefined;
}
declare module "utils/string/appendClassName" {
    /**
     * Extends className string by additional class names
     *
     * @param {string} baseClass
     * @param {string|Array|false} extendClass
     *
     * @returns {string} result class name string with class names separated by space
     *
     * @example
     * // returns 'b-block b-product__element'
     * appendClassName('b-block', 'b-product__element')
     *
     * @example
     * // returns 'b-block b-product__element b-image'
     * appendClassName('b-block', ['b-product__element', 'b-image'])
     *
     * @example
     * // returns 'b-block'
     * appendClassName('b-block', [])
     * appendClassName('b-block', false)
     * appendClassName('b-block', '')
     */
    const appendClassName: (baseClass: string, extendClass?: string | false | (string | false | undefined)[] | undefined) => string;
    export default appendClassName;
}
declare module "utils/string/modifyClassName" {
    /**
     * Apply BEM modifier to classname
     *
     * @param {string} className
     * @param {string|false} modifier
     *
     * @returns {string} result class name
     *
     * @example
     * // returns 'b-block b-block--main'
     * modifyClassName('b-block', 'main')
     *
     * @example
     * // returns 'b-block'
     * modifyClassName('b-block', false)
     */
    const modifyClassName: (className: string, modifiers?: string | false | string[] | undefined) => string;
    export default modifyClassName;
}
declare module "components/subcomponents/loader-icon/ILoaderIcon" {
    export interface IOwnProps {
        isLoading?: boolean;
        className?: string;
    }
}
declare module "components/subcomponents/loader-icon/LoaderIcon.messages" {
    const definedMessages: {
        loading: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/loader-icon/LoaderIcon" {
    import React from 'react';
    import '../../../../node_modules/animate.css/animate.min.css';
    import { IOwnProps } from "components/subcomponents/loader-icon/ILoaderIcon";
    import './LoaderIcon.css';
    export const LoaderIcon: React.FC<IOwnProps>;
    export default LoaderIcon;
}
declare module "components/subcomponents/update-handler/IUpdateHandler" {
    export interface IOwnProps {
        loading: boolean;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/update-handler/UpdateHandler" {
    import React from 'react';
    import { IProps } from "components/subcomponents/update-handler/IUpdateHandler";
    import './UpdateHandler.css';
    /**
     * Wrapper with loading overlay for components with loading state
     */
    const UpdateHandler: React.FC<IProps>;
    export default UpdateHandler;
}
declare module "constants/RoundingTypes" {
    enum RoundingTypes {
        UP = "UP",
        DOWN = "DOWN"
    }
    export default RoundingTypes;
}
declare module "entities/IEntityExtendable" {
    export interface IEntityExtendable<T = any> {
        extra: T & Record<string, unknown>;
    }
    export interface IEntityExtendableFactory<T = any> {
        extra?: T & Record<string, unknown>;
    }
}
declare module "entities/currency/ICurrency" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    interface ICurrency<T = any> extends IEntityExtendable<T> {
        /**
         * Currency multiplier related to base currency
         */
        rate: number;
        /**
         * ISO 4217
         * @example RUB, USD, EUR
         */
        code: string;
        /**
         * How many digits should follow after point: 4.00 or 4.0000
         * @example 2
         */
        decimals: number;
        /**
         * Name for currency
         * @example Euro, Dollar
         */
        name: string;
        /**
         * @example €, $
         */
        symbol: string;
        /**
         * How to place a symbol: $ 1000 or 1000 $
         */
        symbolPosition: 'before' | 'after';
        /**
         * Is primary currency at store
         */
        isBase: boolean;
        /**
         * Position
         */
        position: number;
    }
    export default ICurrency;
}
declare module "entities/currency/Currency" {
    import ICurrency from "entities/currency/ICurrency";
    class Currency<T = any> {
        rate: number;
        code: string;
        decimals: number;
        name: string;
        symbol: string;
        symbolPosition: 'before' | 'after';
        isBase: boolean;
        position: number;
        extra: T;
        constructor(currency: ICurrency<T>);
    }
    export default Currency;
}
declare module "components/subcomponents/price/IPrice" {
    import Currency from "entities/currency/Currency";
    import RoundingTypes from "constants/RoundingTypes";
    export interface IOwnProps {
        className?: string;
        /**
         * Price.
         * String will display as is
         * Number will converted to current currency
         */
        price: string | number;
        discount?: boolean;
        rounding?: RoundingTypes;
    }
    export interface IStateProps {
        currency?: Currency;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/price/Price" {
    import React from 'react';
    import { IProps } from "components/subcomponents/price/IPrice";
    import './Price.css';
    /**
     * Display formatted price
     */
    const Price: React.FC<IProps>;
    export default Price;
}
declare module "utils/event-emitter/EventEmitter" {
    class EventEmitter<T> {
        subscribers: ISubscribers<any>;
        isDebug: boolean;
        on<A = T>(eventName: string, callback: (data: A) => void): {
            unsubscribe: () => void;
        };
        emit(eventName: string, data: T): void;
        off(eventName: string, callbackToRemove: (data: T) => void): void;
        debug(): void;
        protected getSubscribersByEventName(eventName: string): Array<(data: T) => void>;
    }
    interface ISubscribers<T> {
        [key: string]: Array<(data: T) => void>;
    }
    export const areEventNamesEqual: (eventName: string, subscriberName: string) => boolean;
    export default EventEmitter;
}
declare module "react/IRenderEvent" {
    import React from 'react';
    interface IRenderEvent {
        /**
         * Append element to element with specified selector
        */
        appendTo: <T>(selector: string, render: (props: T) => React.ReactNode) => void;
        /**
         * Prepend element to element with specified selector
         */
        prependTo: <T>(selector: string, render: (props: T) => React.ReactNode) => void;
        /**
         * Insert element after element with specified selector
         */
        insertAfter: <T>(selector: string, render: (props: T) => React.ReactNode) => void;
        /**
         * Insert element before element with specified selector
         */
        insertBefore: <T>(selector: string, render: (props: T) => React.ReactNode) => void;
        /**
         * Prevent element with specified selector from render
         */
        excludeFromRender: (name: string) => void;
        /**
         * Prevent element with specified selector from render if callback is returns true
         */
        excludeFromRenderCallback: <T>(selector: string, render: (props: T) => boolean) => void;
        /**
         * Get props from element with specified selector
         */
        pickPropsFrom: <T = any>(name: string) => T;
        /**
         * Show list of element`s children
         */
        debug: () => void;
        props: any;
    }
    export default IRenderEvent;
}
declare module "react/renderSubscriber" {
    import EventEmitter from "utils/event-emitter/EventEmitter";
    import IRenderEvent from "react/IRenderEvent";
    const renderSubscriber: EventEmitter<IRenderEvent>;
    export default renderSubscriber;
}
declare module "intl/TranslationsEvent" {
    import EventEmitter from "utils/event-emitter/EventEmitter";
    const TranslationsEvent: EventEmitter<IInjectMessages>;
    export interface IInjectMessages {
        locale: string;
        messages: any;
    }
    export default TranslationsEvent;
}
declare module "intl/en" {
    const _default: {
        'app.api.session-expired': string;
        'app.common.address': string;
        'app.common.back': string;
        'app.common.city': string;
        'app.common.clear': string;
        'app.common.close': string;
        'app.common.country': string;
        'app.common.loading': string;
        'app.common.or': string;
        'app.common.order-sorting.date': string;
        'app.common.removing': string;
        'app.common.saved-as-draft': string;
        'app.common.sending': string;
        'app.common.sorting.alpha.asc': string;
        'app.common.sorting.alpha.desc': string;
        'app.common.sorting.date.asc': string;
        'app.common.sorting.date.desc': string;
        'app.common.sorting.number.asc': string;
        'app.common.sorting.number.desc': string;
        'app.common.state': string;
        'app.components.action-banner.button-accept': string;
        'app.components.action-banner.button-decline': string;
        'app.components.article-list-item.timeToRead': string;
        'app.components.article-single-item.timeToRead': string;
        'app.components.article-sorting.date': string;
        'app.components.article-sorting.name': string;
        'app.components.article.singleItem.timeToRead': string;
        'app.components.breadcrumbs.aria-label': string;
        'app.components.cartError': string;
        'app.components.checkout-button.button-name': string;
        'app.components.error-boundary.fix-message': string;
        'app.components.error-boundary.header': string;
        'app.components.error-boundary.help-message-after-go-back-button': string;
        'app.components.error-boundary.help-message-after-refresh-button': string;
        'app.components.error-boundary.help-message-before-refresh-button': string;
        'app.components.error-boundary.help-message-go-back-button': string;
        'app.components.error-boundary.help-message-go-home-page-link': string;
        'app.components.error-boundary.help-message-refresh-button': string;
        'app.components.gdpr.agreement.accept-button': string;
        'app.components.gdpr.agreement.conditions': string;
        'app.components.gdpr.agreement.description': string;
        'app.components.gdpr.agreement.title': string;
        'app.components.install-prompt.android.accept': string;
        'app.components.install-prompt.android.decline': string;
        'app.components.install-prompt.android.text': string;
        'app.components.install-prompt.ios.decline': string;
        'app.components.install-prompt.ios.text': string;
        'app.components.load-more.button-label': string;
        'app.components.main-menu.labels.cart-button': string;
        'app.components.main-menu.labels.hamburger': string;
        'app.components.main-menu.labels.home-button': string;
        'app.components.main-menu.labels.profile-button': string;
        'app.components.main-menu.labels.wishlist-button': string;
        'app.components.no-content.title': string;
        'app.components.notification-item.order-entity-name': string;
        'app.components.notification-item.title': string;
        'app.components.offline-panel.description': string;
        'app.components.offline-panel.reload-button': string;
        'app.components.offline-panel.title': string;
        'app.components.offline.message': string;
        'app.components.offline.reload-button': string;
        'app.components.offline.title': string;
        'app.components.online-payment-handler.currently-unavailable': string;
        'app.components.online-payment-handler.title': string;
        'app.components.order-single-item.title': string;
        'app.components.order.number': string;
        'app.components.orderCompleteButton.buttonName': string;
        'app.components.orders-selection.no-results': string;
        'app.components.product-order-item.amount': string;
        'app.components.product-single-item.add-to-cart-button-title': string;
        'app.components.product-sorting.bestsellers': string;
        'app.components.product-sorting.discounts': string;
        'app.components.product-sorting.name': string;
        'app.components.product-sorting.new-products': string;
        'app.components.product-sorting.price': string;
        'app.components.products-selection.filters-button': string;
        'app.components.products-selection.filters-result': string;
        'app.components.products-selection.no-results': string;
        'app.components.profile-form.submit': string;
        'app.components.profile.menu.login': string;
        'app.components.profile.menu.logout': string;
        'app.components.profile.menu.notifications': string;
        'app.components.profile.menu.orders': string;
        'app.components.profile.menu.profile': string;
        'app.components.profile.menu.register': string;
        'app.components.quantity-selector.down': string;
        'app.components.quantity-selector.max-product-amount-achievement-warning': string;
        'app.components.quantity-selector.up': string;
        'app.components.reset-filters.button-title': string;
        'app.components.reviews.form.error-submit': string;
        'app.components.reviews.form.name-title': string;
        'app.components.reviews.form.submit-title': string;
        'app.components.reviews.form.success-submit': string;
        'app.components.reviews.form.textarea-title': string;
        'app.components.reviews.no-content': string;
        'app.components.reviews.title': string;
        'app.components.reviews.total-reviews': string;
        'app.components.screenHandler.next': string;
        'app.components.search.products.placeholder': string;
        'app.components.show-all.button-title': string;
        'app.components.split-button.aria-label': string;
        'app.components.totals.discount': string;
        'app.components.totals.shipping-cost': string;
        'app.components.totals.subtotal': string;
        'app.components.totals.tax-added': string;
        'app.components.totals.tax-included': string;
        'app.components.totals.total': string;
        'app.components.user-avatar.avatar-alt': string;
        'app.components.user-avatar.guest-acronym': string;
        'app.components.userinfo.guest': string;
        'app.components.userinfo.guest-acronym': string;
        'app.components.vendor-products-item.add-to-cart-button-title': string;
        'app.components.vendor-products-item.view-product-page': string;
        'app.components.vendor-products-item.zero-product-amount': string;
        'app.components.vendor-products.title': string;
        'app.components.vendor-signup.submit-label': string;
        'app.components.vendor-signup.success-result': string;
        'app.components.vendor-signup.title': string;
        'app.components.vendor-sorting.name': string;
        'app.components.vendor-sorting.rating': string;
        'app.components.vendor.registered': string;
        'app.components.wishlist-button.add-and-remove': string;
        'app.custom-forms.accept_terms.label': string;
        'app.custom-forms.default-checkbox-label.label': string;
        'app.form.checkbox.expand-aria-label': string;
        'app.form.email': string;
        'app.form.labels.address': string;
        'app.form.labels.address2': string;
        'app.form.labels.city': string;
        'app.form.labels.country': string;
        'app.form.labels.county': string;
        'app.form.labels.email': string;
        'app.form.labels.firstname': string;
        'app.form.labels.lastname': string;
        'app.form.labels.payment-method': string;
        'app.form.labels.phone': string;
        'app.form.labels.state': string;
        'app.form.labels.zipcode': string;
        'app.form.password': string;
        'app.form.reset-title': string;
        'app.form.sections.billing-information': string;
        'app.form.sections.customer-information': string;
        'app.form.sections.products-information': string;
        'app.form.sections.shipping-information': string;
        'app.form.submit-title': string;
        'app.form.validation.invalid-email': string;
        'app.form.validation.required': string;
        'app.form.validation.too-long': string;
        'app.form.validation.too-short': string;
        'app.screens.cart.empty': string;
        'app.screens.cart.empty-description': string;
        'app.screens.cart.processingDescription': string;
        'app.screens.cart.processingTitle': string;
        'app.screens.cart.remove-confirm': string;
        'app.screens.cart.title': string;
        'app.screens.checkout-complete.go-to-order-button-title': string;
        'app.screens.checkout-complete.text': string;
        'app.screens.checkout-complete.title': string;
        'app.screens.checkout.payment-title': string;
        'app.screens.checkout.shipping-title': string;
        'app.screens.checkout.title': string;
        'app.screens.checkout.user-info-title': string;
        'app.screens.login.placeholders.email': string;
        'app.screens.login.placeholders.password': string;
        'app.screens.login.register-button': string;
        'app.screens.login.restore-password': string;
        'app.screens.login.submit-button': string;
        'app.screens.login.title': string;
        'app.screens.login.wrong-credentials': string;
        'app.screens.notFound.backButton': string;
        'app.screens.notFound.message': string;
        'app.screens.notFound.title': string;
        'app.screens.notifications-center.noNotificationsMessage': string;
        'app.screens.notifications-center.title': string;
        'app.screens.order.my-orders-button': string;
        'app.screens.order.title': string;
        'app.screens.orders.title': string;
        'app.screens.product.info': string;
        'app.screens.product.rating': string;
        'app.screens.product.tab-aria-label': string;
        'app.screens.profile.title': string;
        'app.screens.restore-password.description': string;
        'app.screens.restore-password.login': string;
        'app.screens.restore-password.login-failed': string;
        'app.screens.restore-password.registration': string;
        'app.screens.restore-password.success-instruction': string;
        'app.screens.restore-password.title': string;
        'app.screens.search.title': string;
        'app.screens.signup.login-link': string;
        'app.screens.signup.register': string;
        'app.screens.signup.title': string;
        'app.screens.vendor.catalog': string;
        'app.screens.vendor.info': string;
        'app.screens.vendor.rating': string;
        'app.screens.vendor.tab-aria-label': string;
        'app.screens.vendors.title': string;
        'app.screens.wishlist.empty': string;
        'app.screens.wishlist.empty-description': string;
        'app.screens.wishlist.title': string;
        'app.utils.messages.alt': string;
    };
    export default _default;
}
declare module "intl/ru" {
    const _default_1: {
        'app.common.removing': string;
        'app.common.sending': string;
        'app.common.loading': string;
        'app.common.clear': string;
        'app.common.saved-as-draft': string;
        'app.common.or': string;
        'app.common.back': string;
        'app.common.close': string;
        'app.screens.wishlist.title': string;
        'app.screens.wishlist.empty': string;
        'app.screens.wishlist.empty-description': string;
        'app.screens.cart.title': string;
        'app.screens.cart.empty': string;
        'app.screens.cart.empty-description': string;
        'app.screens.cart.remove-confirm': string;
        'app.screens.cart.processingTitle': string;
        'app.screens.cart.processingDescription': string;
        /**
         * Order screen
         */
        'app.screens.order.my-orders-button': string;
        'app.screens.order.title': string;
        'app.screens.checkout.user-info-title': string;
        'app.screens.checkout.payment-title': string;
        'app.screens.checkout.shipping-title': string;
        /**
         * Checkout page
         */
        'app.screens.checkout.title': string;
        /**
         * Complete checkout page
         */
        'app.components.orderCompleteButton.buttonName': string;
        /**
         * Completed checkout page
         */
        'app.screens.checkout-complete.title': string;
        'app.screens.checkout-complete.text': string;
        'app.screens.checkout-complete.go-to-order-button-title': string;
        'app.screens.vendors.title': string;
        /**
       * Apply for vendor
       */
        'app.components.vendor-signup.title': string;
        'app.components.vendor-signup.success-result': string;
        'app.components.vendor-signup.submit-label': string;
        'app.components.vendor-products.title': string;
        /**
         * Search screen
         */
        'app.screens.search.title': string;
        /**
         * Login screen/modal
         */
        'app.screens.login.title': string;
        'app.screens.login.submit-button': string;
        'app.screens.login.register-button': string;
        'app.screens.login.wrong-credentials': string;
        'app.screens.login.placeholders.email': string;
        'app.screens.login.placeholders.password': string;
        'app.screens.login.restore-password': string;
        /**
         * Signup screen
         */
        'app.screens.signup.title': string;
        'app.screens.signup.register': string;
        'app.screens.signup.login-link': string;
        /**
         * Restore password screen
         */
        'app.screens.restore-password.title': string;
        'app.screens.restore-password.description': string;
        'app.screens.restore-password.success-instruction': string;
        'app.screens.restore-password.login-failed': string;
        'app.screens.restore-password.login': string;
        'app.screens.restore-password.registration': string;
        /**
         * Profile screen
         */
        'app.screens.profile.title': string;
        'app.components.profile-menu.orders-title': string;
        'app.components.profile.menu.login': string;
        'app.components.profile.menu.logout': string;
        'app.components.profile.menu.notifications': string;
        'app.components.profile.menu.profile': string;
        'app.components.profile.menu.register': string;
        'app.components.profile-form.submit': string;
        'app.components.user-avatar.avatar-alt': string;
        'app.components.user-avatar.guest-acronym': string;
        'app.cart.messages.need-auth': string;
        'app.cart.messages.success-added-to-cart': string;
        'app.api.errors.no-internet': string;
        'app.api.errors.not-found': string;
        'app.api.session-expired': string;
        'app.system.ready-to-update': string;
        'app.system.updated': string;
        'app.components.reviews.add-new-button': string;
        'app.components.reviews.form.textarea-title': string;
        'app.components.reviews.form.submit-title': string;
        'app.components.reviews.form.success-submit': string;
        'app.components.reviews.form.error-submit': string;
        'app.components.reviews.no-content': string;
        'app.components.reviews.total-reviews': string;
        'app.components.reviews.form.name-title': string;
        'app.components.userinfo.guest': string;
        'app.components.userinfo.guest-acronym': string;
        'app.form.sections.customer-information': string;
        'app.form.sections.billing-information': string;
        'app.form.sections.shipping-information': string;
        'app.form.sections.products-information': string;
        'app.form.labels.firstname': string;
        'app.form.labels.lastname': string;
        'app.form.labels.email': string;
        'app.form.labels.phone': string;
        'app.form.labels.country': string;
        'app.form.labels.county': string;
        'app.form.labels.zipcode': string;
        'app.form.labels.state': string;
        'app.form.labels.city': string;
        'app.form.labels.address': string;
        'app.form.labels.address2': string;
        'app.form.labels.payment-method': string;
        'app.form.email': string;
        'app.form.password': string;
        'app.form.validation.too-short': string;
        'app.form.validation.too-long': string;
        'app.form.validation.required': string;
        'app.form.validation.invalid-email': string;
        'app.form.submit-title': string;
        'app.form.reset-title': string;
        'app.screens.product.tab-aria-label': string;
        'app.screens.product.info': string;
        'app.screens.product.rating': string;
        'app.components.product-sorting.name': string;
        'app.components.product-sorting.price': string;
        'app.components.product-sorting.new-products': string;
        'app.components.product-sorting.bestsellers': string;
        'app.components.product-sorting.discounts': string;
        'app.components.vendor-sorting.name': string;
        'app.components.vendor-sorting.rating': string;
        'app.screens.orders.title': string;
        'app.common.order-sorting.date': string;
        'app.components.order.number': string;
        'app.components.product-order-item.amount': string;
        'app.components.order-single-item.title': string;
        'app.components.order.barcode': string;
        'app.common.sorting.alpha.asc': string;
        'app.common.sorting.alpha.desc': string;
        'app.common.sorting.number.asc': string;
        'app.common.sorting.number.desc': string;
        'app.common.sorting.date.asc': string;
        'app.common.sorting.date.desc': string;
        'app.components.quantity-selector.down': string;
        'app.components.quantity-selector.up': string;
        'app.components.quantity-selector.max-product-amount-achievement-warning': string;
        'app.common.address': string;
        'app.common.city': string;
        'app.common.state': string;
        'app.common.country': string;
        'app.components.vendor.registered': string;
        'app.screens.vendor.tab-aria-label': string;
        'app.screens.vendor.info': string;
        'app.screens.vendor.catalog': string;
        'app.screens.vendor.rating': string;
        'app.components.offline.title': string;
        'app.components.offline.message': string;
        'app.components.offline.reload-button': string;
        'app.components.offline-panel.title': string;
        'app.components.offline-panel.description': string;
        'app.components.offline-panel.reload-button': string;
        'app.components.no-content.title': string;
        'app.components.product-single-item.add-to-cart-button-title': string;
        'app.components.totals.subtotal': string;
        'app.components.totals.discount': string;
        'app.components.totals.shipping-cost': string;
        'app.components.totals.total': string;
        'app.components.totals.tax-added': string;
        'app.components.totals.tax-included': string;
        'app.components.checkout-button.button-name': string;
        'app.components.reviews.title': string;
        'app.components.search.products.placeholder': string;
        'app.components.products-selection.no-results': string;
        'app.components.products-selection.filters-button': string;
        'app.components.products-selection.filters-result': string;
        /**
         * Main menu
         */
        'app.components.main-menu.labels.hamburger': string;
        'app.components.main-menu.labels.home-button': string;
        'app.components.main-menu.labels.wishlist-button': string;
        'app.components.main-menu.labels.profile-button': string;
        'app.components.main-menu.labels.cart-button': string;
        /**
         * Online payment handler
         */
        'app.components.online-payment-handler.title': string;
        'app.components.online-payment-handler.currently-unavailable': string;
        /**
         * Load More
         */
        'app.components.load-more.button-label': string;
        /**
         * Articles
         */
        'app.components.article-list-item.timeToRead': string;
        'app.components.article-single-item.timeToRead': string;
        'app.components.article-sorting.date': string;
        'app.components.article-sorting.name': string;
        'app.components.article.singleItem.timeToRead': string;
        /**
         * Add to cart button
         */
        'app.components.cartError': string;
        /**
         * Continue button
         */
        'app.components.screenHandler.next': string;
        'app.components.gdpr.agreement.title': string;
        'app.components.gdpr.agreement.description': string;
        'app.components.gdpr.agreement.conditions': string;
        'app.components.gdpr.agreement.accept-button': string;
        /**
         * Error boundary
         */
        'app.components.error-boundary.header': string;
        'app.components.error-boundary.fix-message': string;
        'app.components.error-boundary.help-message-before-refresh-button': string;
        'app.components.error-boundary.help-message-refresh-button': string;
        'app.components.error-boundary.help-message-after-refresh-button': string;
        'app.components.error-boundary.help-message-go-home-page-link': string;
        'app.components.error-boundary.help-message-go-back-button': string;
        'app.components.error-boundary.help-message-after-go-back-button': string;
        /**
         * Messages
         */
        'app.utils.messages.alt': string;
        /**
         * Notifications
         */
        'app.screens.notifications-center.title': string;
        'app.screens.notifications-center.noNotificationsMessage': string;
        /**
         * Vendor on Product page
         */
        'app.components.vendor-products-item.view-product-page': string;
        'app.components.vendor-products-item.zero-product-amount': string;
        'app.components.vendor-products-item.add-to-cart-button-title': string;
        'app.components.action-banner.button-accept': string;
        'app.components.action-banner.button-decline': string;
        'app.components.install-prompt.android.accept': string;
        'app.components.install-prompt.android.decline': string;
        'app.components.install-prompt.android.text': string;
        'app.components.install-prompt.ios.decline': string;
        'app.components.install-prompt.ios.text': string;
        'app.components.breadcrumbs.aria-label': string;
        'app.components.popup-alert.closeButtonLabel': string;
        'app.components.popup-alert.closeButtonName': string;
        'app.components.notification-item.order-entity-name': string;
        'app.components.notification-item.title': string;
        'app.components.orders-selection.no-results': string;
        'app.components.profile.menu.orders': string;
        'app.screens.notFound.backButton': string;
        'app.screens.notFound.message': string;
        'app.screens.notFound.title': string;
        /**
         * Reset All Filters
         */
        'app.components.reset-filters.button-title': string;
        /**
          * Show All Button
          */
        'app.components.show-all.button-title': string;
        /**
          * Split Button
          */
        'app.components.split-button.aria-label': string;
        /**
         * Wishlist Button
         */
        'app.components.wishlist-button.add-and-remove': string;
        'app.custom-forms.accept_terms.label': string;
        'app.custom-forms.default-checkbox-label.label': string;
        'app.form.checkbox.expand-aria-label': string;
    };
    export default _default_1;
}
declare module "intl/messages" {
    const _default_2: {
        en: {
            'app.api.session-expired': string;
            'app.common.address': string;
            'app.common.back': string;
            'app.common.city': string;
            'app.common.clear': string;
            'app.common.close': string;
            'app.common.country': string;
            'app.common.loading': string;
            'app.common.or': string;
            'app.common.order-sorting.date': string;
            'app.common.removing': string;
            'app.common.saved-as-draft': string;
            'app.common.sending': string;
            'app.common.sorting.alpha.asc': string;
            'app.common.sorting.alpha.desc': string;
            'app.common.sorting.date.asc': string;
            'app.common.sorting.date.desc': string;
            'app.common.sorting.number.asc': string;
            'app.common.sorting.number.desc': string;
            'app.common.state': string;
            'app.components.action-banner.button-accept': string;
            'app.components.action-banner.button-decline': string;
            'app.components.article-list-item.timeToRead': string;
            'app.components.article-single-item.timeToRead': string;
            'app.components.article-sorting.date': string;
            'app.components.article-sorting.name': string;
            'app.components.article.singleItem.timeToRead': string;
            'app.components.breadcrumbs.aria-label': string;
            'app.components.cartError': string;
            'app.components.checkout-button.button-name': string;
            'app.components.error-boundary.fix-message': string;
            'app.components.error-boundary.header': string;
            'app.components.error-boundary.help-message-after-go-back-button': string;
            'app.components.error-boundary.help-message-after-refresh-button': string;
            'app.components.error-boundary.help-message-before-refresh-button': string;
            'app.components.error-boundary.help-message-go-back-button': string;
            'app.components.error-boundary.help-message-go-home-page-link': string;
            'app.components.error-boundary.help-message-refresh-button': string;
            'app.components.gdpr.agreement.accept-button': string;
            'app.components.gdpr.agreement.conditions': string;
            'app.components.gdpr.agreement.description': string;
            'app.components.gdpr.agreement.title': string;
            'app.components.install-prompt.android.accept': string;
            'app.components.install-prompt.android.decline': string;
            'app.components.install-prompt.android.text': string;
            'app.components.install-prompt.ios.decline': string;
            'app.components.install-prompt.ios.text': string;
            'app.components.load-more.button-label': string;
            'app.components.main-menu.labels.cart-button': string;
            'app.components.main-menu.labels.hamburger': string;
            'app.components.main-menu.labels.home-button': string;
            'app.components.main-menu.labels.profile-button': string;
            'app.components.main-menu.labels.wishlist-button': string;
            'app.components.no-content.title': string;
            'app.components.notification-item.order-entity-name': string;
            'app.components.notification-item.title': string;
            'app.components.offline-panel.description': string;
            'app.components.offline-panel.reload-button': string;
            'app.components.offline-panel.title': string;
            'app.components.offline.message': string;
            'app.components.offline.reload-button': string;
            'app.components.offline.title': string;
            'app.components.online-payment-handler.currently-unavailable': string;
            'app.components.online-payment-handler.title': string;
            'app.components.order-single-item.title': string;
            'app.components.order.number': string;
            'app.components.orderCompleteButton.buttonName': string;
            'app.components.orders-selection.no-results': string;
            'app.components.product-order-item.amount': string;
            'app.components.product-single-item.add-to-cart-button-title': string;
            'app.components.product-sorting.bestsellers': string;
            'app.components.product-sorting.discounts': string;
            'app.components.product-sorting.name': string;
            'app.components.product-sorting.new-products': string;
            'app.components.product-sorting.price': string;
            'app.components.products-selection.filters-button': string;
            'app.components.products-selection.filters-result': string;
            'app.components.products-selection.no-results': string;
            'app.components.profile-form.submit': string;
            'app.components.profile.menu.login': string;
            'app.components.profile.menu.logout': string;
            'app.components.profile.menu.notifications': string;
            'app.components.profile.menu.orders': string;
            'app.components.profile.menu.profile': string;
            'app.components.profile.menu.register': string;
            'app.components.quantity-selector.down': string;
            'app.components.quantity-selector.max-product-amount-achievement-warning': string;
            'app.components.quantity-selector.up': string;
            'app.components.reset-filters.button-title': string;
            'app.components.reviews.form.error-submit': string;
            'app.components.reviews.form.name-title': string;
            'app.components.reviews.form.submit-title': string;
            'app.components.reviews.form.success-submit': string;
            'app.components.reviews.form.textarea-title': string;
            'app.components.reviews.no-content': string;
            'app.components.reviews.title': string;
            'app.components.reviews.total-reviews': string;
            'app.components.screenHandler.next': string;
            'app.components.search.products.placeholder': string;
            'app.components.show-all.button-title': string;
            'app.components.split-button.aria-label': string;
            'app.components.totals.discount': string;
            'app.components.totals.shipping-cost': string;
            'app.components.totals.subtotal': string;
            'app.components.totals.tax-added': string;
            'app.components.totals.tax-included': string;
            'app.components.totals.total': string;
            'app.components.user-avatar.avatar-alt': string;
            'app.components.user-avatar.guest-acronym': string;
            'app.components.userinfo.guest': string;
            'app.components.userinfo.guest-acronym': string;
            'app.components.vendor-products-item.add-to-cart-button-title': string;
            'app.components.vendor-products-item.view-product-page': string;
            'app.components.vendor-products-item.zero-product-amount': string;
            'app.components.vendor-products.title': string;
            'app.components.vendor-signup.submit-label': string;
            'app.components.vendor-signup.success-result': string;
            'app.components.vendor-signup.title': string;
            'app.components.vendor-sorting.name': string;
            'app.components.vendor-sorting.rating': string;
            'app.components.vendor.registered': string;
            'app.components.wishlist-button.add-and-remove': string;
            'app.custom-forms.accept_terms.label': string;
            'app.custom-forms.default-checkbox-label.label': string;
            'app.form.checkbox.expand-aria-label': string;
            'app.form.email': string;
            'app.form.labels.address': string;
            'app.form.labels.address2': string;
            'app.form.labels.city': string;
            'app.form.labels.country': string;
            'app.form.labels.county': string;
            'app.form.labels.email': string;
            'app.form.labels.firstname': string;
            'app.form.labels.lastname': string;
            'app.form.labels.payment-method': string;
            'app.form.labels.phone': string;
            'app.form.labels.state': string;
            'app.form.labels.zipcode': string;
            'app.form.password': string;
            'app.form.reset-title': string;
            'app.form.sections.billing-information': string;
            'app.form.sections.customer-information': string;
            'app.form.sections.products-information': string;
            'app.form.sections.shipping-information': string;
            'app.form.submit-title': string;
            'app.form.validation.invalid-email': string;
            'app.form.validation.required': string;
            'app.form.validation.too-long': string;
            'app.form.validation.too-short': string;
            'app.screens.cart.empty': string;
            'app.screens.cart.empty-description': string;
            'app.screens.cart.processingDescription': string;
            'app.screens.cart.processingTitle': string;
            'app.screens.cart.remove-confirm': string;
            'app.screens.cart.title': string;
            'app.screens.checkout-complete.go-to-order-button-title': string;
            'app.screens.checkout-complete.text': string;
            'app.screens.checkout-complete.title': string;
            'app.screens.checkout.payment-title': string;
            'app.screens.checkout.shipping-title': string;
            'app.screens.checkout.title': string;
            'app.screens.checkout.user-info-title': string;
            'app.screens.login.placeholders.email': string;
            'app.screens.login.placeholders.password': string;
            'app.screens.login.register-button': string;
            'app.screens.login.restore-password': string;
            'app.screens.login.submit-button': string;
            'app.screens.login.title': string;
            'app.screens.login.wrong-credentials': string;
            'app.screens.notFound.backButton': string;
            'app.screens.notFound.message': string;
            'app.screens.notFound.title': string;
            'app.screens.notifications-center.noNotificationsMessage': string;
            'app.screens.notifications-center.title': string;
            'app.screens.order.my-orders-button': string;
            'app.screens.order.title': string;
            'app.screens.orders.title': string;
            'app.screens.product.info': string;
            'app.screens.product.rating': string;
            'app.screens.product.tab-aria-label': string;
            'app.screens.profile.title': string;
            'app.screens.restore-password.description': string;
            'app.screens.restore-password.login': string;
            'app.screens.restore-password.login-failed': string;
            'app.screens.restore-password.registration': string;
            'app.screens.restore-password.success-instruction': string;
            'app.screens.restore-password.title': string;
            'app.screens.search.title': string;
            'app.screens.signup.login-link': string;
            'app.screens.signup.register': string;
            'app.screens.signup.title': string;
            'app.screens.vendor.catalog': string;
            'app.screens.vendor.info': string;
            'app.screens.vendor.rating': string;
            'app.screens.vendor.tab-aria-label': string;
            'app.screens.vendors.title': string;
            'app.screens.wishlist.empty': string;
            'app.screens.wishlist.empty-description': string;
            'app.screens.wishlist.title': string;
            'app.utils.messages.alt': string;
        };
        ru: {
            'app.common.removing': string;
            'app.common.sending': string;
            'app.common.loading': string;
            'app.common.clear': string;
            'app.common.saved-as-draft': string;
            'app.common.or': string;
            'app.common.back': string;
            'app.common.close': string;
            'app.screens.wishlist.title': string;
            'app.screens.wishlist.empty': string;
            'app.screens.wishlist.empty-description': string;
            'app.screens.cart.title': string;
            'app.screens.cart.empty': string;
            'app.screens.cart.empty-description': string;
            'app.screens.cart.remove-confirm': string;
            'app.screens.cart.processingTitle': string;
            'app.screens.cart.processingDescription': string;
            'app.screens.order.my-orders-button': string;
            'app.screens.order.title': string;
            'app.screens.checkout.user-info-title': string;
            'app.screens.checkout.payment-title': string;
            'app.screens.checkout.shipping-title': string;
            'app.screens.checkout.title': string;
            'app.components.orderCompleteButton.buttonName': string;
            'app.screens.checkout-complete.title': string;
            'app.screens.checkout-complete.text': string;
            'app.screens.checkout-complete.go-to-order-button-title': string;
            'app.screens.vendors.title': string;
            'app.components.vendor-signup.title': string;
            'app.components.vendor-signup.success-result': string;
            'app.components.vendor-signup.submit-label': string;
            'app.components.vendor-products.title': string;
            'app.screens.search.title': string;
            'app.screens.login.title': string;
            'app.screens.login.submit-button': string;
            'app.screens.login.register-button': string;
            'app.screens.login.wrong-credentials': string;
            'app.screens.login.placeholders.email': string;
            'app.screens.login.placeholders.password': string;
            'app.screens.login.restore-password': string;
            'app.screens.signup.title': string;
            'app.screens.signup.register': string;
            'app.screens.signup.login-link': string;
            'app.screens.restore-password.title': string;
            'app.screens.restore-password.description': string;
            'app.screens.restore-password.success-instruction': string;
            'app.screens.restore-password.login-failed': string;
            'app.screens.restore-password.login': string;
            'app.screens.restore-password.registration': string;
            'app.screens.profile.title': string;
            'app.components.profile-menu.orders-title': string;
            'app.components.profile.menu.login': string;
            'app.components.profile.menu.logout': string;
            'app.components.profile.menu.notifications': string;
            'app.components.profile.menu.profile': string;
            'app.components.profile.menu.register': string;
            'app.components.profile-form.submit': string;
            'app.components.user-avatar.avatar-alt': string;
            'app.components.user-avatar.guest-acronym': string;
            'app.cart.messages.need-auth': string;
            'app.cart.messages.success-added-to-cart': string;
            'app.api.errors.no-internet': string;
            'app.api.errors.not-found': string;
            'app.api.session-expired': string;
            'app.system.ready-to-update': string;
            'app.system.updated': string;
            'app.components.reviews.add-new-button': string;
            'app.components.reviews.form.textarea-title': string;
            'app.components.reviews.form.submit-title': string;
            'app.components.reviews.form.success-submit': string;
            'app.components.reviews.form.error-submit': string;
            'app.components.reviews.no-content': string;
            'app.components.reviews.total-reviews': string;
            'app.components.reviews.form.name-title': string;
            'app.components.userinfo.guest': string;
            'app.components.userinfo.guest-acronym': string;
            'app.form.sections.customer-information': string;
            'app.form.sections.billing-information': string;
            'app.form.sections.shipping-information': string;
            'app.form.sections.products-information': string;
            'app.form.labels.firstname': string;
            'app.form.labels.lastname': string;
            'app.form.labels.email': string;
            'app.form.labels.phone': string;
            'app.form.labels.country': string;
            'app.form.labels.county': string;
            'app.form.labels.zipcode': string;
            'app.form.labels.state': string;
            'app.form.labels.city': string;
            'app.form.labels.address': string;
            'app.form.labels.address2': string;
            'app.form.labels.payment-method': string;
            'app.form.email': string;
            'app.form.password': string;
            'app.form.validation.too-short': string;
            'app.form.validation.too-long': string;
            'app.form.validation.required': string;
            'app.form.validation.invalid-email': string;
            'app.form.submit-title': string;
            'app.form.reset-title': string;
            'app.screens.product.tab-aria-label': string;
            'app.screens.product.info': string;
            'app.screens.product.rating': string;
            'app.components.product-sorting.name': string;
            'app.components.product-sorting.price': string;
            'app.components.product-sorting.new-products': string;
            'app.components.product-sorting.bestsellers': string;
            'app.components.product-sorting.discounts': string;
            'app.components.vendor-sorting.name': string;
            'app.components.vendor-sorting.rating': string;
            'app.screens.orders.title': string;
            'app.common.order-sorting.date': string;
            'app.components.order.number': string;
            'app.components.product-order-item.amount': string;
            'app.components.order-single-item.title': string;
            'app.components.order.barcode': string;
            'app.common.sorting.alpha.asc': string;
            'app.common.sorting.alpha.desc': string;
            'app.common.sorting.number.asc': string;
            'app.common.sorting.number.desc': string;
            'app.common.sorting.date.asc': string;
            'app.common.sorting.date.desc': string;
            'app.components.quantity-selector.down': string;
            'app.components.quantity-selector.up': string;
            'app.components.quantity-selector.max-product-amount-achievement-warning': string;
            'app.common.address': string;
            'app.common.city': string;
            'app.common.state': string;
            'app.common.country': string;
            'app.components.vendor.registered': string;
            'app.screens.vendor.tab-aria-label': string;
            'app.screens.vendor.info': string;
            'app.screens.vendor.catalog': string;
            'app.screens.vendor.rating': string;
            'app.components.offline.title': string;
            'app.components.offline.message': string;
            'app.components.offline.reload-button': string;
            'app.components.offline-panel.title': string;
            'app.components.offline-panel.description': string;
            'app.components.offline-panel.reload-button': string;
            'app.components.no-content.title': string;
            'app.components.product-single-item.add-to-cart-button-title': string;
            'app.components.totals.subtotal': string;
            'app.components.totals.discount': string;
            'app.components.totals.shipping-cost': string;
            'app.components.totals.total': string;
            'app.components.totals.tax-added': string;
            'app.components.totals.tax-included': string;
            'app.components.checkout-button.button-name': string;
            'app.components.reviews.title': string;
            'app.components.search.products.placeholder': string;
            'app.components.products-selection.no-results': string;
            'app.components.products-selection.filters-button': string;
            'app.components.products-selection.filters-result': string;
            'app.components.main-menu.labels.hamburger': string;
            'app.components.main-menu.labels.home-button': string;
            'app.components.main-menu.labels.wishlist-button': string;
            'app.components.main-menu.labels.profile-button': string;
            'app.components.main-menu.labels.cart-button': string;
            'app.components.online-payment-handler.title': string;
            'app.components.online-payment-handler.currently-unavailable': string;
            'app.components.load-more.button-label': string;
            'app.components.article-list-item.timeToRead': string;
            'app.components.article-single-item.timeToRead': string;
            'app.components.article-sorting.date': string;
            'app.components.article-sorting.name': string;
            'app.components.article.singleItem.timeToRead': string;
            'app.components.cartError': string;
            'app.components.screenHandler.next': string;
            'app.components.gdpr.agreement.title': string;
            'app.components.gdpr.agreement.description': string;
            'app.components.gdpr.agreement.conditions': string;
            'app.components.gdpr.agreement.accept-button': string;
            'app.components.error-boundary.header': string;
            'app.components.error-boundary.fix-message': string;
            'app.components.error-boundary.help-message-before-refresh-button': string;
            'app.components.error-boundary.help-message-refresh-button': string;
            'app.components.error-boundary.help-message-after-refresh-button': string;
            'app.components.error-boundary.help-message-go-home-page-link': string;
            'app.components.error-boundary.help-message-go-back-button': string;
            'app.components.error-boundary.help-message-after-go-back-button': string;
            'app.utils.messages.alt': string;
            'app.screens.notifications-center.title': string;
            'app.screens.notifications-center.noNotificationsMessage': string;
            'app.components.vendor-products-item.view-product-page': string;
            'app.components.vendor-products-item.zero-product-amount': string;
            'app.components.vendor-products-item.add-to-cart-button-title': string;
            'app.components.action-banner.button-accept': string;
            'app.components.action-banner.button-decline': string;
            'app.components.install-prompt.android.accept': string;
            'app.components.install-prompt.android.decline': string;
            'app.components.install-prompt.android.text': string;
            'app.components.install-prompt.ios.decline': string;
            'app.components.install-prompt.ios.text': string;
            'app.components.breadcrumbs.aria-label': string;
            'app.components.popup-alert.closeButtonLabel': string;
            'app.components.popup-alert.closeButtonName': string;
            'app.components.notification-item.order-entity-name': string;
            'app.components.notification-item.title': string;
            'app.components.orders-selection.no-results': string;
            'app.components.profile.menu.orders': string;
            'app.screens.notFound.backButton': string;
            'app.screens.notFound.message': string;
            'app.screens.notFound.title': string;
            'app.components.reset-filters.button-title': string;
            'app.components.show-all.button-title': string;
            'app.components.split-button.aria-label': string;
            'app.components.wishlist-button.add-and-remove': string;
            'app.custom-forms.accept_terms.label': string;
            'app.custom-forms.default-checkbox-label.label': string;
            'app.form.checkbox.expand-aria-label': string;
        };
    };
    export default _default_2;
}
declare module "constants/EngineTypes" {
    type EngineTypes = 'cscart';
    export default EngineTypes;
}
declare module "config/IConfig" {
    import EngineTypes from "constants/EngineTypes";
    interface IConfig {
        /**
         * Layout string code to be requested from backend, replaces numeric id
         */
        layoutId: string;
        /**
         * Web-site url
         */
        baseUrl: string;
        /**
         * Backend web-site url
         */
        backendSiteUrl: string;
        /**
         * APi url for data request
         */
        backendApiUrl: string;
        /**
         * Api key for storefront-api-access-key header
         */
        backendApiKey: string;
        backendApiUsername: string;
        /**
         * Application name
         */
        appName: string;
        /**
         * By which engine api is driven
         */
        backendType: EngineTypes;
        defaultLanguage: string;
        availableLanguages: Array<string>;
        defaultCurrency: string;
        categorySmallIconWidth: number;
        categorySmallIconHeight: number;
        categoryBigIconWidth: number;
        categoryBigIconHeight: number;
        productSmallIconWidth: number;
        productSmallIconHeight: number;
        productBigIconWidth: number;
        productBigIconHeight: number;
        optionVariantSmallIconWidth: number;
        optionVariantSmallIconHeight: number;
        optionVariantBigIconWidth: number;
        optionVariantBigIconHeight: number;
        articleSmallIconWidth: number;
        articleSmallIconHeight: number;
        articleBigIconWidth: number;
        articleBigIconHeight: number;
        storefrontSettingsLifetime: number;
        layoutsLifetimeSeconds: number;
        schedulerInterval: number;
        windowResizeDebounceTime: number;
    }
    export default IConfig;
}
declare module "config/Config" {
    import IConfig from "config/IConfig";
    import EngineTypes from "constants/EngineTypes";
    export class Config {
        layoutId: string;
        baseUrl: string;
        backendSiteUrl: string;
        backendApiUrl: string;
        backendApiKey: string;
        backendApiUsername: string;
        appName: string;
        defaultLanguage: string;
        availableLanguages: Array<string>;
        defaultCurrency: string;
        backendType: EngineTypes;
        categorySmallIconWidth: number;
        categorySmallIconHeight: number;
        categoryBigIconWidth: number;
        categoryBigIconHeight: number;
        productSmallIconWidth: number;
        productSmallIconHeight: number;
        productBigIconWidth: number;
        productBigIconHeight: number;
        optionVariantSmallIconWidth: number;
        optionVariantSmallIconHeight: number;
        optionVariantBigIconWidth: number;
        optionVariantBigIconHeight: number;
        articleSmallIconWidth: number;
        articleSmallIconHeight: number;
        articleBigIconWidth: number;
        articleBigIconHeight: number;
        storefrontSettingsLifetime: number;
        layoutsLifetimeSeconds: number;
        schedulerInterval: number;
        windowResizeDebounceTime: number;
        constructor(data: IConfig);
        getConfigFromRootElement(): void;
        set<T extends keyof IConfig>(key: T, value: this[T] | null): void;
        validate(): void;
    }
    const config: Config;
    export default config;
}
declare module "url/index" {
    export enum UrlEntities {
        HOMEPAGE = "HOMEPAGE",
        DRAWER = "DRAWER",
        PROFILE = "PROFILE",
        WISHLIST = "WISHLIST",
        CART = "CART",
        CHECKOUT = "CHECKOUT",
        CHECKOUT_COMPLETE = "CHECKOUT_COMPLETE",
        ORDER_PAYMENT = "ORDER_PAYMENT",
        LOGIN = "LOGIN",
        REGISTRATION = "REGISTRATION",
        PRODUCTS = "PRODUCTS",
        PRODUCT = "PRODUCT",
        CATEGORIES = "CATEGORIES",
        CATEGORY = "CATEGORY",
        ARTICLES = "ARTICLES",
        ARTICLE = "ARTICLE",
        NOT_FOUND = "NOT_FOUND",
        ORDERS = "ORDERS",
        ORDER = "ORDER",
        SEARCH = "SEARCH",
        ONLINE_PAYMENT = "ONLINE_PAYMENT",
        NOTIFICATIONS = "NOTIFICATIONS",
        RESTORE_PASSWORD = "RESTORE_PASSWORD"
    }
    /**
     * @deprecated
     *
     * @param itemType
     * @param params
     */
    export const _createLinkUrl: (itemType: UrlEntities, params?: any) => string;
    export const createLinkUrl: (routeUrl: string, params?: any) => string;
    /**
     * Prepare route url with params like :language and :itemId
     *
     * @param itemType
     */
    export const createRouteUrl: (itemType: UrlEntities) => string;
    export const createHomepageRouteUrl: () => string;
    export const createDrawerRouteUrl: () => string;
    export const createCategoryRouteUrl: () => string;
    export const createArticleRouteUrl: () => string;
    export const createProductRouteUrl: () => string;
    export const createNotFoundRouteUrl: () => string;
    export const createProfileRouteUrl: () => string;
    export const createWishlistRouteUrl: () => string;
    export const createCartRouteUrl: () => string;
    export const createCheckoutRouteUrl: () => string;
    export const createCheckoutCompleteRouteUrl: () => string;
    export const createOrderPaymentRouteUrl: () => string;
    export const createLoginRouteUrl: () => string;
    export const createRegistrationRouteUrl: () => string;
    export const createOrdersRouteUrl: () => string;
    export const createOrderRouteUrl: () => string;
    export const createSearchRouteUrl: () => string;
    export const createNotificationsRouteUrl: () => string;
    export const createRestorePasswordRouteUrl: () => string;
    export const createHomepageLinkUrl: () => string;
    export const createDrawerLinkUrl: () => string;
    export const createCategoryLinkUrl: (slug: string) => string;
    export const createArticleLinkUrl: (slug: string) => string;
    export const createProductLinkUrl: (slug: string) => string;
    export const createNotFoundLinkUrl: () => string;
    export const createProfileLinkUrl: () => string;
    export const createWishlistLinkUrl: () => string;
    export const createCartLinkUrl: () => string;
    export const createCheckoutLinkUrl: () => string;
    export const createCheckoutCompleteLinkUrl: (id: number) => string;
    export const createOrderPaymentLinkUrl: (id: number) => string;
    export const createLoginLinkUrl: () => string;
    export const createRegistrationLinkUrl: () => string;
    export const createOrdersLinkUrl: () => string;
    export const createOrderLinkUrl: (id: number) => string;
    export const createSearchLinkUrl: (query?: string | undefined) => string;
    export const createNotificationsLinkUrl: () => string;
    export const createRestorePasswordLinkUrl: () => string;
    export const getLanguageFromUrl: (pathname?: string) => string;
    export const getLocationPathname: () => string;
    export const getUrlWithNewLanguage: (url: string, language: string) => string;
    /**
     * Check if url is external
     *
     * @param {string} url
     *
     * @returns true if link is external
     */
    export const isUrlExternal: (url: string, host?: string) => boolean;
    /**
     * Check if url is internal
     *
     * @param {string} url
     *
     * @returns true if link is internal
     */
    export const isUrlInternal: (url: string, host?: string) => boolean;
    /**
     * Convert absolute url to relative
     *
     * @example convertAbsoluteUrlToRelative('http://google.com/catalog/')
     *
     *
     * @param {string} url - url to convert
     *
     * @returns string - relative url
     */
    export const convertAbsoluteUrlToRelative: (url: string) => string;
    /**
     * Get site's full url
     *
     * @returns url through window.location if baseUrl exist in config otherwise url through config
     */
    export const getBaseUrl: () => string;
    export const getBaseUrlMemoized: (() => string) & import("lodash").MemoizedFunction;
    /**
     * Get site's full url
     *
     * @example getUrlWithFullPath('/en/catalog/electronics')
     *
     * @param {string} url - url that is added to baseUrl
     *
     * @returns url with full address to page
     */
    export const getUrlWithFullPath: (url: string) => string;
}
declare module "intl/IntlGlobalProvider" {
    import { IntlShape } from 'react-intl';
    export let intl: IntlShape;
    /**
     * Change
     * @param locale
     */
    export const setupIntl: (locale: string) => IntlShape | undefined;
    export default intl;
}
declare module "intl/addMessages" {
    import { IInjectMessages } from "intl/TranslationsEvent";
    const addMessages: ({ locale, messages }: IInjectMessages, newMessages: IInjectMessages['messages']) => void;
    export default addMessages;
}
declare module "components/subcomponents/button/IButton" {
    import { ButtonProps } from '@material-ui/core/Button';
    export interface IOwnProps {
        appearance?: 'primary' | 'secondary' | 'dark';
        /**
         * Render custom button content
         * It will be wrapped by clickable element
         */
        render?: () => React.ReactNode;
    }
    export type IProps<C extends React.ElementType> = Omit<ButtonProps<C, {
        component?: C;
    }>, 'color' & 'size' & 'variant'> & IOwnProps;
}
declare module "components/subcomponents/button/Button" {
    import React from 'react';
    import { IProps } from "components/subcomponents/button/IButton";
    import './Button.css';
    /**
     * Main button component
     *
     * @param props
     */
    function Button<C extends React.ElementType>(props: IProps<C>): JSX.Element;
    export default Button;
}
declare module "entities/services/payment/PaymentService" {
    import React from 'react';
    class PaymentService {
        payments: IPayments;
        registerPayment(payment: IPayment): void;
        getPaymentForm(code: string): IPaymentFormComponent | undefined;
        getPaymentHandler(code: string): IPaymentHandlerComponent | undefined;
    }
    export default PaymentService;
    interface IPayment {
        code: string;
        /**
         * Form or any other component to be display before checkout complete
         */
        form?: IPaymentFormComponent;
        /**
         * Form or any other component to be display after checkout complete
         */
        handler?: IPaymentHandlerComponent;
    }
    interface IPayments {
        [code: string]: IPayment;
    }
    type IPaymentFormComponent = React.LazyExoticComponent<React.FC<{
        onChange: (data: any, isValid: boolean) => void;
    }>>;
    type IPaymentHandlerComponent = React.LazyExoticComponent<React.FC<unknown>>;
}
declare module "services/payment/paymentService" {
    import PaymentService from "entities/services/payment/PaymentService";
    const paymentService: PaymentService;
    export default paymentService;
}
declare module "utils/event-emitter/AsyncEventEmitter" {
    export class AsyncEventEmitter<T> {
        subscribers: ISubscribers<any>;
        isDebug: boolean;
        on<A = T>(eventName: string, callback: (data: A) => Promise<void>): {
            unsubscribe: () => void;
        };
        emit(eventName: string, data: T): Promise<void>;
        off(eventName: string, callbackToRemove: (data: T) => void): void;
        debug(): void;
        protected getSubscribersByEventName(eventName: string): Array<(data: T) => Promise<void>>;
    }
    interface ISubscribers<T> {
        [key: string]: Array<(data: T) => Promise<void>>;
    }
    export const areEventNamesEqual: (eventName: string, subscriberName: string) => boolean;
}
declare module "components/layout-handler/subscriber/layoutHandlerSubscriber" {
    import { AsyncEventEmitter } from "utils/event-emitter/AsyncEventEmitter";
    const layoutHandlerSubscriber: AsyncEventEmitter<unknown>;
    export default layoutHandlerSubscriber;
}
declare module "constants/LayoutContainerTypes" {
    enum LayoutContainerTypes {
        TOP_PANEL = "TOP_PANEL",
        HEADER = "HEADER",
        CONTENT = "CONTENT",
        FOOTER = "FOOTER"
    }
    export default LayoutContainerTypes;
}
declare module "entities/IExtra" {
    export type IExtra = Record<string, unknown>;
}
declare module "entities/layout/IBlock" {
    import LayoutContainerTypes from "constants/LayoutContainerTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IBlock<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        /**
         * Available only on this device types
         * @example ["desktop", "mobile"]
         */
        deviceTypes: Array<string>;
        /**
         * Title for a block
         */
        title: string;
        /**
         * Should show title at layout
         */
        shouldShowTitle: boolean;
        position: number;
        /**
         * @example spaProducts
         */
        type: string;
        /**
         * Block subtype based on template path
         */
        modifier?: string;
        props: any;
        /**
         * Type of a layout container for blocks
         */
        container: LayoutContainerTypes;
        /**
         * Disposition
         */
        disposition: 'full_screen_width' | 'grid_width';
    }
    export default IBlock;
}
declare module "entities/layout/Block" {
    import LayoutContainerTypes from "constants/LayoutContainerTypes";
    import { IExtra } from "entities/IExtra";
    import IBlock from "entities/layout/IBlock";
    class Block<T extends IExtra = any> {
        id: number;
        deviceTypes: Array<string>;
        title: string;
        shouldShowTitle: boolean;
        position: number;
        props: any;
        modifier?: string;
        disposition: 'full_screen_width' | 'grid_width';
        type: string;
        container: LayoutContainerTypes;
        extra: T;
        constructor(block: IBlock<T>);
    }
    export default Block;
}
declare module "services/extension-filesystem/ExtensionFilesystemService" {
    export class ExtensionFilesystemService {
        filenames: Array<string>;
        constructor(filenames: Array<string>);
        getFactoryAsset(entityName: string): string | undefined;
        getParserAsset(entityName: string): string | undefined;
        getScreensAssets(): Array<string> | undefined;
        getBlockFactoryAsset(blockName: string): string | undefined;
        getBlockComponentAsset(blockName: string): string | undefined;
        protected findAssetByRegexp(regexp: RegExp): string | undefined;
        protected filterAssetByRegexp(regexp: RegExp): Array<string> | undefined;
    }
    export const extensionFilesystemService: ExtensionFilesystemService;
}
declare module "entities/services/layout/LayoutService" {
    import React from 'react';
    import { ExtensionFilesystemService } from "services/extension-filesystem/ExtensionFilesystemService";
    export interface ILayoutService {
        filesystem: ExtensionFilesystemService;
    }
    class LayoutService {
        protected _blocks: IBlocks;
        protected _cache: Record<string, React.LazyExoticComponent<React.ComponentType<any>>>;
        protected filesystem: ExtensionFilesystemService;
        constructor(data: ILayoutService);
        registerBlock(block: IBlock): void;
        getBlockComponent(code: string): React.LazyExoticComponent<any> | undefined;
        getBlockFactory(code: string): Promise<IPropsFactory | undefined>;
        getBlock(code: string): IBlock | undefined;
    }
    export default LayoutService;
    interface IBlock {
        code: string;
        /**
         * Form or any other component to be display as a block component
         */
        component?: React.LazyExoticComponent<any>;
        factory?: () => Promise<IPropsFactory>;
    }
    type IPropsFactory<T = any, F = any> = (data: F) => T;
    interface IBlocks {
        [code: string]: IBlock;
    }
}
declare module "services/layout/layoutService" {
    import LayoutService from "entities/services/layout/LayoutService";
    const layoutService: LayoutService;
    export default layoutService;
}
declare module "constants/LayoutTypes" {
    /**
     * name = dispatch keyword at block manager of cscart
     */
    enum LayoutTypes {
        DEFAULT = "default",
        CATEGORY = "categories.view",
        PRODUCT = "products.view",
        ARTICLE = "pages.view",
        WISHLIST = "wishlist",
        MENU = "Menu",
        HOME = "index",
        DRAWER = "drawer",
        CART = "checkout.cart",
        CHECKOUT = "checkout",
        CHECKOUT_COMPLETE = "checkout.complete",
        PROFILE = "profiles",
        SIGNUP = "signup",
        SIGNIN = "signin",
        ORDERS = "orders",
        ORDER = "orders.details",
        VENDORS = "companies.catalog",
        VENDOR = "companies.view",
        VENDOR_SIGNUP = "companies.signup",
        SEARCH = "search",
        NOTIFICATIONS = "notifications-center",
        RESTORE_PASSWORD = "restore-password"
    }
    export default LayoutTypes;
}
declare module "entities/layout/ILayout" {
    import LayoutTypes from "constants/LayoutTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import Block from "entities/layout/Block";
    interface ILayout<T extends IExtra = any> extends IEntityExtendable<T> {
        type: LayoutTypes;
        blocks: Array<Block>;
    }
    export default ILayout;
}
declare module "entities/layout/Layout" {
    import ILayout from "entities/layout/ILayout";
    import LayoutTypes from "constants/LayoutTypes";
    import Block from "entities/layout/Block";
    import { IExtra } from "entities/IExtra";
    class Layout<T extends IExtra = any> {
        type: LayoutTypes;
        blocks: Array<Block>;
        extra: T;
        constructor(layout: ILayout<T>);
    }
    export default Layout;
}
declare module "components/layout-handler/ILayoutHandler" {
    import LayoutTypes from "constants/LayoutTypes";
    import Layout from "entities/layout/Layout";
    export interface IOwnProps {
        withoutTitles?: boolean;
        type: LayoutTypes;
        slug?: string;
        children?: React.ReactNode;
        contentPlaceholder?: React.ReactElement;
    }
    export interface IStateProps {
        layout?: Layout;
        language: string;
    }
    export interface IDispatchProps {
        getLayout: (type: LayoutTypes, slug?: string) => void;
        setLayoutIsVisible: (type: LayoutTypes) => void;
        setLayoutIsInvisible: (type: LayoutTypes) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "constants/DeviceTypes" {
    enum DeviceTypes {
        MOBILE = "mobile",
        TABLET = "tablet",
        DESKTOP = "desktop"
    }
    export default DeviceTypes;
}
declare module "utils/responsive/getMatchedLayoutType" {
    import DeviceTypes from "constants/DeviceTypes";
    /**
     * Determine device type by viewport width
     *
     * @param {number} width - viewport width
     *
     * @returns {DeviceTypes}
     */
    const getMatchedLayoutType: (width: number) => DeviceTypes;
    export default getMatchedLayoutType;
}
declare module "hooks/use-layout-type/useLayoutType" {
    import DeviceTypes from "constants/DeviceTypes";
    function useLayoutType(): {
        isMobile: boolean;
        isTablet: boolean;
        isDesktop: boolean;
        value: DeviceTypes;
    };
    export default useLayoutType;
}
declare module "components/blocks/IBlockProps" {
    export interface ISimpleBlockProps {
        hideTitle?: boolean;
        title?: string;
    }
    export interface IBlockProps extends ISimpleBlockProps {
        disposition: string;
    }
    export default IBlockProps;
}
declare module "components/blocks/html-block/IHtmlBlock" {
    import IBlockProps from "components/blocks/IBlockProps";
    export interface IOwnProps extends IBlockProps {
        content: string;
    }
}
declare module "components/blocks/html-block/HtmlBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/html-block/IHtmlBlock";
    import './HtmlBlock.css';
    /**
     * Custom html block
     * @param {IOwnProps} props
     */
    const HtmlBlock: React.FC<IOwnProps>;
    export default HtmlBlock;
}
declare module "entities/menu/IMenuItem" {
    interface IMenuItem {
        id: number;
        subitems: Array<IMenuItem>;
        title: string;
        position: number;
        href?: string;
        parentId?: number;
    }
    export default IMenuItem;
}
declare module "entities/menu/MenuItem" {
    import IMenuItem from "entities/menu/IMenuItem";
    class MenuItem {
        id: number;
        title: string;
        position: number;
        href?: string;
        subitems: Array<MenuItem>;
        parentId?: number;
        constructor(menu: IMenuItem);
    }
    export default MenuItem;
}
declare module "components/subcomponents/icon/IIcon" {
    import { SVGAttributes } from 'react';
    export interface IOwnProps {
        /**
         * If true - it'll flipped on rtl
         * What to flip https://material.io/design/usability/bidirectionality.html#localization
         */
        rtl?: boolean;
        /**
         * SVG react component
         */
        icon: React.ComponentType<SVGAttributes<SVGElement>>;
        /**
         * Size of a svg
         */
        size?: 24;
    }
    export type IProps = IOwnProps & SVGAttributes<SVGElement>;
}
declare module "components/subcomponents/icon/Icon" {
    import React from 'react';
    import { IProps } from "components/subcomponents/icon/IIcon";
    import './Icon.css';
    /**
     * Wrapper for svg icons
     *
     * @param props
     */
    const Icon: React.FC<IProps>;
    export default Icon;
}
declare module "entities/menu/IMenu" {
    import MenuItem from "entities/menu/MenuItem";
    interface IMenu {
        items: Array<MenuItem>;
    }
    export default IMenu;
}
declare module "entities/menu/Menu" {
    import IMenu from "entities/menu/IMenu";
    import MenuItem from "entities/menu/MenuItem";
    class Menu {
        items: Array<MenuItem>;
        constructor(menu: IMenu);
    }
    export default Menu;
}
declare module "components/blocks/menu-block/IMenuBlock" {
    import IBlockProps from "components/blocks/IBlockProps";
    import Menu from "entities/menu/Menu";
    export interface IOwnProps extends IBlockProps {
        menu: Menu;
        classModifier?: string;
    }
}
declare module "components/blocks/menu-block/MenuBlock" {
    import React from 'react';
    import MenuItem from "entities/menu/MenuItem";
    import { IOwnProps } from "components/blocks/menu-block/IMenuBlock";
    import './MenuBlock.css';
    const MenuBlock: React.FC<IOwnProps>;
    export default MenuBlock;
    export const flatTree: (tree: Array<MenuItem>, result?: Array<MenuBlockItem>) => Array<MenuBlockItem>;
    interface MenuBlockItem {
        title: string;
        parentId: number;
        position: number;
        id: number;
        childrenCount: number;
        href?: string;
    }
}
declare module "components/subcomponents/lazy-load-handler/ILazyLoadHandler" {
    export interface IOwnProps {
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/lazy-load-handler/LazyLoadHandler" {
    import React from 'react';
    import { IProps } from "components/subcomponents/lazy-load-handler/ILazyLoadHandler";
    import './LazyLoadHandler.css';
    /**
     * Children will render only after its appears in viewport
     *
     * @param props
     */
    const LazyLoadHandler: React.FC<IProps>;
    export default LazyLoadHandler;
}
declare module "entities/banner/IBanner" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IBanner<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        title: string;
        description: string;
        position: number;
        /**
         * To this url banner should lead on click
         */
        url?: string;
        image: string;
        alt: string;
    }
    export default IBanner;
}
declare module "entities/banner/Banner" {
    import { IExtra } from "entities/IExtra";
    import IBanner from "entities/banner/IBanner";
    /**
     * Banner entity
     */
    class Banner<T extends IExtra = any> {
        id: number;
        title: string;
        description: string;
        position: number;
        url?: string;
        image: string;
        alt: string;
        extra: T;
        constructor(banner: IBanner<T>);
    }
    export default Banner;
}
declare module "components/blocks/banners-block/IBannersBlock" {
    import Banner from "entities/banner/Banner";
    import IBlockProps from "components/blocks/IBlockProps";
    export interface IOwnProps extends IBlockProps {
        banners: Array<Banner>;
    }
    export type IProps = IOwnProps;
}
declare module "entities/auth/IProfile" {
    interface IProfile {
        firstname: string;
        lastname: string;
        /**
         * First letters of a user's name
         */
        acronym: string;
        color: string;
        userId: number;
        login: string;
        email: string;
        companyName: string;
        companyId: number;
    }
    export default IProfile;
}
declare module "utils/string/acronym" {
    const acronym: (string: string) => string;
    export default acronym;
}
declare module "utils/string/hashCode" {
    const hashCode: (string: string) => number;
    export default hashCode;
}
declare module "utils/color/intToRgb" {
    const intToRGB: (i: number) => string;
    export default intToRGB;
}
declare module "entities/auth/Profile" {
    import IProfile from "entities/auth/IProfile";
    /**
     * User profile information
     */
    class Profile implements IProfile {
        firstname: string;
        lastname: string;
        acronym: string;
        color: string;
        userId: number;
        email: string;
        login: string;
        companyName: string;
        companyId: number;
        constructor(rawProfile: any);
        get isLogged(): boolean;
    }
    export default Profile;
}
declare module "entities/error/IApiError" {
    interface IApiError {
        status: number;
        message: string;
        shouldRetry: boolean;
        type?: string;
    }
    export default IApiError;
}
declare module "entities/error/ApiError" {
    import IApiError from "entities/error/IApiError";
    /**
     * Api error representation
     */
    class ApiError implements IApiError {
        status: number;
        message: string;
        shouldRetry: boolean;
        type?: string;
        constructor(rawError: any);
    }
    export default ApiError;
}
declare module "constants/AuthProviders" {
    enum AuthProviders {
        EMAIL_PASSWORD = "email_password",
        RESTORE_TOKEN = "restore_token",
        GOOGLE = "google"
    }
    export default AuthProviders;
}
declare module "entities/form/IFormFieldValue" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IFormFieldValue<T extends IExtra = any> extends IEntityExtendable<T> {
        label: string;
        value: string | number;
        /**
         * Some special criteria (for filtering values for example)
         */
        criteria?: string | number;
    }
    export default IFormFieldValue;
}
declare module "entities/form/FormFieldValue" {
    import { IExtra } from "entities/IExtra";
    import IFormFieldValue from "entities/form/IFormFieldValue";
    class FormFieldValue<T extends IExtra = any> {
        label: string;
        value: string | number;
        criteria?: string | number;
        extra: T;
        constructor(data: IFormFieldValue<T>);
    }
    export default FormFieldValue;
}
declare module "constants/FieldTypes" {
    enum FieldTypes {
        EMAIL = "email",
        PASSWORD = "password",
        SELECTBOX = "select",
        SLAVE_SELECTBOX = "slave-select",
        CHECKBOX = "checkbox",
        TEXT = "text",
        MULTILINE_TEXT = "multiline-text",
        NUMBER = "NUMBER",
        DATETIME = "DATETIME",
        DATE = "DATE",
        RADIO = "R",
        COUNTRY = "O",
        STATE = "A"
    }
    export default FieldTypes;
}
declare module "entities/form/IFormField" {
    import FieldTypes from "constants/FieldTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IFormField<T extends IExtra = any> extends IEntityExtendable<T> {
        type: FieldTypes;
        label: string;
        description?: string;
        name: string;
        isRequired: boolean;
        isEnabled: boolean;
        values?: Array<any>;
        value: string | number | boolean;
    }
    export default IFormField;
}
declare module "entities/form/FormField" {
    import FormFieldValue from "entities/form/FormFieldValue";
    import FieldTypes from "constants/FieldTypes";
    import IFormField from "entities/form/IFormField";
    import { IExtra } from "entities/IExtra";
    class FormField<T extends IExtra = any> {
        name: string;
        label: string;
        description?: string;
        type: FieldTypes;
        isRequired: boolean;
        isEnabled: boolean;
        value: string | number | boolean;
        values?: FormFieldValue[];
        extra: T;
        constructor(data: IFormField);
    }
    export default FormField;
}
declare module "entities/form/IFormSection" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import FormField from "entities/form/FormField";
    interface IFormSection<T extends IExtra = any> extends IEntityExtendable<T> {
        id: string;
        title?: string;
        fields: Array<FormField>;
    }
    export default IFormSection;
}
declare module "entities/form/FormSection" {
    import { IExtra } from "entities/IExtra";
    import FormField from "entities/form/FormField";
    import IFormSection from "entities/form/IFormSection";
    class FormSection<T extends IExtra = any> {
        id: string;
        title?: string;
        fields: FormField[];
        extra: T;
        constructor(data: IFormSection);
    }
    export default FormSection;
}
declare module "entities/form/IFormSchema" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import FormSection from "entities/form/FormSection";
    export interface IFormSchema<T extends IExtra = any> extends IEntityExtendable<T> {
        sections: FormSection[];
    }
    export default IFormSchema;
}
declare module "entities/form/FormSchema" {
    import FormSection from "entities/form/FormSection";
    import FormField from "entities/form/FormField";
    import IFormSchema from "entities/form/IFormSchema";
    import { IExtra } from "entities/IExtra";
    class FormSchema<T extends IExtra = any> {
        sections: FormSection[];
        extra: T;
        constructor(data: IFormSchema);
        getFields(): FormField[];
        setValues(data: any): FormSchema;
    }
    export default FormSchema;
}
declare module "redux/reducers/auth/IAuthState" {
    import Profile from "entities/auth/Profile";
    import ApiError from "entities/error/ApiError";
    import AuthProviders from "constants/AuthProviders";
    import FormSchema from "entities/form/FormSchema";
    interface AuthState {
        /**
         * By which provider user was authenticated
         */
        provider: AuthProviders | null;
        isLogged: boolean;
        isLoginFailed: boolean;
        isRestorePasswordFailed: boolean;
        isLoginRequesting: boolean;
        token?: string;
        userId?: number;
        email?: string;
        profile: Profile | null;
        signupForm: {
            error: ApiError | null;
            form: FormSchema | null;
        };
        updateProfileForm: {
            error: ApiError | null;
            form: FormSchema | null;
            isFormRequesting: boolean;
            isPostRequesting: boolean;
            postError: ApiError | null;
        };
        restorePasswordForm: {
            isRequesting: boolean;
            isSuccess: boolean;
            email: null | string;
        };
    }
    export default AuthState;
}
declare module "redux/reducers/navigation-bar/INavigationBarState" {
    export interface IAction {
        label: string;
        icon: React.FC<any>;
        component?: () => React.ReactNode;
        onClick?: () => void;
    }
    export interface INavigationBarState {
        type: {
            isPageState: boolean;
            isActionState: boolean;
            isContextState: boolean;
        };
        title?: string;
        actionComponent?: () => React.ReactNode;
        onContextClose?: () => void;
        actions: Array<IAction>;
    }
    export default INavigationBarState;
}
declare module "entities/product/ISelectedOption" {
    interface ISelectedOption {
        optionId: number;
        value: any;
    }
    export default ISelectedOption;
}
declare module "entities/cart/IAddToCart" {
    import ISelectedOption from "entities/product/ISelectedOption";
    interface IAddToCart {
        productId: number;
        amount: number;
        productOptions?: Array<ISelectedOption>;
    }
    export default IAddToCart;
}
declare module "entities/cart/AddToCart" {
    import IAddToCart from "entities/cart/IAddToCart";
    import ISelectedOption from "entities/product/ISelectedOption";
    /**
     * Minimal product entity for request
     * 1. Add a product to cart
     * 2. Update product at cart
     * 3. Request product from api with params (options for example)
     */
    class AddToCart implements IAddToCart {
        productId: number;
        amount: number;
        productOptions?: Array<ISelectedOption>;
        constructor(rawRequest: any);
        addAmount(amount: number): AddToCart;
        setAmount(amount: number): AddToCart;
        selectOption(optionId: number, value: any): this;
        getSelectedOptions(): Array<ISelectedOption>;
        /**
         * Returns true if both add to cart items are the same products, exept amount property
         */
        isEqual(another: AddToCart): boolean;
        /**
         * Returns true if both add to cart items are the same products
         */
        isSame(another: AddToCart): boolean;
        /**
         * String id, unique to the same request params
         */
        toString(): string;
        get uuid(): string;
    }
    export default AddToCart;
}
declare module "entities/IEntityWithSlug" {
    export interface IEntityWithSlug {
        /**
         * Url to this entity
         */
        url: string;
        /**
         * Seo representation of id based on name
         */
        slug: string;
    }
}
declare module "entities/parent/IParent" {
    interface IParent {
        /**
         * Numeric id of the entity
         */
        id: number;
        /**
         * Url to relative entity
         */
        url: string;
        /**
         * Title for the link
         */
        name: string;
        /**
         * Parents of this parent
         */
        parents: Array<IParent>;
    }
    export default IParent;
}
declare module "entities/parent/Parent" {
    import IParent from "entities/parent/IParent";
    /**
     * Entity for parent representation
     * Product has categories as parents, categories has categories as parents and etc.
     */
    class Parent {
        id: number;
        url: string;
        name: string;
        parents: Array<Parent>;
        constructor(parent: IParent);
    }
    export default Parent;
}
declare module "entities/IWIthParents" {
    import Parent from "entities/parent/Parent";
    interface IWithParents {
        parents: Array<Parent>;
    }
    export default IWithParents;
}
declare module "entities/product/IProductFeatureVariant" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IProductFeatureVariant<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        description: string;
        /**
         * ID of the feature the variant is assigned to.
         */
        featureId: number;
        /**
         * Type of the feature the variant is assigned to.
         */
        featureType: string;
        position: number;
        /**
         * ID of the selected variant
         */
        selected: number;
    }
    export default IProductFeatureVariant;
}
declare module "entities/product/IProductFeature" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import IProductFeatureVariant from "entities/product/IProductFeatureVariant";
    interface IProductFeature<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        description: string;
        position: number;
        prefix: string;
        value: any;
        /**
         * ID of the selected variant
         */
        variantId?: number;
        variants?: Array<IProductFeatureVariant>;
        type: string;
    }
    export default IProductFeature;
}
declare module "entities/product/ProductFeatureVariant" {
    import { IExtra } from "entities/IExtra";
    import IProductFeatureVariant from "entities/product/IProductFeatureVariant";
    class ProductFeatureVariant<T extends IExtra = any> {
        id: number;
        name: string;
        description: string;
        featureId: number;
        featureType: string;
        position: number;
        selected: number;
        extra: T;
        constructor(variant: IProductFeatureVariant<T>);
    }
    export default ProductFeatureVariant;
}
declare module "entities/product/ProductFeature" {
    import { IExtra } from "entities/IExtra";
    import IProductFeature from "entities/product/IProductFeature";
    import ProductFeatureVariant from "entities/product/ProductFeatureVariant";
    /**
     * Product feature entity
     */
    class ProductFeature<T extends IExtra = any> {
        id: number;
        name: string;
        description: string;
        position: number;
        prefix: string;
        value: string | number;
        variantId?: number;
        variants?: Array<ProductFeatureVariant>;
        type: string;
        extra: T;
        constructor(feature: IProductFeature<T>);
    }
    export default ProductFeature;
}
declare module "entities/image-pair/IIcon" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IIcon<T extends IExtra = any> extends IEntityExtendable<T> {
        height: number;
        width: number;
        url: string;
        alt: string;
    }
    export default IIcon;
}
declare module "entities/image-pair/IImagePair" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import IIcon from "entities/image-pair/IIcon";
    interface IImagePair<T extends IExtra = any> extends IEntityExtendable<T> {
        position: number;
        icons: Array<IIcon>;
    }
    export default IImagePair;
}
declare module "entities/image-pair/Icon" {
    import { IExtra } from "entities/IExtra";
    import IIcon from "entities/image-pair/IIcon";
    class Icon<T extends IExtra = any> {
        height: number;
        width: number;
        url: string;
        alt: string;
        extra: T;
        constructor(icon: IIcon<T>);
    }
    export default Icon;
}
declare module "entities/image-pair/ImagePair" {
    import IImagePair from "entities/image-pair/IImagePair";
    import Icon from "entities/image-pair/Icon";
    import { IExtra } from "entities/IExtra";
    class ImagePair<T extends IExtra = any> {
        position: number;
        icons: Array<Icon>;
        extra: T;
        constructor(image: IImagePair<T>);
        getIconBySize(width: number, height: number): Icon | null;
        isEmpty(): boolean;
    }
    export default ImagePair;
}
declare module "constants/ProductOptionTypes" {
    enum ProductOptionTypes {
        SELECT = "select",
        TEXT = "input"
    }
    export default ProductOptionTypes;
}
declare module "constants/PriceModifierTypes" {
    enum PriceModifierTypes {
        ABSOLUTE = "absolute",
        PERCENT = "percent"
    }
    export default PriceModifierTypes;
}
declare module "entities/product/IProductOptionVariant" {
    import PriceModifierTypes from "constants/PriceModifierTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import ImagePair from "entities/image-pair/ImagePair";
    interface IProductOptionVariant<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        optionId: number;
        name: string;
        modifier: number;
        modifierType: PriceModifierTypes;
        position: number;
        mainPair: ImagePair | null;
    }
    export default IProductOptionVariant;
}
declare module "entities/product/ProductOptionVariant" {
    import PriceModifierTypes from "constants/PriceModifierTypes";
    import ImagePair from "entities/image-pair/ImagePair";
    import Icon from "entities/image-pair/Icon";
    import IProductOptionVariant from "entities/product/IProductOptionVariant";
    import { IExtra } from "entities/IExtra";
    class ProductOptionVariant<T extends IExtra = any> {
        id: number;
        optionId: number;
        name: string;
        modifier: number;
        position: number;
        modifierType: PriceModifierTypes;
        mainPair: ImagePair | null;
        extra: T;
        constructor(variant: IProductOptionVariant<T>);
        getSmallIcon(): Icon | null;
        getBigIcon(): Icon | null;
    }
    export default ProductOptionVariant;
}
declare module "entities/product/IProductOption" {
    import ProductOptionTypes from "constants/ProductOptionTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import ProductOptionVariant from "entities/product/ProductOptionVariant";
    interface IProductOption<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        value: string | number;
        type: ProductOptionTypes;
        variants: Array<ProductOptionVariant>;
        position: number;
    }
    export default IProductOption;
}
declare module "entities/product/ProductOption" {
    import IProductOption from "entities/product/IProductOption";
    import ProductOptionVariant from "entities/product/ProductOptionVariant";
    import ProductOptionTypes from "constants/ProductOptionTypes";
    import { IExtra } from "entities/IExtra";
    class ProductOption<T extends IExtra = any> {
        id: number;
        name: string;
        value: string | number;
        type: ProductOptionTypes;
        variants: Array<ProductOptionVariant>;
        position: number;
        extra: T;
        constructor(option: IProductOption<T>);
        select(value: any): boolean;
        isWithImages(): boolean;
    }
    export default ProductOption;
}
declare module "entities/seo/ISeoSnippet" {
    interface ISeoSnippet {
        title: string;
        metaDescription: string;
    }
    export default ISeoSnippet;
}
declare module "entities/product/ISeoSnippet" {
    import ISeoSnippet from "entities/seo/ISeoSnippet";
    interface IProductSeoSnippet extends ISeoSnippet {
        availability: string;
        description: string;
        name: string;
        price: number;
        currency: string;
        code: string;
    }
    export default IProductSeoSnippet;
}
declare module "entities/product/SeoSnippet" {
    import IProductSeoSnippet from "entities/product/ISeoSnippet";
    /**
     * Data for schema.org and html seo (title, meta description and etc.)
     */
    class SeoSnippet {
        title: string;
        metaDescription: string;
        availability: string;
        description: string;
        name: string;
        price: number;
        currency: string;
        code: string;
        constructor(seoSnippet: IProductSeoSnippet);
    }
    export default SeoSnippet;
}
declare module "entities/product/IVariationVariant" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IVariationVariant<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        position: number;
        slug: string;
        price: number;
        productId: number;
    }
    export default IVariationVariant;
}
declare module "entities/product/VariationVariant" {
    import { IExtra } from "entities/IExtra";
    import IVariationVariant from "entities/product/IVariationVariant";
    class VariationVariant<T extends IExtra = any> {
        id: number;
        name: string;
        position: number;
        slug: string;
        price: number;
        productId: number;
        extra: T;
        constructor(variant: IVariationVariant<T>);
    }
    export default VariationVariant;
}
declare module "entities/product/IVariation" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import VariationVariant from "entities/product/VariationVariant";
    interface IVariation<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        position: number;
        name: string;
        variants: Array<VariationVariant>;
        selectedId: number;
    }
    export default IVariation;
}
declare module "entities/product/Variation" {
    import { IExtra } from "entities/IExtra";
    import IVariation from "entities/product/IVariation";
    import VariationVariant from "entities/product/VariationVariant";
    class Variation<T extends IExtra = any> {
        id: number;
        position: number;
        name: string;
        variants: Array<VariationVariant>;
        selectedId: number;
        extra: T;
        constructor(variation: IVariation<T>);
    }
    export default Variation;
}
declare module "constants/ZeroPriceBehaviour" {
    enum ZeroPriceBehaviour {
        CAN_NOT_ADD_TO_CART = "CAN_NOT_ADD_TO_CART",
        CAN_ADD_TO_CART = "CAN_ADD_TO_CART"
    }
    export default ZeroPriceBehaviour;
}
declare module "entities/product/IProduct" {
    import { IEntityWithSlug } from "entities/IEntityWithSlug";
    import IWithParents from "entities/IWIthParents";
    import ProductFeature from "entities/product/ProductFeature";
    import ImagePair from "entities/image-pair/ImagePair";
    import ProductOption from "entities/product/ProductOption";
    import SeoSnippet from "entities/product/SeoSnippet";
    import Variation from "entities/product/Variation";
    import ZeroPriceBehaviour from "constants/ZeroPriceBehaviour";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    interface IProduct<T = any> extends IEntityWithSlug, IWithParents, IEntityExtendable<T> {
        id: number;
        /**
         * Product's name
         */
        name: string;
        /**
         * <title> for this product page
         */
        pageTitle: string;
        shortDescription: string;
        description: string;
        promoText: string;
        code: string;
        /**
         * Product price
         */
        price: number;
        /**
         * Product price without apply options
         */
        basePrice: number;
        listPrice: number;
        averageRating: number;
        position: number;
        /**
         * Available amount at stock
         */
        stockAmount: number;
        /**
         * Step to increase or decrease amount
         */
        amountStep: number;
        /**
         * Minimum amount
         */
        minimumAmount: number;
        /**
         * Maximum amount
         */
        maximumAmount: number;
        popularity: number;
        /**
         * Behaviour on price 0
         */
        zeroPriceBehaviour: ZeroPriceBehaviour;
        features: Array<ProductFeature>;
        images: Array<ImagePair>;
        seoSnippet: SeoSnippet;
        options: Array<ProductOption>;
        variations: Array<Variation>;
    }
    export default IProduct;
}
declare module "entities/product/Product" {
    import IProduct from "entities/product/IProduct";
    import ProductFeature from "entities/product/ProductFeature";
    import SeoSnippet from "entities/product/SeoSnippet";
    import ImagePair from "entities/image-pair/ImagePair";
    import Icon from "entities/image-pair/Icon";
    import ProductOption from "entities/product/ProductOption";
    import ISelectedOption from "entities/product/ISelectedOption";
    import AddToCart from "entities/cart/AddToCart";
    import Parent from "entities/parent/Parent";
    import Variation from "entities/product/Variation";
    import ZeroPriceBehaviour from "constants/ZeroPriceBehaviour";
    export class Product<T = any> {
        id: number;
        slug: string;
        parents: Array<Parent>;
        name: string;
        pageTitle: string;
        shortDescription: string;
        description: string;
        promoText: string;
        code: string;
        price: number;
        basePrice: number;
        listPrice: number;
        averageRating: number;
        position: number;
        stockAmount: number;
        amountStep: number;
        minimumAmount: number;
        maximumAmount: number;
        popularity: number;
        zeroPriceBehaviour: ZeroPriceBehaviour;
        features: Array<ProductFeature>;
        images: Array<ImagePair>;
        seoSnippet: SeoSnippet;
        options: Array<ProductOption>;
        variations: Array<Variation>;
        url: string;
        extra: T;
        constructor(product: IProduct<T>);
        getIconsBySize(width: number, height: number): Array<Icon> | never;
        getSmallIcons(): Array<Icon>;
        getBigIcons(): Array<Icon>;
        getOption(optionId: number): ProductOption | undefined;
        /**
         * Updates option values for a product
         * Don't use from components!
         *
         * @param {number} optionId
         * @param {any} value
         */
        selectOption(optionId: number, value: any): boolean;
        getSelectedOptions(): Array<ISelectedOption>;
        getAddToCart(): AddToCart;
    }
    export default Product;
}
declare module "entities/cart/ICartError" {
    import ApiError from "entities/error/ApiError";
    import AddToCart from "entities/cart/AddToCart";
    interface ICartError {
        error: ApiError;
        addToCart: AddToCart;
    }
    export default ICartError;
}
declare module "entities/cart/CartError" {
    import ICartError from "entities/cart/ICartError";
    import ApiError from "entities/error/ApiError";
    import AddToCart from "entities/cart/AddToCart";
    class CartError implements ICartError {
        error: ApiError;
        addToCart: AddToCart;
        constructor(rawError: any);
    }
    export default CartError;
}
declare module "entities/cart/ICartProduct" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import Product from "entities/product/Product";
    interface ICartProduct<T extends IExtra = any> extends IEntityExtendable<T> {
        /**
         * id for product at backend cart
         */
        cartId: string;
        /**
         * Subtotal
         */
        subtotal: number;
        /**
         * Amount of a product in cart, calculated based on productId, options and etc.
         */
        amount: number;
        /**
         * Amount of a product in cart, calculated based only on product id
         */
        amountTotal: number;
        /**
         * Product related to this cart item
         */
        product: Product;
    }
    export default ICartProduct;
}
declare module "entities/cart/CartProduct" {
    import ICartProduct from "entities/cart/ICartProduct";
    import Product from "entities/product/Product";
    import { IExtra } from "entities/IExtra";
    /**
     * Cart item
     */
    class CartProduct<T extends IExtra = any> {
        cartId: string;
        subtotal: number;
        amount: number;
        amountTotal: number;
        product: Product;
        extra: T;
        constructor(cartProduct: ICartProduct);
    }
    export default CartProduct;
}
declare module "entities/shipping/IShipping" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IShipping<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        deliveryTime: string;
        description: string;
        isFree: boolean;
        price: number;
    }
    export default IShipping;
}
declare module "entities/shipping/Shipping" {
    import { IExtra } from "entities/IExtra";
    import IShipping from "entities/shipping/IShipping";
    class Shipping<T extends IExtra = any> {
        id: number;
        name: string;
        deliveryTime: string;
        description: string;
        isFree: boolean;
        price: number;
        extra: T;
        constructor(shipping: IShipping<T>);
    }
    export default Shipping;
}
declare module "entities/cart/ICheckoutGroup" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    import Shipping from "entities/shipping/Shipping";
    interface ICheckoutGroup<T extends IExtra = any> extends IEntityExtendable<T> {
        companyId: number;
        companyName: string;
        shippings: Array<Shipping>;
    }
    export default ICheckoutGroup;
}
declare module "entities/cart/CheckoutGroup" {
    import ICheckoutGroup from "entities/cart/ICheckoutGroup";
    import Shipping from "entities/shipping/Shipping";
    import { IExtra } from "entities/IExtra";
    class CheckoutGroup<T extends IExtra = any> implements ICheckoutGroup {
        companyId: number;
        companyName: string;
        shippings: Array<Shipping>;
        extra: T;
        constructor(group: ICheckoutGroup<T>);
    }
    export default CheckoutGroup;
}
declare module "utils/either/either" {
    interface Left<A> {
        value: A;
        tag: 'left';
    }
    interface Right<B> {
        value: B;
        tag: 'right';
    }
    export type Either<A, B> = Left<A> | Right<B>;
    export function isLeft<A>(value: unknown): value is Left<A>;
    function Left<A>(value: A): Left<A>;
    function Right<B>(value: B): Right<B>;
    export type Predicate<N> = (value: N) => boolean;
    export function firstLeft<A, B>(value: B, predicatePairs: [Predicate<B>, A][]): Either<A, B>;
}
declare module "utils/validate/validate" {
    /**
     * Validate id
     *
     * @param id
     *
     * @returns {boolean} true - if id is valid
     */
    export const isValidId: (id: unknown) => boolean;
    /**
     * Validate id with zero accept
     *
     * @param id
     *
     * @returns {boolean} true - if id is valid
     */
    export const isValidIdOrZero: (id: unknown) => boolean;
    /**
     * Validate number to be a positive and integer
     *
     * @param number
     *
     * @returns {boolean} true - if number is valid
     */
    export const isPositiveIntegerNumber: (number: unknown) => boolean;
    /**
     * Valid date on runtime
     *
     * @param date
     */
    export const isDateValid: (date: unknown) => boolean;
    /**
     * Valid boolean
     *
     * @param boolean
     */
    export const isBoolean: (boolean: unknown) => boolean;
    /**
     * Valid array
     *
     * @param array
     */
    export const isArray: (array: unknown) => boolean;
    /**
     * Not empty
     *
     * @param variable
     */
    export const isNotEmpty: (variable: unknown) => boolean;
    /**
     * Returns true if date1 >= date2
     *
     * @param variable
     */
    export const dateMastBeLaterOrEqualThan: (date1: Date, date2: Date) => boolean;
    /**
     * Returns true if argument is number
     *
     * @param number
     */
    export const isNumber: (number: unknown) => boolean;
    /**
     * Returns true if argument is a valid price (number and >= 0)
     *
     * @param number
     */
    export const isValidPrice: (number: unknown) => boolean;
    /**
     * Returns true if value there is at enumerable
     *
     * @param enumerable - where search
     * @param value  - property name to search
     */
    export const isInEmum: (enumerable: Readonly<unknown>, value: unknown) => boolean;
}
declare module "entities/payment/IPayment" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IPayment<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        instructions: string;
        description: string;
        type: string;
        /**
         * Is a payment offline
         * Offline payments doesn't require some processors to pay online
         */
        isOffline: boolean;
    }
    export default IPayment;
}
declare module "entities/payment/Payment" {
    import { Either } from "utils/either/either";
    import { IExtra } from "entities/IExtra";
    import IPayment from "entities/payment/IPayment";
    class Payment<T extends IExtra = any> {
        id: number;
        name: string;
        instructions: string;
        description: string;
        isOffline: boolean;
        type: string;
        extra: T;
        constructor(payment: IPayment<T>);
    }
    export function validatePayment(payment: IPayment): Either<string, IPayment>;
    export default Payment;
}
declare module "entities/tax/ITax" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface ITax<T extends IExtra = any> extends IEntityExtendable<T> {
        /**
         * Name of a tax
         */
        name: string;
        /**
         * Is tax included to a price
         */
        isIncluded: boolean;
        /**
         * Tax value
         */
        price: number;
    }
    export default ITax;
}
declare module "entities/tax/Tax" {
    import { IExtra } from "entities/IExtra";
    import ITax from "entities/tax/ITax";
    class Tax<T extends IExtra = any> {
        name: string;
        isIncluded: boolean;
        price: number;
        extra: T;
        constructor(tax: ITax<T>);
    }
    export default Tax;
}
declare module "entities/cart/IWithTotals" {
    import Tax from "entities/tax/Tax";
    interface IWithTotals {
        totalPrice: number;
        subtotalPrice: number;
        discountPrice: number;
        shippingPrice: number;
        taxes: Array<Tax>;
    }
    export default IWithTotals;
}
declare module "entities/cart/ICart" {
    import IWithTotals from "entities/cart/IWithTotals";
    import CartProduct from "entities/cart/CartProduct";
    import CheckoutGroup from "entities/cart/CheckoutGroup";
    import Payment from "entities/payment/Payment";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface ICart<T extends IExtra = any> extends IWithTotals, IEntityExtendable<T> {
        amount: number;
        chosenPayment: number;
        chosenShippings: Array<number>;
        products: Array<CartProduct>;
        checkoutGroups: Array<CheckoutGroup>;
        payments: Array<Payment>;
        paymentData: {
            isValid: boolean;
            [others: string]: any;
        };
    }
    export default ICart;
}
declare module "entities/cart/Cart" {
    import CartProduct from "entities/cart/CartProduct";
    import CheckoutGroup from "entities/cart/CheckoutGroup";
    import Payment from "entities/payment/Payment";
    import ICart from "entities/cart/ICart";
    import Tax from "entities/tax/Tax";
    import { IExtra } from "entities/IExtra";
    class Cart<T extends IExtra = any> {
        amount: number;
        totalPrice: number;
        subtotalPrice: number;
        discountPrice: number;
        shippingPrice: number;
        chosenPayment: number;
        taxes: Array<Tax>;
        products: Array<CartProduct>;
        checkoutGroups: Array<CheckoutGroup>;
        chosenShippings: Array<number>;
        payments: Array<Payment>;
        paymentData: {
            isValid: boolean;
            [others: string]: any;
        };
        extra: T;
        constructor(cart: ICart<T>);
        setShippingMethod(shippingId: number, groupIndex: number): Cart<T>;
        setPaymentMethod(paymentId: number): Cart<T>;
        setPaymentData(paymentData: any): Cart<T>;
        /**
         * Get chosenPayment from argument`s cart and return this cart
         *
         * @param cart
         */
        restoreChosenPayment(cart: Cart<T>): Cart<T>;
    }
    export default Cart;
}
declare module "entities/cart/ICartUpdate" {
    import AddToCart from "entities/cart/AddToCart";
    interface ICartUpdate {
        cartId: string;
        addToCart: AddToCart;
    }
    export default ICartUpdate;
}
declare module "entities/cart/CartUpdate" {
    import ICartUpdate from "entities/cart/ICartUpdate";
    import AddToCart from "entities/cart/AddToCart";
    /**
     * Request entity to update product at cart
     */
    class CartUpdate implements ICartUpdate {
        cartId: string;
        addToCart: AddToCart;
        constructor(rawUpdate: any);
        updateAddToCart(addToCart: AddToCart): void;
    }
    export default CartUpdate;
}
declare module "entities/payment/RedirectionForm" {
    class RedirectionForm {
        html: string;
        orderId: number;
        constructor(rawData: any);
    }
    export default RedirectionForm;
}
declare module "entities/profile/IAddress" {
    interface IAddress {
        firstname?: string;
        lastname?: string;
        phone?: string;
        address?: string;
        address2?: string;
        city?: string;
        county?: string;
        country?: string;
        countryName?: string;
        zipcode?: string;
        state?: string;
        stateName?: string;
    }
    export default IAddress;
}
declare module "entities/profile/Address" {
    import IAddress from "entities/profile/IAddress";
    class Address implements IAddress {
        firstname?: string;
        lastname?: string;
        phone?: string;
        address?: string;
        address2?: string;
        city?: string;
        county?: string;
        country?: string;
        countryName?: string;
        zipcode?: string;
        state?: string;
        stateName?: string;
        constructor(address: IAddress);
    }
    export default Address;
}
declare module "entities/cart/IUserData" {
    import Address from "entities/profile/Address";
    interface IUserData {
        id: number;
        profileId: number;
        login: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        birthday: string;
        companyId: number;
        companyName: string;
        billing: Address;
        shipping: Address;
        [others: string]: any;
    }
    export default IUserData;
}
declare module "entities/cart/UserData" {
    import IUserData from "entities/cart/IUserData";
    import FormField from "entities/form/FormField";
    import Address from "entities/profile/Address";
    import ApiError from "entities/error/ApiError";
    class UserData implements IUserData {
        id: number;
        profileId: number;
        login: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        birthday: string;
        companyId: number;
        companyName: string;
        billing: Address;
        shipping: Address;
        fields: Array<FormField>;
        error: ApiError | null;
        constructor(rawUserData: IUserData);
        toApiJson(): any;
    }
    export default UserData;
}
declare module "redux/types/CartState" {
    import AddToCart from "entities/cart/AddToCart";
    import Product from "entities/product/Product";
    import CartError from "entities/cart/CartError";
    import Cart from "entities/cart/Cart";
    import CartUpdate from "entities/cart/CartUpdate";
    import RedirectionForm from "entities/payment/RedirectionForm";
    import FormSchema from "entities/form/FormSchema";
    import UserData from "entities/cart/UserData";
    interface CartState {
        isCartRequesting: boolean;
        isOrderCreateRequesting: boolean;
        cart: Cart;
        userData: UserData | null;
        additionQueue: Array<AddToCart>;
        additionQueueProducts: Array<Product>;
        updateQueue: Array<CartUpdate>;
        deletionQueue: Array<string>;
        additionQueueErrors: Array<CartError>;
        additionQueueErrorsProducts: Array<Product>;
        customerInfoForm: {
            isValid: boolean;
            error?: string;
            schema: FormSchema | null;
        };
        redirectionForm?: RedirectionForm;
        isQueueRequesting: boolean;
    }
    export default CartState;
}
declare module "entities/language/ILanguage" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    interface ILanguage<T = any> extends IEntityExtendable<T> {
        /**
         * ISO 3166-1 alpha-2 code
         * @example DE, UK, RU
         */
        countryCode: string;
        /**
         * Text direction
         */
        direction: 'ltr' | 'rtl';
        /**
         * ISO 639-1:2002
         * @example de, ru, en
         */
        code: string;
        /**
         * Name
         * @example German
         */
        name: string;
    }
    export default ILanguage;
}
declare module "entities/language/Language" {
    import ILanguage from "entities/language/ILanguage";
    class Language<T = any> {
        countryCode: string;
        direction: 'ltr' | 'rtl';
        code: string;
        name: string;
        extra: T;
        constructor(language: ILanguage<T>);
    }
    export default Language;
}
declare module "redux/types/UiState" {
    import Language from "entities/language/Language";
    import Currency from "entities/currency/Currency";
    interface UiState {
        loading: boolean;
        language: string;
        currency: string;
        languages: Array<Language>;
        currencies: Array<Currency>;
        openedDrawers: Array<string>;
        notificationPermission: NotificationPermission | 'not-available';
        properties: any;
        isGdprAccepted: boolean;
    }
    export default UiState;
}
declare module "redux/types/LayoutsState" {
    import Layout from "entities/layout/Layout";
    interface LayoutsState {
        layouts: Array<Layout>;
        /**
         * List of layout`s codes, which are has been requested but not yet received
         */
        requesting: Array<string>;
        /**
         * List of layout`s codes, which are visible
         */
        visible: Array<string>;
    }
    export default LayoutsState;
}
declare module "entities/category/ISeoSnippet" {
    import ISeoSnippet from "entities/seo/ISeoSnippet";
    interface ICategorySeoSnippet extends ISeoSnippet {
        description: string;
        name: string;
    }
    export default ICategorySeoSnippet;
}
declare module "entities/category/ICategory" {
    import ImagePair from "entities/image-pair/ImagePair";
    import ISeoSnippet from "entities/category/ISeoSnippet";
    import { IEntityWithSlug } from "entities/IEntityWithSlug";
    import IWithParents from "entities/IWIthParents";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface ICategory<T extends IExtra = any> extends IEntityWithSlug, IWithParents, IEntityExtendable<T> {
        id: number;
        slug: string;
        productsCount: number;
        position: number;
        name: string;
        description: string;
        imagePair: ImagePair | null;
        subcategories: Array<any>;
        color: string;
        acronym: string;
        seoSnippet: ISeoSnippet;
        url: string;
    }
    export default ICategory;
}
declare module "entities/category/SeoSnippet" {
    import ICategorySeoSnippet from "entities/category/ISeoSnippet";
    /**
     * Data for schema.org and html seo (title, meta description and etc.)
     */
    class CategorySeoSnippet implements ICategorySeoSnippet {
        title: string;
        metaDescription: string;
        description: string;
        name: string;
        constructor(snippet: ICategorySeoSnippet);
    }
    export default CategorySeoSnippet;
}
declare module "entities/category/Category" {
    import ICategory from "entities/category/ICategory";
    import ImagePair from "entities/image-pair/ImagePair";
    import SeoSnippet from "entities/category/SeoSnippet";
    import Parent from "entities/parent/Parent";
    import { IExtra } from "entities/IExtra";
    class Category<T extends IExtra = any> {
        id: number;
        slug: string;
        productsCount: number;
        position: number;
        name: string;
        description: string;
        color: string;
        acronym: string;
        url: string;
        subcategories: Array<Category<T>>;
        imagePair: ImagePair | null;
        seoSnippet: SeoSnippet;
        parents: Array<Parent>;
        extra: T;
        constructor(category: ICategory<T>);
        setSubcategories(categories: Array<Category>): void;
        removeSubcategories(): void;
        getSmallIcon(): import("entities/image-pair/Icon").default<any> | null;
        getBigIcon(): import("entities/image-pair/Icon").default<any> | null;
    }
    export default Category;
}
declare module "constants/FilterTypes" {
    enum FilterTypes {
        CHECKBOX = "checkbox",
        SLIDER = "slider",
        RANGE = "range",
        PRICE = "price",
        COLOR = "color",
        DATE = "date"
    }
    export default FilterTypes;
}
declare module "entities/filter/IFilter" {
    import FilterTypes from "constants/FilterTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IFilter<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        name: string;
        /**
         * @example FilterTypes.CHECKBOX
         */
        type: FilterTypes;
        content: any;
    }
    export default IFilter;
}
declare module "entities/filter/Filter" {
    import IFilter from "entities/filter/IFilter";
    import FilterTypes from "constants/FilterTypes";
    import { IExtra } from "entities/IExtra";
    /**
     * Product filter
     */
    class Filter<T extends IExtra = any> {
        id: number;
        name: string;
        type: FilterTypes;
        content: any;
        extra: T;
        constructor(filter: IFilter<T>);
    }
    export default Filter;
}
declare module "utils/notNull" {
    /**
     * https://github.com/microsoft/TypeScript/issues/20707#issuecomment-351874491
     */
    function notNull<T>(x: T | null): x is T;
    export default notNull;
}
declare module "entities/selection/IPagination" {
    interface IPagination {
        total: number;
        page: number;
        limit: number;
    }
    export default IPagination;
}
declare module "entities/selection/Pagination" {
    import IPagination from "entities/selection/IPagination";
    class Pagination implements IPagination {
        total: number;
        page: number;
        limit: number;
        constructor(rawPagination: any);
        nextPage(): Pagination;
    }
    export default Pagination;
}
declare module "constants/SortOrder" {
    enum SortOrder {
        ASC = "asc",
        DESC = "desc"
    }
    export default SortOrder;
}
declare module "entities/selection/Sorting" {
    class Sorting {
        sortBy: string;
        order: string;
        constructor(rawSorting: any);
    }
    export default Sorting;
}
declare module "entities/selection/AbstractItemsSelection" {
    import Pagination from "entities/selection/Pagination";
    import Sorting from "entities/selection/Sorting";
    /**
     * Abstract class for items selections
     * For pagination, filters, sortings, search
     * and other basic selection implementations
     */
    abstract class AbstractItemsSelection {
        pagination?: Pagination;
        sorting?: Sorting;
        search?: string;
        abstract filters: any;
        constructor(rawSelection: any);
        nextPage(): this;
        sortBy(sortValue: string): this;
        abstract prependItems(items: Array<any>): AbstractItemsSelection;
    }
    export default AbstractItemsSelection;
}
declare module "entities/selection/ISorting" {
    interface ISorting {
        sortBy: string;
        order: string;
    }
    export default ISorting;
}
declare module "entities/selection/IAbstractItemsSelection" {
    import IPagination from "entities/selection/IPagination";
    import ISorting from "entities/selection/ISorting";
    interface IAbstractItemsSelection {
        pagination?: IPagination;
        sorting?: ISorting;
        search?: string;
    }
    export default IAbstractItemsSelection;
}
declare module "entities/product/IProductSelection" {
    import Product from "entities/product/Product";
    import Filter from "entities/filter/Filter";
    import IAbstractItemsSelection from "entities/selection/IAbstractItemsSelection";
    interface IProductSelection extends IAbstractItemsSelection {
        products: Array<Product>;
        filters: Array<Filter>;
    }
    export default IProductSelection;
}
declare module "entities/product/ProductSelection" {
    import Product from "entities/product/Product";
    import Filter from "entities/filter/Filter";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    import IProductSelection from "entities/product/IProductSelection";
    class ProductSelection extends AbstractItemsSelection implements IProductSelection {
        products: Array<Product>;
        filters: Array<Filter>;
        filterHashes?: string;
        constructor(rawProductSelection: any);
        prependItems(products: Array<Product>): ProductSelection;
        fromUrl(url: string): ProductSelection | undefined;
        filter(hash: string): ProductSelection;
    }
    export default ProductSelection;
}
declare module "redux/types/CategoryState" {
    import Category from "entities/category/Category";
    import ApiError from "entities/error/ApiError";
    import ProductSelection from "entities/product/ProductSelection";
    interface CategoryState {
        category: Category | null;
        isRequesting: boolean;
        isProductsRequesting: boolean;
        productSelection?: ProductSelection;
        error: ApiError | null;
    }
    export default CategoryState;
}
declare module "entities/article/ISeoSnippet" {
    import ISeoSnippet from "entities/seo/ISeoSnippet";
    interface IArticleSeoSnippet extends ISeoSnippet {
        title: string;
        metaDescription: string;
    }
    export default IArticleSeoSnippet;
}
declare module "entities/article/SeoSnippet" {
    import IArticleSeoSnippet from "entities/article/ISeoSnippet";
    /**
     * Data for schema.org and html seo (title, meta description and etc.)
     */
    class SeoSnippet {
        title: string;
        metaDescription: string;
        constructor(seoSnippet: IArticleSeoSnippet);
    }
    export default SeoSnippet;
}
declare module "entities/article/IArticle" {
    import SeoSnippet from "entities/article/SeoSnippet";
    import ImagePair from "entities/image-pair/ImagePair";
    import IWithParents from "entities/IWIthParents";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IArticle<T extends IExtra = any> extends IWithParents, IEntityExtendable<T> {
        /**
         * id of a page at cscart
         */
        id: number;
        /**
         *
         */
        slug: string;
        /**
         * company or vendor id
         */
        companyId: number;
        /**
         * id of a parent page
         */
        parentId: number;
        /**
         * When created
         */
        createdAt: Date;
        /**
         * name
         */
        name: string;
        /**
         * content
         */
        content: string;
        /**
         * short content
         */
        shortContent: string;
        /**
         * SeoSnippet
         */
        seoSnippet: SeoSnippet;
        imagePair: ImagePair | null;
        url: string;
    }
    export default IArticle;
}
declare module "utils/string/stripTags" {
    const stripTags: (string: string) => string;
    export default stripTags;
}
declare module "utils/string/countWords" {
    /**
     * Counts words at text or html
     *
     * @returns number
     */
    const countWords: (text: string) => number;
    export default countWords;
}
declare module "entities/article/Article" {
    import IArticle from "entities/article/IArticle";
    import SeoSnippet from "entities/article/SeoSnippet";
    import ImagePair from "entities/image-pair/ImagePair";
    import Parent from "entities/parent/Parent";
    import Icon from "entities/image-pair/Icon";
    import { IExtra } from "entities/IExtra";
    class Article<T extends IExtra = any> {
        id: number;
        companyId: number;
        parentId: number;
        createdAt: Date;
        name: string;
        content: string;
        shortContent: string;
        slug: string;
        url: string;
        imagePair: ImagePair | null;
        seoSnippet: SeoSnippet;
        parents: Array<Parent>;
        extra: T;
        constructor(article: IArticle<T>);
        getReadingTime(): number;
        getSmallIcon(): Icon | null;
        getBigIcon(): Icon | null;
    }
    export default Article;
}
declare module "entities/article/IArticleSelection" {
    import IAbstractItemsSelection from "entities/selection/IAbstractItemsSelection";
    import Article from "entities/article/Article";
    interface IArticleSelection extends IAbstractItemsSelection {
        articles: Array<Article>;
    }
    export default IArticleSelection;
}
declare module "entities/article/ArticleSelection" {
    import Article from "entities/article/Article";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    import IArticleSelection from "entities/article/IArticleSelection";
    class ArticleSelection extends AbstractItemsSelection {
        articles: Array<Article>;
        filters: null;
        constructor(articleSelection: IArticleSelection);
        prependItems(articles: Array<Article>): ArticleSelection;
    }
    export default ArticleSelection;
}
declare module "redux/types/ArticleState" {
    import Article from "entities/article/Article";
    import ApiError from "entities/error/ApiError";
    import ArticleSelection from "entities/article/ArticleSelection";
    interface ArticleState {
        article: Article | null;
        isRequesting: boolean;
        articleSelection?: ArticleSelection;
        isArticlesRequesting: boolean;
        error: ApiError | null;
    }
    export default ArticleState;
}
declare module "redux/reducers/product/IProductState" {
    import Product from "entities/product/Product";
    import ApiError from "entities/error/ApiError";
    interface ProductState {
        isRequesting: boolean;
        isOptionsRequesting: boolean;
        product: Product | null;
        error: ApiError | null;
    }
    export default ProductState;
}
declare module "redux/types/WishlistState" {
    import Product from "entities/product/Product";
    interface WishlistState {
        isWishlistRequesting: boolean;
        queue: Array<number>;
        removeQueue: Array<number>;
        wishlist: {
            products?: Array<Product>;
        };
    }
    export default WishlistState;
}
declare module "entities/order/IOrderStatus" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IOrderStatus<T extends IExtra = any> extends IEntityExtendable<T> {
        /**
         * Unique identifier based on the statusId
         */
        id: number;
        /**
         * Status
         */
        code: string;
        /**
         * Name of the status
         */
        name: string;
        /**
         * Color of the status
         */
        color: string;
    }
    export default IOrderStatus;
}
declare module "entities/order/OrderStatus" {
    import { IExtra } from "entities/IExtra";
    import IOrderStatus from "entities/order/IOrderStatus";
    class OrderStatus<T extends IExtra = any> {
        id: number;
        code: string;
        name: string;
        color: string;
        extra: T;
        constructor(orderStatus: IOrderStatus<T>);
    }
    export default OrderStatus;
}
declare module "entities/product/IProductOptionSelected" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IProductOptionSelected<T extends IExtra = any> extends IEntityExtendable<T> {
        name: string;
        value: string | boolean;
        type: ProductOptionSelectedTypes;
    }
    export enum ProductOptionSelectedTypes {
        /**
         * For values like: Capacity: 16GB
         */
        KEY_VALUE = "KEY_VALUE",
        /**
         * For values like: Special delivery
         */
        VALUE = "VALUE"
    }
    export default IProductOptionSelected;
}
declare module "entities/product/ProductOptionSelected" {
    import { IExtra } from "entities/IExtra";
    import IProductOptionSelected, { ProductOptionSelectedTypes } from "entities/product/IProductOptionSelected";
    class ProductOptionSelected<T extends IExtra = any> {
        name: string;
        value: string | boolean;
        type: ProductOptionSelectedTypes;
        extra: T;
        constructor(productOptionSelected: IProductOptionSelected<T>);
    }
    export default ProductOptionSelected;
}
declare module "entities/product/IProductExtras" {
    import ProductOptionSelected from "entities/product/ProductOptionSelected";
    interface IProductExtras {
        productOptionsSelected: Array<ProductOptionSelected>;
    }
    export default IProductExtras;
}
declare module "entities/product/ProductExtras" {
    import IProductExtras from "entities/product/IProductExtras";
    import ProductOptionSelected from "entities/product/ProductOptionSelected";
    class ProductExtras {
        productOptionsSelected: Array<ProductOptionSelected>;
        constructor(productExtrasItem: IProductExtras);
    }
    export default ProductExtras;
}
declare module "entities/order/IOrderProduct" {
    import ProductExtras from "entities/product/ProductExtras";
    import Product from "entities/product/Product";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    interface IOrderProduct<T = any> extends IEntityExtendable<T> {
        /**
         * Unique identifier based on the cardId
         */
        uuid: string;
        /**
         * Subtotal
         */
        subtotal: number;
        /**
         * Amount of a product in order, calculated based on productId, options and etc.
         */
        amount: number;
        /**
         * Product related to this order item
         */
        product: Product;
        /**
         * Selected product options
         */
        extras: ProductExtras;
    }
    export default IOrderProduct;
}
declare module "entities/order/OrderProduct" {
    import IOrderProduct from "entities/order/IOrderProduct";
    import Product from "entities/product/Product";
    import ProductExtras from "entities/product/ProductExtras";
    class OrderProduct<T = any> {
        uuid: string;
        subtotal: number;
        amount: number;
        product: Product;
        extras: ProductExtras;
        extra: T;
        constructor(orderItem: IOrderProduct<T>);
    }
    export default OrderProduct;
}
declare module "entities/order/IOrder" {
    import IWithTotals from "entities/cart/IWithTotals";
    import Address from "entities/profile/Address";
    import OrderStatus from "entities/order/OrderStatus";
    import Payment from "entities/payment/Payment";
    import Shipping from "entities/shipping/Shipping";
    import OrderProduct from "entities/order/OrderProduct";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    interface IOrder<T = any> extends IWithTotals, IEntityExtendable<T> {
        /**
         * Order id
         */
        id: number;
        /**
         * When created
         */
        createdAt: Date;
        /**
         * status information
         */
        orderStatus: OrderStatus | null;
        /**
         * company or vendor id
         */
        companyId: number;
        /**
         * Payment method
         */
        payment: Payment | null;
        /**
         * Shipping method
         */
        shippings: Array<Shipping>;
        /**
         * Order products
         */
        orderProducts: Array<OrderProduct>;
        shippingAddress: Address;
        billingAddress: Address;
        /** User contact information
         */
        firstname?: string;
        lastname?: string;
        email?: string;
        phone?: string;
        /**
         * Child orders
         */
        orders: Array<IOrder<T>>;
    }
    export default IOrder;
}
declare module "entities/order/Order" {
    import IOrder from "entities/order/IOrder";
    import Payment from "entities/payment/Payment";
    import Shipping from "entities/shipping/Shipping";
    import OrderProduct from "entities/order/OrderProduct";
    import OrderStatus from "entities/order/OrderStatus";
    import { Either } from "utils/either/either";
    import Address from "entities/profile/Address";
    import Tax from "entities/tax/Tax";
    class Order<T = any> {
        id: number;
        createdAt: Date;
        companyId: number;
        totalPrice: number;
        subtotalPrice: number;
        discountPrice: number;
        shippingPrice: number;
        firstname?: string;
        lastname?: string;
        email?: string;
        phone?: string;
        shippingAddress: Address;
        billingAddress: Address;
        orderStatus: OrderStatus | null;
        payment: Payment | null;
        shippings: Array<Shipping>;
        orderProducts: Array<OrderProduct>;
        orders: Array<Order>;
        taxes: Array<Tax>;
        extra: T;
        constructor(order: IOrder<T>);
    }
    export function validateOrder(order: IOrder): Either<string, IOrder>;
    export default Order;
}
declare module "entities/order/IOrderSelection" {
    import IAbstractItemsSelection from "entities/selection/IAbstractItemsSelection";
    import Order from "entities/order/Order";
    interface IOrderSelection extends IAbstractItemsSelection {
        orders: Array<Order>;
    }
    export default IOrderSelection;
}
declare module "entities/order/OrderSelection" {
    import Order from "entities/order/Order";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    import IOrderSelection from "entities/order/IOrderSelection";
    /**
     * Orders selection
     */
    class OrderSelection extends AbstractItemsSelection {
        orders: Array<Order>;
        filters: null;
        constructor(selection: IOrderSelection);
        prependItems(orders: Array<Order>): OrderSelection;
        fromUrl(url: string): OrderSelection | undefined;
    }
    export default OrderSelection;
}
declare module "redux/types/OrdersState" {
    import ApiError from "entities/error/ApiError";
    import OrderSelection from "entities/order/OrderSelection";
    interface OrdersState {
        orderId: number;
        orderSelection?: OrderSelection;
        isRequesting: boolean;
        error: ApiError | null;
    }
    export default OrdersState;
}
declare module "redux/types/OrderState" {
    import Order from "entities/order/Order";
    import ApiError from "entities/error/ApiError";
    interface OrderState {
        id: number;
        isRequesting: boolean;
        order: Order | null;
        error: ApiError | null;
    }
    export default OrderState;
}
declare module "constants/ReviewableEntities" {
    enum ReviewableEntities {
        PRODUCT = "product",
        CATEGORY = "category",
        ARTICLE = "article",
        ORDER = "order",
        STOREFRONT = "storefront",
        VENDOR = "vendor"
    }
    export default ReviewableEntities;
}
declare module "entities/testimonial/IWithRating" {
    interface IWithRating {
        rating: number;
        totalTestimonials?: number;
    }
    export default IWithRating;
}
declare module "entities/testimonial/ITestimonial" {
    interface ITestimonial {
        id: number;
        parentId: number;
        author: string;
        createdAt: Date;
        text: string;
        rating: number;
    }
    export default ITestimonial;
}
declare module "entities/testimonial/Testimonial" {
    import ITestimonial from "entities/testimonial/ITestimonial";
    class Testimonial implements ITestimonial {
        id: number;
        parentId: number;
        author: string;
        createdAt: Date;
        text: string;
        rating: number;
        constructor(rawTestimonial: any);
    }
    export default Testimonial;
}
declare module "entities/testimonial/IReviewSelection" {
    import Testimonial from "entities/testimonial/Testimonial";
    import IAbstractItemsSelection from "entities/selection/IAbstractItemsSelection";
    interface IReviewSelection extends IAbstractItemsSelection {
        testimonials: Array<Testimonial>;
        filters: null;
    }
    export default IReviewSelection;
}
declare module "entities/testimonial/ReviewSelection" {
    import Testimonial from "entities/testimonial/Testimonial";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    import IReviewSelection from "entities/testimonial/IReviewSelection";
    /**
     * Selection for testimonials
     */
    class ReviewSelection extends AbstractItemsSelection implements IReviewSelection {
        testimonials: Array<Testimonial>;
        filters: null;
        constructor(rawReviewSelection: any);
        prependItems(testimonials: Array<Testimonial>): ReviewSelection;
        fromUrl(url: string): ReviewSelection | undefined;
    }
    export default ReviewSelection;
}
declare module "entities/testimonial/IReviewsThread" {
    import ReviewableEntities from "constants/ReviewableEntities";
    import IWithRating from "entities/testimonial/IWithRating";
    import ReviewSelection from "entities/testimonial/ReviewSelection";
    interface IReviewsThread extends IWithRating {
        id: number;
        isReadonly: boolean;
        parentId: number;
        parentType: ReviewableEntities;
        withReviews: boolean;
        withRaiting: boolean;
        selection: ReviewSelection;
    }
    export default IReviewsThread;
}
declare module "entities/testimonial/ReviewsThread" {
    import ReviewableEntities from "constants/ReviewableEntities";
    import IReviewsThread from "entities/testimonial/IReviewsThread";
    import ReviewSelection from "entities/testimonial/ReviewSelection";
    /**
     * Reviews thread with all information about reviews and ratings
     */
    class ReviewsThread implements IReviewsThread {
        id: number;
        totalTestimonials: number;
        isReadonly: boolean;
        rating: number;
        parentId: number;
        parentType: ReviewableEntities;
        withReviews: boolean;
        withRaiting: boolean;
        selection: ReviewSelection;
        constructor(rawThread: any);
        get uuid(): string;
    }
    /**
     * Create uuid by parent id and parent type
     * If thread for a product with id 105
     * uuid would be '105product'
     *
     * @param parentId
     * @param parentType
     */
    export const createUuid: (parentId: IReviewsThread['parentId'], parentType: IReviewsThread['parentType']) => string;
    export default ReviewsThread;
}
declare module "entities/testimonial/ITestimonialDraft" {
    import ReviewableEntities from "constants/ReviewableEntities";
    interface ITestimonialDraft {
        parentId: number;
        parentType: ReviewableEntities;
        rating?: number;
        text?: string;
        name?: string;
        /**
         * True if draft should be posted
         * False if user didn't press button to Send
         */
        isFinal: boolean;
    }
    export default ITestimonialDraft;
}
declare module "entities/testimonial/TestimonialDraft" {
    import ReviewableEntities from "constants/ReviewableEntities";
    import ITestimonialDraft from "entities/testimonial/ITestimonialDraft";
    class TestimonialDraft implements ITestimonialDraft {
        parentId: number;
        parentType: ReviewableEntities;
        rating?: number;
        text?: string;
        isFinal: boolean;
        name?: string;
        constructor(rawDraft: ITestimonialDraft);
        get uuid(): string;
    }
    export default TestimonialDraft;
}
declare module "redux/types/ReviewState" {
    import ReviewsThread from "entities/testimonial/ReviewsThread";
    import ApiError from "entities/error/ApiError";
    import TestimonialDraft from "entities/testimonial/TestimonialDraft";
    interface ReviewState {
        reviews: Array<ReviewsThread>;
        requestingIds: Array<typeof ReviewsThread.prototype.uuid>;
        errors: Array<{
            uuid: typeof ReviewsThread.prototype.uuid;
            error: ApiError;
        }>;
        drafts: Array<TestimonialDraft>;
        successes: Array<typeof ReviewsThread.prototype.uuid>;
    }
    export default ReviewState;
}
declare module "redux/types/SearchState" {
    import ProductSelection from "entities/product/ProductSelection";
    import ApiError from "entities/error/ApiError";
    interface SearchState {
        productSelection?: ProductSelection;
        isProductsRequesting: boolean;
        error: ApiError | null;
        isAutocompleteOpened: boolean;
        /**
         * Handles user search queries
         */
        queryHistories: Array<string>;
    }
    export default SearchState;
}
declare module "entities/notifications/EntityTypes" {
    enum EntityTypes {
        ORDER = "order"
    }
    export default EntityTypes;
}
declare module "entities/status/IStatus" {
    interface IStatus {
        name: string;
        /**
         * Color to be applied to a name element
         */
        color: string;
    }
    export default IStatus;
}
declare module "entities/status/Status" {
    import IStatus from "entities/status/IStatus";
    class Status implements IStatus {
        name: string;
        color: string;
        constructor(status: IStatus);
    }
    export default Status;
}
declare module "entities/notifications/IEntityNotification" {
    import EntityTypes from "entities/notifications/EntityTypes";
    import Status from "entities/status/Status";
    interface IEntityNotification {
        id: number;
        isViewed: boolean;
        entityId: number;
        type: EntityTypes;
        date: Date;
        data: {
            oldStatus?: Status;
            newStatus?: Status;
            text?: string;
        };
    }
    export default IEntityNotification;
}
declare module "entities/notifications/EntityNotification" {
    import IEntityNotification from "entities/notifications/IEntityNotification";
    import EntityTypes from "entities/notifications/EntityTypes";
    import { Either } from "utils/either/either";
    import Status from "entities/status/Status";
    /**
     * Entity for representation of an antity updates, like:
     * Order status changed & etc.
     */
    class EntityNotification implements IEntityNotification {
        id: number;
        entityId: number;
        type: EntityTypes;
        date: Date;
        isViewed: boolean;
        data: {
            oldStatus?: Status;
            newStatus?: Status;
            text?: string;
        };
        constructor(notification: IEntityNotification);
        /**
         * Mark notification as viewed
         */
        markAsViewed(): EntityNotification;
    }
    export function validateNotification(notification: IEntityNotification): Either<string, IEntityNotification>;
    export default EntityNotification;
}
declare module "redux/reducers/notification/INotificationState" {
    import ApiError from "entities/error/ApiError";
    import EntityNotification from "entities/notifications/EntityNotification";
    interface INotificationState {
        notifications: Array<EntityNotification>;
        /**
         * Error of get request
         */
        error: null | ApiError;
        /**
         * Error of mark as read request
         */
        markAsReadError: null | ApiError;
    }
    export default INotificationState;
}
declare module "entities/action-banner/IActionBanner" {
    interface IActionBanner {
        id: string;
        icon?: () => JSX.Element;
        text: string | React.ReactElement | React.ReactNodeArray;
        acceptButton?: IButton;
        declineButton: IButton;
    }
    interface IButton {
        text?: string;
        onClick: () => void;
    }
    export default IActionBanner;
}
declare module "redux/reducers/action-banners/IActionBannersState" {
    import IActionBanner from "entities/action-banner/IActionBanner";
    export interface IActionBannersState {
        banners: Array<IActionBanner>;
    }
    export default IActionBannersState;
}
declare module "redux/types/index" {
    import AuthState from "redux/reducers/auth/IAuthState";
    import INavigationBarState from "redux/reducers/navigation-bar/INavigationBarState";
    import CartState from "redux/types/CartState";
    import UiState from "redux/types/UiState";
    import LayoutsState from "redux/types/LayoutsState";
    import CategoryState from "redux/types/CategoryState";
    import ArticleState from "redux/types/ArticleState";
    import ProductState from "redux/reducers/product/IProductState";
    import WishlistState from "redux/types/WishlistState";
    import OrdersState from "redux/types/OrdersState";
    import OrderState from "redux/types/OrderState";
    import ReviewState from "redux/types/ReviewState";
    import SearchState from "redux/types/SearchState";
    import INotificationState from "redux/reducers/notification/INotificationState";
    import IActionBannersState from "redux/reducers/action-banners/IActionBannersState";
    export type StoreState = {
        Auth: AuthState;
        NavigationBar: INavigationBarState;
        Article: ArticleState;
        Cart: CartState;
        Wishlist: WishlistState;
        Ui: UiState;
        Layouts: LayoutsState;
        Category: CategoryState;
        Product: ProductState;
        Orders: OrdersState;
        Order: OrderState;
        Review: ReviewState;
        Search: SearchState;
        Notification: INotificationState;
        ActionBanners: IActionBannersState;
    };
}
declare module "redux/selectors/Ui" {
    import { StoreState } from "redux/types/index";
    export const getCurrencies: import("reselect").OutputSelector<StoreState, import("entities/currency/Currency").default<any>[], (res: import("redux/types/UiState").default) => import("entities/currency/Currency").default<any>[]>;
    export const getCurrentCurrencyCode: import("reselect").OutputSelector<StoreState, string, (res: import("redux/types/UiState").default) => string>;
    export const getCurrentCurrency: import("reselect").OutputSelector<StoreState, import("entities/currency/Currency").default<any> | undefined, (res1: import("entities/currency/Currency").default<any>[], res2: string) => import("entities/currency/Currency").default<any> | undefined>;
    export const getDefaultCurrency: import("reselect").OutputSelector<StoreState, import("entities/currency/Currency").default<any> | undefined, (res: import("entities/currency/Currency").default<any>[]) => import("entities/currency/Currency").default<any> | undefined>;
    export const getLanguages: import("reselect").OutputSelector<StoreState, import("entities/language/Language").default<any>[], (res: import("redux/types/UiState").default) => import("entities/language/Language").default<any>[]>;
    export const getCurrentLanguageCode: import("reselect").OutputSelector<StoreState, string, (res: import("redux/types/UiState").default) => string>;
    export const getCurrentLanguage: import("reselect").OutputSelector<StoreState, import("entities/language/Language").default<any> | undefined, (res1: import("entities/language/Language").default<any>[], res2: string) => import("entities/language/Language").default<any> | undefined>;
    export const isDrawerOpened: (state: StoreState, ownProps: {
        id?: string;
    }) => boolean;
    export const getProperties: import("reselect").OutputSelector<StoreState, any, (res: import("redux/types/UiState").default) => any>;
    export const getGoogleAuthClientId: import("reselect").OutputSelector<StoreState, any, (res: any) => any>;
}
declare module "hooks/use-is-rtl/useIsRtl" {
    /**
     * Observes rtl direction set
     *
     * @returns true if is rtl
     */
    function useIsRtl(): boolean;
    export default useIsRtl;
}
declare module "components/blocks/banners-block/BannersBlock" {
    import React from 'react';
    import 'slick-carousel/slick/slick.css';
    import Banner from "entities/banner/Banner";
    import { IProps } from "components/blocks/banners-block/IBannersBlock";
    import './BannersBlock.css';
    import '../../../styles/vendors/slick.custom.css';
    /**
     * Banners block
     *
     * @param props
     */
    const BannersBlock: React.FC<IProps>;
    /**
     * Wrapper for banner with or without link
     *
     * @param props
     */
    export const BannerWrapper: React.FC<Banner & {
        children?: React.ReactNode;
    }>;
    interface ISlickArrowWrapper {
        currentSlide?: number;
        slideCount?: number;
    }
    export const SlickArrowWrapper: React.FC<ISlickArrowWrapper>;
    export default BannersBlock;
}
declare module "components/category/list-item/ICategoryListItem" {
    import Category from "entities/category/Category";
    export interface IOwnProps {
        category: Category | null;
    }
}
declare module "components/category/list-item/CategoryListItem" {
    import React from 'react';
    import { IOwnProps } from "components/category/list-item/ICategoryListItem";
    import './CategoryListItem.css';
    const CategoryListItem: React.FC<IOwnProps>;
    export default CategoryListItem;
}
declare module "components/templates/slider/IItemsSlider" {
    import { Settings } from 'react-slick';
    export interface IOwnProps {
        items: Array<React.ReactNode>;
        settings?: Settings;
        equalHeight?: boolean;
    }
    export type IProps = IOwnProps;
}
declare module "components/templates/slider/ItemsSlider" {
    import React from 'react';
    import 'slick-carousel/slick/slick.css';
    import '../../../styles/vendors/slick.custom.css';
    import { IProps } from "components/templates/slider/IItemsSlider";
    import './ItemsSlider.css';
    const ItemsSlider: React.FC<IProps>;
    export default ItemsSlider;
}
declare module "components/blocks/categories-block/ICategoriesBlock" {
    import Category from "entities/category/Category";
    import IBlockProps from "components/blocks/IBlockProps";
    export interface IOwnProps extends IBlockProps {
        categories: Array<Category>;
    }
    export type IProps = IOwnProps;
}
declare module "components/blocks/categories-block/CategoriesBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/categories-block/ICategoriesBlock";
    import './CategoriesBlock.css';
    /**
     * Categories block
     *
     * @param {IOwnProps} props
     */
    const CategoriesBlock: React.FC<IOwnProps>;
    export default CategoriesBlock;
}
declare module "components/templates/grid/IGridList" {
    export interface IOwnProps {
        items: Array<any>;
        className?: string;
        footer?: React.ReactNode;
        header?: React.ReactNode;
    }
    export type IProps = IOwnProps;
}
declare module "components/templates/grid/GridList" {
    import React from 'react';
    import { IOwnProps } from "components/templates/grid/IGridList";
    import './GridList.css';
    /**
     * Template to show any items with css grid
     * with animated add and remove items
     */
    class GridList extends React.Component<IOwnProps> {
        private gridRef;
        private forceGridAnimation;
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element | null;
    }
    export default GridList;
}
declare module "components/subcomponents/price/PriceContainer" {
    import { IOwnProps } from "components/subcomponents/price/IPrice";
    const _default_3: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/price/IPrice").IProps>, Pick<import("components/subcomponents/price/IPrice").IProps, "className" | "price" | "discount" | "rounding"> & IOwnProps>;
    export default _default_3;
}
declare module "components/subcomponents/label/ILabel" {
    export interface IOwnProps {
        label?: string | number;
        className?: string;
    }
}
declare module "components/subcomponents/label/Label" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/label/ILabel";
    import './Label.css';
    /**
     * Label badge for small information presentation
     *
     * @param props
     */
    const Label: React.FC<IOwnProps>;
    export default Label;
}
declare module "components/cart/add-to-cart-button/IAddToCartButton" {
    import { ReactElement } from 'react';
    import AddToCart from "entities/cart/AddToCart";
    import ICartError from "entities/cart/ICartError";
    import Product from "entities/product/Product";
    export interface IOwnProps {
        /**
         * Product you want to add to cart
         */
        product: Product;
        /**
         * Use ready addToCart only if you want to change it by reference (change amount and etc)
         */
        addToCart?: AddToCart;
        className?: string;
        wrapperClassName?: string;
        /**
         * Icon inside add to cart button element: undefined - default icon, null - no icon
         */
        icon?: JSX.Element | null;
        children?: React.ReactNode;
        /**
         * Render component's wrapper from render-prop
         */
        render?: () => ReactElement;
    }
    export interface IStateProps {
        queueAmount: number;
        error: ICartError | null;
        cartAmount: number;
    }
    export interface IDispatchProps {
        requestAddToCart: (addToCart: AddToCart) => void;
        addToAddQueue: (addToCart: AddToCart) => void;
        removeFromCartErrors: (addToCart: AddToCart) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/cart/add-to-cart-button/AddToCartButton" {
    import React from 'react';
    import { IProps } from "components/cart/add-to-cart-button/IAddToCartButton";
    import './AddToCartButton.css';
    const AddToCartButton: React.FC<IProps>;
    export default AddToCartButton;
}
declare module "redux/actions/auth/AuthActionTypes" {
    enum AuthActionTypes {
        REQUEST_LOGIN = "REQUEST_LOGIN",
        REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS",
        REQUEST_LOGIN_FAILURE = "REQUEST_LOGIN_FAILURE",
        REQUEST_LOGIN_WITH_RESTORE_TOKEN = "REQUEST_LOGIN_WITH_RESTORE_TOKEN",
        REQUEST_SOCIAL_LOGIN = "REQUEST_SOCIAL_LOGIN",
        LOGOUT = "LOGOUT",
        LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
        REQUEST_PROFILE = "REQUEST_PROFILE",
        REQUEST_PROFILE_SUCCESS = "REQUEST_PROFILE_SUCCESS",
        REQUEST_PROFILE_FAILURE = "REQUEST_PROFILE_FAILURE",
        REQUEST_SIGNUP_FORM = "REQUEST_SIGNUP_FORM",
        REQUEST_SIGNUP_FORM_SUCCESS = "REQUEST_SIGNUP_FORM_SUCCESS",
        REQUEST_SIGNUP_FORM_FAILURE = "REQUEST_SIGNUP_FORM_FAILURE",
        REQUEST_SIGNUP = "REQUEST_SIGNUP",
        REQUEST_SIGNUP_SUCCESS = "REQUEST_SIGNUP_SUCCESS",
        REQUEST_SIGNUP_FAILURE = "REQUEST_SIGNUP_FAILURE",
        REQUEST_UPDATE_PROFILE_FORM = "REQUEST_UPDATE_PROFILE_FORM",
        REQUEST_UPDATE_PROFILE_FORM_SUCCESS = "REQUEST_UPDATE_PROFILE_FORM_SUCCESS",
        REQUEST_UPDATE_PROFILE_FORM_FAILURE = "REQUEST_UPDATE_PROFILE_FORM_FAILURE",
        REQUEST_UPDATE_PROFILE = "REQUEST_UPDATE_PROFILE",
        REQUEST_UPDATE_PROFILE_SUCCESS = "REQUEST_UPDATE_PROFILE_SUCCESS",
        REQUEST_UPDATE_PROFILE_FAILURE = "REQUEST_UPDATE_PROFILE_FAILURE",
        REQUEST_RESTORE_PASSWORD = "REQUEST_RESTORE_PASSWORD",
        REQUEST_RESTORE_PASSWORD_SUCCESS = "REQUEST_RESTORE_PASSWORD_SUCCESS",
        REQUEST_RESTORE_PASSWORD_FAILURE = "REQUEST_RESTORE_PASSWORD_FAILURE",
        SET_TOKEN = "SET_TOKEN"
    }
    export default AuthActionTypes;
}
declare module "redux/actions/cart/CartActionTypes" {
    enum CartActionTypes {
        REQUEST_CART = "REQUEST_CART",
        REQUEST_CART_SUCCESS = "REQUEST_CART_SUCCESS",
        REQUEST_CART_FAILURE = "REQUEST_CART_FAILURE",
        REQUEST_ADD_TO_CART = "REQUEST_ADD_TO_CART",
        REQUEST_ADD_TO_CART_SUCCESS = "REQUEST_ADD_TO_CART_SUCCESS",
        REQUEST_ADD_TO_CART_FAILURE = "REQUEST_ADD_TO_CART_FAILURE",
        /**
         * Get 403 errors from error queue and move them to addition queue
         * when user logs in
         */
        MOVE_AUTH_ERRORS_TO_QUEUE = "MOVE_AUTH_ERRORS_TO_QUEUE",
        ADD_TO_ADD_QUEUE = "ADD_TO_ADD_QUEUE",
        REMOVE_FROM_ADD_QUEUE = "REMOVE_FROM_ADD_QUEUE",
        ADD_TO_UPDATE_QUEUE = "ADD_TO_UPDATE_QUEUE",
        REMOVE_FROM_UPDATE_QUEUE = "REMOVE_FROM_UPDATE_QUEUE",
        ADD_TO_DELETE_QUEUE = "ADD_TO_DELETE_QUEUE",
        REMOVE_FROM_DELETE_QUEUE = "REMOVE_FROM_DELETE_QUEUE",
        ADD_TO_CART_ERRORS = "ADD_TO_CART_ERRORS",
        REMOVE_FROM_CART_ERRORS = "REMOVE_FROM_CART_ERRORS",
        FILL_ERROR_PRODUCTS = "FILL_ERROR_PRODUCTS",
        CLEAR_CART_ERRORS = "CLEAR_CART_ERRORS",
        FILL_QUEUE = "FILL_QUEUE",
        CLEAR_QUEUE = "CLEAR_QUEUE",
        CLEAR_CART = "CLEAR_CART",
        REQUEST_CLEAR_CART = "REQUEST_CLEAR_CART",
        REQUEST_CLEAR_CART_SUCCESS = "REQUEST_CLEAR_CART_SUCCESS",
        REQUEST_CLEAR_CART_FAILURE = "REQUEST_CLEAR_CART_FAILURE",
        RESET_CART_STATE = "RESET_CART_STATE",
        SET_SHIPPING_METHOD = "SET_SHIPPING_METHOD",
        SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
        SET_PAYMENT_DATA = "SET_PAYMENT_DATA",
        REQUEST_USER_DATA = "REQUEST_USER_DATA",
        REQUEST_USER_DATA_SUCCESS = "REQUEST_USER_DATA_SUCCESS",
        REQUEST_USER_DATA_FAILURE = "REQUEST_USER_DATA_FAILURE",
        SET_USER_DATA = "SET_USER_DATA",
        REQUEST_UPDATE_USER_DATA = "REQUEST_UPDATE_USER_DATA",
        REQUEST_UPDATE_USER_DATA_SUCCESS = "REQUEST_UPDATE_USER_DATA_SUCCESS",
        REQUEST_UPDATE_USER_DATA_FAILURE = "REQUEST_UPDATE_USER_DATA_FAILURE",
        SET_CHECKOUT_FORM = "SET_CHECKOUT_FORM",
        SET_CHECKOUT_FORM_IS_VALID = "SET_CHECKOUT_FORM_IS_VALID",
        ORDER_SUCCESS = "ORDER_SUCCESS"
    }
    export default CartActionTypes;
}
declare module "redux/types/actions/Wishlist" {
    enum WishlistActionsTypes {
        REQUEST_WISHLIST = "REQUEST_WISHLIST",
        REQUEST_WISHLIST_SUCCESS = "REQUEST_WISHLIST_SUCCESS",
        DB_REQUEST_WISHLIST_SUCCESS = "DB_REQUEST_WISHLIST_SUCCESS",
        REQUEST_WISHLIST_FAILURE = "REQUEST_WISHLIST_FAILURE",
        ADD_TO_WISHLIST_QUEUE = "ADD_TO_WISHLIST_QUEUE",
        ADD_TO_WISHLIST_REMOVE_QUEUE = "ADD_TO_WISHLIST_REMOVE_QUEUE",
        REMOVE_FROM_WISHLIST_QUEUE = "REMOVE_FROM_WISHLIST_QUEUE",
        REQUEST_ADD_TO_WISHLIST = "REQUEST_ADD_TO_WISHLIST",
        REQUEST_ADD_TO_WISHLIST_SUCCESS = "REQUEST_ADD_TO_WISHLIST_SUCCESS",
        REQUEST_ADD_TO_WISHLIST_FAILURE = "REQUEST_ADD_TO_WISHLIST_FAILURE",
        REQUEST_REMOVE_FROM_WISHLIST = "REQUEST_REMOVE_FROM_WISHLIST",
        REQUEST_REMOVE_FROM_WISHLIST_SUCCESS = "REQUEST_REMOVE_FROM_WISHLIST_SUCCESS",
        REQUEST_REMOVE_FROM_WISHLIST_FAILURE = "REQUEST_REMOVE_FROM_WISHLIST_FAILURE",
        CLEAR_WISHLIST = "CLEAR_WISHLIST",
        REQUEST_CLEAR_WISHLIST = "REQUEST_CLEAR_WISHLIST",
        REQUEST_CLEAR_WISHLIST_SUCCESS = "REQUEST_CLEAR_WISHLIST_SUCCESS",
        REQUEST_CLEAR_WISHLIST_FAILURE = "REQUEST_CLEAR_WISHLIST_FAILURE",
        RESET_WISHLIST_STATE = "RESET_WISHLIST_STATE"
    }
    export default WishlistActionsTypes;
}
declare module "redux/types/actions/Order" {
    enum OrderActionsTypes {
        REQUEST_ORDER_CREATE = "REQUEST_ORDER_CREATE",
        REQUEST_ORDER_CREATE_SUCCESS = "REQUEST_ORDER_CREATE_SUCCESS",
        REQUEST_ORDER_CREATE_FAILURE = "REQUEST_ORDER_CREATE_FAILURE",
        REQUEST_ONLINE_PAYMENT = "REQUEST_ONLINE_PAYMENT",
        REQUEST_ONLINE_PAYMENT_SUCCESS = "REQUEST_ONLINE_PAYMENT_SUCCESS",
        REQUEST_ONLINE_PAYMENT_FAILURE = "REQUEST_ONLINE_PAYMENT_FAILURE",
        REQUEST_ONLINE_PAYMENT_RESULT = "REQUEST_ONLINE_PAYMENT_RESULT",
        REQUEST_ONLINE_PAYMENT_RESULT_SUCCESS = "REQUEST_ONLINE_PAYMENT_RESULT_SUCCESS",
        REQUEST_ONLINE_PAYMENT_RESULT_FAILURE = "REQUEST_ONLINE_PAYMENT_RESULT_FAILURE",
        REQUEST_SETTLEMENT_CREATE = "REQUEST_SETTLEMENT_CREATE",
        REQUEST_SETTLEMENT_CREATE_SUCCESS = "REQUEST_SETTLEMENT_CREATE_SUCCESS",
        REQUEST_SETTLEMENT_CREATE_FAILURE = "REQUEST_SETTLEMENT_CREATE_FAILURE",
        REQUEST_ORDERS = "REQUEST_ORDERS",
        REQUEST_ORDERS_SUCCESS = "REQUEST_ORDERS_SUCCESS",
        REQUEST_ORDERS_FAILURE = "REQUEST_ORDERS_FAILURE",
        REQUEST_ORDER = "REQUEST_ORDER",
        REQUEST_ORDER_SUCCESS = "REQUEST_ORDER_SUCCESS",
        REQUEST_ORDER_FAILURE = "REQUEST_ORDER_FAILURE",
        DB_REQUEST_ORDERS = "DB_REQUEST_ORDERS",
        DB_REQUEST_ORDERS_SUCCESS = "DB_REQUEST_ORDERS_SUCCESS",
        DB_REQUEST_ORDERS_FAILURE = "DB_REQUEST_ORDERS_FAILURE",
        DB_REQUEST_ORDER = "DB_REQUEST_ORDER",
        DB_REQUEST_ORDER_SUCCESS = "DB_REQUEST_ORDER_SUCCESS",
        DB_REQUEST_ORDER_FAILURE = "DB_REQUEST_ORDER_FAILURE"
    }
    export default OrderActionsTypes;
}
declare module "redux/types/actions/Ui" {
    enum UiActions {
        START_LOADING = "START_LOADING",
        END_LOADING = "END_LOADING",
        SCHEDULER_PERFORM = "SCHEDULER_PERFORM",
        SET_INITIAL_LANGUAGE = "SET_INITIAL_LANGUAGE",
        SET_LANGUAGE = "SET_LANGUAGE",
        SET_CURRENCY = "SET_CURRENCY",
        REQUEST_STORE_SETTINGS = "REQUEST_STORE_SETTINGS",
        REQUEST_STORE_SETTINGS_SUCCESS = "REQUEST_STORE_SETTINGS_SUCCESS",
        REQUEST_STORE_SETTINGS_FAILURE = "REQUEST_STORE_SETTINGS_FAILURE",
        READY_TO_UPDATE = "READY_TO_UPDATE",
        UPDATED = "UPDATED",
        OPEN_DRAWER = "OPEN_DRAWER",
        CLOSE_DRAWER = "CLOSE_DRAWER",
        CLOSE_ALL_DRAWERS = "CLOSE_ALL_DRAWERS",
        SET_NOTIFICATION_PERMISSION = "SET_NOTIFICATION_PERMISSION",
        ACCEPT_GDPR = "ACCEPT_GDPR"
    }
    export default UiActions;
}
declare module "redux/actions/layout/LayoutActionTypes" {
    enum LayoutActionTypes {
        GET_LAYOUT = "GET_LAYOUT",
        REQUEST_LAYOUT = "REQUEST_LAYOUT",
        REQUEST_LAYOUT_SUCCESS = "REQUEST_LAYOUT_SUCCESS",
        REQUEST_LAYOUT_FAILURE = "REQUEST_LAYOUT_FAILURE",
        DB_REQUEST_LAYOUT = "DB_REQUEST_LAYOUT",
        DB_REQUEST_LAYOUT_SUCCESS = "DB_REQUEST_LAYOUT_SUCCESS",
        DB_REQUEST_LAYOUT_FAILURE = "DB_REQUEST_LAYOUT_FAILURE",
        SET_LAYOUT_IS_VISIBLE = "SET_LAYOUT_IS_VISIBLE"
    }
    export default LayoutActionTypes;
}
declare module "redux/actions/category/CategoryActionTypes" {
    enum CategoryActionTypes {
        REQUEST_CATEGORY = "REQUEST_CATEGORY",
        REQUEST_CATEGORY_SUCCESS = "REQUEST_CATEGORY_SUCCESS",
        REQUEST_CATEGORY_FAILURE = "REQUEST_CATEGORY_FAILURE",
        DB_REQUEST_CATEGORY = "DB_REQUEST_CATEGORY",
        DB_REQUEST_CATEGORY_SUCCESS = "DB_REQUEST_CATEGORY_SUCCESS",
        DB_REQUEST_CATEGORY_FAILURE = "DB_REQUEST_CATEGORY_FAILURE",
        SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY",
        SET_CATEGORY_IS_REQUESTING = "SET_CATEGORY_IS_REQUESTING"
    }
    export default CategoryActionTypes;
}
declare module "redux/actions/product/ProductActionTypes" {
    enum ProductActionTypes {
        REQUEST_PRODUCT = "REQUEST_PRODUCT",
        REQUEST_PRODUCT_SUCCESS = "REQUEST_PRODUCT_SUCCESS",
        REQUEST_PRODUCT_FAILURE = "REQUEST_PRODUCT_FAILURE",
        DB_REQUEST_PRODUCT = "DB_REQUEST_PRODUCT",
        DB_REQUEST_PRODUCT_SUCCESS = "DB_REQUEST_PRODUCT_SUCCESS",
        DB_REQUEST_PRODUCT_FAILURE = "DB_REQUEST_PRODUCT_FAILURE",
        SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT",
        REQUEST_CATEGORY_PRODUCTS = "REQUEST_CATEGORY_PRODUCTS",
        REQUEST_CATEGORY_PRODUCTS_SUCCESS = "REQUEST_CATEGORY_PRODUCTS_SUCCESS",
        REQUEST_CATEGORY_PRODUCTS_FAILURE = "REQUEST_CATEGORY_PRODUCTS_FAILURE",
        DB_REQUEST_CATEGORY_PRODUCTS = "DB_REQUEST_CATEGORY_PRODUCTS",
        DB_REQUEST_CATEGORY_PRODUCTS_SUCCESS = "DB_REQUEST_CATEGORY_PRODUCTS_SUCCESS",
        DB_REQUEST_CATEGORY_PRODUCTS_FAILURE = "DB_REQUEST_CATEGORY_PRODUCTS_FAILURE",
        REQUEST_SEARCH_PRODUCTS = "REQUEST_SEARCH_PRODUCTS",
        REQUEST_SEARCH_PRODUCTS_SUCCESS = "REQUEST_SEARCH_PRODUCTS_SUCCESS",
        REQUEST_SEARCH_PRODUCTS_FAILURE = "REQUEST_SEARCH_PRODUCTS_FAILURE",
        SET_PRODUCT_IS_REQUESTING = "SET_PRODUCT_IS_REQUESTING"
    }
    export default ProductActionTypes;
}
declare module "redux/actions/notification/NotificationActionTypes" {
    enum NotificationActionTypes {
        REQUEST_NOTIFICATIONS = "REQUEST_NOTIFICATIONS",
        REQUEST_NOTIFICATIONS_SUCCESS = "REQUEST_NOTIFICATIONS_SUCCESS",
        REQUEST_NOTIFICATIONS_FAILURE = "REQUEST_NOTIFICATIONS_FAILURE",
        REQUEST_MARK_NOTIFICATIONS_AS_READ = "REQUEST_MARK_NOTIFICATIONS_AS_READ",
        REQUEST_MARK_NOTIFICATIONS_AS_READ_SUCCESS = "REQUEST_MARK_NOTIFICATIONS_AS_READ_SUCCESS",
        REQUEST_MARK_NOTIFICATIONS_AS_READ_FAILURE = "REQUEST_MARK_NOTIFICATIONS_AS_READ_FAILURE",
        CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS",
        MARK_NOTIFICATIONS_AS_VIEWED = "MARK_NOTIFICATIONS_AS_VIEWED"
    }
    export default NotificationActionTypes;
}
declare module "redux/types/actions/index" {
    export * from "redux/actions/auth/AuthActionTypes";
    export * from "redux/actions/cart/CartActionTypes";
    export * from "redux/types/actions/Wishlist";
    export * from "redux/actions/cart/CartActionTypes";
    export * from "redux/types/actions/Order";
    export * from "redux/types/actions/Ui";
    export * from "redux/actions/layout/LayoutActionTypes";
    export * from "redux/actions/category/CategoryActionTypes";
    export * from "redux/actions/product/ProductActionTypes";
    export * from "redux/actions/notification/NotificationActionTypes";
    export const APP_INIT = "APP_INIT";
    export type APP_INIT = typeof APP_INIT;
}
declare module "redux/actions/App" {
    import * as constants from "redux/types/actions/index";
    export interface AppInit {
        type: constants.APP_INIT;
    }
    export function appInit(): AppInit;
    export type AppAction = AppInit;
}
declare module "redux/actions/navigation-bar/NavigationBarActionTypes" {
    enum NavigationBarActionTypes {
        SET_PAGE = "NavigationBar/SET_PAGE",
        SET_TITLE = "NavigationBar/SET_TITLE",
        ADD_ACTION = "NavigationBar/ADD_ACTION",
        SET_ACTION = "NavigationBar/SET_ACTION",
        RESET_ACTION = "NavigationBar/RESET_ACTION"
    }
    export default NavigationBarActionTypes;
}
declare module "redux/actions/navigation-bar/SetPage" {
    import NavigationBarActionTypes from "redux/actions/navigation-bar/NavigationBarActionTypes";
    export interface SetPage {
        type: NavigationBarActionTypes.SET_PAGE;
        payload: {
            title?: string;
        };
    }
    export function setPage(title?: string): SetPage;
}
declare module "redux/actions/navigation-bar/AddAction" {
    import NavigationBarActionTypes from "redux/actions/navigation-bar/NavigationBarActionTypes";
    import { IAction } from "redux/reducers/navigation-bar/INavigationBarState";
    export interface AddAction {
        type: NavigationBarActionTypes.ADD_ACTION;
        payload: {
            action: IAction;
        };
    }
    export function addAction(action: IAction): AddAction;
}
declare module "redux/actions/navigation-bar/SetAction" {
    import NavigationBarActionTypes from "redux/actions/navigation-bar/NavigationBarActionTypes";
    export interface SetAction {
        type: NavigationBarActionTypes.SET_ACTION;
        payload: {
            component: () => React.ReactNode;
        };
    }
    export function setAction(component: () => React.ReactNode): SetAction;
}
declare module "redux/actions/navigation-bar/ResetAction" {
    import NavigationBarActionTypes from "redux/actions/navigation-bar/NavigationBarActionTypes";
    export interface ResetAction {
        type: NavigationBarActionTypes.RESET_ACTION;
    }
    export function resetAction(): ResetAction;
}
declare module "redux/actions/navigation-bar/NavigationBarAction" {
    import { SetPage } from "redux/actions/navigation-bar/SetPage";
    import { AddAction } from "redux/actions/navigation-bar/AddAction";
    import { SetAction } from "redux/actions/navigation-bar/SetAction";
    import { ResetAction } from "redux/actions/navigation-bar/ResetAction";
    export * from "redux/actions/navigation-bar/SetPage";
    export * from "redux/actions/navigation-bar/AddAction";
    export * from "redux/actions/navigation-bar/ResetAction";
    export type NavigationBarAction = SetPage | AddAction | ResetAction | SetAction;
}
declare module "redux/actions/article/ArticleActionTypes" {
    enum ArticleActionTypes {
        REQUEST_ARTICLE = "REQUEST_ARTICLE",
        REQUEST_ARTICLE_SUCCESS = "REQUEST_ARTICLE_SUCCESS",
        REQUEST_ARTICLE_FAILURE = "REQUEST_ARTICLE_FAILURE",
        DB_REQUEST_ARTICLE = "DB_REQUEST_ARTICLE",
        DB_REQUEST_ARTICLE_SUCCESS = "DB_REQUEST_ARTICLE_SUCCESS",
        DB_REQUEST_ARTICLE_FAILURE = "DB_REQUEST_ARTICLE_FAILURE",
        REQUEST_ARTICLES = "REQUEST_ARTICLES",
        REQUEST_ARTICLES_SUCCESS = "REQUEST_ARTICLES_SUCCESS",
        REQUEST_ARTICLES_FAILURE = "REQUEST_ARTICLES_FAILURE",
        DB_REQUEST_ARTICLES = "DB_REQUEST_ARTICLES",
        DB_REQUEST_ARTICLES_SUCCESS = "DB_REQUEST_ARTICLES_SUCCESS",
        DB_REQUEST_ARTICLES_FAILURE = "DB_REQUEST_ARTICLES_FAILURE",
        SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE",
        SET_ARTICLE_IS_REQUESTING = "SET_ARTICLE_IS_REQUESTING"
    }
    export default ArticleActionTypes;
}
declare module "entities/services/factory/FactoryService" {
    export class FactoryService {
        protected factories: Record<string, ICustomFactory>;
        constructor();
        registerFactory<T = any, C = any>(code: string, factory: ICustomFactory<T, C>): void | never;
        getFactory<T = any, C = any>(code: string): ICustomFactory<T, C> | undefined;
        createAll(entity: IExtendableEntity): Promise<IExtendableEntity>;
        /**
         * Applies factories from registered extensions assets
         */
        protected createFromModules(entity: IExtendableEntity): Promise<IExtendableEntity>;
    }
    interface IExtendableEntity {
        extra: Record<string, unknown>;
    }
    type ICustomFactory<T = any, C = any> = (data: T) => C;
    export const factoryService: FactoryService;
}
declare module "entities/product/factories/productFeatureVariantFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import ProductFeatureVariant from "entities/product/ProductFeatureVariant";
    export interface IProductFeatureVariantFactory extends IEntityExtendable {
        id: number;
        name: string;
        description: string;
        featureId: number;
        featureType: string;
        position: number;
        selected: number;
    }
    const createProductFeatureVariant: (variantData: IProductFeatureVariantFactory) => Promise<ProductFeatureVariant>;
    export default createProductFeatureVariant;
}
declare module "entities/createListItems" {
    /**
     * Create list of items with specified factory function
     * and ignore failures
     *
     * @param list
     * @param factory
     */
    const createListItems: <T, S>(list: T[], factory: (item: T) => Promise<S>) => Promise<S[]>;
    export default createListItems;
}
declare module "entities/product/factories/productFeatureFactory" {
    import ProductFeature from "entities/product/ProductFeature";
    import { IProductFeatureVariantFactory } from "entities/product/factories/productFeatureVariantFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IProductFeatureFactory extends IEntityExtendable {
        id: number;
        name: string;
        description: string;
        position: number;
        prefix: string;
        value: string | number;
        variantId?: number;
        variants?: Array<IProductFeatureVariantFactory>;
        type: string;
    }
    const createProductFeature: (featureData: IProductFeatureFactory) => Promise<ProductFeature>;
    export default createProductFeature;
}
declare module "entities/image-pair/factory/iconFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Icon from "entities/image-pair/Icon";
    export interface IIconFactory extends IEntityExtendable {
        height: number;
        width: number;
        url: string;
        alt: string;
    }
    const createIcon: (iconData: IIconFactory) => Promise<Icon>;
    export default createIcon;
}
declare module "entities/image-pair/factory/imageFactory" {
    import ImagePair from "entities/image-pair/ImagePair";
    import { IIconFactory } from "entities/image-pair/factory/iconFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IImageFactory extends IEntityExtendable {
        position: number;
        icons: Array<IIconFactory>;
    }
    const createImage: (imageData: IImageFactory) => Promise<ImagePair>;
    export default createImage;
}
declare module "entities/product/factories/productSeoSnippetFactory" {
    import ProductSeoSnippet from "entities/product/SeoSnippet";
    export interface IProductSeoSnippetFactory {
        title: string;
        metaDescription: string;
        availability: string;
        description: string;
        name: string;
        price: number;
        currency: string;
        code: string;
    }
    const createProductSeoSnippet: (snippetData: IProductSeoSnippetFactory) => Promise<ProductSeoSnippet>;
    export default createProductSeoSnippet;
}
declare module "entities/product/factories/productOptionVariantFactory" {
    import ProductOptionVariant from "entities/product/ProductOptionVariant";
    import { IImageFactory } from "entities/image-pair/factory/imageFactory";
    import PriceModifierTypes from "constants/PriceModifierTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IProductOptionVariantFactory extends IEntityExtendable {
        id: number;
        optionId: number;
        name: string;
        modifier: number;
        modifierType: PriceModifierTypes;
        position: number;
        mainPair: IImageFactory | null;
    }
    const createProductOptionVariant: (variantData: IProductOptionVariantFactory) => Promise<ProductOptionVariant>;
    export default createProductOptionVariant;
}
declare module "entities/product/factories/productOptionFactory" {
    import ProductOption from "entities/product/ProductOption";
    import ProductOptionTypes from "constants/ProductOptionTypes";
    import { IProductOptionVariantFactory } from "entities/product/factories/productOptionVariantFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IProductOptionFactory extends IEntityExtendable {
        id: number;
        name: string;
        value: string | number;
        type: ProductOptionTypes;
        variants: Array<IProductOptionVariantFactory>;
        position: number;
    }
    const createProductOption: (optionData: IProductOptionFactory) => Promise<ProductOption>;
    export default createProductOption;
}
declare module "entities/parent/factories/parentFactory" {
    import Parent from "entities/parent/Parent";
    export interface IParentFactory {
        id: number;
        url: string;
        name: string;
        parents: Array<IParentFactory>;
    }
    const createParent: (parentData: IParentFactory) => Promise<Parent>;
    export default createParent;
}
declare module "entities/product/factories/variationVariantFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import VariationVariant from "entities/product/VariationVariant";
    export interface IVariationVariantFactory extends IEntityExtendable {
        id: number;
        name: string;
        position: number;
        slug: string;
        price: number;
        productId: number;
    }
    const createVariationVariant: (nameData: IVariationVariantFactory) => Promise<VariationVariant>;
    export default createVariationVariant;
}
declare module "entities/product/factories/variationFactory" {
    import Variation from "entities/product/Variation";
    import { IVariationVariantFactory } from "entities/product/factories/variationVariantFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IVariationFactory extends IEntityExtendable {
        id: number;
        position: number;
        name: string;
        variants: Array<IVariationVariantFactory>;
        selectedId: number;
    }
    const createVariation: (variationData: IVariationFactory) => Promise<Variation>;
    export default createVariation;
}
declare module "entities/product/factories/productFactory" {
    import Product from "entities/product/Product";
    import { IProductFeatureFactory } from "entities/product/factories/productFeatureFactory";
    import { IImageFactory } from "entities/image-pair/factory/imageFactory";
    import { IProductSeoSnippetFactory } from "entities/product/factories/productSeoSnippetFactory";
    import { IProductOptionFactory } from "entities/product/factories/productOptionFactory";
    import { IParentFactory } from "entities/parent/factories/parentFactory";
    import { IVariationFactory } from "entities/product/factories/variationFactory";
    import ZeroPriceBehaviour from "constants/ZeroPriceBehaviour";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IProductFactory extends IEntityExtendable {
        id: number;
        slug: string;
        name: string;
        pageTitle: string;
        shortDescription: string;
        description: string;
        promoText: string;
        code: string;
        price: number;
        basePrice: number;
        listPrice: number;
        averageRating: number;
        position: number;
        stockAmount: number;
        amountStep: number;
        minimumAmount: number;
        maximumAmount: number;
        popularity: number;
        zeroPriceBehaviour: ZeroPriceBehaviour;
        parents: Array<IParentFactory>;
        features: Array<IProductFeatureFactory>;
        images: Array<IImageFactory>;
        seoSnippet: IProductSeoSnippetFactory;
        options: Array<IProductOptionFactory>;
        variations: Array<IVariationFactory>;
    }
    const createProduct: (productData: IProductFactory) => Promise<Product>;
    export default createProduct;
}
declare module "entities/category/factories/categorySeoSnippetFactory" {
    import CategorySeoSnippet from "entities/category/SeoSnippet";
    export interface ICategorySeoSnippetFactory {
        title: string;
        metaDescription: string;
        description: string;
        name: string;
    }
    const createCategorySeoSnippet: (snippetData: ICategorySeoSnippetFactory) => Promise<CategorySeoSnippet>;
    export default createCategorySeoSnippet;
}
declare module "entities/category/factories/categoryFactory" {
    import Category from "entities/category/Category";
    import { IImageFactory } from "entities/image-pair/factory/imageFactory";
    import { IParentFactory } from "entities/parent/factories/parentFactory";
    import { ICategorySeoSnippetFactory } from "entities/category/factories/categorySeoSnippetFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ICategoryFactory extends IEntityExtendable {
        id: number;
        slug: string;
        productsCount: number;
        position: number;
        name: string;
        description: string;
        subcategories: Array<ICategoryFactory>;
        imagePair: IImageFactory | null;
        seoSnippet: ICategorySeoSnippetFactory;
        parents: Array<IParentFactory>;
    }
    const createCategory: (categoryData: ICategoryFactory) => Promise<Category>;
    export default createCategory;
}
declare module "entities/layout/factories/blockFactory" {
    import Block from "entities/layout/Block";
    import LayoutContainerTypes from "constants/LayoutContainerTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IBlockFactory extends IEntityExtendable {
        id: number;
        deviceTypes: Array<string>;
        title: string;
        shouldShowTitle: boolean;
        position: number;
        props: any;
        modifier?: string;
        disposition: 'full_screen_width' | 'grid_width';
        type: string;
        container: LayoutContainerTypes;
    }
    const createBlock: (blockData: IBlockFactory) => Promise<Block>;
    export default createBlock;
}
declare module "entities/layout/factories/layoutFactory" {
    import Layout from "entities/layout/Layout";
    import { IBlockFactory } from "entities/layout/factories/blockFactory";
    import LayoutTypes from "constants/LayoutTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ILayoutFactory extends IEntityExtendable {
        type: LayoutTypes;
        blocks: Array<IBlockFactory>;
    }
    const createLayout: (layoutData: ILayoutFactory) => Promise<Layout>;
    export default createLayout;
}
declare module "entities/article/factories/articleSeoSnippetFactory" {
    import ArticleSeoSnippet from "entities/article/SeoSnippet";
    export interface IArticleSeoSnippetFactory {
        title: string;
        metaDescription: string;
    }
    const createArticleSeoSnippet: (snippetData: IArticleSeoSnippetFactory) => Promise<ArticleSeoSnippet>;
    export default createArticleSeoSnippet;
}
declare module "entities/article/factories/articleFactory" {
    import Article from "entities/article/Article";
    import { IImageFactory } from "entities/image-pair/factory/imageFactory";
    import { IArticleSeoSnippetFactory } from "entities/article/factories/articleSeoSnippetFactory";
    import { IParentFactory } from "entities/parent/factories/parentFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IArticleFactory extends IEntityExtendable {
        id: number;
        companyId: number;
        parentId: number;
        createdAt: Date;
        name: string;
        content: string;
        shortContent: string;
        slug: string;
        imagePair: IImageFactory | null;
        seoSnippet: IArticleSeoSnippetFactory;
        parents: Array<IParentFactory>;
    }
    const createArticle: (articleData: IArticleFactory) => Promise<Article>;
    export default createArticle;
}
declare module "entities/profile/factories/addressFactory" {
    import Address from "entities/profile/Address";
    export interface IAddressFactory {
        firstname?: string;
        lastname?: string;
        phone?: string;
        address?: string;
        address2?: string;
        city?: string;
        county?: string;
        country?: string;
        countryName?: string;
        zipcode?: string;
        state?: string;
        stateName?: string;
    }
    const createAddress: (addressData: IAddressFactory) => Promise<Address>;
    export default createAddress;
}
declare module "entities/order/factories/orderStatusFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import OrderStatus from "entities/order/OrderStatus";
    export interface IOrderStatusFactory extends IEntityExtendable {
        id: number;
        code: string;
        name: string;
        color: string;
    }
    const createOrderStatus: (statusData: IOrderStatusFactory) => Promise<OrderStatus>;
    export default createOrderStatus;
}
declare module "entities/payment/factories/paymentFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Payment from "entities/payment/Payment";
    export interface IPaymentFactory extends IEntityExtendable {
        id: number;
        name: string;
        instructions: string;
        description: string;
        isOffline: boolean;
        type: string;
    }
    const createPayment: (paymentData: IPaymentFactory) => Promise<Payment>;
    export default createPayment;
}
declare module "entities/shipping/factories/shippingFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Shipping from "entities/shipping/Shipping";
    export interface IShippingFactory extends IEntityExtendable {
        id: number;
        name: string;
        deliveryTime: string;
        description: string;
        isFree: boolean;
        price: number;
    }
    const createShipping: (shippingData: IShippingFactory) => Promise<Shipping>;
    export default createShipping;
}
declare module "entities/product/factories/productOptionSelectedFactory" {
    import ProductOptionSelected from "entities/product/ProductOptionSelected";
    import { ProductOptionSelectedTypes } from "entities/product/IProductOptionSelected";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IProductOptionSelectedFactory extends IEntityExtendable {
        name: string;
        value: string | boolean;
        type: ProductOptionSelectedTypes;
    }
    const createProductOptionSelected: (optionData: IProductOptionSelectedFactory) => Promise<ProductOptionSelected>;
    export default createProductOptionSelected;
}
declare module "entities/product/factories/productExtrasFactory" {
    import ProductExtras from "entities/product/ProductExtras";
    import { IProductOptionSelectedFactory } from "entities/product/factories/productOptionSelectedFactory";
    export interface IProductExtrasFactory {
        productOptionsSelected: Array<IProductOptionSelectedFactory>;
    }
    const createProductExtras: (extrasData: IProductExtrasFactory) => Promise<ProductExtras>;
    export default createProductExtras;
}
declare module "entities/order/factories/orderProductFactory" {
    import OrderProduct from "entities/order/OrderProduct";
    import { IProductFactory } from "entities/product/factories/productFactory";
    import { IProductExtrasFactory } from "entities/product/factories/productExtrasFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IOrderProductFactory extends IEntityExtendable {
        uuid: string;
        subtotal: number;
        amount: number;
        product: IProductFactory;
        extras: IProductExtrasFactory;
    }
    const createOrderProduct: (orderProductData: IOrderProductFactory) => Promise<OrderProduct>;
    export default createOrderProduct;
}
declare module "entities/tax/factories/taxFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Tax from "entities/tax/Tax";
    export interface ITaxFactory extends IEntityExtendable {
        name: string;
        isIncluded: boolean;
        price: number;
    }
    /**
     * Tax factory
     */
    const createTax: (taxData?: ITaxFactory | undefined) => Promise<Tax>;
    export default createTax;
}
declare module "entities/order/factories/orderFactory" {
    import Order from "entities/order/Order";
    import { IAddressFactory } from "entities/profile/factories/addressFactory";
    import { IOrderStatusFactory } from "entities/order/factories/orderStatusFactory";
    import { IPaymentFactory } from "entities/payment/factories/paymentFactory";
    import { IShippingFactory } from "entities/shipping/factories/shippingFactory";
    import { IOrderProductFactory } from "entities/order/factories/orderProductFactory";
    import { ITaxFactory } from "entities/tax/factories/taxFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IOrderFactory extends IEntityExtendable {
        id: number;
        createdAt: Date | string;
        companyId: number;
        totalPrice: number;
        subtotalPrice: number;
        discountPrice: number;
        shippingPrice: number;
        firstname?: string;
        lastname?: string;
        email?: string;
        phone?: string;
        shippingAddress: IAddressFactory;
        billingAddress: IAddressFactory;
        orderStatus: IOrderStatusFactory | null;
        payment: IPaymentFactory | null;
        shippings: Array<IShippingFactory>;
        orderProducts: Array<IOrderProductFactory>;
        orders: Array<IOrderFactory>;
        taxes: Array<ITaxFactory>;
    }
    const createOrder: (orderData: IOrderFactory) => Promise<Order>;
    export default createOrder;
}
declare module "db/Database" {
    import Dexie from 'dexie';
    import Category from "entities/category/Category";
    import Article from "entities/article/Article";
    import Layout from "entities/layout/Layout";
    import Order from "entities/order/Order";
    import Product from "entities/product/Product";
    class Database extends Dexie {
        categories: Dexie.Table<Category, number>;
        products: Dexie.Table<Product, number>;
        articles: Dexie.Table<Article, number>;
        layouts: Dexie.Table<Layout, string>;
        orders: Dexie.Table<Order, number>;
        constructor();
    }
    export class DatabaseHooks {
        hooks: Record<string, Array<(data: any) => any>>;
        register(tableName: string, callback: (data: any) => Promise<any>): void;
        transform(tableName: string, data: any): Promise<any>;
    }
    const db: Database;
    export const mapDatabaseHooksToDatabase: (database: Dexie, hooks: DatabaseHooks) => void;
    export default db;
}
declare module "db/models/Article" {
    import Article from "entities/article/Article";
    export const persistArticle: (article: Article) => void;
    /**
     * Get an article from indexedDB by id
     *
     * @param {number|string} key
     *
     * @returns {Promise<Article|undefined>}
     */
    export const findArticle: (articleId: number | string) => Promise<Article | undefined>;
    export const findArticles: (articlesIds: Array<number>) => Promise<Array<Article>>;
    export const findArticlesByParent: (parentId: number) => Promise<Array<Article>>;
}
declare module "redux/actions/article/RequestArticle" {
    import ArticleActionTypes from "redux/actions/article/ArticleActionTypes";
    import Article from "entities/article/Article";
    import ApiError from "entities/error/ApiError";
    export interface RequestArticle {
        type: ArticleActionTypes.REQUEST_ARTICLE;
        payload: {
            articleId: number;
        };
    }
    export function requestArticle(id: number): RequestArticle;
    export interface RequestArticleSuccess {
        type: ArticleActionTypes.REQUEST_ARTICLE_SUCCESS;
        payload: {
            article: Article;
        };
    }
    export function requestArticleSuccess(article: Article): RequestArticleSuccess;
    export interface RequestArticleFailure {
        type: ArticleActionTypes.REQUEST_ARTICLE_FAILURE;
        payload: {
            articleId: number;
            error: ApiError;
        };
    }
    export function requestArticleFailure(id: number, error: any): RequestArticleFailure;
}
declare module "redux/actions/article/DbRequestArticle" {
    import ArticleActionTypes from "redux/actions/article/ArticleActionTypes";
    import Article from "entities/article/Article";
    export interface DbRequestArticle {
        type: ArticleActionTypes.DB_REQUEST_ARTICLE;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestArticle(id: number | string): DbRequestArticle;
    export interface DbRequestArticleSuccess {
        type: ArticleActionTypes.DB_REQUEST_ARTICLE_SUCCESS;
        payload: {
            article: Article;
        };
    }
    export function dbRequestArticleSuccess(article: Article): DbRequestArticleSuccess;
    export interface DbRequestArticleFailure {
        type: ArticleActionTypes.DB_REQUEST_ARTICLE_FAILURE;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestArticleFailure(id: number | string): DbRequestArticleFailure;
}
declare module "redux/actions/article/RequestArticles" {
    import ArticleActionTypes from "redux/actions/article/ArticleActionTypes";
    import ApiError from "entities/error/ApiError";
    import ArticleSelection from "entities/article/ArticleSelection";
    export interface RequestArticles {
        type: ArticleActionTypes.REQUEST_ARTICLES;
        payload: {
            parentId: number;
            selection?: ArticleSelection;
            shouldAppend?: boolean;
        };
    }
    export function requestArticles(id: number, selection?: ArticleSelection, shouldAppend?: boolean): RequestArticles;
    export interface RequestArticlesSuccess {
        type: ArticleActionTypes.REQUEST_ARTICLES_SUCCESS;
        payload: {
            selection: ArticleSelection;
            shouldAppend: boolean;
        };
    }
    export function requestArticlesSuccess(selection: ArticleSelection, shouldAppend?: boolean): RequestArticlesSuccess;
    export interface RequestArticlesFailure {
        type: ArticleActionTypes.REQUEST_ARTICLES_FAILURE;
        payload: {
            categoryId: number;
            error: ApiError;
        };
    }
    export function requestArticlesFailure(id: number, error: any): RequestArticlesFailure;
}
declare module "redux/actions/article/DbRequestArticles" {
    import ArticleActionTypes from "redux/actions/article/ArticleActionTypes";
    import Article from "entities/article/Article";
    import ArticleSelection from "entities/article/ArticleSelection";
    export interface DbRequestArticles {
        type: ArticleActionTypes.DB_REQUEST_ARTICLES;
        payload: {
            parentId: number;
        };
    }
    export function dbRequestArticles(id: number): DbRequestArticles;
    export interface DbRequestArticlesSuccess {
        type: ArticleActionTypes.DB_REQUEST_ARTICLES_SUCCESS;
        payload: {
            selection: ArticleSelection;
        };
    }
    export function dbRequestArticlesSuccess(articles: Array<Article>): DbRequestArticlesSuccess;
    export interface DbRequestArticlesFailure {
        type: ArticleActionTypes.DB_REQUEST_ARTICLES_FAILURE;
        payload: {
            parentId: number;
        };
    }
    export function dbRequestArticlesFailure(id: number): DbRequestArticlesFailure;
}
declare module "redux/actions/article/ArticleAction" {
    import { RequestArticle, RequestArticleSuccess, RequestArticleFailure } from "redux/actions/article/RequestArticle";
    import { DbRequestArticle, DbRequestArticleSuccess, DbRequestArticleFailure } from "redux/actions/article/DbRequestArticle";
    import { RequestArticles, RequestArticlesSuccess, RequestArticlesFailure } from "redux/actions/article/RequestArticles";
    import { DbRequestArticles, DbRequestArticlesSuccess, DbRequestArticlesFailure } from "redux/actions/article/DbRequestArticles";
    import ArticleActionTypes from "redux/actions/article/ArticleActionTypes";
    import Article from "entities/article/Article";
    export * from "redux/actions/article/RequestArticle";
    export * from "redux/actions/article/DbRequestArticle";
    export * from "redux/actions/article/RequestArticles";
    export * from "redux/actions/article/DbRequestArticles";
    export interface SetCurrentArticle {
        type: ArticleActionTypes.SET_CURRENT_ARTICLE;
        payload: {
            article: Article;
        };
    }
    export function setCurrentArticle(rawArticle: any): SetCurrentArticle;
    export interface SetArticleIsRequesting {
        type: ArticleActionTypes.SET_ARTICLE_IS_REQUESTING;
        payload: {
            isRequesting: boolean;
        };
    }
    export function setArticleIsRequesting(isRequesting: boolean): SetArticleIsRequesting;
    export type ArticleAction = SetCurrentArticle | SetArticleIsRequesting | RequestArticle | RequestArticleSuccess | RequestArticleFailure | RequestArticles | RequestArticlesSuccess | RequestArticlesFailure | DbRequestArticle | DbRequestArticleSuccess | DbRequestArticleFailure | DbRequestArticles | DbRequestArticlesSuccess | DbRequestArticlesFailure;
}
declare module "redux/actions/auth/RequestLogin" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import AuthProviders from "constants/AuthProviders";
    import ApiError from "entities/error/ApiError";
    export interface RequestLogin {
        type: AuthActionTypes.REQUEST_LOGIN;
        payload: {
            email: string;
            password: string;
            provider: AuthProviders.EMAIL_PASSWORD;
        };
    }
    export function requestLogin(email: string, password: string): RequestLogin;
    export interface RequestLoginWithRestoreToken {
        type: AuthActionTypes.REQUEST_LOGIN_WITH_RESTORE_TOKEN;
        payload: {
            token: string;
            provider: AuthProviders.RESTORE_TOKEN;
        };
    }
    export function requestLoginWithRestoreToken(token: string): RequestLoginWithRestoreToken;
    export interface RequestLoginSuccess {
        type: AuthActionTypes.REQUEST_LOGIN_SUCCESS;
        payload: {
            token: string;
            provider: AuthProviders;
        };
    }
    export function requestLoginSuccess(token: string, provider: AuthProviders): RequestLoginSuccess;
    export interface RequestLoginFailure {
        type: AuthActionTypes.REQUEST_LOGIN_FAILURE;
        payload: {
            error: ApiError;
            provider: AuthProviders;
        };
    }
    export function requestLoginFailure(error: any, provider: AuthProviders): RequestLoginFailure;
}
declare module "redux/actions/auth/RequestSocialLogin" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import AuthProviders from "constants/AuthProviders";
    export interface RequestSocialLogin {
        type: AuthActionTypes.REQUEST_SOCIAL_LOGIN;
        payload: {
            provider: AuthProviders;
            idToken: string;
            clientId: string;
        };
    }
    export function requestSocialLogin(provider: AuthProviders, idToken: string, clientId: string): RequestSocialLogin;
}
declare module "redux/actions/auth/Logout" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    export interface Logout {
        type: AuthActionTypes.LOGOUT;
    }
    export function logout(): Logout;
    export interface LogoutSuccess {
        type: AuthActionTypes.LOGOUT_SUCCESS;
    }
    export function logoutSuccess(): LogoutSuccess;
}
declare module "redux/actions/auth/RequestProfile" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import Profile from "entities/auth/Profile";
    import ApiError from "entities/error/ApiError";
    export interface RequestProfile {
        type: AuthActionTypes.REQUEST_PROFILE;
    }
    export function requestProfile(): RequestProfile;
    export interface RequestProfileSuccess {
        type: AuthActionTypes.REQUEST_PROFILE_SUCCESS;
        payload: {
            profile: Profile;
        };
    }
    export function requestProfileSuccess(profile: any): RequestProfileSuccess;
    export interface RequestProfileFailure {
        type: AuthActionTypes.REQUEST_PROFILE_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestProfileFailure(error: any): RequestProfileFailure;
}
declare module "redux/actions/auth/RequestSignup" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import ApiError from "entities/error/ApiError";
    export interface RequestSignup {
        type: AuthActionTypes.REQUEST_SIGNUP;
        payload: {
            profile: any;
        };
    }
    export function requestSignup(profile: any): RequestSignup;
    export interface RequestSignupSuccess {
        type: AuthActionTypes.REQUEST_SIGNUP_SUCCESS;
        payload: {
            token: string;
        };
    }
    export function requestSignupSuccess(token: string): RequestSignupSuccess;
    export interface RequestSignupFailure {
        type: AuthActionTypes.REQUEST_SIGNUP_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestSignupFailure(error: any): RequestSignupFailure;
}
declare module "redux/actions/auth/RequestSignupForm" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import ApiError from "entities/error/ApiError";
    import FormSchema from "entities/form/FormSchema";
    export interface RequestSignupForm {
        type: AuthActionTypes.REQUEST_SIGNUP_FORM;
    }
    export function requestSignupForm(): RequestSignupForm;
    export interface RequestSignupFormSuccess {
        type: AuthActionTypes.REQUEST_SIGNUP_FORM_SUCCESS;
        payload: {
            formSchema: FormSchema;
        };
    }
    export function requestSignupFormSuccess(formSchema: FormSchema): RequestSignupFormSuccess;
    export interface RequestSignupFormFailure {
        type: AuthActionTypes.REQUEST_SIGNUP_FORM_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestSignupFormFailure(error: any): RequestSignupFormFailure;
}
declare module "redux/actions/auth/RequestUpdateProfileForm" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import ApiError from "entities/error/ApiError";
    import FormSchema from "entities/form/FormSchema";
    export interface RequestUpdateProfileForm {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE_FORM;
    }
    export function requestUpdateProfileForm(): RequestUpdateProfileForm;
    export interface RequestUpdateProfileFormSuccess {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE_FORM_SUCCESS;
        payload: {
            formSchema: FormSchema;
        };
    }
    export function requestUpdateProfileFormSuccess(formSchema: FormSchema): RequestUpdateProfileFormSuccess;
    export interface RequestUpdateProfileFormFailure {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE_FORM_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestUpdateProfileFormFailure(error: any): RequestUpdateProfileFormFailure;
}
declare module "redux/actions/auth/RequestUpdateProfile" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import ApiError from "entities/error/ApiError";
    export interface RequestUpdateProfile {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE;
        payload: {
            profileData: any;
        };
    }
    export function requestUpdateProfile(profileData: any): RequestUpdateProfile;
    export interface RequestUpdateProfileSuccess {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE_SUCCESS;
    }
    export function requestUpdateProfileSuccess(): RequestUpdateProfileSuccess;
    export interface RequestUpdateProfileFailure {
        type: AuthActionTypes.REQUEST_UPDATE_PROFILE_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestUpdateProfileFailure(error: ApiError): RequestUpdateProfileFailure;
}
declare module "redux/actions/auth/RequestRestorePassword" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    import ApiError from "entities/error/ApiError";
    export interface RequestRestorePassword {
        type: AuthActionTypes.REQUEST_RESTORE_PASSWORD;
        payload: {
            email: string;
        };
    }
    export function requestRestorePassword(email: string): RequestRestorePassword;
    export interface RequestRestorePasswordSuccess {
        type: AuthActionTypes.REQUEST_RESTORE_PASSWORD_SUCCESS;
        payload: {
            email: string;
        };
    }
    export function requestRestorePasswordSuccess(email: string): RequestRestorePasswordSuccess;
    export interface RequestRestorePasswordFailure {
        type: AuthActionTypes.REQUEST_RESTORE_PASSWORD_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestRestorePasswordFailure(error: any): RequestRestorePasswordFailure;
}
declare module "redux/actions/auth/SetToken" {
    import AuthActionTypes from "redux/actions/auth/AuthActionTypes";
    export interface SetToken {
        type: AuthActionTypes.SET_TOKEN;
        payload: {
            token: string;
        };
    }
    export function setToken(token?: string): SetToken;
}
declare module "redux/actions/auth/AuthAction" {
    import { RequestLogin, RequestLoginSuccess, RequestLoginFailure, RequestLoginWithRestoreToken } from "redux/actions/auth/RequestLogin";
    import { RequestSocialLogin } from "redux/actions/auth/RequestSocialLogin";
    import { Logout, LogoutSuccess } from "redux/actions/auth/Logout";
    import { RequestProfile, RequestProfileSuccess, RequestProfileFailure } from "redux/actions/auth/RequestProfile";
    import { RequestSignup, RequestSignupSuccess, RequestSignupFailure } from "redux/actions/auth/RequestSignup";
    import { RequestSignupForm, RequestSignupFormFailure, RequestSignupFormSuccess } from "redux/actions/auth/RequestSignupForm";
    import { RequestUpdateProfileForm, RequestUpdateProfileFormSuccess, RequestUpdateProfileFormFailure } from "redux/actions/auth/RequestUpdateProfileForm";
    import { RequestUpdateProfile, RequestUpdateProfileSuccess, RequestUpdateProfileFailure } from "redux/actions/auth/RequestUpdateProfile";
    import { RequestRestorePassword, RequestRestorePasswordSuccess, RequestRestorePasswordFailure } from "redux/actions/auth/RequestRestorePassword";
    export * from "redux/actions/auth/RequestLogin";
    export * from "redux/actions/auth/RequestSocialLogin";
    export * from "redux/actions/auth/SetToken";
    export * from "redux/actions/auth/Logout";
    export * from "redux/actions/auth/RequestProfile";
    export * from "redux/actions/auth/RequestSignup";
    export * from "redux/actions/auth/RequestSignupForm";
    export * from "redux/actions/auth/RequestUpdateProfileForm";
    export * from "redux/actions/auth/RequestUpdateProfile";
    export * from "redux/actions/auth/RequestRestorePassword";
    export type AuthAction = RequestLogin | RequestLoginSuccess | RequestLoginFailure | RequestLoginWithRestoreToken | RequestSocialLogin | Logout | LogoutSuccess | RequestSignup | RequestSignupSuccess | RequestSignupFailure | RequestProfile | RequestProfileSuccess | RequestProfileFailure | RequestSignupForm | RequestSignupFormFailure | RequestSignupFormSuccess | RequestUpdateProfileForm | RequestUpdateProfileFormSuccess | RequestUpdateProfileFormFailure | RequestUpdateProfile | RequestUpdateProfileSuccess | RequestUpdateProfileFailure | RequestRestorePassword | RequestRestorePasswordSuccess | RequestRestorePasswordFailure;
}
declare module "redux/actions/cart/RequestCart" {
    import CartActionTypes from "redux/actions/cart/CartActionTypes";
    import Cart from "entities/cart/Cart";
    import ApiError from "entities/error/ApiError";
    export interface RequestCart {
        type: CartActionTypes.REQUEST_CART;
    }
    export function requestCart(): RequestCart;
    export interface RequestCartSuccess {
        type: CartActionTypes.REQUEST_CART_SUCCESS;
        payload: {
            cart: Cart;
        };
    }
    export function requestCartSuccess(rawCart: any): RequestCartSuccess;
    export interface RequestCartFailure {
        type: CartActionTypes.REQUEST_CART_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestCartFailure(error: ApiError): RequestCartFailure;
}
declare module "redux/actions/cart/RequestUserData" {
    import CartActionTypes from "redux/actions/cart/CartActionTypes";
    import UserData from "entities/cart/UserData";
    import ApiError from "entities/error/ApiError";
    export interface RequestUserData {
        type: CartActionTypes.REQUEST_USER_DATA;
    }
    export function requestUserData(): RequestUserData;
    export interface RequestUserDataSuccess {
        type: CartActionTypes.REQUEST_USER_DATA_SUCCESS;
        payload: {
            userData: UserData;
        };
    }
    export function requestUserDataSuccess(userData: UserData): RequestUserDataSuccess;
    export interface RequestUserDataFailure {
        type: CartActionTypes.REQUEST_USER_DATA_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestUserDataFailure(error: any): RequestUserDataFailure;
}
declare module "redux/actions/cart/MoveAuthErrorsToQueue" {
    import CartActionTypes from "redux/actions/cart/CartActionTypes";
    export interface MoveAuthErrorsToQueue {
        type: CartActionTypes.MOVE_AUTH_ERRORS_TO_QUEUE;
    }
    export function moveAuthErrorsToQueue(): MoveAuthErrorsToQueue;
}
declare module "redux/actions/cart/CartAction" {
    import CartActionTypes from "redux/actions/cart/CartActionTypes";
    import IAddToCart from "entities/cart/IAddToCart";
    import AddToCart from "entities/cart/AddToCart";
    import Product from "entities/product/Product";
    import UserData from "entities/cart/UserData";
    import ApiError from "entities/error/ApiError";
    import CartUpdate from "entities/cart/CartUpdate";
    import FormSchema from "entities/form/FormSchema";
    import { RequestCart, RequestCartSuccess, RequestCartFailure } from "redux/actions/cart/RequestCart";
    import { RequestUserData, RequestUserDataSuccess, RequestUserDataFailure } from "redux/actions/cart/RequestUserData";
    import { MoveAuthErrorsToQueue } from "redux/actions/cart/MoveAuthErrorsToQueue";
    export * from "redux/actions/cart/RequestCart";
    export * from "redux/actions/cart/RequestUserData";
    export * from "redux/actions/cart/MoveAuthErrorsToQueue";
    export interface AddToDeleteQueue {
        type: CartActionTypes.ADD_TO_DELETE_QUEUE;
        payload: {
            cartId: string;
        };
    }
    export function addToDeleteQueue(cartId: string): AddToDeleteQueue;
    export interface RemoveFromDeleteQueue {
        type: CartActionTypes.REMOVE_FROM_DELETE_QUEUE;
        payload: {
            cartId: string;
        };
    }
    export function removeFromDeleteQueue(cartId: string): RemoveFromDeleteQueue;
    export interface AddToUpdateQueue {
        type: CartActionTypes.ADD_TO_UPDATE_QUEUE;
        payload: {
            cartUpdate: CartUpdate;
        };
    }
    export function addToUpdateQueue(cartId: string, addToCart: AddToCart): AddToUpdateQueue;
    export interface RemoveFromUpdateQueue {
        type: CartActionTypes.REMOVE_FROM_UPDATE_QUEUE;
        payload: {
            cartId: string;
        };
    }
    export function removeFromUpdateQueue(cartId: string): RemoveFromUpdateQueue;
    export interface AddToAddQueue {
        type: CartActionTypes.ADD_TO_ADD_QUEUE;
        payload: {
            addToCart: AddToCart;
        };
    }
    export function addToAddQueue(addToCart: IAddToCart): AddToAddQueue;
    export interface RemoveFromAddQueue {
        type: CartActionTypes.REMOVE_FROM_ADD_QUEUE;
        payload: {
            addToCart: AddToCart;
        };
    }
    export function removeFromAddQueue(addToCart: AddToCart): RemoveFromAddQueue;
    export interface FillQueue {
        type: CartActionTypes.FILL_QUEUE;
        payload: {
            products: Array<Product>;
        };
    }
    export function fillQueue(products: Array<Product>): FillQueue;
    export interface ClearQueue {
        type: CartActionTypes.CLEAR_QUEUE;
    }
    export function clearQueue(): ClearQueue;
    export interface RequestAddToCart {
        type: CartActionTypes.REQUEST_ADD_TO_CART;
        payload: {
            product: any;
        };
    }
    export function requestAddToCart(product: any): RequestAddToCart;
    export interface RequestAddToCartSuccess {
        type: CartActionTypes.REQUEST_ADD_TO_CART_SUCCESS;
        payload: {
            cartIds: Array<{
                cartId: string;
                productId: number;
            }>;
        };
    }
    export function requestAddToCartSuccess(cartIds: any): RequestAddToCartSuccess;
    export interface RequestAddToCartFailure {
        type: CartActionTypes.REQUEST_ADD_TO_CART_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestAddToCartFailure(error: any): RequestAddToCartFailure;
    export interface ClearCart {
        type: CartActionTypes.CLEAR_CART;
    }
    export function clearCart(): ClearCart;
    export interface RequestClearCart {
        type: CartActionTypes.REQUEST_CLEAR_CART;
    }
    export function requestClearCart(): RequestClearCart;
    export interface RequestClearCartSuccess {
        type: CartActionTypes.REQUEST_CLEAR_CART_SUCCESS;
    }
    export function requestClearCartSuccess(): RequestClearCartSuccess;
    export interface RequestClearCartFailure {
        type: CartActionTypes.REQUEST_CLEAR_CART_FAILURE;
    }
    export function requestClearCartFailure(): RequestClearCartFailure;
    export interface AddToCartErrors {
        type: CartActionTypes.ADD_TO_CART_ERRORS;
        payload: {
            addToCart: AddToCart;
            error: ApiError;
        };
    }
    export function addToCartErrors(addToCart: AddToCart, error: any): AddToCartErrors;
    export interface RemoveFromCartErrors {
        type: CartActionTypes.REMOVE_FROM_CART_ERRORS;
        payload: {
            addToCart: AddToCart;
        };
    }
    export function removeFromCartErrors(addToCart: AddToCart): RemoveFromCartErrors;
    export interface FillErrorProducts {
        type: CartActionTypes.FILL_ERROR_PRODUCTS;
        payload: {
            products: Array<Product>;
        };
    }
    export function fillProductErrors(products: Array<Product>): FillErrorProducts;
    export interface ResetCartState {
        type: CartActionTypes.RESET_CART_STATE;
    }
    export function resetCartState(): ResetCartState;
    export interface SetShippingMethod {
        type: CartActionTypes.SET_SHIPPING_METHOD;
        payload: {
            groupIndex: number;
            shippingId: number;
        };
    }
    export function setShippingMethod(groupIndex: number, shippingId: number): SetShippingMethod;
    export interface SetPaymentMethod {
        type: CartActionTypes.SET_PAYMENT_METHOD;
        payload: {
            paymentId: number;
        };
    }
    export function setPaymentMethod(paymentId: number): SetPaymentMethod;
    export interface SetPaymentData {
        type: CartActionTypes.SET_PAYMENT_DATA;
        payload: {
            data: any;
        };
    }
    export function setPaymentData(data: any): SetPaymentData;
    export interface SetUserData {
        type: CartActionTypes.SET_USER_DATA;
        payload: {
            userData: UserData;
        };
    }
    export function setUserData(userData: UserData): SetUserData;
    export interface SetCheckoutForm {
        type: CartActionTypes.SET_CHECKOUT_FORM;
        payload: {
            form: FormSchema;
        };
    }
    export function setCheckoutForm(form: FormSchema): SetCheckoutForm;
    export interface RequestUpdateUserData {
        type: CartActionTypes.REQUEST_UPDATE_USER_DATA;
        payload: {
            userData?: UserData;
        };
    }
    export function requestUpdateUserData(userData?: UserData): RequestUpdateUserData;
    export interface RequestUpdateUserDataSuccess {
        type: CartActionTypes.REQUEST_UPDATE_USER_DATA_SUCCESS;
    }
    export function requestUpdateUserDataSuccess(): RequestUpdateUserDataSuccess;
    export interface RequestUpdateUserDataFailure {
        type: CartActionTypes.REQUEST_UPDATE_USER_DATA_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestUpdateUserDataFailure(error: any): RequestUpdateUserDataFailure;
    export interface SetCheckoutFormIsValid {
        type: CartActionTypes.SET_CHECKOUT_FORM_IS_VALID;
        payload: {
            isValid: boolean;
        };
    }
    export function setCheckoutFormIsValid(isValid: boolean): SetCheckoutFormIsValid;
    export type CartAction = RequestCart | RequestCartSuccess | RequestCartFailure | AddToAddQueue | RemoveFromAddQueue | FillQueue | ClearQueue | AddToUpdateQueue | RemoveFromUpdateQueue | AddToDeleteQueue | RemoveFromDeleteQueue | RequestAddToCart | RequestAddToCartSuccess | RequestAddToCartFailure | ClearCart | RequestClearCart | RequestClearCartSuccess | RequestClearCartFailure | AddToCartErrors | FillErrorProducts | RemoveFromCartErrors | ResetCartState | SetShippingMethod | SetPaymentMethod | SetPaymentData | SetCheckoutForm | RequestUpdateUserData | RequestUpdateUserDataSuccess | RequestUpdateUserDataFailure | RequestUserData | RequestUserDataSuccess | RequestUserDataFailure | SetUserData | MoveAuthErrorsToQueue | SetCheckoutFormIsValid;
}
declare module "redux/actions/Wishlist" {
    import WishlistActions from "redux/types/actions/Wishlist";
    import Product from "entities/product/Product";
    export interface RequestWishlist {
        type: WishlistActions.REQUEST_WISHLIST;
    }
    export function requestWishlist(): RequestWishlist;
    export interface RequestWishlistSuccess {
        type: WishlistActions.REQUEST_WISHLIST_SUCCESS;
        payload: {
            wishlist: any;
        };
    }
    export function requestWishlistSuccess(wishlist: any): RequestWishlistSuccess;
    export interface RequestWishlistFailure {
        type: WishlistActions.REQUEST_WISHLIST_FAILURE;
        payload: {
            error: any;
        };
    }
    export function requestWishlistFailure(error: any): RequestWishlistFailure;
    export interface DbRequestWishlistSuccess {
        type: WishlistActions.DB_REQUEST_WISHLIST_SUCCESS;
        payload: {
            wishlist: any;
        };
    }
    export function dbRequestWishlistSuccess(wishlist: any): DbRequestWishlistSuccess;
    export interface AddToWishlistQueue {
        type: WishlistActions.ADD_TO_WISHLIST_QUEUE;
        payload: {
            product: Product;
        };
    }
    export function addToWishlistQueue(product: Product): AddToWishlistQueue;
    export interface AddToWishlistRemoveQueue {
        type: WishlistActions.ADD_TO_WISHLIST_REMOVE_QUEUE;
        payload: {
            product: Product;
        };
    }
    export function addToWishlistRemoveQueue(product: Product): AddToWishlistRemoveQueue;
    export interface RemoveFromWishlistQueue {
        type: WishlistActions.REMOVE_FROM_WISHLIST_QUEUE;
        payload: {
            productsIds: Array<number>;
        };
    }
    export function removeFromWishlistQueue(productsIds: Array<number>): RemoveFromWishlistQueue;
    export interface RequestAddToWishlist {
        type: WishlistActions.REQUEST_ADD_TO_WISHLIST;
    }
    export function requestAddToWishlist(): RequestAddToWishlist;
    export interface RequestAddToWishlistSuccess {
        type: WishlistActions.REQUEST_ADD_TO_WISHLIST_SUCCESS;
        payload: {
            productsIds: Array<number>;
        };
    }
    export function requestAddToWishlistSuccess(productsIds: Array<number>): RequestAddToWishlistSuccess;
    export interface RequestAddToWishlistFailure {
        type: WishlistActions.REQUEST_ADD_TO_WISHLIST_FAILURE;
        payload: {
            error: any;
            productsIds: Array<number>;
        };
    }
    export function requestAddToWishlistFailure(error: any, productsIds: Array<number>): RequestAddToWishlistFailure;
    export interface RequestRemoveFromWishlist {
        type: WishlistActions.REQUEST_REMOVE_FROM_WISHLIST;
    }
    export function requestRemoveFromWishlist(): RequestRemoveFromWishlist;
    export interface RequestRemoveFromWishlistSuccess {
        type: WishlistActions.REQUEST_REMOVE_FROM_WISHLIST_SUCCESS;
        payload: {
            productsIds: Array<number>;
        };
    }
    export function requestRemoveFromWishlistSuccess(productsIds: Array<number>): RequestRemoveFromWishlistSuccess;
    export interface RequestRemoveFromWishlistFailure {
        type: WishlistActions.REQUEST_REMOVE_FROM_WISHLIST_FAILURE;
        payload: {
            error: any;
            productsIds: Array<number>;
        };
    }
    export function requestRemoveFromWishlistFailure(error: any, productsIds: Array<number>): RequestRemoveFromWishlistFailure;
    export interface ClearWishlist {
        type: WishlistActions.CLEAR_WISHLIST;
    }
    export function clearWishlist(): ClearWishlist;
    export interface RequestClearWishlist {
        type: WishlistActions.REQUEST_CLEAR_WISHLIST;
    }
    export function requestClearWishlist(): RequestClearWishlist;
    export interface RequestClearWishlistSuccess {
        type: WishlistActions.REQUEST_CLEAR_WISHLIST_SUCCESS;
    }
    export function requestClearWishlistSuccess(): RequestClearWishlistSuccess;
    export interface RequestClearWishlistFailure {
        type: WishlistActions.REQUEST_CLEAR_WISHLIST_FAILURE;
    }
    export function requestClearWishlistFailure(): RequestClearWishlistFailure;
    export interface ResetWishlistState {
        type: WishlistActions.RESET_WISHLIST_STATE;
    }
    export function resetWishlistState(): ResetWishlistState;
    export type WishlistAction = RequestWishlist | RequestWishlistSuccess | RequestWishlistFailure | AddToWishlistQueue | RemoveFromWishlistQueue | AddToWishlistRemoveQueue | RequestAddToWishlist | RequestAddToWishlistSuccess | RequestAddToWishlistFailure | RequestRemoveFromWishlist | RequestRemoveFromWishlistSuccess | RequestRemoveFromWishlistFailure | DbRequestWishlistSuccess | ClearWishlist | RequestClearWishlist | RequestClearWishlistSuccess | RequestClearWishlistFailure | ResetWishlistState;
}
declare module "db/models/Order" {
    import Order from "entities/order/Order";
    import OrderSelection from "entities/order/OrderSelection";
    /**
     * Saves a order to indexedDB
     *
     * @param {Order} order
     *
     * @returns {void}
     */
    export const persistOrder: (order: Order) => Promise<number>;
    /**
     * Get a order from indexedDB by id
     *
     * @param {number} orderId
     *
     * @returns {Promise<Order>}
     */
    export const findOrder: (orderId: number) => Promise<Order | undefined>;
    /**
     * Get orders from indexedDB by it's ids
     *
     * @param {number[]} ordersIds
     *
     * @returns {Promise<Array<Order>>}
     */
    export const findOrders: (ordersIds: Array<number>) => Promise<Array<Order>>;
    /**
     * Select orders from indexedDB
     *
     * @param {number[]} ordersIds
     *
     * @returns {Promise<OrderSelection>}
     */
    export const selectOrders: () => Promise<OrderSelection>;
    /**
     * Get all orders from indexedDB
     *
     * @returns {Promise<Array<Order>>}
     */
    export const findAllOrders: () => Promise<Array<Order>>;
}
declare module "entities/payment/IRedirectionDetails" {
    interface IRedirectionDetails {
        /**
         * Method to be used to request url
         */
        method: 'GET' | 'POST';
        /**
         * Payment gateway url
         */
        url: string;
        /**
         * Query parameters to accompany the url
         */
        query: string;
        /**
         * cs-cart url for successed payment
         */
        successUrl: string;
        /**
         * cs-cart url for failed payment
         */
        failureUrl: string;
    }
    export default IRedirectionDetails;
}
declare module "entities/payment/RedirectionDetails" {
    import IRedirectionDetails from "entities/payment/IRedirectionDetails";
    /**
     * Information for opening in iframe payment gateway page
     */
    class RedirectionDetails implements IRedirectionDetails {
        method: 'GET' | 'POST';
        url: string;
        query: string;
        successUrl: string;
        failureUrl: string;
        constructor(rawSettlementData: any);
    }
    export default RedirectionDetails;
}
declare module "redux/actions/Order" {
    import OrderActionsTypes from "redux/types/actions/Order";
    import Order from "entities/order/Order";
    import ApiError from "entities/error/ApiError";
    import CartProduct from "entities/cart/CartProduct";
    import OrderSelection from "entities/order/OrderSelection";
    import { SelectionAction, SuccessedRequestSelectionAction, IdentifierAction, DbIdentifierFailuredAction, DbIdentifierSuccessedAction, ApiIdentifierSuccessedAction, ApiIdentifierFailuredAction } from "redux/actions/index";
    import RedirectionDetails from "entities/payment/RedirectionDetails";
    import RedirectionForm from "entities/payment/RedirectionForm";
    export interface RequestOrderCreate {
        type: OrderActionsTypes.REQUEST_ORDER_CREATE;
        payload: {
            products: Array<CartProduct>;
            shippingIds: Array<number>;
            paymentId: number;
            couponCodes?: Array<string>;
            userData?: any;
            paymentInfo?: any;
        };
    }
    export function requestOrderCreate(products: Array<CartProduct>, shippingIds: Array<number>, paymentId: number, userData?: any, paymentInfo?: any): RequestOrderCreate;
    export interface RequestOrderCreateSuccess {
        type: OrderActionsTypes.REQUEST_ORDER_CREATE_SUCCESS;
        payload: {
            orderId: number;
        };
    }
    export function requestOrderCreateSuccess(orderId: number): RequestOrderCreateSuccess;
    export interface RequestOrderCreateFailure {
        type: OrderActionsTypes.REQUEST_ORDER_CREATE_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestOrderCreateFailure(error: any): RequestOrderCreateFailure;
    export interface RequestOrders {
        type: OrderActionsTypes.REQUEST_ORDERS;
        payload: {
            orderSelection?: OrderSelection;
            shouldAppend?: boolean;
        };
    }
    export function requestOrders(orderSelection?: OrderSelection, shouldAppend?: boolean): RequestOrders;
    export interface RequestOrdersSuccess {
        type: OrderActionsTypes.REQUEST_ORDERS_SUCCESS;
        payload: {
            orderSelection: OrderSelection;
            shouldAppend: boolean;
        };
    }
    export function requestOrdersSuccess(orderSelection: OrderSelection, shouldAppend?: boolean): RequestOrdersSuccess;
    export interface RequestOrdersFailure {
        type: OrderActionsTypes.REQUEST_ORDERS_FAILURE;
        payload: {
            selection?: OrderSelection;
            error: ApiError;
        };
    }
    export function requestOrdersFailure(error: any, selection?: OrderSelection): RequestOrdersFailure;
    export interface DbRequestOrders extends SelectionAction<OrderSelection> {
        type: OrderActionsTypes.DB_REQUEST_ORDERS;
        payload: {
            selection?: OrderSelection;
            shouldAppend?: boolean;
        };
    }
    export function dbRequestOrders(selection?: OrderSelection, shouldAppend?: boolean): DbRequestOrders;
    export interface DbRequestOrdersSuccess extends SuccessedRequestSelectionAction<OrderSelection> {
        type: OrderActionsTypes.DB_REQUEST_ORDERS_SUCCESS;
        payload: {
            selection: OrderSelection;
        };
    }
    export function dbRequestOrdersSuccess(selection: OrderSelection): DbRequestOrdersSuccess;
    export interface DbRequestOrdersFailure {
        type: OrderActionsTypes.DB_REQUEST_ORDERS_FAILURE;
    }
    export function dbRequestOrdersFailure(): DbRequestOrdersFailure;
    export interface RequestOrder extends IdentifierAction {
        type: OrderActionsTypes.REQUEST_ORDER;
        payload: {
            id: number;
        };
    }
    export function requestOrder(id: number): RequestOrder;
    export interface RequestOrderSuccess extends ApiIdentifierSuccessedAction {
        type: OrderActionsTypes.REQUEST_ORDER_SUCCESS;
        payload: {
            id: number;
            order: Order;
        };
    }
    export function requestOrderSuccess(id: number, order: Order): RequestOrderSuccess;
    export interface RequestOrderFailure extends ApiIdentifierFailuredAction {
        type: OrderActionsTypes.REQUEST_ORDER_FAILURE;
        payload: {
            id: number;
            error: ApiError;
        };
    }
    export function requestOrderFailure(id: number, error: ApiError): RequestOrderFailure;
    export interface DbRequestOrder extends IdentifierAction {
        type: OrderActionsTypes.DB_REQUEST_ORDER;
        payload: {
            id: number;
        };
    }
    export function dbRequestOrder(id: number): DbRequestOrder;
    export interface DbRequestOrderSuccess extends DbIdentifierSuccessedAction {
        type: OrderActionsTypes.DB_REQUEST_ORDER_SUCCESS;
        payload: {
            id: number;
            order: Order;
        };
    }
    export function dbRequestOrderSuccess(id: number, order: Order): DbRequestOrderSuccess;
    export interface DbRequestOrderFailure extends DbIdentifierFailuredAction {
        type: OrderActionsTypes.DB_REQUEST_ORDER_FAILURE;
        payload: {
            id: number;
        };
    }
    export function dbRequestOrderFailure(id: number): DbRequestOrderFailure;
    export interface RequestSettlementCreate {
        type: OrderActionsTypes.REQUEST_SETTLEMENT_CREATE;
        payload: {
            id: number;
        };
    }
    export function requestSettlementCreate(orderId: number): RequestSettlementCreate;
    export interface RequestSettlementCreateSuccess {
        type: OrderActionsTypes.REQUEST_SETTLEMENT_CREATE_SUCCESS;
        payload: {
            id: number;
            redirectionDetails: RedirectionDetails;
        };
    }
    export function requestSettlementCreateSuccess(orderId: number, data: any): RequestSettlementCreateSuccess;
    export interface RequestSettlementCreateFailure {
        type: OrderActionsTypes.REQUEST_SETTLEMENT_CREATE_FAILURE;
        payload: {
            id: number;
            error: ApiError;
        };
    }
    export function requestSettlementCreateFailure(orderId: number, error: any): RequestSettlementCreateFailure;
    export interface RequestOnlinePayment {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT;
        payload: {
            id: number;
        };
    }
    export function requestOnlinePayment(orderId: number): RequestOnlinePayment;
    export interface RequestOnlinePaymentSuccess {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT_SUCCESS;
        payload: {
            id: number;
            redirectionForm: RedirectionForm;
        };
    }
    export function requestOnlinePaymentSuccess(orderId: number, data: any): RequestOnlinePaymentSuccess;
    export interface RequestOnlinePaymentFailure {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT_FAILURE;
        payload: {
            id: number;
            error: ApiError;
        };
    }
    export function requestOnlinePaymentFailure(orderId: number, error: any): RequestOnlinePaymentFailure;
    export interface RequestOnlinePaymentResult {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT_RESULT;
        payload: {
            url: string;
        };
    }
    export function requestOnlinePaymentResult(url: string): RequestOnlinePaymentResult;
    export interface RequestOnlinePaymentResultSuccess {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT_RESULT_SUCCESS;
    }
    export function requestOnlinePaymentResultSuccess(): RequestOnlinePaymentResultSuccess;
    export interface RequestOnlinePaymentResultFailure {
        type: OrderActionsTypes.REQUEST_ONLINE_PAYMENT_RESULT_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestOnlinePaymentResultFailure(error: any): RequestOnlinePaymentResultFailure;
    export type OrderAction = RequestOrderCreate | RequestOrderCreateSuccess | RequestOrderCreateFailure | RequestOrders | RequestOrdersSuccess | RequestOrdersFailure | RequestOrder | RequestOrderSuccess | RequestOrderFailure | DbRequestOrders | DbRequestOrdersSuccess | DbRequestOrdersFailure | DbRequestOrder | DbRequestOrderSuccess | DbRequestOrderFailure | RequestSettlementCreate | RequestSettlementCreateSuccess | RequestSettlementCreateFailure | RequestOnlinePayment | RequestOnlinePaymentSuccess | RequestOnlinePaymentFailure | RequestOnlinePaymentResult | RequestOnlinePaymentResultSuccess | RequestOnlinePaymentResultFailure;
}
declare module "api/request-subscriber/RequestSubscriber" {
    import { RequestConfig } from 'cscart-sdk';
    import EventEmitter from "utils/event-emitter/EventEmitter";
    export class RequestSubscriber extends EventEmitter<RequestEvent> {
    }
    type RequestEvent = {
        request: RequestConfig;
    };
    export const requestSubscriber: RequestSubscriber;
}
declare module "api/cscart-api" {
    import CscartApiSdk from 'cscart-sdk';
    const cscartApi: CscartApiSdk;
    export default cscartApi;
}
declare module "entities/settings/ISettings" {
    import Currency from "entities/currency/Currency";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Language from "entities/language/Language";
    interface ISettings<T = any> extends IEntityExtendable<T> {
        currencies: Array<Currency>;
        languages: Array<Language>;
        properties: any;
    }
    export default ISettings;
}
declare module "entities/settings/Settings" {
    import Currency from "entities/currency/Currency";
    import Language from "entities/language/Language";
    import ISettings from "entities/settings/ISettings";
    class Settings<T = any> {
        languages: Array<Language>;
        currencies: Array<Currency>;
        properties: any;
        extra: T;
        constructor(settings: ISettings<T>);
    }
    export default Settings;
}
declare module "redux/actions/Ui" {
    import UiActions from "redux/types/actions/Ui";
    import ApiError from "entities/error/ApiError";
    import Language from "entities/language/Language";
    import Currency from "entities/currency/Currency";
    import Settings from "entities/settings/Settings";
    export interface AcceptGdpr {
        type: UiActions.ACCEPT_GDPR;
    }
    export function acceptGdpr(): AcceptGdpr;
    export interface SetNotificationPermission {
        type: UiActions.SET_NOTIFICATION_PERMISSION;
        payload: {
            permission: NotificationPermission;
        };
    }
    export function setNotificationPermission(permission: NotificationPermission): SetNotificationPermission;
    export interface ReadyToUpdate {
        type: UiActions.READY_TO_UPDATE;
    }
    export function readyToUpdate(): ReadyToUpdate;
    export interface Updated {
        type: UiActions.UPDATED;
    }
    export function updated(): Updated;
    export interface SchedulerPerform {
        type: UiActions.SCHEDULER_PERFORM;
    }
    export function schedulerPerform(): SchedulerPerform;
    export interface StartLoading {
        type: UiActions.START_LOADING;
    }
    export function startLoading(): StartLoading;
    export interface EndLoading {
        type: UiActions.END_LOADING;
    }
    export function endLoading(): EndLoading;
    export interface SetLanguage {
        type: UiActions.SET_LANGUAGE;
        payload: {
            language: string;
        };
    }
    export function setLanguage(language: string): SetLanguage;
    export interface SetInitialLanguage {
        type: UiActions.SET_INITIAL_LANGUAGE;
        payload: {
            language: string;
        };
    }
    export function setInitialLanguage(language: string): SetInitialLanguage;
    export interface SetCurrency {
        type: UiActions.SET_CURRENCY;
        payload: {
            currency: string;
        };
    }
    export function setCurrency(currency: string): SetCurrency;
    export interface RequestStoreSettings {
        type: UiActions.REQUEST_STORE_SETTINGS;
        payload: {};
    }
    export function requestStoreSettings(): RequestStoreSettings;
    export interface RequestStoreSettingsSuccess {
        type: UiActions.REQUEST_STORE_SETTINGS_SUCCESS;
        payload: {
            languages: Array<Language>;
            currencies: Array<Currency>;
            properties: any;
        };
    }
    export function requestStoreSettingsSuccess(settings: Settings): RequestStoreSettingsSuccess;
    export interface RequestStoreSettingsFailure {
        type: UiActions.REQUEST_STORE_SETTINGS_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestStoreSettingsFailure(error: any): RequestStoreSettingsFailure;
    export interface OpenDrawer {
        type: UiActions.OPEN_DRAWER;
        payload: {
            id: string;
        };
    }
    export function openDrawer(id: string): OpenDrawer;
    export interface CloseDrawer {
        type: UiActions.CLOSE_DRAWER;
        payload: {
            id: string;
        };
    }
    export function closeDrawer(id: string): CloseDrawer;
    export interface CloseAllDrawers {
        type: UiActions.CLOSE_ALL_DRAWERS;
    }
    export function closeAllDrawers(): CloseAllDrawers;
    export type UiAction = ReadyToUpdate | Updated | SetNotificationPermission | StartLoading | EndLoading | SetLanguage | SetInitialLanguage | SetCurrency | SchedulerPerform | RequestStoreSettings | RequestStoreSettingsSuccess | RequestStoreSettingsFailure | OpenDrawer | CloseDrawer | CloseAllDrawers | AcceptGdpr;
}
declare module "redux/actions/layout/RequestLayout" {
    import LayoutActionTypes from "redux/actions/layout/LayoutActionTypes";
    import LayoutTypes from "constants/LayoutTypes";
    import Layout from "entities/layout/Layout";
    import ApiError from "entities/error/ApiError";
    export interface RequestLayout {
        type: LayoutActionTypes.REQUEST_LAYOUT;
        payload: {
            dispatch: LayoutTypes;
            slug?: string;
        };
    }
    export function requestLayout(dispatch: LayoutTypes, slug?: string): RequestLayout;
    export interface RequestLayoutSuccess {
        type: LayoutActionTypes.REQUEST_LAYOUT_SUCCESS;
        payload: {
            layout: Layout;
            slug?: string;
        };
    }
    export function requestLayoutSuccess(layout: Layout, slug?: string): RequestLayoutSuccess;
    export interface RequestLayoutFailure {
        type: LayoutActionTypes.REQUEST_LAYOUT_FAILURE;
        payload: {
            dispatch: LayoutTypes;
            error: ApiError;
            slug?: string;
        };
    }
    export function requestLayoutFailure(dispatch: LayoutTypes, error: ApiError, slug?: string): RequestLayoutFailure;
}
declare module "redux/actions/layout/DbRequestLayout" {
    import LayoutActionTypes from "redux/actions/layout/LayoutActionTypes";
    import LayoutTypes from "constants/LayoutTypes";
    import Layout from "entities/layout/Layout";
    export interface DbRequestLayout {
        type: LayoutActionTypes.DB_REQUEST_LAYOUT;
        payload: {
            dispatch: LayoutTypes;
            slug?: string;
        };
    }
    export function dbRequestLayout(dispatch: LayoutTypes, slug?: string): DbRequestLayout;
    export interface DbRequestLayoutSuccess {
        type: LayoutActionTypes.DB_REQUEST_LAYOUT_SUCCESS;
        payload: {
            layout: Layout;
        };
    }
    export function dbRequestLayoutSuccess(layout: Layout): DbRequestLayoutSuccess;
    export interface DbRequestLayoutFailure {
        type: LayoutActionTypes.DB_REQUEST_LAYOUT_FAILURE;
        payload: {
            dispatch: LayoutTypes;
            slug?: string;
        };
    }
    export function dbRequestLayoutFailure(dispatch: LayoutTypes, slug?: string): DbRequestLayoutFailure;
}
declare module "redux/actions/layout/SetLayoutIsVisible" {
    import LayoutTypes from "constants/LayoutTypes";
    import LayoutActionTypes from "redux/actions/layout/LayoutActionTypes";
    export interface SetLayoutIsVisible {
        type: LayoutActionTypes.SET_LAYOUT_IS_VISIBLE;
        payload: {
            dispatch: LayoutTypes;
            isVisible: boolean;
        };
    }
    export function setLayoutIsVisible(dispatch: LayoutTypes, isVisible: boolean): SetLayoutIsVisible;
}
declare module "redux/actions/layout/LayoutAction" {
    import LayoutActionTypes from "redux/actions/layout/LayoutActionTypes";
    import LayoutTypes from "constants/LayoutTypes";
    import { RequestLayout, RequestLayoutSuccess, RequestLayoutFailure } from "redux/actions/layout/RequestLayout";
    import { DbRequestLayout, DbRequestLayoutSuccess, DbRequestLayoutFailure } from "redux/actions/layout/DbRequestLayout";
    import { SetLayoutIsVisible } from "redux/actions/layout/SetLayoutIsVisible";
    export * from "redux/actions/layout/RequestLayout";
    export * from "redux/actions/layout/DbRequestLayout";
    export * from "redux/actions/layout/SetLayoutIsVisible";
    export interface GetLayout {
        type: LayoutActionTypes.GET_LAYOUT;
        payload: {
            dispatch: LayoutTypes;
            slug?: string;
        };
    }
    export function getLayout(dispatch: LayoutTypes, slug?: string): GetLayout;
    export type LayoutsAction = GetLayout | RequestLayout | RequestLayoutSuccess | RequestLayoutFailure | DbRequestLayout | DbRequestLayoutSuccess | DbRequestLayoutFailure | SetLayoutIsVisible;
}
declare module "db/models/Category" {
    import Category from "entities/category/Category";
    /**
     * Save category to database
     *
     * @param {Category} category
     *
     * @returns void
     */
    export const persistCategory: (category: Category) => Promise<number>;
    /**
     * Find category by id or slug
     *
     * @example findCategory(15)
     * @example findCategory('electronics')
     *
     * @param {string|number} key
     *
     * @returns Promise<Category|undefined>
     */
    export const findCategory: (key: number | string) => Promise<Category | undefined>;
}
declare module "redux/actions/category/RequestCategory" {
    import CategoryActionTypes from "redux/actions/category/CategoryActionTypes";
    import Category from "entities/category/Category";
    import ApiError from "entities/error/ApiError";
    export interface RequestCategory {
        type: CategoryActionTypes.REQUEST_CATEGORY;
        payload: {
            categoryId: number;
        };
    }
    export function requestCategory(id: number): RequestCategory;
    export interface RequestCategorySuccess {
        type: CategoryActionTypes.REQUEST_CATEGORY_SUCCESS;
        payload: {
            category: Category;
        };
    }
    export function requestCategorySuccess(rawCategory: any): RequestCategorySuccess;
    export interface RequestCategoryFailure {
        type: CategoryActionTypes.REQUEST_CATEGORY_FAILURE;
        payload: {
            id: number | string;
            error: ApiError;
        };
    }
    export function requestCategoryFailure(id: number | string, error: any): RequestCategoryFailure;
}
declare module "redux/actions/category/DbRequestCategory" {
    import CategoryActionTypes from "redux/actions/category/CategoryActionTypes";
    import Category from "entities/category/Category";
    export interface DbRequestCategory {
        type: CategoryActionTypes.DB_REQUEST_CATEGORY;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestCategory(id: number | string): DbRequestCategory;
    export interface DbRequestCategorySuccess {
        type: CategoryActionTypes.DB_REQUEST_CATEGORY_SUCCESS;
        payload: {
            category: Category;
        };
    }
    export function dbRequestCategorySuccess(category: Category): DbRequestCategorySuccess;
    export interface DbRequestCategoryFailure {
        type: CategoryActionTypes.DB_REQUEST_CATEGORY_FAILURE;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestCategoryFailure(id: number | string): DbRequestCategoryFailure;
}
declare module "redux/actions/category/CategoryAction" {
    import CategoryActionTypes from "redux/actions/category/CategoryActionTypes";
    import { RequestCategory, RequestCategorySuccess, RequestCategoryFailure } from "redux/actions/category/RequestCategory";
    import { DbRequestCategory, DbRequestCategorySuccess, DbRequestCategoryFailure } from "redux/actions/category/DbRequestCategory";
    import Category from "entities/category/Category";
    export * from "redux/actions/category/RequestCategory";
    export * from "redux/actions/category/DbRequestCategory";
    export interface SetCurrentCategory {
        type: CategoryActionTypes.SET_CURRENT_CATEGORY;
        payload: {
            category: Category;
        };
    }
    export function setCurrentCategory(category: Category): SetCurrentCategory;
    export interface SetCategoryIsRequesting {
        type: CategoryActionTypes.SET_CATEGORY_IS_REQUESTING;
        payload: {
            isRequesting: boolean;
        };
    }
    export function setCategoryIsRequesting(isRequesting: boolean): SetCategoryIsRequesting;
    export type CategoryAction = SetCurrentCategory | SetCategoryIsRequesting | RequestCategory | RequestCategorySuccess | RequestCategoryFailure | DbRequestCategory | DbRequestCategorySuccess | DbRequestCategoryFailure;
}
declare module "db/models/Product" {
    import Product from "entities/product/Product";
    /**
     * Saves a product to indexedDB
     *
     * @param {Product} product
     *
     * @returns {void}
     */
    export const persistProduct: (product: Product) => Promise<number>;
    /**
     * Get a product from indexedDB by id
     *
     * @param {number|string} key
     *
     * @returns {Promise<Product|undefined>}
     */
    export const findProduct: (key: number | string) => Promise<Product | undefined>;
    /**
     * Get products from indexedDB by it's ids
     *
     * @param {number[]} productsIds
     *
     * @returns {Promise<Array<Product>>}
     */
    export const findProducts: (productsIds: Array<number>) => Promise<Array<Product>>;
    /**
     * Works like findProducts but result will contain doubles
     * findNotDistinctProducts(1, 1, 1) will return promise with 3 products with id = 1
     *
     * @param {number[]} productsIds
     *
     * @returns {Promise<Array<Product>>}
     */
    export const findNotDistinctProducts: (productsIds: Array<number>) => Promise<Array<Product>>;
    /**
     * Get products associated with a category
     *
     * @param {number} categoryId
     *
     * @returns {Promise<Array<Product>>}
     */
    export const findProductsByCategory: (categoryId: number) => Promise<Array<Product>>;
}
declare module "redux/actions/product/RequestProduct" {
    import ProductActionTypes from "redux/actions/product/ProductActionTypes";
    import Product from "entities/product/Product";
    import ApiError from "entities/error/ApiError";
    export interface RequestProduct {
        type: ProductActionTypes.REQUEST_PRODUCT;
        payload: {
            productId: number;
            options?: Array<any>;
        };
    }
    export function requestProduct(id: number, options?: Array<any>): RequestProduct;
    export interface RequestProductSuccess {
        type: ProductActionTypes.REQUEST_PRODUCT_SUCCESS;
        payload: {
            product: Product;
        };
    }
    export function requestProductSuccess(product: Product): RequestProductSuccess;
    export interface RequestProductFailure {
        type: ProductActionTypes.REQUEST_PRODUCT_FAILURE;
        payload: {
            id: number | string;
            error: ApiError;
        };
    }
    export function requestProductFailure(id: number | string, error: any): RequestProductFailure;
}
declare module "redux/actions/product/DbRequestProduct" {
    import ProductActionTypes from "redux/actions/product/ProductActionTypes";
    import Product from "entities/product/Product";
    export interface DbRequestProduct {
        type: ProductActionTypes.DB_REQUEST_PRODUCT;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestProduct(id: number | string): DbRequestProduct;
    export interface DbRequestProductSuccess {
        type: ProductActionTypes.DB_REQUEST_PRODUCT_SUCCESS;
        payload: {
            product: Product;
        };
    }
    export function dbRequestProductSuccess(product: Product): DbRequestProductSuccess;
    export interface DbRequestProductFailure {
        type: ProductActionTypes.DB_REQUEST_PRODUCT_FAILURE;
        payload: {
            id: number | string;
        };
    }
    export function dbRequestProductFailure(id: number | string): DbRequestProductFailure;
}
declare module "redux/actions/product/RequestCategoryProducts" {
    import ProductActionTypes from "redux/actions/product/ProductActionTypes";
    import ApiError from "entities/error/ApiError";
    import ProductSelection from "entities/product/ProductSelection";
    export interface RequestCategoryProducts {
        type: ProductActionTypes.REQUEST_CATEGORY_PRODUCTS;
        payload: {
            categoryId: number;
            productSelection?: ProductSelection;
            shouldAppend?: boolean;
        };
    }
    export function requestCategoryProducts(id: number, productSelection?: ProductSelection, shouldAppend?: boolean): RequestCategoryProducts;
    export interface RequestCategoryProductsSuccess {
        type: ProductActionTypes.REQUEST_CATEGORY_PRODUCTS_SUCCESS;
        payload: {
            productSelection: ProductSelection;
            shouldAppend: boolean;
        };
    }
    export function requestCategoryProductsSuccess(productSelection: ProductSelection, shouldAppend?: boolean): RequestCategoryProductsSuccess;
    export interface RequestCategoryProductsFailure {
        type: ProductActionTypes.REQUEST_CATEGORY_PRODUCTS_FAILURE;
        payload: {
            categoryId: number;
            error: ApiError;
        };
    }
    export function requestCategoryProductsFailure(id: number, error: any): RequestCategoryProductsFailure;
}
declare module "redux/actions/product/DbRequestCategoryProducts" {
    import ProductActionTypes from "redux/actions/product/ProductActionTypes";
    import Product from "entities/product/Product";
    import ProductSelection from "entities/product/ProductSelection";
    export interface DbRequestCategoryProducts {
        type: ProductActionTypes.DB_REQUEST_CATEGORY_PRODUCTS;
        payload: {
            categoryId: number;
        };
    }
    export function dbRequestCategoryProducts(id: number): DbRequestCategoryProducts;
    export interface DbRequestCategoryProductsSuccess {
        type: ProductActionTypes.DB_REQUEST_CATEGORY_PRODUCTS_SUCCESS;
        payload: {
            productSelection: ProductSelection;
        };
    }
    export function dbRequestCategoryProductsSuccess(products: Array<Product>): DbRequestCategoryProductsSuccess;
    export interface DbRequestCategoryProductsFailure {
        type: ProductActionTypes.DB_REQUEST_CATEGORY_PRODUCTS_FAILURE;
        payload: {
            categoryId: number;
        };
    }
    export function dbRequestCategoryProductsFailure(id: number): DbRequestCategoryProductsFailure;
}
declare module "redux/actions/product/ProductAction" {
    import ProductActionTypes from "redux/actions/product/ProductActionTypes";
    import Product from "entities/product/Product";
    import ApiError from "entities/error/ApiError";
    import ProductSelection from "entities/product/ProductSelection";
    import { RequestProduct, RequestProductSuccess, RequestProductFailure } from "redux/actions/product/RequestProduct";
    import { DbRequestProduct, DbRequestProductFailure, DbRequestProductSuccess } from "redux/actions/product/DbRequestProduct";
    import { RequestCategoryProducts, RequestCategoryProductsFailure, RequestCategoryProductsSuccess } from "redux/actions/product/RequestCategoryProducts";
    import { DbRequestCategoryProducts, DbRequestCategoryProductsFailure, DbRequestCategoryProductsSuccess } from "redux/actions/product/DbRequestCategoryProducts";
    export * from "redux/actions/product/RequestProduct";
    export * from "redux/actions/product/DbRequestProduct";
    export * from "redux/actions/product/RequestCategoryProducts";
    export * from "redux/actions/product/DbRequestCategoryProducts";
    export interface SetCurrentProduct {
        type: ProductActionTypes.SET_CURRENT_PRODUCT;
        payload: {
            product: Product;
        };
    }
    export function setCurrentProduct(rawProduct: any): SetCurrentProduct;
    export interface RequestSearchProducts {
        type: ProductActionTypes.REQUEST_SEARCH_PRODUCTS;
        payload: {
            productSelection?: ProductSelection;
            shouldAppend?: boolean;
        };
    }
    export function requestSearchProducts(productSelection?: ProductSelection, shouldAppend?: boolean): RequestSearchProducts;
    export interface RequestSearchProductsSuccess {
        type: ProductActionTypes.REQUEST_SEARCH_PRODUCTS_SUCCESS;
        payload: {
            productSelection: ProductSelection;
            shouldAppend: boolean;
        };
    }
    export function requestSearchProductsSuccess(productSelection: ProductSelection, shouldAppend?: boolean): RequestSearchProductsSuccess;
    export interface RequestSearchProductsFailure {
        type: ProductActionTypes.REQUEST_SEARCH_PRODUCTS_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestSearchProductsFailure(error: any): RequestSearchProductsFailure;
    export interface SetProductIsRequesting {
        type: ProductActionTypes.SET_PRODUCT_IS_REQUESTING;
        payload: {
            isRequesting: boolean;
        };
    }
    export function setProductIsRequesting(isRequesting: boolean): SetProductIsRequesting;
    export type ProductAction = SetCurrentProduct | SetProductIsRequesting | RequestProduct | RequestProductSuccess | RequestProductFailure | DbRequestProduct | DbRequestProductSuccess | DbRequestProductFailure | RequestCategoryProducts | RequestCategoryProductsSuccess | RequestCategoryProductsFailure | DbRequestCategoryProducts | DbRequestCategoryProductsSuccess | DbRequestCategoryProductsFailure | RequestSearchProducts | RequestSearchProductsSuccess | RequestSearchProductsFailure;
}
declare module "redux/types/actions/Review" {
    enum ReviewActions {
        REQUEST_REVIEW_THREAD = "REQUEST_REVIEW_THREAD",
        REQUEST_REVIEW_THREAD_SUCCESS = "REQUEST_REVIEW_THREAD_SUCCESS",
        REQUEST_REVIEW_THREAD_FAILURE = "REQUEST_REVIEW_THREAD_FAILURE",
        CREATE_TESTIMONIAL_DRAFT = "CREATE_TESTIMONIAL_DRAFT",
        REMOVE_TESTIMONIAL_DRAFT = "REMOVE_TESTIMONIAL_DRAFT",
        REQUEST_REVIEW_ADD = "REQUEST_REVIEW_ADD",
        REQUEST_REVIEW_ADD_SUCCESS = "REQUEST_REVIEW_ADD_SUCCESS",
        REQUEST_REVIEW_ADD_FAILURE = "REQUEST_REVIEW_ADD_FAILURE"
    }
    export default ReviewActions;
}
declare module "redux/actions/Review" {
    import ReviewActions from "redux/types/actions/Review";
    import ReviewableEntities from "constants/ReviewableEntities";
    import ReviewsThread from "entities/testimonial/ReviewsThread";
    import ApiError from "entities/error/ApiError";
    import TestimonialDraft from "entities/testimonial/TestimonialDraft";
    import ReviewSelection from "entities/testimonial/ReviewSelection";
    export interface RequestReviewThread {
        type: ReviewActions.REQUEST_REVIEW_THREAD;
        payload: {
            id: number;
            type: ReviewableEntities;
            selection?: ReviewSelection;
            shouldAppend?: boolean;
        };
    }
    export function requestReviewThread(id: number, type: ReviewableEntities, selection?: ReviewSelection, shouldAppend?: boolean): RequestReviewThread;
    export interface RequestReviewThreadSuccess {
        type: ReviewActions.REQUEST_REVIEW_THREAD_SUCCESS;
        payload: {
            thread: ReviewsThread;
            shouldAppend?: boolean;
        };
    }
    export function requestReviewThreadSuccess(rawThread: any, shouldAppend?: boolean): RequestReviewThreadSuccess;
    export interface RequestReviewThreadFailure {
        type: ReviewActions.REQUEST_REVIEW_THREAD_FAILURE;
        payload: {
            uuid: string;
            error: ApiError;
        };
    }
    export function requestReviewThreadFailure(uuid: string, error: any): RequestReviewThreadFailure;
    export interface CreateDraft {
        type: ReviewActions.CREATE_TESTIMONIAL_DRAFT;
        payload: {
            draft: TestimonialDraft;
        };
    }
    export function createDraft(draft: TestimonialDraft): CreateDraft;
    export interface RemoveDraft {
        type: ReviewActions.REMOVE_TESTIMONIAL_DRAFT;
        payload: {
            uuid: string;
        };
    }
    export function removeDraft(uuid: string): RemoveDraft;
    export interface RequestReviewAddFailure {
        type: ReviewActions.REQUEST_REVIEW_ADD_FAILURE;
        payload: {
            uuid: string;
            error: ApiError;
        };
    }
    export function requestReviewAddFailure(uuid: string, error: any): RequestReviewAddFailure;
    export interface RequestReviewAddSuccess {
        type: ReviewActions.REQUEST_REVIEW_ADD_SUCCESS;
        payload: {
            uuid: string;
        };
    }
    export function requestReviewAddSuccess(uuid: string): RequestReviewAddSuccess;
    export type ReviewAction = RequestReviewThread | RequestReviewThreadSuccess | RequestReviewThreadFailure | CreateDraft | RemoveDraft | RequestReviewAddFailure | RequestReviewAddSuccess;
}
declare module "redux/types/actions/Search" {
    enum SearchActions {
        PERFORM_SEARCH = "PERFORM_SEARCH",
        OPEN_SEARCH_AUTOCOMPLETE = "OPEN_SEARCH_AUTOCOMPLETE",
        CLOSE_SEARCH_AUTOCOMPLETE = "CLOSE_SEARCH_AUTOCOMPLETE"
    }
    export default SearchActions;
}
declare module "redux/actions/Search" {
    import SearchActions from "redux/types/actions/Search";
    export interface PerformSearch {
        type: SearchActions.PERFORM_SEARCH;
        payload: {
            query: string;
        };
    }
    export function performSearch(query: string): PerformSearch;
    export interface OpenSearchAutocomplete {
        type: SearchActions.OPEN_SEARCH_AUTOCOMPLETE;
    }
    export function openSearchAutocomplete(): OpenSearchAutocomplete;
    export interface CloseSearchAutocomplete {
        type: SearchActions.CLOSE_SEARCH_AUTOCOMPLETE;
    }
    export function closeSearchAutocomplete(): CloseSearchAutocomplete;
    export type SearchAction = PerformSearch | OpenSearchAutocomplete | CloseSearchAutocomplete;
}
declare module "redux/actions/notification/RequestNotifications" {
    import NotificationActionTypes from "redux/actions/notification/NotificationActionTypes";
    import EntityNotification from "entities/notifications/EntityNotification";
    import ApiError from "entities/error/ApiError";
    export interface RequestNotifications {
        type: NotificationActionTypes.REQUEST_NOTIFICATIONS;
    }
    export function requestNotifications(): RequestNotifications;
    export interface RequestNotificationsSuccess {
        type: NotificationActionTypes.REQUEST_NOTIFICATIONS_SUCCESS;
        payload: {
            notifications: Array<EntityNotification>;
        };
    }
    export function requestNotificationsSuccess(notifications: Array<EntityNotification>): RequestNotificationsSuccess;
    export interface RequestNotificationsFailure {
        type: NotificationActionTypes.REQUEST_NOTIFICATIONS_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestNotificationsFailure(error: ApiError): RequestNotificationsFailure;
}
declare module "redux/actions/notification/MarkNotificationsAsViewed" {
    import NotificationActionTypes from "redux/actions/notification/NotificationActionTypes";
    export interface MarkNotificationsAsViewed {
        type: NotificationActionTypes.MARK_NOTIFICATIONS_AS_VIEWED;
        payload: {
            notificationIds: Array<number>;
        };
    }
    export function markNotificationsAsViewed(notificationIds: Array<number>): MarkNotificationsAsViewed;
}
declare module "redux/actions/notification/RequestMarkNotificationsAsRead" {
    import NotificationActionTypes from "redux/actions/notification/NotificationActionTypes";
    import ApiError from "entities/error/ApiError";
    export interface RequestMarkNotificationsAsRead {
        type: NotificationActionTypes.REQUEST_MARK_NOTIFICATIONS_AS_READ;
        payload: {
            beforeTime: Date;
        };
    }
    export function requestMarkNotificationsAsRead(beforeTime: Date): RequestMarkNotificationsAsRead;
    export interface RequestMarkNotificationsAsReadSuccess {
        type: NotificationActionTypes.REQUEST_MARK_NOTIFICATIONS_AS_READ_SUCCESS;
    }
    export function requestMarkNotificationsAsReadSuccess(): RequestMarkNotificationsAsReadSuccess;
    export interface RequestMarkNotificationsAsReadFailure {
        type: NotificationActionTypes.REQUEST_MARK_NOTIFICATIONS_AS_READ_FAILURE;
        payload: {
            error: ApiError;
        };
    }
    export function requestMarkNotificationsAsReadFailure(error: ApiError): RequestMarkNotificationsAsReadFailure;
}
declare module "redux/actions/notification/ClearNotifications" {
    import NotificationActionTypes from "redux/actions/notification/NotificationActionTypes";
    export interface ClearNotifications {
        type: NotificationActionTypes.CLEAR_NOTIFICATIONS;
    }
    export function clearNotifications(): ClearNotifications;
}
declare module "redux/actions/notification/NotificationAction" {
    import { RequestNotifications, RequestNotificationsSuccess, RequestNotificationsFailure } from "redux/actions/notification/RequestNotifications";
    import { MarkNotificationsAsViewed } from "redux/actions/notification/MarkNotificationsAsViewed";
    import { RequestMarkNotificationsAsRead, RequestMarkNotificationsAsReadSuccess, RequestMarkNotificationsAsReadFailure } from "redux/actions/notification/RequestMarkNotificationsAsRead";
    import { ClearNotifications } from "redux/actions/notification/ClearNotifications";
    export * from "redux/actions/notification/RequestNotifications";
    export * from "redux/actions/notification/RequestMarkNotificationsAsRead";
    export * from "redux/actions/notification/ClearNotifications";
    export * from "redux/actions/notification/MarkNotificationsAsViewed";
    export type NotificationAction = RequestNotifications | RequestNotificationsSuccess | RequestNotificationsFailure | RequestMarkNotificationsAsRead | RequestMarkNotificationsAsReadSuccess | RequestMarkNotificationsAsReadFailure | ClearNotifications | MarkNotificationsAsViewed;
}
declare module "redux/actions/action-banners/ActionBannersActionTypes" {
    enum ActionBannersActionTypes {
        ADD_BANNER = "ActionBanners/ADD_BANNER",
        REMOVE_BANNER = "ActionBanners/REMOVE_BANNER"
    }
    export default ActionBannersActionTypes;
}
declare module "redux/actions/action-banners/AddBanner" {
    import ActionBannersActionTypes from "redux/actions/action-banners/ActionBannersActionTypes";
    import IActionBanner from "entities/action-banner/IActionBanner";
    export interface AddBanner {
        type: ActionBannersActionTypes.ADD_BANNER;
        payload: {
            banner: IActionBanner;
        };
    }
    export function addBanner(banner: IActionBanner): AddBanner;
}
declare module "redux/actions/action-banners/RemoveBanner" {
    import ActionBannersActionTypes from "redux/actions/action-banners/ActionBannersActionTypes";
    export interface RemoveBanner {
        type: ActionBannersActionTypes.REMOVE_BANNER;
    }
    export function removeBanner(): RemoveBanner;
}
declare module "redux/actions/action-banners/ActionBannersAction" {
    import { AddBanner } from "redux/actions/action-banners/AddBanner";
    import { RemoveBanner } from "redux/actions/action-banners/RemoveBanner";
    export * from "redux/actions/action-banners/AddBanner";
    export * from "redux/actions/action-banners/RemoveBanner";
    export type ActionBannersAction = RemoveBanner | AddBanner;
}
declare module "redux/actions/index" {
    import { Action as ReduxAction } from 'redux';
    import ApiError from "entities/error/ApiError";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    export * from "redux/actions/App";
    export * from "redux/actions/navigation-bar/NavigationBarAction";
    export * from "redux/actions/article/ArticleAction";
    export * from "redux/actions/auth/AuthAction";
    export * from "redux/actions/cart/CartAction";
    export * from "redux/actions/Wishlist";
    export * from "redux/actions/Order";
    export * from "redux/actions/Ui";
    export * from "redux/actions/layout/LayoutAction";
    export * from "redux/actions/category/CategoryAction";
    export * from "redux/actions/product/ProductAction";
    export * from "redux/actions/Review";
    export * from "redux/actions/Search";
    export * from "redux/actions/notification/NotificationAction";
    export * from "redux/actions/action-banners/ActionBannersAction";
    export type Id = string | number;
    /**
     * Default action with payload
     */
    export interface Action<T = any> extends ReduxAction<T> {
        payload?: any;
    }
    /**
     * Action for entities single requests
     * Like sra_products/498 or sra_products/product-name
     */
    export interface IdentifierAction<T = Id> extends Action<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * Action for entities successed single requests
     */
    export interface IdentifierSuccessedAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * Action for entities failured single requests
     */
    export interface IdentifierFailuredAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * API Action for entities successed single requests
     */
    export interface ApiIdentifierSuccessedAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * API Action for entities failured single requests
     */
    export interface ApiIdentifierFailuredAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            error: ApiError;
            [others: string]: any;
        };
    }
    /**
     * DB Action for entities successed single requests
     */
    export interface DbIdentifierSuccessedAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * DB Action for entities failured single requests
     */
    export interface DbIdentifierFailuredAction<T = Id> extends IdentifierAction<T> {
        payload: {
            id: T;
            [others: string]: any;
        };
    }
    /**
     * Action for selection requests
     */
    export interface SelectionAction<T extends AbstractItemsSelection> extends Action {
        payload: {
            selection?: T;
        };
    }
    /**
     * Action for successes for SelectionAction requests
     */
    export interface SuccessedRequestSelectionAction<T extends AbstractItemsSelection> extends SelectionAction<T> {
        payload: {
            selection?: T;
            [others: string]: any;
        };
    }
    /**
     * Action for failures for SelectionAction requests
     */
    export interface FailedRequestSelectionAction<T extends AbstractItemsSelection> extends SelectionAction<T> {
        payload: {
            selection?: T;
            error: ApiError;
            [others: string]: any;
        };
    }
}
declare module "redux/selectors/Cart" {
    import CartError from "entities/cart/CartError";
    import Payment from "entities/payment/Payment";
    import Product from "entities/product/Product";
    import { StoreState } from "redux/types/index";
    export const getProductError: (state: StoreState, props: {
        product: Product;
    }) => CartError | null;
    export const getProductAmount: (state: StoreState, props: {
        product: Product;
    }) => number;
    export const getSelectedPayment: (state: StoreState) => Payment | undefined;
    export const countProductAtCartQueue: import("reselect").OutputParametricSelector<StoreState, any, number, (res: import("entities/cart/AddToCart").default | undefined) => number>;
    export const getCartProducts: import("reselect").OutputSelector<StoreState, import("entities/cart/CartProduct").default<any>[], (res: import("redux/types/CartState").default) => import("entities/cart/CartProduct").default<any>[]>;
    /**
     * Returns true if there are products in cart
     */
    export const hasCartProducts: import("reselect").OutputSelector<StoreState, boolean, (res: import("entities/cart/CartProduct").default<any>[]) => boolean>;
}
declare module "components/cart/add-to-cart-button/AddToCartButtonContainer" {
    import { IOwnProps } from "components/cart/add-to-cart-button/IAddToCartButton";
    const _default_4: import("react-redux").ConnectedComponent<import("react").FC<import("components/cart/add-to-cart-button/IAddToCartButton").IProps>, Pick<import("components/cart/add-to-cart-button/IAddToCartButton").IProps, "className" | "children" | "render" | "icon" | "product" | "addToCart" | "wrapperClassName"> & IOwnProps>;
    export default _default_4;
}
declare module "components/wishlist/add-to-wishlist-button/IAddToWishlistButton" {
    import { ReactElement } from 'react';
    import Product from "entities/product/Product";
    export interface IOwnProps {
        /**
         * Product you want to add to cart
         */
        product: any;
        className?: string;
        size?: number;
        /**
         * Render component's wrapper from render-prop
         */
        render?: () => ReactElement;
    }
    export interface IStateProps {
        isInWishlist: boolean;
    }
    export interface IDispatchProps {
        addToWishlistQueue: (product: Product) => void;
        addToWishlistRemoveQueue: (product: Product) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/wishlist/add-to-wishlist-button/AddToWishlistButton" {
    import React from 'react';
    import { IProps } from "components/wishlist/add-to-wishlist-button/IAddToWishlistButton";
    class AddToWishlistButton extends React.Component<IProps> {
        handleAddToWishlist(): void;
        render(): JSX.Element;
    }
    export default AddToWishlistButton;
}
declare module "components/wishlist/add-to-wishlist-button/AddToWishlistButtonContainer" {
    import AddToWishlistButton from "components/wishlist/add-to-wishlist-button/AddToWishlistButton";
    import { IStateProps, IOwnProps, IDispatchProps } from "components/wishlist/add-to-wishlist-button/IAddToWishlistButton";
    const _default_5;
    export default _default_5;
}
declare module "components/subcomponents/rating/Rating.messages" {
    const definedMessages: {
        totalReviews: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/rating/IRating" {
    import IWithRating from "entities/testimonial/IWithRating";
    export interface IOwnProps extends IWithRating {
        name: string;
        onChange?: (nextValue: number, prevValue: number, name: string) => void;
        readonly?: boolean;
        big?: boolean;
        showRatingText?: boolean;
    }
}
declare module "components/subcomponents/rating/Rating" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/rating/IRating";
    import './Rating.css';
    const Rating: React.FC<IOwnProps>;
    export default Rating;
}
declare module "utils/string/getShort" {
    /**
     * Get short variant of a text or html content
     *
     * @param text string
     * @param length number of words to be returned
     *
     * @returns string
     */
    const getShort: (text: string, length: number) => string;
    export default getShort;
}
declare module "components/product/cart-error/CartError.messages" {
    const definedMessages: {
        close: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/product/cart-error/ICartError" {
    import AddToCart from "entities/cart/AddToCart";
    import CartError from "entities/cart/CartError";
    import Product from "entities/product/Product";
    export interface IOwnProps {
        product: Product;
        horizontal?: boolean;
    }
    export interface IStateProps {
        error: CartError | null;
    }
    export interface IDispatchProps {
        removeFromCartErrors: (addToCart: AddToCart) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/product/cart-error/CartError" {
    import React from 'react';
    import './CartError.css';
    import { IProps } from "components/product/cart-error/ICartError";
    const CartError: React.FC<IProps>;
    export default CartError;
}
declare module "components/product/cart-error/CartErrorContainer" {
    import { IOwnProps } from "components/product/cart-error/ICartError";
    const _default_6: import("react-redux").ConnectedComponent<import("react").FC<import("components/product/cart-error/ICartError").IProps>, Pick<import("components/product/cart-error/ICartError").IProps, "horizontal" | "product"> & IOwnProps>;
    export default _default_6;
}
declare module "components/subcomponents/image/IImage" {
    export interface IOwnProps {
        /**
         * Do not place placeholder on image load fail
         */
        noPlaceholder?: boolean;
    }
}
declare module "components/subcomponents/image/Image" {
    import React, { ImgHTMLAttributes } from 'react';
    import { IOwnProps } from "components/subcomponents/image/IImage";
    /**
     * Default html img element
     * but with no-internet placeholder
     */
    class ImageElement extends React.Component<IOwnProps & ImgHTMLAttributes<HTMLImageElement>> {
        imgRef: HTMLImageElement | null;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
    }
    export default ImageElement;
}
declare module "contexts/product/ProductContext" {
    import React from 'react';
    import Product from "entities/product/Product";
    const ProductContext: React.Context<Product<any> | null>;
    export default ProductContext;
}
declare module "components/product/grid-item/IProductGridItem" {
    import Product from "entities/product/Product";
    export interface IOwnProps {
        product: Product;
    }
}
declare module "components/product/grid-item/ProductGridItem" {
    import React from 'react';
    import { IOwnProps } from "components/product/grid-item/IProductGridItem";
    import './ProductGridItem.css';
    const ProductGridItem: React.FC<IOwnProps>;
    export default ProductGridItem;
}
declare module "components/blocks/products-block/IProductsBlock" {
    import Product from "entities/product/Product";
    import IBlockProps from "components/blocks/IBlockProps";
    export interface IOwnProps extends IBlockProps {
        products: Array<Product>;
    }
    export type IProps = IOwnProps;
}
declare module "components/blocks/products-block/ProductsBlock" {
    import React from 'react';
    import '../../product/grid/ProductsGrid.css';
    import { IOwnProps } from "components/blocks/products-block/IProductsBlock";
    /**
     * Products block
     *
     * @param {IOwnProps} props
     */
    const ProductsBlock: React.FC<IOwnProps>;
    export default ProductsBlock;
}
declare module "components/article/list-item/IArticleListItem" {
    import Article from "entities/article/Article";
    export interface IOwnProps {
        article: Article;
    }
    export type IProps = IOwnProps;
}
declare module "components/article/list-item/ArticleListItem.messages" {
    const definedMessages: {
        timeToRead: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/article/list-item/ArticleListItem" {
    import React from 'react';
    import { IOwnProps } from "components/article/list-item/IArticleListItem";
    import './ArticleListItem.css';
    const ArticleListItem: React.FC<IOwnProps>;
    export default ArticleListItem;
}
declare module "components/blocks/articles-block/IArticlesBlock" {
    import Article from "entities/article/Article";
    import IBlockProps from "components/blocks/IBlockProps";
    export interface IOwnProps extends IBlockProps {
        articles: Array<Article>;
    }
    export type IProps = IOwnProps;
}
declare module "components/blocks/articles-block/ArticlesBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/articles-block/IArticlesBlock";
    import '../../article/grid-list/ArticleGridList.css';
    const ArticlesBlock: React.FC<IOwnProps>;
    export default ArticlesBlock;
}
declare module "contexts/language/LanguageContext" {
    import React from 'react';
    const LanguageContext: React.Context<string>;
    export default LanguageContext;
}
declare module "components/subcomponents/language-selector/ILanguageSelector" {
    import Language from "entities/language/Language";
    export interface IOwnProps {
    }
    export interface IStateProps {
        languages: Array<Language>;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/language-selector/LanguageSelector" {
    import React from 'react';
    import { IProps } from "components/subcomponents/language-selector/ILanguageSelector";
    import './LanguageSelector.css';
    /**
     * Language selector
     *
     * @param {IProps} props
     */
    const LanguageSelector: React.FC<IProps>;
    export default LanguageSelector;
}
declare module "components/subcomponents/language-selector/LanguageSelectorContainer" {
    import { StoreState } from "redux/types/index";
    import { IStateProps, IDispatchProps, IOwnProps } from "components/subcomponents/language-selector/ILanguageSelector";
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(): IDispatchProps;
    const _default_7: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/language-selector/ILanguageSelector").IProps>, Pick<import("components/subcomponents/language-selector/ILanguageSelector").IProps, never> & IOwnProps>;
    export default _default_7;
}
declare module "components/blocks/language-selector-block/ILanguageSelectorBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/language-selector-block/LanguageSelectorBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/language-selector-block/ILanguageSelectorBlock";
    /**
     * Language selector block
     *
     * @param {IOwnProps} props
     */
    const LanguageSelectorBlock: React.FC<IOwnProps>;
    export default LanguageSelectorBlock;
}
declare module "components/subcomponents/currency-selector/ICurrencySelector" {
    import Currency from "entities/currency/Currency";
    export interface IOwnProps {
    }
    export interface IStateProps {
        currency?: Currency;
        defaultCurrency?: Currency;
        currencies: Array<Currency>;
    }
    export interface IDispatchProps {
        setCurrency: (code: string) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/currency-selector/CurrencySelector" {
    import React from 'react';
    import { IProps } from "components/subcomponents/currency-selector/ICurrencySelector";
    import './CurrencySelector.css';
    /**
     * Currency selector
     *
     * @param {IProps} props
     */
    const CurrencySelector: React.FC<IProps>;
    export default CurrencySelector;
}
declare module "components/subcomponents/currency-selector/CurrencySelectorContainer" {
    import { Dispatch } from 'redux';
    import * as actions from "redux/actions/index";
    import { StoreState } from "redux/types/index";
    import { IStateProps, IDispatchProps, IOwnProps } from "components/subcomponents/currency-selector/ICurrencySelector";
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(dispatch: Dispatch<actions.UiAction>): IDispatchProps;
    const _default_8: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/currency-selector/ICurrencySelector").IProps>, Pick<import("components/subcomponents/currency-selector/ICurrencySelector").IProps, never> & IOwnProps>;
    export default _default_8;
}
declare module "components/blocks/currency-selector-block/ICurrencySelectorBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/currency-selector-block/CurrencySelectorBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/currency-selector-block/ICurrencySelectorBlock";
    /**
     * Currency selector block
     *
     * @param {IOwnProps} props
     */
    const CurrencySelectorBlock: React.FC<IOwnProps>;
    export default CurrencySelectorBlock;
}
declare module "components/blocks/cart-button-block/ICartButtonBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/cart/cart-button/ICartButton" {
    export interface IOwnProps {
        size?: number;
        className?: string;
        label?: string;
    }
    export interface IStateProps {
        amount: number;
        isQueued: boolean;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/cart/cart-button/CartButton" {
    import React from 'react';
    import { IProps } from "components/cart/cart-button/ICartButton";
    import './CartButton.css';
    const CartButton: React.FC<IProps>;
    export default CartButton;
}
declare module "components/cart/cart-button/CartButtonContainer" {
    import { StoreState } from "redux/types/index";
    import { IStateProps, IDispatchProps, IOwnProps } from "components/cart/cart-button/ICartButton";
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(): IDispatchProps;
    const _default_9: import("react-redux").ConnectedComponent<import("react").FC<import("components/cart/cart-button/ICartButton").IProps>, Pick<import("components/cart/cart-button/ICartButton").IProps, "className" | "label" | "size"> & IOwnProps>;
    export default _default_9;
}
declare module "components/blocks/cart-button-block/CartButtonBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/cart-button-block/ICartButtonBlock";
    /**
     * Cart button block
     *
     * @param props
     */
    const CartButtonBlock: React.FC<IOwnProps>;
    export default CartButtonBlock;
}
declare module "components/subcomponents/selection/search/ISelectionSearch" {
    export interface IOwnProps {
        onChange?: (value: string) => void;
        onSubmit?: (value: string) => void;
        value?: string;
        placeholder?: string;
        focus?: boolean;
        onFocus?: () => void;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/selection/search/SelectionSearch" {
    import React from 'react';
    import { IProps } from "components/subcomponents/selection/search/ISelectionSearch";
    import './SelectionSearch.css';
    /**
     * Low-level search component
     *
     * @param props
     */
    const SelectionSearch: React.FC<IProps>;
    export default SelectionSearch;
}
declare module "components/subcomponents/show-all-button/IShowAllButton" {
    export interface IOwnProps {
        onClick?: () => void;
        className?: string;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/show-all-button/ShowAllButton.messages" {
    const _default_10: {
        buttonTitle: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_10;
}
declare module "components/subcomponents/show-all-button/ShowAllButton" {
    import React from 'react';
    import { IProps } from "components/subcomponents/show-all-button/IShowAllButton";
    import './ShowAllButton.css';
    /**
     * Show all button
     *
     * @param props
     */
    const ShowAllButton: React.FC<IProps>;
    export default ShowAllButton;
}
declare module "components/subcomponents/selection/autocomplete/IAutocomplete" {
    export interface IOwnProps {
        autocomplete?: boolean;
        autocompleteContent?: Array<React.ReactNode>;
        onClickAway?: () => void;
        children: React.ReactNode;
        footer?: () => React.ReactNode;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/selection/autocomplete/Autocomplete" {
    import React from 'react';
    import { IProps } from "components/subcomponents/selection/autocomplete/IAutocomplete";
    import './Autocomplete.css';
    /**
     * Autocomplete component
     *
     * @param {IProps} props
     */
    const Autocomplete: React.FC<IProps>;
    interface IAutocompleteWrapperProps extends IProps {
        children: React.ReactNode;
        className: string;
    }
    /**
     * Wrapper for choose between full screen modal and click away listener
     *
     * @param props
     */
    export const AutocompleteWrapper: React.FC<IAutocompleteWrapperProps>;
    export const onAutocompleteShow: () => void;
    export const onAutocompleteHide: () => void;
    export default Autocomplete;
}
declare module "hooks/use-location-change/useLocationChange" {
    /**
     * Observes location change
     *
     * @returns true if location has changed
     */
    function useLocationChange(): boolean;
    export default useLocationChange;
}
declare module "components/subcomponents/selection/global-search/ISelectionGlobalSearch" {
    import Product from "entities/product/Product";
    export interface IOwnProps {
        focus?: boolean;
    }
    export interface IStateProps {
        isAutocompleteOpened: boolean;
        foundProducts?: Array<Product>;
        queryHistories: Array<string>;
    }
    export interface IDispatchProps {
        performSearch: (query: string) => void;
        searchProducts: (query: string) => void;
        openSearchAutocomplete: () => void;
        closeSearchAutocomplete: () => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/selection/global-search/SelectionGlobalSearch.messages" {
    const definedMessages: {
        placeholder: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/selection/global-search/SelectionGlobalSearch" {
    import React from 'react';
    import { IProps } from "components/subcomponents/selection/global-search/ISelectionGlobalSearch";
    import './SelectionGlobalSearch.css';
    const SelectionGlobalSearch: React.FC<IProps>;
    export default SelectionGlobalSearch;
}
declare module "components/subcomponents/selection/global-search/SelectionGlobalSearchContainer" {
    import { Dispatch } from 'redux';
    import * as actions from "redux/actions/index";
    import { StoreState } from "redux/types/index";
    import { IStateProps, IDispatchProps, IOwnProps } from "components/subcomponents/selection/global-search/ISelectionGlobalSearch";
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(dispatch: Dispatch<actions.SearchAction | actions.ProductAction>): IDispatchProps;
    const _default_11: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/selection/global-search/ISelectionGlobalSearch").IProps>, Pick<import("components/subcomponents/selection/global-search/ISelectionGlobalSearch").IProps, "focus"> & IOwnProps>;
    export default _default_11;
}
declare module "components/blocks/search/ISearchBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/search/SearchBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/search/ISearchBlock";
    const SearchBlock: React.FC<IOwnProps>;
    export default SearchBlock;
}
declare module "components/profile/user-info/avatar/IUserAvatar" {
    import Profile from "entities/auth/Profile";
    export interface IOwnProps {
        profile: Profile;
    }
    export type IProps = IOwnProps;
}
declare module "components/profile/user-info/avatar/UserAvatar.messages" {
    const _default_12: {
        guestAcronym: {
            id: string;
            defaultMessage: string;
        };
        avatarImageAlt: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_12;
}
declare module "components/profile/user-info/avatar/UserAvatar" {
    import React from 'react';
    import { IProps } from "components/profile/user-info/avatar/IUserAvatar";
    import './UserAvatar.css';
    const UserAvatar: React.FC<IProps>;
    export default UserAvatar;
}
declare module "components/profile/menu/dropdown/ProfileMenuDropdown.messages" {
    const definedMessages: {
        orders: {
            id: string;
            defaultMessage: string;
        };
        logout: {
            id: string;
            defaultMessage: string;
        };
        login: {
            id: string;
            defaultMessage: string;
        };
        register: {
            id: string;
            defaultMessage: string;
        };
        profile: {
            id: string;
            defaultMessage: string;
        };
        notifications: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/profile/menu/ProfileMenuSchema" {
    interface IMenuItemIcon {
        className: string;
        size: number;
    }
    export const createProfileMenuSchemaLogged: (props: {
        logout: () => void;
        notificationsNumber: number;
    }) => {
        icon: (props: IMenuItemIcon) => any;
        link?: string | undefined;
        label?: string | number | undefined;
        action?: (() => void) | undefined;
        message: any;
    }[];
    export const createProfileMenuSchemaUnlogged: () => {
        icon: (props: IMenuItemIcon) => any;
        link?: string | undefined;
        action?: (() => void) | undefined;
        label?: string | number | undefined;
        message: any;
    }[];
}
declare module "components/profile/menu/dropdown/IProfileMenuDropdown" {
    export interface IOwnProps {
        anchor?: Element | ((element: Element) => Element) | null;
        onClose?: () => void;
    }
    export interface IStateProps {
        isLogged: boolean;
        notificationsNumber: number;
    }
    export interface IDispatchProps {
        logout: () => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/profile/menu/dropdown/ProfileMenuDropdown" {
    import React from 'react';
    import { IProps } from "components/profile/menu/dropdown/IProfileMenuDropdown";
    import '../ProfileMenu.css';
    const ProfileMenuDropdown: React.FC<IProps>;
    export default ProfileMenuDropdown;
}
declare module "redux/selectors/Notification" {
    import { StoreState } from "redux/types/index";
    export const getUnviewedNotifications: import("reselect").OutputSelector<StoreState, import("entities/notifications/EntityNotification").default[], (res: import("redux/reducers/notification/INotificationState").default) => import("entities/notifications/EntityNotification").default[]>;
    export const getUnviewedNotificationsCount: import("reselect").OutputSelector<StoreState, number, (res: import("entities/notifications/EntityNotification").default[]) => number>;
}
declare module "components/profile/menu/dropdown/ProfileMenuDropdownContainer" {
    import { IOwnProps } from "components/profile/menu/dropdown/IProfileMenuDropdown";
    const _default_13: import("react-redux").ConnectedComponent<import("react").FC<import("components/profile/menu/dropdown/IProfileMenuDropdown").IProps>, Pick<import("components/profile/menu/dropdown/IProfileMenuDropdown").IProps, "onClose" | "anchor"> & IOwnProps>;
    export default _default_13;
}
declare module "components/profile/profile-button/IProfileButton" {
    import Profile from "entities/auth/Profile";
    export interface IOwnProps {
        className?: string;
        size?: number;
        label?: string;
        /**
         * Prevent showing user avatar when logged
         */
        disableAvatar?: boolean;
    }
    export interface IStateProps {
        notificationsAmount: number;
        profile: Profile | null;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/profile/profile-button/ProfileButton" {
    import React from 'react';
    import { IProps } from "components/profile/profile-button/IProfileButton";
    import './ProfileButton.css';
    const ProfileButton: React.FC<IProps>;
    export default ProfileButton;
}
declare module "components/profile/profile-button/ProfileButtonContainer" {
    import { IOwnProps } from "components/profile/profile-button/IProfileButton";
    const _default_14: import("react-redux").ConnectedComponent<import("react").FC<import("components/profile/profile-button/IProfileButton").IProps>, Pick<import("components/profile/profile-button/IProfileButton").IProps, "className" | "label" | "size" | "disableAvatar"> & IOwnProps>;
    export default _default_14;
}
declare module "components/blocks/profile-button-block/IProfileButtonBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/profile-button-block/ProfileButtonBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/profile-button-block/IProfileButtonBlock";
    const ProfileButtonBlock: React.FC<IOwnProps>;
    export default ProfileButtonBlock;
}
declare module "components/wishlist/wishlist-button/IWishlistButton" {
    export interface IOwnProps {
        size?: number;
        className?: string;
        label?: string;
    }
    export interface IStateProps {
        amount: number;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/wishlist/wishlist-button/WishlistButton" {
    import React from 'react';
    import { IProps } from "components/wishlist/wishlist-button/IWishlistButton";
    import './WishlistButton.css';
    /**
     * Wishlist button to toggle wishlist modal
     *
     * @param {IProps} props
     */
    const WishlistButton: React.FC<IProps>;
    export default WishlistButton;
}
declare module "redux/selectors/Product" {
    import { StoreState } from "redux/types/index";
    export const getProduct: (state: StoreState, props: any) => import("entities/product/Product").Product<any> | undefined;
    export const getCurrentProduct: import("reselect").OutputSelector<StoreState, import("entities/product/Product").Product<any> | null, (res: import("redux/reducers/product/IProductState").default) => import("entities/product/Product").Product<any> | null>;
}
declare module "redux/selectors/Wishlist" {
    import { StoreState } from "redux/types/index";
    export const getWishlistProducts: import("reselect").OutputSelector<StoreState, import("entities/product/Product").Product<any>[], (res: import("redux/types/WishlistState").default) => import("entities/product/Product").Product<any>[]>;
    export const getWishlistQueueProducts: import("reselect").OutputSelector<StoreState, number[], (res: import("redux/types/WishlistState").default) => number[]>;
    export const isInWishlist: import("reselect").OutputSelector<StoreState, boolean, (res1: import("entities/product/Product").Product<any>[], res2: import("entities/product/Product").Product<any> | null) => boolean>;
    export const getWishlistProductsCount: import("reselect").OutputSelector<StoreState, number, (res1: import("entities/product/Product").Product<any>[], res2: number[]) => number>;
}
declare module "components/wishlist/wishlist-button/WishlistButtonContainer" {
    import { IStateProps, IOwnProps, IDispatchProps } from "components/wishlist/wishlist-button/IWishlistButton";
    import { StoreState } from "redux/types/index";
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(): IDispatchProps;
    const _default_15: import("react-redux").ConnectedComponent<import("react").FC<import("components/wishlist/wishlist-button/IWishlistButton").IProps>, Pick<import("components/wishlist/wishlist-button/IWishlistButton").IProps, "className" | "label" | "size"> & IOwnProps>;
    export default _default_15;
}
declare module "components/blocks/wishlist-button-block/IWishlistButtonBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/wishlist-button-block/WishlistButtonBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/wishlist-button-block/IWishlistButtonBlock";
    const WishlistButtonBlock: React.FC<IOwnProps>;
    export default WishlistButtonBlock;
}
declare module "components/subcomponents/hamburger/IHamburger" {
    export interface IOwnProps {
        className?: string;
        size?: number;
        onClick?: () => void;
        label?: string;
    }
    export interface IStateProps {
        isOpened: boolean;
    }
    export interface IDispatchProps {
        open: () => void;
        close: () => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/hamburger/Hamburger" {
    import React from 'react';
    import { IProps } from "components/subcomponents/hamburger/IHamburger";
    import './Hamburger.css';
    /**
     * Opens drawer with menu
     *
     * @param props
     */
    const Hamburger: React.FC<IProps>;
    export default Hamburger;
}
declare module "components/subcomponents/hamburger/HamburgerContainer" {
    import { Dispatch } from 'redux';
    import * as actions from "redux/actions/index";
    import { StoreState } from "redux/types/index";
    import { IOwnProps } from "components/subcomponents/hamburger/IHamburger";
    export const drawerId = "side-menu";
    export function mapStateToProps(state: StoreState): {
        isOpened: boolean;
    };
    export function mapDispatchToProps(dispatch: Dispatch<actions.UiAction>): {
        open: () => actions.OpenDrawer;
        close: () => actions.CloseDrawer;
    };
    const _default_16: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/hamburger/IHamburger").IProps>, Pick<import("components/subcomponents/hamburger/IHamburger").IProps, "className" | "label" | "size" | "onClick"> & IOwnProps>;
    export default _default_16;
}
declare module "components/blocks/hamburger-button-block/IHamburgerButtonBlock" {
    import { ISimpleBlockProps } from "components/blocks/IBlockProps";
    export type IOwnProps = ISimpleBlockProps;
}
declare module "components/blocks/hamburger-button-block/HamburgerButtonBlock" {
    import React from 'react';
    import { IOwnProps } from "components/blocks/hamburger-button-block/IHamburgerButtonBlock";
    import './HamburgerButtonBlock.css';
    const HamburgerButtonBlock: React.FC<IOwnProps>;
    export default HamburgerButtonBlock;
}
declare module "components/blocks/main-block/IMainBlock" {
    export interface IOwnProps {
    }
    export type IProps = IOwnProps;
}
declare module "components/blocks/main-block/MainBlock" {
    import React from 'react';
    import { IProps } from "components/blocks/main-block/IMainBlock";
    const MainBlock: React.FC<IProps>;
    export default MainBlock;
}
declare module "api/parser/cscart/EntityNotification" {
    import EntityTypes from "entities/notifications/EntityTypes";
    interface IRawNotification {
        notification_id: number;
        user_id: number;
        entity_type: EntityTypes;
        entity_id: number;
        message: any;
        notification_time: string;
    }
    interface INotificationResponse {
        notifications: Array<IRawNotification>;
    }
    export default INotificationResponse;
}
declare module "entities/form/factories/formFieldValueFactory" {
    import { IEntityExtendableFactory } from "entities/IEntityExtendable";
    import FormFieldValue from "entities/form/FormFieldValue";
    export interface IFormFieldValueFactory extends IEntityExtendableFactory {
        label: string;
        value: string | number;
        criteria?: string | number;
    }
    const createFormFieldValue: (formFieldData: IFormFieldValueFactory) => Promise<FormFieldValue>;
    export default createFormFieldValue;
}
declare module "entities/form/factories/formFieldFactory" {
    import FormField from "entities/form/FormField";
    import { IEntityExtendableFactory } from "entities/IEntityExtendable";
    import FieldTypes from "constants/FieldTypes";
    import { IFormFieldValueFactory } from "entities/form/factories/formFieldValueFactory";
    export interface IFormFieldFactory extends IEntityExtendableFactory {
        name: string;
        label: string;
        type: FieldTypes;
        isRequired: boolean;
        isEnabled: boolean;
        value?: string | number | boolean;
        values?: IFormFieldValueFactory[];
        description?: string;
    }
    const createFormField: (formFieldData: IFormFieldFactory) => Promise<FormField>;
    export default createFormField;
}
declare module "entities/form/factories/formSectionFactory" {
    import FormSection from "entities/form/FormSection";
    import { IEntityExtendableFactory } from "entities/IEntityExtendable";
    import { IFormFieldFactory } from "entities/form/factories/formFieldFactory";
    export interface IFormSectionFactory extends IEntityExtendableFactory {
        id: string;
        title?: string;
        fields: Array<IFormFieldFactory>;
    }
    const createFormSection: (formSectionData: IFormSectionFactory) => Promise<FormSection>;
    export default createFormSection;
}
declare module "entities/form/factories/formSchemaFactory" {
    import FormSchema from "entities/form/FormSchema";
    import { IEntityExtendableFactory } from "entities/IEntityExtendable";
    import { IFormSectionFactory } from "entities/form/factories/formSectionFactory";
    export interface IFormSchemaFactory extends IEntityExtendableFactory {
        sections: IFormSectionFactory[];
    }
    const createFormSchema: (formSchemaData: IFormSchemaFactory) => Promise<FormSchema>;
    export default createFormSchema;
}
declare module "entities/services/parser/ParserEvent" {
    import { AsyncEventEmitter } from "utils/event-emitter/AsyncEventEmitter";
    interface IParserEvent {
        item: unknown;
        extra: unknown;
    }
    export class ParserEvent extends AsyncEventEmitter<IParserEvent> {
        emit(eventName: string, data: IParserEvent): Promise<void>;
    }
    export const parserSubscriber: ParserEvent;
    export default parserSubscriber;
}
declare module "api/parser/cscart/castListItems" {
    /**
     * Try to cast items and ignore errors
     *
     * @param items
     * @param castFunction
     */
    const castListItems: <T, S>(items: T[] | {
        [key: string]: T;
    }, castFunction: (item: T) => Promise<S>) => Promise<S[]>;
    export default castListItems;
}
declare module "api/parser/cscart/Parser.messages" {
    const _default_17: {
        termsLabel: {
            id: string;
            defaultMessage: string;
        };
        defaultCheckboxLabel: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_17;
}
declare module "api/parser/cscart/FormSchema" {
    import { IFormSchemaFactory } from "entities/form/factories/formSchemaFactory";
    import { IFormFieldFactory } from "entities/form/factories/formFieldFactory";
    import { IFormSectionFactory } from "entities/form/factories/formSectionFactory";
    export type IFormSchema = {
        [key: string]: IFormSection;
    } & {
        CUSTOM?: {
            [key: string]: IFormSection;
        };
    };
    export interface IFormSection {
        description: string;
        id: string;
        fields: {
            [key: string]: IFormField;
        };
    }
    export interface IFormField {
        field_id: string;
        field_type: string;
        field_name: string;
        description?: string;
        is_default: boolean;
        required: boolean;
        values: any;
    }
    export const castFormSchema: (schema: IFormSchema) => Promise<IFormSchemaFactory>;
    export const castFormSection: (section: IFormSection) => Promise<IFormSectionFactory>;
    export const castFormField: (field: IFormField) => Promise<IFormFieldFactory>;
    export default castFormSchema;
}
declare module "api/parser/cscart/Payment" {
    import IPaymentApp from "entities/payment/IPayment";
    interface IPayment {
        payment_id?: string;
        company_id?: string;
        usergroup_ids?: string;
        position?: string;
        status?: string;
        template?: string;
        processor_id?: string;
        a_surcharge?: string;
        p_surcharge?: string;
        tax_ids?: Array<any>;
        localization?: string;
        payment_category?: string;
        payment?: string;
        description?: string;
        instructions?: string;
        surcharge_title?: string;
        lang_code?: string;
        processor?: any;
        processor_type?: any;
        image?: Array<any>;
        storefront_ids: string;
        script?: string;
    }
    export const castPayment: (payment: IPayment) => Promise<IPaymentApp>;
    export default IPayment;
}
declare module "api/parser/cscart/Shipping" {
    import Shipping from "entities/shipping/Shipping";
    interface IShipping {
        shipping_id: string;
        shipping: string;
        delivery_time: string;
        rate_calculation: string;
        rate_info: any;
        group_key: number;
        rate: number;
        group_name: string;
        need_shipment: boolean;
        description?: string;
        free_shipping?: boolean;
    }
    export const castShipping: (shipping: IShipping) => Promise<Shipping>;
    export default IShipping;
}
declare module "api/parser/cscart/OrderStatus" {
    import OrderStatus from "entities/order/OrderStatus";
    interface IOrderStatus {
        status_id: string;
        status: string;
        type: string;
        is_default: string;
        position: string;
        description: string;
        email_subj: string;
        email_header: string;
        lang_code: string;
        params: {
            allow_return: string;
            repay: string;
            notify: string;
            gift_cert_status: string;
            inventory: string;
            color: string;
            remove_cc_info: string;
            calculate_for_payouts: string;
        };
    }
    export const castOrderStatus: (status: IOrderStatus) => Promise<OrderStatus>;
    export default IOrderStatus;
}
declare module "api/parser/cscart/Image" {
    import IImagePairApp from "entities/image-pair/IImagePair";
    import IIconApp from "entities/image-pair/IIcon";
    export interface IImage {
        pair_id: string;
        image_id: string;
        detailed_id: string;
        position: string;
        detailed: IDetail;
        icons: {
            [key: string]: IIcon;
        };
    }
    export interface IDetail {
        object_id: string;
        object_type: string;
        type: string;
        image_path: string;
        alt: string;
        image_x: string;
        image_y: string;
        http_image_path: string;
        https_image_path: string;
        absolute_path: string;
        relative_path: string;
        is_high_res: boolean;
    }
    export interface IIcon {
        image_path: string;
        detailed_image_path: string;
        alt: string;
        width: number;
        height: number;
        is_thumbnail: boolean;
    }
    export const castImage: (image: IImage) => Promise<IImagePairApp>;
    export const castIcon: (icon: IIcon) => Promise<IIconApp>;
}
declare module "utils/string/replaceRelativeUrlsAtSrc" {
    const replaceRelativeUrlsAtSrc: (text: string, path: string) => string;
    export default replaceRelativeUrlsAtSrc;
}
declare module "api/parser/cscart/Product" {
    import { IImage } from "api/parser/cscart/Image";
    import { IProductFactory } from "entities/product/factories/productFactory";
    import { IProductFeatureFactory } from "entities/product/factories/productFeatureFactory";
    import { IProductOptionFactory } from "entities/product/factories/productOptionFactory";
    import { IProductSeoSnippetFactory } from "entities/product/factories/productSeoSnippetFactory";
    import { IProductFeatureVariantFactory } from "entities/product/factories/productFeatureVariantFactory";
    import { IProductOptionVariantFactory } from "entities/product/factories/productOptionVariantFactory";
    import ZeroPriceBehaviour from "constants/ZeroPriceBehaviour";
    export interface IProduct {
        product_id: string;
        product_code: string;
        product_type: string;
        status: string;
        company_id: string;
        list_price: string;
        amount: string;
        weight: string;
        length: string;
        width: string;
        height: string;
        shipping_freight: string;
        low_avail_limit: string;
        timestamp: string;
        updated_timestamp: string;
        usergroup_ids: string;
        is_edp: string;
        edp_shipping: string;
        unlimited_download: string;
        tracking: string;
        free_shipping: string;
        zero_price_action: string;
        is_pbp: string;
        is_op: string;
        is_oper: string;
        is_returnable: string;
        return_period: string;
        avail_since: string;
        out_of_stock_actions: string;
        localization: string;
        min_qty: string;
        max_qty: string;
        qty_step: string;
        list_qty_count: string;
        tax_ids: Array<any>;
        age_verification: string;
        age_limit: string;
        options_type: string;
        exceptions_type: string;
        details_layout: string;
        shipping_params: string;
        facebook_obj_type: string;
        parent_product_id: string;
        buy_now_url: string;
        lang_code: string;
        product: string;
        shortname: string;
        short_description: string | null;
        full_description: string;
        meta_keywords: string;
        meta_description: string;
        search_words: unknown;
        page_title: string;
        age_warning_message: unknown;
        promo_text: string | null;
        price: string;
        category_ids: Array<number>;
        popularity: string;
        company_name: string;
        sales_amount: unknown;
        seo_name: string;
        seo_path: string;
        point_price: unknown;
        discussion_type: string;
        base_price: string;
        main_category: number;
        position?: string;
        image_pairs: {
            [key: number]: IImage;
        };
        main_pair: IImage | [];
        product_features: {
            [key: number]: IProductFeature;
        };
        detailed_params: {
            info_type: string;
            is_preview: boolean;
            get_icon: boolean;
            get_detailed: boolean;
            get_additional: boolean;
            get_options: boolean;
            get_discounts: boolean;
            get_features: boolean;
            get_extra: boolean;
            get_taxed_prices: boolean;
            get_for_one_product: boolean;
            detailed_params: boolean;
            features_display_on: string;
            get_variation_info: boolean;
            get_variation_features_variants: boolean;
            get_variation_name: boolean;
            get_product_type: boolean;
        };
        seo_snippet?: {
            sku: string;
            name: string;
            description: string;
            meta_description?: string;
            availability: string;
            price_currency: string;
            price: number;
            show_price: boolean;
            images: Array<string>;
        };
        have_required: string;
        categories: Array<IParentCategory>;
        selected_options: [] | Array<{
            [key: number]: number;
        }>;
        variation_feature_ids: {
            [key: number]: string;
        };
        variation_feature_collection: {
            [key: number]: {
                feature_id: string;
                purpose: string;
            };
        };
        variation_group_id: number;
        variation_group_code: string;
        variation_parent_product_id: number;
        variation_sub_group_id: string;
        variation_features: {
            [key: number]: IVariationFeature;
        };
        variation_name: string;
        has_options: number;
        product_options: Array<IProductOption>;
        discounts: {
            A: number;
            P: number;
        };
        qty_content: Array<unknown>;
        variation_features_variants: {
            [key: number]: IVariationFeatureVariant;
        };
        average_rating?: string;
    }
    type IProductResponse = IProduct;
    export default IProductResponse;
    interface IParentCategory {
        category_id: number;
        category: string;
        seo_key: string;
        categories: Array<IParentCategory>;
    }
    interface IVariationFeature {
        feature_id: string;
        feature_style: string;
        position: string;
        purpose: string;
        display_on_catalog: string;
        description: string;
        prefix: string;
        suffix: string;
        purpose_position: string;
        variant: string;
        variant_id: string;
        variant_position: string;
    }
    interface IVariationFeatureVariant {
        feature_id: string;
        feature_style: string;
        position: string;
        purpose: string;
        display_on_catalog: string;
        description: string;
        prefix: string;
        suffix: string;
        purpose_position: string;
        variant: string;
        variant_id: string;
        variant_position: string;
        variants: {
            [key: number]: IVariationFeatureVariantVariant;
        };
    }
    interface IVariationFeatureVariantVariant {
        variant_id: string;
        variant_position: string;
        variant: string;
        product_id: string;
        product: IProduct;
    }
    export interface IProductFeature {
        feature_id: string;
        value: string;
        value_int: unknown | null;
        variant_id: string;
        /**
         * C—Check box: Single
         * M—Check box: Multiple
         * S—Select box: Text
         * N—Select box: Number
         * E—Select box: Brand/Manufacturer
         * T—Others: Text
         * O—Others: Number
         * D—Others: Date
         * G—group of features
         */
        feature_type: 'C' | 'M' | 'S' | 'N' | 'E' | 'T' | 'O' | 'D' | 'G';
        description: string;
        prefix: string;
        suffix: string;
        variant: string;
        parent_id: string;
        display_on_header: string;
        display_on_catalog: string;
        display_on_product: string;
        position?: string;
        full_description?: string;
        variants: {
            [key: number]: IProductFeatureVariant;
        };
    }
    export interface IProductFeatureVariant {
        value: string;
        value_int: unknown | null;
        variant_id: string;
        variant: string;
        image_pairs: unknown | false;
        description?: string;
        selected?: string;
    }
    export interface IProductOption {
        cur_product_id?: string;
        option_id: string;
        product_id: string;
        company_id: string;
        option_type: string;
        inventory: string;
        regexp: string;
        required: string;
        multiupload: string;
        allowed_extensions: string;
        max_file_size: string;
        missing_variants_handling: string;
        status: string;
        position: string;
        value: string | number;
        google_export_name_option: string;
        option_name: string;
        internal_option_name?: string;
        option_text: string;
        description: string;
        inner_hint: string;
        incorrect_message: string;
        comment: string;
        variants: {
            [key: number]: IProductOptionVariant;
        };
    }
    export interface IProductOptionVariant {
        variant_id: string;
        option_id?: string;
        position: string;
        modifier: string;
        modifier_type: string;
        weight_modifier: string;
        weight_modifier_type: string;
        variant_name: string;
        image_pair?: IImage | [];
    }
    export const castProduct: (product: IProduct) => Promise<IProductFactory>;
    export const castProductFeature: (productFeature: IProductFeature) => Promise<IProductFeatureFactory>;
    export const castProductFeatureVariant: (variant: IProductFeatureVariant, feature: IProductFeature) => Promise<IProductFeatureVariantFactory>;
    export const castProductOption: (option: IProductOption) => Promise<IProductOptionFactory>;
    export const castProductOptionVariant: (variant: IProductOptionVariant, option: IProductOption) => Promise<IProductOptionVariantFactory>;
    export const castSeoSnippet: (product: IProduct) => Promise<IProductSeoSnippetFactory>;
    export const convertZeroPriceAction: (actionType: string) => ZeroPriceBehaviour;
}
declare module "api/parser/cscart/OrderProduct" {
    import { IImage } from "api/parser/cscart/Image";
    import { IOrderProductFactory } from "entities/order/factories/orderProductFactory";
    import { IProductExtrasFactory } from "entities/product/factories/productExtrasFactory";
    interface IOrderProduct {
        item_id: string;
        order_id: string;
        product_id: string;
        product_code: string;
        price: string;
        amount: string;
        extra: {
            product_options: Array<any>;
            unlimited_download: string;
            product: string;
            company_id: string;
            is_edp: string;
            edp_shipping: string;
            discount: number;
            base_price: number;
            stored_price: string;
            product_options_value?: Array<ISelectedOption>;
        };
        product: string;
        product_status: any;
        deleted_product: boolean;
        discount: number;
        company_id: string;
        base_price: number;
        original_price: number;
        cart_id: string;
        tax_value: number;
        subtotal: number;
        display_subtotal: number;
        shipped_amount: number;
        shipment_amount: string;
        is_accessible: boolean;
        variation_features: Array<any>;
        seo_name: string;
        main_pair: IImage | [];
    }
    interface ISelectedOption {
        option_id: string;
        product_id: string;
        company_id: string;
        option_type: string;
        inventory: string;
        regexp: string;
        required: string;
        multiupload: string;
        allowed_extensions: string;
        max_file_size: string;
        missing_variants_handling: string;
        status: string;
        position: string;
        value: string | number;
        option_name: string;
        option_text: string;
        description: string;
        inner_hint: string;
        incorrect_message: string;
        modifier: string;
        modifier_type: string;
        variant_name: string;
    }
    export const castOrderProduct: (orderProduct: IOrderProduct) => Promise<IOrderProductFactory>;
    export const castOrderProductExtras: (product: IOrderProduct) => Promise<IProductExtrasFactory>;
    export default IOrderProduct;
}
declare module "api/parser/cscart/Address" {
    import IAddress from "entities/profile/IAddress";
    interface IShippingAddress {
        s_firstname?: string;
        s_lastname?: string;
        s_address?: string;
        s_address2?: string;
        s_city?: string;
        s_county?: string;
        s_state?: string;
        s_country?: string;
        s_zipcode?: string;
        s_phone?: string;
        s_address_type?: string;
        s_state_descr?: string;
        s_country_descr?: string;
    }
    interface IBillingAddress {
        b_firstname?: string;
        b_lastname?: string;
        b_address?: string;
        b_address2?: string;
        b_city?: string;
        b_county?: string;
        b_state?: string;
        b_country?: string;
        b_zipcode?: string;
        b_phone?: string;
        b_address_type?: string;
        b_state_descr?: string;
        b_country_descr?: string;
    }
    interface IWithAddress extends IShippingAddress, IBillingAddress {
    }
    export const castAddress: (dataWithAddress: IWithAddress) => [IAddress, IAddress];
}
declare module "api/parser/cscart/Taxes" {
    import { ITaxFactory } from "entities/tax/factories/taxFactory";
    export interface ITaxes {
        [key: number]: ITax;
    }
    export interface ITax {
        description: string;
        price_includes_tax: string;
        priority: number;
        rate_type: string;
        rate_value: string;
        regnumber: string;
        tax_subtotal: number;
    }
    export const castTax: (tax: ITax) => Promise<ITaxFactory>;
}
declare module "api/parser/cscart/Order" {
    import IPayment from "api/parser/cscart/Payment";
    import IShipping from "api/parser/cscart/Shipping";
    import IOrderStatus from "api/parser/cscart/OrderStatus";
    import IOrderProduct from "api/parser/cscart/OrderProduct";
    import { IOrderFactory } from "entities/order/factories/orderFactory";
    import { ITaxes } from "api/parser/cscart/Taxes";
    export interface IOrder {
        order_id: string;
        company_id: string;
        total: string;
        subtotal: number;
        discount: number;
        subtotal_discount: number;
        shipping_ids: string;
        shipping_cost: string;
        tax_subtotal: number;
        timestamp: string;
        firstname?: string;
        lastname?: string;
        b_firstname?: string;
        b_lastname?: string;
        b_address?: string;
        b_address_2?: string;
        b_city?: string;
        b_country?: string;
        b_county?: string;
        b_state?: string;
        b_zipcode?: string;
        b_phone?: string;
        s_firstname?: string;
        s_lastname?: string;
        s_address?: string;
        s_address_2?: string;
        s_city?: string;
        s_country?: string;
        s_county?: string;
        s_state?: string;
        s_zipcode?: string;
        s_phone?: string;
        phone?: string;
        email: string;
        orders?: Array<IOrder>;
        payment_method: {
            storefront_ids: string;
        } | IPayment;
        shipping: Array<IShipping>;
        status_info: IOrderStatus | false;
        products: {
            [key: number]: IOrderProduct;
        };
        taxes: ITaxes;
    }
    type IOrderResponse = IOrder;
    export const castOrder: (order: IOrder) => Promise<IOrderFactory>;
    export default IOrderResponse;
}
declare module "entities/selection/factories/paginationFactory" {
    import Pagination from "entities/selection/Pagination";
    export interface IPaginationFactory {
        total: number;
        page: number;
        limit: number;
    }
    const createPagination: (paginationData: IPaginationFactory) => Promise<Pagination>;
    export default createPagination;
}
declare module "entities/selection/factories/sortingFactory" {
    import Sorting from "entities/selection/Sorting";
    export interface ISortingFactory {
        sortBy: string;
        order: string;
    }
    const createSorting: (sortingData: ISortingFactory) => Promise<Sorting>;
    export default createSorting;
}
declare module "entities/order/factories/orderSelectionFactory" {
    import OrderSelection from "entities/order/OrderSelection";
    import { IOrderFactory } from "entities/order/factories/orderFactory";
    import { IPaginationFactory } from "entities/selection/factories/paginationFactory";
    import { ISortingFactory } from "entities/selection/factories/sortingFactory";
    export interface IOrderSelectionFactory {
        filters: null;
        search?: string;
        orders: Array<IOrderFactory>;
        pagination?: IPaginationFactory;
        sorting?: ISortingFactory;
    }
    const createOrderSelection: (selectionData: IOrderSelectionFactory) => Promise<OrderSelection>;
    export default createOrderSelection;
}
declare module "api/parser/cscart/Orders" {
    import { IOrder } from "api/parser/cscart/Order";
    import { IOrderSelectionFactory } from "entities/order/factories/orderSelectionFactory";
    interface IOrdersResponse {
        orders: Array<IOrder>;
        params: {
            page: number;
            items_per_page: number;
            sort_order: 'asc' | 'desc';
            sort_by: string;
            total_items: string;
            q?: string;
        };
    }
    export const castOrderSelection: (ordersResponse: IOrdersResponse) => Promise<IOrderSelectionFactory>;
    export default IOrdersResponse;
}
declare module "api/parser/cscart/UserData" {
    import IUserDataApp from "entities/cart/IUserData";
    export interface IUserData {
        user_id: string;
        status: string;
        user_type: string;
        user_login: string;
        referer: string;
        is_root: string;
        company_id: string;
        last_login: string;
        timestamp: string;
        firstname: string;
        lastname: string;
        company: string;
        email: string;
        phone: string;
        fax: string;
        url: string;
        tax_exempt: string;
        lang_code: string;
        birthday: string;
        purchase_timestamp_from: string;
        purchase_timestamp_to: string;
        responsible_email: string;
        usergroups: unknown;
        profile_id: string;
        profile_type: string;
        s_firstname?: string;
        s_lastname?: string;
        s_address?: string;
        s_address_2?: string;
        s_city?: string;
        s_county?: string;
        s_state?: string;
        s_country?: string;
        s_zipcode?: string;
        s_phone?: string;
        s_address_type?: string;
        s_country_descr?: string;
        s_state_descr?: string;
        b_firstname?: string;
        b_lastname?: string;
        b_address?: string;
        b_address_2?: string;
        b_city?: string;
        b_county?: string;
        b_state?: string;
        b_country?: string;
        b_zipcode?: string;
        b_phone?: string;
        b_country_descr?: string;
        b_state_descr?: string;
        profile_name: string;
        profile_update_timestamp: string;
        fields?: unknown;
    }
    export default IUserData;
    export const castUserData: (userData: IUserData) => IUserDataApp;
}
declare module "entities/cart/factories/cartProductFactory" {
    import CartProduct from "entities/cart/CartProduct";
    import { IProductFactory } from "entities/product/factories/productFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ICartProductFactory extends IEntityExtendable {
        cartId: string;
        subtotal: number;
        amount: number;
        amountTotal: number;
        product: IProductFactory;
    }
    const createCartProduct: (cartProductData: ICartProductFactory) => Promise<CartProduct>;
    export default createCartProduct;
}
declare module "api/parser/cscart/CartProduct" {
    import { IImage } from "api/parser/cscart/Image";
    import IUserData from "api/parser/cscart/UserData";
    import { IProductOption } from "api/parser/cscart/Product";
    import { ICartProductFactory } from "entities/cart/factories/cartProductFactory";
    export interface ICartProduct {
        product_id: string;
        amount: number;
        price: number;
        storefront_id: string;
        product_code: string;
        product: string;
        product_options: {
            [key: number]: number;
        };
        stored_price: string;
        main_pair: IImage;
        extra: {
            seo_name: string;
            product_options: {
                [key: number]: number;
            };
            unlimited_download: string;
        };
        stored_discount: string;
        company_id: string;
        amount_total: number;
        options_type: string;
        exceptions_type: string;
        modifiers_price: number;
        is_edp: string;
        edp_shipping: string;
        discount: number;
        promotions: unknown;
        base_price: number;
        category_ids: Array<number>;
        display_price: number;
        main_category: number;
        firstname: string;
        lastname: string;
        phone: string;
        email: string;
        user_data: IUserData;
        group_id: number;
        chosen_shipping: number;
        seo_name: string;
        weight: number;
        tracking: string;
        short_description: string;
        shipping_freight: string;
        free_shipping: string;
        zero_price_action: string;
        tax_ids: string;
        qty_step: string;
        list_qty_count: string;
        max_qty: string;
        min_qty: string;
        in_stock: string;
        company_status: string;
        company_name: string;
        options_count: string;
        calculation: unknown;
        original_price: number;
        subtotal: number;
        display_subtotal: number;
        product_options_detailed?: {
            [key: number]: IProductOption;
        };
        /**
         * Sets manually at castCart
         */
        cart_id: string;
    }
    export const castCartProduct: (cartProduct: ICartProduct) => Promise<ICartProductFactory>;
}
declare module "entities/cart/factories/checkoutGroupFactory" {
    import CheckoutGroup from "entities/cart/CheckoutGroup";
    import { IShippingFactory } from "entities/shipping/factories/shippingFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ICheckoutGroupFactory extends IEntityExtendable {
        companyId: number;
        companyName: string;
        shippings: Array<IShippingFactory>;
    }
    const createCheckoutGroup: (groupData: ICheckoutGroupFactory) => Promise<CheckoutGroup>;
    export default createCheckoutGroup;
}
declare module "entities/cart/factories/cartFactory" {
    import IWithTotals from "entities/cart/IWithTotals";
    import IPayment from "entities/payment/IPayment";
    import CheckoutGroup from "entities/cart/CheckoutGroup";
    import Cart from "entities/cart/Cart";
    import { ICartProductFactory } from "entities/cart/factories/cartProductFactory";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ICartFactory extends IWithTotals, IEntityExtendable {
        amount: number;
        checkoutGroups: Array<CheckoutGroup>;
        products: Array<ICartProductFactory>;
        chosenShippings: Array<number>;
        chosenPayment: number;
        payments: Array<IPayment>;
        paymentData: {
            isValid: boolean;
            [others: string]: any;
        };
    }
    /**
     * Cart factory
     *
     */
    const createCart: (cartData?: ICartFactory | undefined) => Promise<Cart>;
    export const createEmptyCart: () => Cart;
    export default createCart;
}
declare module "api/parser/cscart/Cart" {
    import IPayment from "api/parser/cscart/Payment";
    import IShipping from "api/parser/cscart/Shipping";
    import IUserData from "api/parser/cscart/UserData";
    import { ICartProduct } from "api/parser/cscart/CartProduct";
    import { ICheckoutGroupFactory } from "entities/cart/factories/checkoutGroupFactory";
    import { ICartFactory } from "entities/cart/factories/cartFactory";
    import { ITaxes } from "api/parser/cscart/Taxes";
    import { IFormSchemaFactory } from "entities/form/factories/formSchemaFactory";
    import { IFormSection } from "api/parser/cscart/FormSchema";
    export interface ICart {
        products: {
            [key: string]: ICartProduct;
        };
        shipping_cost: number;
        display_shipping_cost: number;
        tax_subtotal: number;
        discount: number;
        total: number;
        amount: number;
        original_subtotal: number;
        display_subtotal: number;
        subtotal: number;
        use_discount: boolean;
        company_shipping_failed: boolean;
        shipping_failed: boolean;
        stored_taxes: string;
        coupons: unknown;
        recalculate: boolean;
        calculate_shipping: boolean;
        free_shipping: unknown;
        options_style: string;
        shipping_required: boolean;
        product_groups: Array<ICheckoutGroup>;
        chosen_shipping: Array<string>;
        tax_summary: {
            included: number;
            added: number;
            total: number;
        };
        taxes: ITaxes;
        discounted_subtotal: number;
        user_data: IUserData;
        no_promotions: boolean;
        promotions: unknown;
        subtotal_discount: number;
        has_coupons: boolean;
        location_hash: string;
        payments: {
            [key: number]: IPayment;
        };
        checkout_fields: {
            [key: string]: IFormSection;
        };
    }
    export interface ICheckoutGroup {
        name: string;
        company_id: number;
        products: {
            [key: string]: any;
        };
        all_edp_free_shipping: boolean;
        all_free_shipping: boolean;
        free_shipping: boolean;
        shipping_no_required: boolean;
        shippings: {
            [key: number]: IShipping & {
                [key: string]: any;
            };
        };
    }
    type ICartResponse = ICart;
    export default ICartResponse;
    export const castCart: (cart: ICart) => Promise<ICartFactory>;
    export const castCheckoutGroup: (groupProduct: ICheckoutGroup) => Promise<ICheckoutGroupFactory>;
    export const castCheckoutFormSchemaFromCart: (data: ICart) => Promise<IFormSchemaFactory>;
}
declare module "api/parser/cscart/Block" {
    import { IBlockFactory } from "entities/layout/factories/blockFactory";
    export interface IBlock {
        grid_id: string;
        block_id: string;
        object_id: string;
        object_type: string;
        object_ids: unknown;
        snapping_id: string;
        wrapper: string;
        user_class: string;
        order: string;
        status: string;
        type: string;
        properties: {
            template: string;
            hide_block_name: string;
            [key: string]: string;
        };
        content?: any;
        company_id: string;
        storefront_id: string;
        lang_code: string;
        name: string;
        items_array: unknown;
        items_count: number;
        availability: {
            phone: boolean;
            tablet: boolean;
            desktop: boolean;
        };
        container: string;
        logo?: {
            url: string;
        };
    }
    export const castBlock: (block: IBlock) => Promise<IBlockFactory>;
}
declare module "api/parser/cscart/Layout" {
    import { IBlock } from "api/parser/cscart/Block";
    import { ILayoutFactory } from "entities/layout/factories/layoutFactory";
    import LayoutTypes from "constants/LayoutTypes";
    export interface ILayout {
        [ket: number]: IBlock;
        type: LayoutTypes;
    }
    type ILayoutResponse = ILayout;
    export default ILayoutResponse;
    export const castLayout: (layout: ILayoutResponse) => Promise<ILayoutFactory>;
}
declare module "entities/filter/factories/filterFactory" {
    import Filter from "entities/filter/Filter";
    import FilterTypes from "constants/FilterTypes";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface IFilterFactory extends IEntityExtendable {
        id: number;
        name: string;
        type: FilterTypes;
        content: any;
    }
    const createFilter: (filterData: IFilterFactory) => Promise<Filter>;
    export default createFilter;
}
declare module "entities/product/factories/productSelectionFactory" {
    import ProductSelection from "entities/product/ProductSelection";
    import { IProductFactory } from "entities/product/factories/productFactory";
    import { IPaginationFactory } from "entities/selection/factories/paginationFactory";
    import { ISortingFactory } from "entities/selection/factories/sortingFactory";
    import { IFilterFactory } from "entities/filter/factories/filterFactory";
    export interface IProductSelectionFactory {
        filters: Array<IFilterFactory>;
        search?: string;
        products: Array<IProductFactory>;
        pagination?: IPaginationFactory;
        sorting: ISortingFactory;
        filterHashes?: string;
    }
    const createProductSelection: (selectionData: IProductSelectionFactory) => Promise<ProductSelection>;
    export default createProductSelection;
}
declare module "entities/filter/IFilterVariant" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { IExtra } from "entities/IExtra";
    interface IFilterVariant<T extends IExtra = any> extends IEntityExtendable<T> {
        id: number;
        position: number;
        name: string;
        disabled: boolean;
    }
    export default IFilterVariant;
}
declare module "entities/filter/FilterVariant" {
    import { IExtra } from "entities/IExtra";
    import IFilterVariant from "entities/filter/IFilterVariant";
    /**
     * Variant for Product Filter Entity
     */
    class FilterVariant<T extends IExtra = any> {
        id: number;
        position: number;
        name: string;
        disabled: boolean;
        extra: T;
        constructor(variant: IFilterVariant<T>);
    }
    export default FilterVariant;
}
declare module "entities/filter/factories/filterVariantFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import FilterVariant from "entities/filter/FilterVariant";
    export interface IFilterVariantFactory extends IEntityExtendable {
        id: number;
        position: number;
        name: string;
        disabled: boolean;
    }
    const createFilterVariant: (variantData: IFilterVariantFactory) => Promise<FilterVariant>;
    export default createFilterVariant;
}
declare module "api/parser/cscart/Filter" {
    import { IFilterFactory } from "entities/filter/factories/filterFactory";
    export interface IFilter {
        feature_id: string;
        filter_id: string;
        field_type: string;
        round_to: string;
        display: string;
        display_count: string;
        filter: string;
        feature_type: string;
        filter_style: string;
        prefix: string;
        suffix: string;
        min?: number;
        max?: number;
        extra: string;
        slider?: boolean;
        disable?: boolean;
        variants?: Array<IFilterVariant>;
        selected_variants?: Array<IFilterVariant>;
    }
    export interface IFilterVariant {
        variant_id: number;
        variant: string;
        position: string;
        color: unknown;
        disabled?: boolean;
    }
    export const castFilter: (filter: IFilter) => Promise<IFilterFactory>;
}
declare module "api/parser/cscart/Products" {
    import { IProduct } from "api/parser/cscart/Product";
    import { IProductSelectionFactory } from "entities/product/factories/productSelectionFactory";
    import { IFilter } from "api/parser/cscart/Filter";
    interface IProductsResponse {
        products: Array<IProduct>;
        params: {
            page: number;
            items_per_page: number;
            sort_order: 'asc' | 'desc';
            sort_by: string;
            total_items: string;
            q?: string;
            features_hash?: string;
        };
        filters: Array<IFilter>;
    }
    export default IProductsResponse;
    export const castProductSelection: (productsResponse: IProductsResponse) => Promise<IProductSelectionFactory>;
}
declare module "api/parser/cscart/Article" {
    import { IArticleFactory } from "entities/article/factories/articleFactory";
    import { IImage } from "api/parser/cscart/Image";
    export interface IArticle {
        page_id: string;
        company_id: string;
        parent_id: string;
        id_path: string;
        status: string;
        page_type: string;
        position: string;
        timestamp: string;
        usergroup_ids: string;
        localization: string;
        new_window: string;
        use_avail_period: string;
        avail_from_timestamp: string;
        avail_till_timestamp: string;
        lang_code: string;
        page: string;
        description: string;
        meta_keywords: string;
        meta_description: string;
        page_title: string;
        link: string;
        seo_name: string;
        seo_path: string;
        level: number;
        main_pair: IImage | Array<IImage>;
        author: string;
        pages: Array<IParentArticle>;
    }
    interface IParentArticle {
        page_id: string;
        page: string;
        seo_key: string;
        pages?: Array<IParentArticle>;
    }
    export const castArticle: (article: IArticle) => Promise<IArticleFactory>;
}
declare module "entities/article/factories/articleSelectionFactory" {
    import ArticleSelection from "entities/article/ArticleSelection";
    import { IArticleFactory } from "entities/article/factories/articleFactory";
    import { IPaginationFactory } from "entities/selection/factories/paginationFactory";
    import { ISortingFactory } from "entities/selection/factories/sortingFactory";
    export interface IArticleSelectionFactory {
        search?: string;
        articles: Array<IArticleFactory>;
        pagination?: IPaginationFactory;
        sorting: ISortingFactory;
    }
    const createArticleSelection: (selectionData: IArticleSelectionFactory) => Promise<ArticleSelection>;
    export default createArticleSelection;
}
declare module "api/parser/cscart/Articles" {
    import { IArticle } from "api/parser/cscart/Article";
    import { IArticleSelectionFactory } from "entities/article/factories/articleSelectionFactory";
    export interface IArticlesResponse {
        pages: Array<IArticle>;
        params: {
            page: number;
            items_per_page: number;
            sort_order: 'asc' | 'desc';
            sort_by: string;
            total_items: string;
            q?: string;
        };
    }
    export const castArticleSelection: (articlesResponse: IArticlesResponse) => Promise<IArticleSelectionFactory>;
    export default IArticlesResponse;
}
declare module "api/parser/cscart/Category" {
    import { ICategoryFactory } from "entities/category/factories/categoryFactory";
    import { IImage } from "api/parser/cscart/Image";
    export interface ICategory {
        category_id: string;
        parent_id: string;
        id_path: string;
        category: string;
        position: string;
        status: string;
        seo_name: string;
        seo_path: string;
        level: string;
        company_id?: string;
        usergroup_ids?: string;
        product_count?: string;
        timestamp?: string;
        is_op?: string;
        localization?: string;
        age_verification?: string;
        age_limit?: string;
        parent_age_verification?: string;
        parent_age_limit?: string;
        selected_views?: unknown;
        default_view?: string;
        product_details_view?: string;
        product_columns?: string;
        is_trash?: string;
        lang_code?: string;
        description?: string;
        meta_keywords?: string;
        meta_description?: string;
        page_title?: string;
        age_warning_message?: string;
        main_pair?: IImage | [];
        selected_layouts?: unknown;
        default_layout?: string;
        product_details_layout?: string;
        subcategories?: Array<ICategory>;
        categories?: Array<IParentCategory>;
    }
    type ICategoryResponse = ICategory;
    export default ICategoryResponse;
    interface IParentCategory {
        category_id: string;
        category: string;
        seo_key: string;
        categories: Array<IParentCategory>;
    }
    export const castCategory: (category: ICategory) => Promise<ICategoryFactory>;
}
declare module "entities/currency/factories/currencyFactory" {
    import Currency from "entities/currency/Currency";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ICurrencyFactory extends IEntityExtendable {
        rate: number;
        code: string;
        decimals: number;
        name: string;
        symbol: string;
        symbolPosition: 'before' | 'after';
        isBase: boolean;
        position: number;
    }
    const createCurrency: (currency: ICurrencyFactory) => Promise<Currency>;
    export default createCurrency;
}
declare module "api/parser/cscart/Currency" {
    import { ICurrencyFactory } from "entities/currency/factories/currencyFactory";
    export interface ICurrency {
        after: string;
        coefficient: string;
        currency_code: string;
        currency_id: string;
        decimals: string;
        decimals_separator: string;
        description: string;
        is_primary: string;
        position: string;
        status: string;
        symbol: string;
        thousands_separator: string;
    }
    export const castCurrency: (currency: ICurrency) => Promise<ICurrencyFactory>;
}
declare module "entities/language/factories/languageFactory" {
    import Language from "entities/language/Language";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    export interface ILanguageFactory extends IEntityExtendable {
        countryCode: string;
        direction: 'ltr' | 'rtl';
        code: string;
        name: string;
    }
    const createLanguage: (language: ILanguageFactory) => Promise<Language>;
    export default createLanguage;
}
declare module "api/parser/cscart/Language" {
    import { ILanguageFactory } from "entities/language/factories/languageFactory";
    export interface ILanguage {
        country_code: string;
        direction: 'ltr' | 'rtl';
        lang_code: string;
        lang_id: string;
        name: string;
        status: string;
    }
    export const castLanguage: (language: ILanguage) => Promise<ILanguageFactory>;
}
declare module "entities/settings/factories/settingsFactory" {
    import Settings from "entities/settings/Settings";
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import { ICurrencyFactory } from "entities/currency/factories/currencyFactory";
    import { ILanguageFactory } from "entities/language/factories/languageFactory";
    export interface ISettingsFactory extends IEntityExtendable {
        currencies: Array<ICurrencyFactory>;
        languages: Array<ILanguageFactory>;
        properties: any;
    }
    const createSettings: (settings: ISettingsFactory) => Promise<Settings>;
    export default createSettings;
}
declare module "api/parser/cscart/Settings" {
    import { ISettingsFactory } from "entities/settings/factories/settingsFactory";
    import { ICurrency } from "api/parser/cscart/Currency";
    import { ILanguage } from "api/parser/cscart/Language";
    export interface ISettings {
        active_addons: Array<string>;
        currencies: Array<ICurrency>;
        languages: Array<ILanguage>;
        properties: {
            hybrid_auth_providers: Array<unknown>;
        };
        settings: {
            company_address: string;
            company_city: string;
            company_country: string;
            company_name: string;
            company_newsletter_email: string;
            company_orders_department: string;
            company_phone: string;
            company_phone_2: string;
            company_site_administrator: string;
            company_start_year: string;
            company_state: string;
            company_support_department: string;
            company_users_department: string;
            company_website: string;
            company_zipcode: string;
        };
        status: string;
        url: string;
    }
    export const castSettings: (settings: ISettings) => Promise<ISettingsFactory>;
}
declare module "api/parser/cscart/index" {
    import INotificationResponse from "api/parser/cscart/EntityNotification";
    import EntityNotification from "entities/notifications/EntityNotification";
    import IOrdersResponse from "api/parser/cscart/Orders";
    import OrderSelection from "entities/order/OrderSelection";
    import IOrderResponse from "api/parser/cscart/Order";
    import Order from "entities/order/Order";
    import ICartResponse from "api/parser/cscart/Cart";
    import Cart from "entities/cart/Cart";
    import UserData from "entities/cart/UserData";
    import Layout from "entities/layout/Layout";
    import ILayoutResponse from "api/parser/cscart/Layout";
    import IProductResponse from "api/parser/cscart/Product";
    import Product from "entities/product/Product";
    import IProductsResponse from "api/parser/cscart/Products";
    import ProductSelection from "entities/product/ProductSelection";
    import { IArticle } from "api/parser/cscart/Article";
    import Article from "entities/article/Article";
    import ArticleSelection from "entities/article/ArticleSelection";
    import IArticlesResponse from "api/parser/cscart/Articles";
    import Category from "entities/category/Category";
    import ICategoryResponse from "api/parser/cscart/Category";
    import { ICurrency } from "api/parser/cscart/Currency";
    import Currency from "entities/currency/Currency";
    import Language from "entities/language/Language";
    import { ILanguage } from "api/parser/cscart/Language";
    import { ISettings } from "api/parser/cscart/Settings";
    import Settings from "entities/settings/Settings";
    import FormSchema from "entities/form/FormSchema";
    const parser: {
        extractEntityNotifications(data: INotificationResponse): EntityNotification[];
        extractSignupForm(data: any): Promise<FormSchema>;
        extractCheckoutForm(data: any): Promise<FormSchema>;
        extractCheckoutFormFromCart(data: any): Promise<FormSchema>;
        extractProfileUpdateForm(data: any): Promise<FormSchema>;
        extractOrders(data: IOrdersResponse): Promise<OrderSelection>;
        extractOrder(data: IOrderResponse): Promise<Order>;
        extractCart(data: ICartResponse): Promise<Cart>;
        extractCheckoutCustomerInformation(data: ICartResponse): Promise<UserData>;
        extractLayout(data: ILayoutResponse): Promise<Layout>;
        extractCategory(data: ICategoryResponse): Promise<Category>;
        extractProduct(data: IProductResponse): Promise<Product>;
        extractProducts(data: IProductsResponse): Promise<ProductSelection>;
        extractArticle(data: IArticle): Promise<Article>;
        extractArticles(data: IArticlesResponse): Promise<ArticleSelection>;
        extractCurrency(data: ICurrency): Promise<Currency>;
        extractLanguage(data: ILanguage): Promise<Language>;
        extractSettings(data: ISettings): Promise<Settings>;
    };
    export default parser;
}
declare module "api/parser/Parser" {
    import parser from "api/parser/cscart/index";
    export default parser;
}
declare module "redux/reducers/auth/Auth" {
    import { AuthAction } from "redux/actions/auth/AuthAction";
    import IAuthState from "redux/reducers/auth/IAuthState";
    export const initialState: IAuthState;
    const Auth: (state: IAuthState | undefined, action: AuthAction) => IAuthState;
    export default Auth;
}
declare module "redux/reducers/navigation-bar/navigationBarInitialState" {
    const navigationBarInitialState: {
        type: {
            isPageState: boolean;
            isActionState: boolean;
            isContextState: boolean;
        };
        actions: never[];
    };
    export default navigationBarInitialState;
}
declare module "redux/reducers/navigation-bar/NavigationBarReducer" {
    import { INavigationBarState } from "redux/reducers/navigation-bar/INavigationBarState";
    import { NavigationBarAction } from "redux/actions/navigation-bar/NavigationBarAction";
    const NavigationBarReducer: (state: INavigationBarState | undefined, action: NavigationBarAction) => INavigationBarState;
    export default NavigationBarReducer;
}
declare module "redux/reducers/Article" {
    import { ArticleAction } from "redux/actions/article/ArticleAction";
    import ArticleState from "redux/types/ArticleState";
    export const initialState: ArticleState;
    const Article: (state: ArticleState | undefined, action: ArticleAction) => ArticleState;
    export default Article;
}
declare module "redux/reducers/Cart" {
    import { CartAction } from "redux/actions/cart/CartAction";
    import CartState from "redux/types/CartState";
    import { OrderAction } from "redux/actions/index";
    export const initialState: CartState;
    const Cart: (state: CartState | undefined, action: CartAction | OrderAction) => CartState;
    export default Cart;
}
declare module "redux/reducers/Wishlist" {
    import { WishlistAction } from "redux/actions/Wishlist";
    import WishlistState from "redux/types/WishlistState";
    export const initialState: WishlistState;
    const Wishlist: (state: WishlistState | undefined, action: WishlistAction) => WishlistState;
    export default Wishlist;
}
declare module "redux/reducers/Ui" {
    import { UiAction } from "redux/actions/Ui";
    import UiState from "redux/types/UiState";
    export const initialState: UiState;
    const Ui: (state: UiState | undefined, action: UiAction) => UiState;
    export default Ui;
}
declare module "redux/reducers/Layouts" {
    import { LayoutsAction } from "redux/actions/layout/LayoutAction";
    import LayoutsState from "redux/types/LayoutsState";
    export const initialState: LayoutsState;
    const Layouts: (state: LayoutsState | undefined, action: LayoutsAction) => LayoutsState;
    export default Layouts;
}
declare module "redux/reducers/Category" {
    import { CategoryAction } from "redux/actions/category/CategoryAction";
    import CategoryState from "redux/types/CategoryState";
    import { ProductAction } from "redux/actions/index";
    export const initialState: CategoryState;
    const Category: (state: CategoryState | undefined, action: CategoryAction | ProductAction) => CategoryState;
    export default Category;
}
declare module "redux/reducers/product/Product" {
    import { ProductAction } from "redux/actions/product/ProductAction";
    import ProductState from "redux/reducers/product/IProductState";
    export const initialState: ProductState;
    const ProductReducer: (state: ProductState | undefined, action: ProductAction) => ProductState;
    export default ProductReducer;
}
declare module "redux/reducers/Orders" {
    import { OrderAction } from "redux/actions/Order";
    import OrdersState from "redux/types/OrdersState";
    export const initialState: OrdersState;
    const Orders: (state: OrdersState | undefined, action: OrderAction) => OrdersState;
    export default Orders;
}
declare module "redux/reducers/Order" {
    import { OrderAction } from "redux/actions/Order";
    import OrderState from "redux/types/OrderState";
    export const initialState: OrderState;
    const Orders: (state: OrderState | undefined, action: OrderAction) => OrderState;
    export default Orders;
}
declare module "redux/selectors/Review" {
    import { StoreState } from "redux/types/index";
    import ReviewsThread from "entities/testimonial/ReviewsThread";
    import TestimonialDraft from "entities/testimonial/TestimonialDraft";
    import ReviewableEntities from "constants/ReviewableEntities";
    import Product from "entities/product/Product";
    import ApiError from "entities/error/ApiError";
    export const getReviewThreadBy: (state: StoreState | StoreState['Review'], props: {
        id: number;
        type: ReviewableEntities;
    }) => ReviewsThread | undefined;
    export const getReviewThreadByProduct: (state: StoreState, product?: Product<any> | undefined) => ReviewsThread | undefined;
    export const getReviewDraftBy: (state: StoreState, props: {
        id: number;
        type: ReviewableEntities;
    }) => TestimonialDraft | undefined;
    export const isRequesting: (state: StoreState, props: {
        id: number;
        type: ReviewableEntities;
    }) => boolean;
    export const getReviewErrorBy: (state: StoreState, props: {
        id: number;
        type: ReviewableEntities;
    }) => ApiError | undefined;
    export const getIsSuccessBy: (state: StoreState, props: {
        id: number;
        type: ReviewableEntities;
    }) => boolean;
}
declare module "redux/reducers/Review" {
    import { ReviewAction } from "redux/actions/Review";
    import ReviewState from "redux/types/ReviewState";
    export const initialState: ReviewState;
    const Review: (state: ReviewState | undefined, action: ReviewAction) => ReviewState;
    export default Review;
}
declare module "utils/string/getSearchStringFromQuery" {
    /**
     * Extract q param from query string
     *
     * @param query
     *
     * @returns string
     *
     * getSearchStringFromQuery('q=acer&sortBy=product&order=asc&filters=10-91-129);
     * // outputs acer
     */
    const getSearchStringFromQuery: (query: string) => string;
    export default getSearchStringFromQuery;
}
declare module "redux/reducers/search/Search" {
    import { SearchAction } from "redux/actions/Search";
    import SearchState from "redux/types/SearchState";
    import { ProductAction } from "redux/actions/index";
    export const initialState: SearchState;
    const Search: (state: SearchState | undefined, action: SearchAction | ProductAction) => SearchState;
    export default Search;
}
declare module "redux/reducers/notification/Notification" {
    import INotificationState from "redux/reducers/notification/INotificationState";
    import { NotificationAction } from "redux/actions/notification/NotificationAction";
    export const initialState: INotificationState;
    const Notifications: (state: INotificationState | undefined, action: NotificationAction) => INotificationState;
    export default Notifications;
}
declare module "redux/reducers/action-banners/actionBannersInitialState" {
    const actionBannersInitialState: {
        banners: never[];
    };
    export default actionBannersInitialState;
}
declare module "redux/reducers/action-banners/ActionBannersReducer" {
    import { IActionBannersState } from "redux/reducers/action-banners/IActionBannersState";
    import { ActionBannersAction } from "redux/actions/action-banners/ActionBannersAction";
    const ActionBannersReducer: (state: IActionBannersState | undefined, action: ActionBannersAction) => IActionBannersState;
    export default ActionBannersReducer;
}
declare module "redux/reducers/index" {
    export const rootReducer: {
        Auth: (state: import("redux/reducers/auth/IAuthState").default | undefined, action: import("redux/actions").AuthAction) => import("redux/reducers/auth/IAuthState").default;
        NavigationBar: (state: import("redux/reducers/navigation-bar/INavigationBarState").INavigationBarState | undefined, action: import("redux/actions").NavigationBarAction) => import("redux/reducers/navigation-bar/INavigationBarState").INavigationBarState;
        Article: (state: import("redux/types/ArticleState").default | undefined, action: import("redux/actions").ArticleAction) => import("redux/types/ArticleState").default;
        Cart: (state: import("redux/types/CartState").default | undefined, action: import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | import("redux/actions").RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | import("redux/actions").SetUserData | import("redux/actions").SetCheckoutForm | import("redux/actions").RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid | import("redux/actions").RequestOrderCreate | import("redux/actions").RequestOrderCreateSuccess | import("redux/actions").RequestOrderCreateFailure | import("redux/actions").RequestOrders | import("redux/actions").RequestOrdersSuccess | import("redux/actions").RequestOrdersFailure | import("redux/actions").DbRequestOrders | import("redux/actions").DbRequestOrdersSuccess | import("redux/actions").DbRequestOrdersFailure | import("redux/actions").RequestOrder | import("redux/actions").RequestOrderSuccess | import("redux/actions").RequestOrderFailure | import("redux/actions").DbRequestOrder | import("redux/actions").DbRequestOrderSuccess | import("redux/actions").DbRequestOrderFailure | import("redux/actions").RequestSettlementCreate | import("redux/actions").RequestSettlementCreateSuccess | import("redux/actions").RequestSettlementCreateFailure | import("redux/actions").RequestOnlinePayment | import("redux/actions").RequestOnlinePaymentSuccess | import("redux/actions").RequestOnlinePaymentFailure | import("redux/actions").RequestOnlinePaymentResult | import("redux/actions").RequestOnlinePaymentResultSuccess | import("redux/actions").RequestOnlinePaymentResultFailure) => import("redux/types/CartState").default;
        Wishlist: (state: import("redux/types/WishlistState").default | undefined, action: import("redux/actions").WishlistAction) => import("redux/types/WishlistState").default;
        Ui: (state: import("redux/types/UiState").default | undefined, action: import("redux/actions").UiAction) => import("redux/types/UiState").default;
        Layouts: (state: import("redux/types/LayoutsState").default | undefined, action: import("redux/actions").LayoutsAction) => import("redux/types/LayoutsState").default;
        Category: (state: import("redux/types/CategoryState").default | undefined, action: import("redux/actions").RequestCategory | import("redux/actions").RequestCategorySuccess | import("redux/actions").RequestCategoryFailure | import("redux/actions").DbRequestCategory | import("redux/actions").DbRequestCategorySuccess | import("redux/actions").DbRequestCategoryFailure | import("redux/actions").SetCurrentCategory | import("redux/actions").SetCategoryIsRequesting | import("redux/actions").RequestProduct | import("redux/actions").RequestProductSuccess | import("redux/actions").RequestProductFailure | import("redux/actions").DbRequestProduct | import("redux/actions").DbRequestProductSuccess | import("redux/actions").DbRequestProductFailure | import("redux/actions").RequestCategoryProducts | import("redux/actions").RequestCategoryProductsSuccess | import("redux/actions").RequestCategoryProductsFailure | import("redux/actions").DbRequestCategoryProducts | import("redux/actions").DbRequestCategoryProductsSuccess | import("redux/actions").DbRequestCategoryProductsFailure | import("redux/actions").SetCurrentProduct | import("redux/actions").RequestSearchProducts | import("redux/actions").RequestSearchProductsSuccess | import("redux/actions").RequestSearchProductsFailure | import("redux/actions").SetProductIsRequesting) => import("redux/types/CategoryState").default;
        Product: (state: import("redux/reducers/product/IProductState").default | undefined, action: import("redux/actions").ProductAction) => import("redux/reducers/product/IProductState").default;
        Orders: (state: import("redux/types/OrdersState").default | undefined, action: import("redux/actions").OrderAction) => import("redux/types/OrdersState").default;
        Order: (state: import("redux/types/OrderState").default | undefined, action: import("redux/actions").OrderAction) => import("redux/types/OrderState").default;
        Review: (state: import("redux/types/ReviewState").default | undefined, action: import("redux/actions").ReviewAction) => import("redux/types/ReviewState").default;
        Search: (state: import("redux/types/SearchState").default | undefined, action: import("redux/actions").RequestProduct | import("redux/actions").RequestProductSuccess | import("redux/actions").RequestProductFailure | import("redux/actions").DbRequestProduct | import("redux/actions").DbRequestProductSuccess | import("redux/actions").DbRequestProductFailure | import("redux/actions").RequestCategoryProducts | import("redux/actions").RequestCategoryProductsSuccess | import("redux/actions").RequestCategoryProductsFailure | import("redux/actions").DbRequestCategoryProducts | import("redux/actions").DbRequestCategoryProductsSuccess | import("redux/actions").DbRequestCategoryProductsFailure | import("redux/actions").SetCurrentProduct | import("redux/actions").RequestSearchProducts | import("redux/actions").RequestSearchProductsSuccess | import("redux/actions").RequestSearchProductsFailure | import("redux/actions").SetProductIsRequesting | import("redux/actions").PerformSearch | import("redux/actions").OpenSearchAutocomplete | import("redux/actions").CloseSearchAutocomplete) => import("redux/types/SearchState").default;
        Notification: (state: import("redux/reducers/notification/INotificationState").default | undefined, action: import("redux/actions").NotificationAction) => import("redux/reducers/notification/INotificationState").default;
        ActionBanners: (state: import("redux/reducers/action-banners/IActionBannersState").IActionBannersState | undefined, action: import("redux/actions").ActionBannersAction) => import("redux/reducers/action-banners/IActionBannersState").IActionBannersState;
    };
}
declare module "redux/store/initialState" {
    export const initialState: {
        Auth: import("redux/reducers/auth/IAuthState").default;
        NavigationBar: {
            type: {
                isPageState: boolean;
                isActionState: boolean;
                isContextState: boolean;
            };
            actions: never[];
        };
        Article: import("redux/types/ArticleState").default;
        Cart: import("redux/types/CartState").default;
        Wishlist: import("redux/types/WishlistState").default;
        Ui: import("redux/types/UiState").default;
        Layouts: import("redux/types/LayoutsState").default;
        Category: import("redux/types/CategoryState").default;
        Product: import("redux/reducers/product/IProductState").default;
        Orders: import("redux/types/OrdersState").default;
        Order: import("redux/types/OrderState").default;
        Review: import("redux/types/ReviewState").default;
        Search: import("redux/types/SearchState").default;
        Notification: import("redux/reducers/notification/INotificationState").default;
        ActionBanners: {
            banners: never[];
        };
    };
}
declare module "redux/store/migrate" {
    const migrate: (state: Record<string, unknown>, version: number) => Record<string, unknown>;
    export const actualVersion: number;
    export default migrate;
}
declare module "redux/store/localStorage" {
    import { StoreState } from "redux/types/index";
    export const loadState: (initialState: StoreState) => StoreState | undefined;
    export const saveState: <T extends Record<string, unknown>>(state: T) => void;
}
declare module "redux/rehydrate/Wishlist" {
    import WishlistState from "redux/types/WishlistState";
    const rehydrateWishlist: (state: WishlistState) => WishlistState;
    export default rehydrateWishlist;
}
declare module "redux/rehydrate/Layouts" {
    import LayoutsState from "redux/types/LayoutsState";
    const rehydrateLayouts: (state: LayoutsState) => LayoutsState;
    export default rehydrateLayouts;
}
declare module "redux/rehydrate/Cart" {
    import CartState from "redux/types/CartState";
    const rehydrateCart: (state: CartState) => CartState;
    export default rehydrateCart;
}
declare module "redux/rehydrate/Ui" {
    import UiState from "redux/types/UiState";
    const rehydrateLayouts: (state: UiState) => UiState;
    export default rehydrateLayouts;
}
declare module "redux/rehydrate/Notification" {
    import INotificationState from "redux/reducers/notification/INotificationState";
    const rehydrateNotification: (state: INotificationState) => INotificationState;
    export default rehydrateNotification;
}
declare module "redux/rehydrate/Auth" {
    import AuthState from "redux/reducers/auth/IAuthState";
    export const rehydrateAuth: (state: AuthState) => AuthState;
}
declare module "redux/rehydrate/index" {
    import { StoreState } from "redux/types/index";
    /**
     * Restore types after JSON unserialize
     * @param state - redux unserialized state object
     */
    const rehydrate: (state?: StoreState | undefined) => StoreState | undefined;
    export default rehydrate;
}
declare module "db/models/Layout" {
    import Layout from "entities/layout/Layout";
    import LayoutTypes from "constants/LayoutTypes";
    /**
     * Saves a layout to indexedDB
     *
     * @param {Layout} layout
     *
     * @returns {void}
     */
    export const persistLayout: (layout: Layout) => Promise<string>;
    /**
     * Get a layout from indexedDB by type
     *
     * @param {LayoutTypes} type
     *
     * @returns {Promise<Layout>}
     */
    export const findLayout: (type: LayoutTypes) => Promise<Layout | undefined>;
    /**
     * Get default layout from indexedDB
     *
     * @returns {Promise<Layout>}
     */
    export const findDefaultLayout: () => Promise<Layout | undefined>;
}
declare module "db/models/index" {
    import * as products from "db/models/Product";
    import * as categories from "db/models/Category";
    import * as articles from "db/models/Article";
    import * as layouts from "db/models/Layout";
    import * as orders from "db/models/Order";
    const indexedDb: {
        products: typeof products;
        categories: typeof categories;
        articles: typeof articles;
        layouts: typeof layouts;
        orders: typeof orders;
    };
    export default indexedDb;
}
declare module "api/Auth" {
    /**
     * Request api for login
     *
     * @param {string} email
     * @param {string} password
     */
    export const login: (email: string, password: string) => import("axios").AxiosPromise<any>;
    /**
     * Request api for login with restore token
     *
     * @param {string} token
     */
    export const loginWithRestoreToken: (token: string) => import("axios").AxiosPromise<any>;
    /**
     * Request api for password restoration
     *
     * @param {string} email
     */
    export const restorePassword: (email: string) => import("axios").AxiosPromise<any>;
    /**
     * Request api for oauth login
     *
     * @param {string} provider
     * @param {string} tokenId
     * @param {string} clientId
     */
    export const socialLogin: (provider: string, tokenId: string, clientId: string) => import("axios").AxiosPromise<any>;
    /**
     * Set user token for auth requests
     *
     * @param {string} token
     */
    export const setToken: (token: string) => void;
    /**
     * Set user token for auth requests
     *
     * @param {string} token
     */
    export const setGuestToken: (token: string) => void;
}
declare module "api/Cart" {
    import IAddToCart from "entities/cart/IAddToCart";
    import AddToCart from "entities/cart/AddToCart";
    export const getCart: (chosenShippings: Array<any>) => import("axios").AxiosPromise<any>;
    export const add: (product: IAddToCart) => import("axios").AxiosPromise<any>;
    export const update: (cartId: string, addToCart: AddToCart) => import("axios").AxiosPromise<any>;
    export const remove: (cartId: string) => import("axios").AxiosPromise<any>;
    export const clear: () => import("axios").AxiosPromise<any>;
    export const saveUserData: (data: any) => import("axios").AxiosPromise<any>;
}
declare module "api/Product" {
    import ProductSelection from "entities/product/ProductSelection";
    export const getProduct: (productId: number, options?: any[] | undefined) => import("axios").AxiosPromise<any>;
    export const getProductsRequest: (productSelection?: ProductSelection | undefined) => import("cscart-sdk/dist/api-request/ProductsRequest").default;
    export const getProductsByCategory: (categoryId: number, productSelection?: ProductSelection | undefined) => Promise<any>;
    export const getProductsSearch: (productSelection?: ProductSelection | undefined) => import("axios").AxiosPromise<any>;
}
declare module "api/Category" {
    export const getCategory: (categoryId: number) => import("axios").AxiosPromise<any>;
}
declare module "api/Article" {
    import ArticleSelection from "entities/article/ArticleSelection";
    export const getArticle: (articleId: number) => import("axios").AxiosPromise<any>;
    export const getArticlesByParent: (parentId: number, articleSelection?: ArticleSelection | undefined) => Promise<any>;
}
declare module "api/Order" {
    import CartProduct from "entities/cart/CartProduct";
    import OrderSelection from "entities/order/OrderSelection";
    export const create: (orderData: {
        products: Array<CartProduct>;
        shippingIds: Array<number>;
        paymentId: number;
        couponCodes?: Array<string>;
        userData?: any;
        paymentInfo?: any;
    }) => import("axios").AxiosPromise<any>;
    export const getOrder: (orderId: number) => import("axios").AxiosPromise<any>;
    export const getOrders: (orderSelection?: OrderSelection | undefined) => Promise<any>;
}
declare module "api/Settlement" {
    export const create: (settlementData: any) => import("axios").AxiosPromise<any>;
    export const getForm: (orderId: number) => import("axios").AxiosPromise<any>;
    /**
     * Request final page for online payment to hook cscart logic
     *
     * @param url
     */
    export const hookUrl: (url: string) => import("axios").AxiosPromise<any>;
}
declare module "api/Settings" {
    export const get: () => import("axios").AxiosPromise<any>;
}
declare module "api/Testimonials" {
    import ReviewableEntities from "constants/ReviewableEntities";
    import ReviewSelection from "entities/testimonial/ReviewSelection";
    export const getReviewThread: (id: number, type: ReviewableEntities, selection?: ReviewSelection | undefined) => import("axios").AxiosPromise<any>;
    export const create: (id: number, type: ReviewableEntities, name: string, rating?: number | undefined, text?: string | undefined) => import("axios").AxiosPromise<any>;
}
declare module "api/Layouts" {
    import LayoutTypes from "constants/LayoutTypes";
    /**
     * Get layout from api by dispatch string
     *
     * @param {string|LayoutTypes} type
     * @param {string|undefined} slug
     */
    export const getLayout: (type: LayoutTypes, slug?: string | undefined) => import("axios").AxiosPromise<any>;
}
declare module "api/Notification" {
    /**
     * Get user notifications from api
     */
    export const getNotifications: () => import("axios").AxiosPromise<any>;
    /**
     * Mark notifications as read
     */
    export const markNotificationsAsRead: (time: Date) => import("axios").AxiosPromise<any>;
}
declare module "api/Profile" {
    export const getOrderForm: () => import("axios").AxiosPromise<any>;
    export const getSignupForm: () => import("axios").AxiosPromise<any>;
    export const getUpdateProfileForm: () => import("axios").AxiosPromise<any>;
    export const getProfile: () => import("axios").AxiosPromise<any>;
    export const createProfile: (profile: any) => import("axios").AxiosPromise<any>;
    export const updateProfile: (profileData: any) => import("axios").AxiosPromise<any>;
}
declare module "api/index" {
    import * as auth from "api/Auth";
    import * as cart from "api/Cart";
    import * as products from "api/Product";
    import * as categories from "api/Category";
    import * as articles from "api/Article";
    import * as orders from "api/Order";
    import * as settlements from "api/Settlement";
    import * as settings from "api/Settings";
    import * as testimonials from "api/Testimonials";
    import * as layouts from "api/Layouts";
    import * as notifications from "api/Notification";
    import * as profile from "api/Profile";
    const api: {
        auth: typeof auth;
        settings: typeof settings;
        cart: typeof cart;
        products: typeof products;
        categories: typeof categories;
        articles: typeof articles;
        testimonials: typeof testimonials;
        orders: typeof orders;
        settlements: typeof settlements;
        profile: typeof profile;
        layouts: typeof layouts;
        notifications: typeof notifications;
    };
    export default api;
}
declare module "utils/notifications/messages.messages" {
    const _default_18: {
        alt: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_18;
}
declare module "utils/notifications/messages" {
    import React from 'react';
    import ToastType from 'react-toastify';
    import './messages.css';
    export interface INotificationProps {
        message: string;
    }
    /**
     * Component for custom notification layout
     */
    export const NotificationContent: React.FC<INotificationProps>;
    export const defaults: {
        position: ToastType.ToastPosition;
        autoClose: number;
        className: string;
        rtl: boolean;
        closeButton: boolean;
    };
    export type messageType = 'info' | 'success' | 'warning' | 'error' | 'default';
    /**
     * Converts notification type to library type
     */
    export const convertType: (type: messageType) => ToastType.TypeOptions;
    /**
     * Function that display notification
     */
    export const showNotification: (message: string, type: messageType, id?: string | undefined) => void;
    export const showWarningMessage: (message: string, id?: string | undefined) => void;
    export const showSuccessMessage: (message: string, id?: string | undefined) => void;
    export const showInformationMessage: (message: string, id?: string | undefined) => void;
}
declare module "redux/epics/IEpicDependencies" {
    import type api from "api/index";
    import db from "db/models/index";
    import intl from "intl/IntlGlobalProvider";
    import AuthProviders from "constants/AuthProviders";
    import parser from "api/parser/Parser";
    type IEpicDependencies<T extends Record<string, unknown> | unknown = unknown> = {
        api: typeof api;
        indexedDb: typeof db;
        intl: () => typeof intl;
        parser: typeof parser;
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    } & T;
    export default IEpicDependencies;
}
declare module "url/history" {
    const history: import("history").History<unknown>;
    export default history;
}
declare module "redux/epics/Auth.messages" {
    const _default_19: {
        sessionExpired: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_19;
}
declare module "utils/storage/BrowserStorage" {
    class BrowserStorage {
        storage: Storage;
        constructor(storage: Storage);
        get(key: string, now?: number): any | undefined;
        set(key: string, data: unknown, expiration?: number, createdAt?: number): void;
    }
    export default BrowserStorage;
}
declare module "utils/storage/session-storage/SessionStorage" {
    import BrowserStorage from "utils/storage/BrowserStorage";
    const SessionStorage: BrowserStorage;
    export default SessionStorage;
}
declare module "redux/epics/Auth" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import cscartApi from "api/index";
    import { AuthAction, AppAction, AppInit } from "redux/actions/index";
    import { RequestLoginSuccess, SetToken, RequestLogin, RequestSignupSuccess, RequestProfile, RequestSignup, Logout, RequestSocialLogin, RequestUpdateProfile, RequestRestorePassword, RequestLoginWithRestoreToken, LogoutSuccess } from "redux/actions/auth/AuthAction";
    import { StoreState } from "redux/types/index";
    import AuthProviders from "constants/AuthProviders";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    /**
     * Request api for login
     */
    export const requestLoginEpic: (action$: ActionsObservable<RequestLogin | RequestLoginWithRestoreToken>, state$: null, { api }: IEpicDependencies) => import("rxjs").Observable<RequestLoginSuccess | import("redux/actions").RequestLoginFailure>;
    /**
     * Side effects for success login
     */
    export const successLoginEpic: (action$: ActionsObservable<RequestSignupSuccess | RequestLoginSuccess | SetToken>, state$: null, { api }: IEpicDependencies) => import("rxjs").Observable<never>;
    /**
     * Set token on app init
     */
    export const setTokenOnInitEpic: (action$: ActionsObservable<AppAction>, state$: StateObservable<StoreState>) => import("rxjs").Observable<SetToken>;
    /**
     * Set Guest token on app init
     */
    export const setGuestTokenOnInitEpic: (action$: ActionsObservable<AppAction | LogoutSuccess>, state$: StateObservable<StoreState>, { api }: IEpicDependencies) => import("rxjs").Observable<never>;
    /**
     * Request profile on login or signup
     */
    export const mapActionsToRequestProfileEpic: (action$: ActionsObservable<AppInit | RequestLoginSuccess | RequestSignupSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<RequestProfile>;
    /**
     * Get user profile
     */
    export const requestUserProfileEpic: (action$: ActionsObservable<RequestProfile>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure>;
    /**
     * Request signup form from api
     */
    export const requestSignupFormEpic: (action$: ActionsObservable<AuthAction>, state$: StateObservable<StoreState>, { api, parser, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure>;
    /**
     * Request user`s profile update form from api
     */
    export const requestUpdateProfileFormEpic: (action$: ActionsObservable<AuthAction>, state$: StateObservable<StoreState>, { api, parser, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure>;
    /**
     * Request restore password
     */
    export const requestRestoreAccessEpic: (action$: ActionsObservable<RequestRestorePassword>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure>;
    /**
     * Request user`s profile update
     */
    export const requestUpdateProfileEpic: (action$: ActionsObservable<RequestUpdateProfile>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure>;
    /**
     * Request api for create profile
     */
    export const requestSignupEpic: (action$: ActionsObservable<RequestSignup>, state$: StateObservable<StoreState>, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<RequestSignupSuccess | import("redux/actions").RequestSignupFailure>;
    /**
     * Side effects on backend logout
     */
    export const apiLogoutEpic: (action$: null, state$: null, { intl }: IEpicDependencies) => import("rxjs").Observable<Logout>;
    /**
     * Reset token on logout action
     */
    export const logoutEpic: (action$: ActionsObservable<Logout>, state$: StateObservable<StoreState>, { asyncUtils: { handleThirdpartyLogout, }, }: {
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
        };
    }) => import("rxjs").Observable<LogoutSuccess | SetToken>;
    /**
     * Request api for verify oauth login
     */
    export const requestSocialLoginEpic: (action$: ActionsObservable<RequestSocialLogin>, state$: null, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<RequestLoginSuccess | import("redux/actions").RequestLoginFailure>;
    /**
     * Side effects to logout user from thirdparty services
     *
     * @param {AuthProviders|null} provider
     */
    export const handleThirdpartyLogout: (provider: AuthProviders | null) => Promise<unknown>;
    const _default_20: (((action$: ActionsObservable<RequestLogin | RequestLoginWithRestoreToken>, state$: null, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<RequestLoginSuccess | import("redux/actions").RequestLoginFailure>) | ((action$: ActionsObservable<RequestLoginSuccess | RequestSignupSuccess | SetToken>, state$: null, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<never>) | ((action$: ActionsObservable<AppInit>, state$: StateObservable<StoreState>) => import("rxjs").Observable<SetToken>) | ((action$: ActionsObservable<AppInit | LogoutSuccess>, state$: StateObservable<StoreState>, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<never>) | ((action$: ActionsObservable<AppInit | RequestLoginSuccess | RequestSignupSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<RequestProfile>) | ((action$: ActionsObservable<RequestProfile>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure>) | ((action$: ActionsObservable<AuthAction>, state$: StateObservable<StoreState>, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure>) | ((action$: ActionsObservable<AuthAction>, state$: StateObservable<StoreState>, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure>) | ((action$: ActionsObservable<RequestRestorePassword>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure>) | ((action$: ActionsObservable<RequestUpdateProfile>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure>) | ((action$: ActionsObservable<RequestSignup>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<RequestSignupSuccess | import("redux/actions").RequestSignupFailure>) | ((action$: null, state$: null, { intl }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<Logout>) | ((action$: ActionsObservable<Logout>, state$: StateObservable<StoreState>, { asyncUtils: { handleThirdpartyLogout, }, }: {
        asyncUtils: {
            handleThirdpartyLogout: (provider: AuthProviders | null) => any;
        };
    }) => import("rxjs").Observable<LogoutSuccess | SetToken>) | ((action$: ActionsObservable<RequestSocialLogin>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<RequestLoginSuccess | import("redux/actions").RequestLoginFailure>))[];
    export default _default_20;
}
declare module "redux/epics/Ui" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { AppAction, AppInit, RequestLoginSuccess, RequestSignupSuccess } from "redux/actions/index";
    import i from "intl/IntlGlobalProvider";
    import { RequestStoreSettings, RequestStoreSettingsSuccess, SetLanguage } from "redux/actions/Ui";
    import { StoreState } from "redux/types/index";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    /**
     * Request user permission for local notifications
     */
    export const checkNotificationsPermissionEpic: (action$: ActionsObservable<RequestLoginSuccess | RequestSignupSuccess>, state$: null, { asyncUtils: { requestNotificationPermission, }, }: {
        asyncUtils: {
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").SetNotificationPermission>;
    /**
     * Set language on init
     *
     * @param action$
     */
    export const setLanguageOnInitEpic: (action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").SetInitialLanguage>;
    /**
     * Application scheduler
     *
     * @param action$
     */
    export const setSchedulerOnInitEpic: (action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").SchedulerPerform>;
    /**
     * Side effects when service workers ready to update
     *
     * @param action$
     * @param state$
     * @param param2
     */
    export const readyToUpdateAppWithServiceWorkerEpic: (action$: null, state$: null, { intl }: {
        intl: () => typeof i;
    }) => import("rxjs").Observable<import("redux/actions").ReadyToUpdate>;
    /**
     * Side effects whe service workers updated
     *
     * @param action$
     * @param state$
     * @param param2
     */
    export const appIsUpdatedWithServiceWorkerEpic: () => import("rxjs").Observable<import("redux/actions").Updated>;
    /**
     * Get on load and keep actual settings from a store
     *
     * @param action$
     */
    export const requestStoreSettingsOnInitEpic: (action$: ActionsObservable<AppAction | SetLanguage>) => import("rxjs").Observable<RequestStoreSettings>;
    /**
     * Requests store settings from API
     */
    export const requestStoreSettingsEpic: (action$: ActionsObservable<RequestStoreSettings>, state$: null, { api, parser, }: IEpicDependencies) => import("rxjs").Observable<RequestStoreSettingsSuccess | import("redux/actions").RequestStoreSettingsFailure>;
    /**
     * Set currency if not selected
     * @param action$
     */
    export const setDefaultCurrencyInitEpic: (action$: ActionsObservable<RequestStoreSettingsSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<import("redux/actions").SetCurrency | {
        type: import("rxjs").Observable<never>;
    }>;
    export const requestNotificationPermission: (notification?: typeof Notification) => Promise<NotificationPermission>;
    const _default_21: (((action$: ActionsObservable<RequestLoginSuccess | RequestSignupSuccess>, state$: null, { asyncUtils: { requestNotificationPermission, }, }: {
        asyncUtils: {
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").SetNotificationPermission>) | ((action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").SetInitialLanguage>) | ((action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").SchedulerPerform>) | ((action$: null, state$: null, { intl }: {
        intl: () => import("react-intl").IntlShape;
    }) => import("rxjs").Observable<import("redux/actions").ReadyToUpdate>) | (() => import("rxjs").Observable<import("redux/actions").Updated>) | ((action$: ActionsObservable<AppInit | SetLanguage>) => import("rxjs").Observable<RequestStoreSettings>) | ((action$: ActionsObservable<RequestStoreSettings>, state$: null, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<RequestStoreSettingsSuccess | import("redux/actions").RequestStoreSettingsFailure>) | ((action$: ActionsObservable<RequestStoreSettingsSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<import("redux/actions").SetCurrency | {
        type: import("rxjs").Observable<never>;
    }>))[];
    export default _default_21;
}
declare module "redux/epics/cart/addToCartQueueOnLogin" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { RequestLoginSuccess } from "redux/actions/index";
    import { StoreState } from "redux/types/index";
    /**
     * Move 403 cart errors to additionQueue
     *
     * @param action$
     * @param state$
     */
    export const addToCartQueueOnLoginEpic: (action$: ActionsObservable<RequestLoginSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<import("redux/actions").MoveAuthErrorsToQueue>;
}
declare module "redux/epics/cart/Cart" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import db from "db/models/index";
    import cscartApi from "api/index";
    import { AppAction, UiAction, CartAction, AuthAction, OrderAction, AppInit } from "redux/actions/index";
    import Product from "entities/product/Product";
    import { SetUserData, RequestUpdateUserData, RequestClearCart } from "redux/actions/cart/CartAction";
    import { StoreState } from "redux/types/index";
    import CartActionTypes from "redux/actions/cart/CartActionTypes";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    /**
     * Map app init acton to request cart
     */
    export const requestCartOnInitEpic: (action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").RequestCart>;
    /**
     * Request cart from api
     */
    export const cartRequestEpic: (action$: ActionsObservable<CartAction>, state$: StateObservable<StoreState>, { api, parser, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserDataSuccess | import("redux/actions").SetCheckoutForm>;
    export const mapSetShippingMethodToCartRequest: (action$: ActionsObservable<CartAction>) => import("rxjs").Observable<import("redux/actions").RequestCart>;
    /**
     * Execute requests to add products to cart
     */
    export const executeAdditionQueueEpic: (action$: ActionsObservable<UiAction | CartAction | AuthAction>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromAddQueue | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors>;
    /**
     * Excecute requests to delete products from cart
     *
     * @param action$
     * @param state$
     */
    export const executeDeletionQueueEpic: (action$: ActionsObservable<UiAction | CartAction>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromDeleteQueue>;
    /**
     * Excecute requests to update products at cart
     *
     * @param action$
     * @param state$
     */
    export const executeUpdateQueueEpic: (action$: ActionsObservable<UiAction | CartAction>, state$: StateObservable<StoreState>, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToCartErrors>;
    /**
     * Handle actions that should trigger cart update
     */
    export const cartUpdateEpic: (action$: ActionsObservable<CartAction | AuthAction>) => import("rxjs").Observable<{
        type: CartActionTypes;
    }>;
    /**
     * Handle actions that should trigger cart clear
     */
    export const cartClearEpic: (action$: ActionsObservable<OrderAction>) => import("rxjs").Observable<RequestClearCart>;
    /**
     * Request api for cart clear
     */
    export const requestClearCartEpic: (action$: ActionsObservable<RequestClearCart>, state$: null, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<import("redux/actions").ClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure>;
    /**
     * Fill addition queue by Array<Product> to get possibility show this products at UI
     */
    export const fillAdditionQueueByProductsEpic: (action$: ActionsObservable<AppAction | CartAction>, state$: StateObservable<StoreState>, { indexedDb }: {
        indexedDb: typeof db;
    }) => import("rxjs").Observable<import("redux/actions").FillQueue>;
    /**
     * Fill error list by Array<Product> to get possibility show this products at UI
     */
    export const fillCartErrorListByProductsEpic: (action$: ActionsObservable<AppAction | CartAction>, state$: StateObservable<StoreState>, { indexedDb }: {
        indexedDb: typeof db;
    }) => import("rxjs").Observable<import("redux/actions").FillErrorProducts>;
    /**
     * Handle actions that should trigger cart reset
     */
    export const cartResetEpic: (action$: ActionsObservable<AuthAction>) => import("rxjs").Observable<import("redux/actions").ResetCartState>;
    /**
     * Request api to update user data at cart
     * if user data at redux state would update
     */
    export const requestUpdateUserDataOnStateChangeEpic: (action$: ActionsObservable<SetUserData>) => import("rxjs").Observable<RequestUpdateUserData>;
    /**
     * Send request to cart api to update user data
     */
    export const requestUpdateUserDataEpic: (action$: ActionsObservable<RequestUpdateUserData>, state$: StateObservable<StoreState>, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure>;
    const _default_22: (((action$: ActionsObservable<import("redux/actions").RequestLoginSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<import("redux/actions").MoveAuthErrorsToQueue>) | ((action$: ActionsObservable<AppInit>) => import("rxjs").Observable<import("redux/actions").RequestCart>) | ((action$: ActionsObservable<CartAction>, state$: StateObservable<StoreState>, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>; /**
             * Execute requests to add products to cart
             */
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserDataSuccess | import("redux/actions").SetCheckoutForm>) | ((action$: ActionsObservable<CartAction>) => import("rxjs").Observable<import("redux/actions").RequestCart>) | ((action$: ActionsObservable<import("redux/actions").RequestLogin | import("redux/actions").RequestLoginWithRestoreToken | import("redux/actions").RequestLoginSuccess | import("redux/actions").RequestLoginFailure | import("redux/actions").RequestSocialLogin | import("redux/actions").Logout | import("redux/actions").LogoutSuccess | import("redux/actions").RequestProfile | import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure | import("redux/actions").RequestSignup | import("redux/actions").RequestSignupSuccess | import("redux/actions").RequestSignupFailure | import("redux/actions").RequestSignupForm | import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure | import("redux/actions").RequestUpdateProfileForm | import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestUpdateProfile | import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure | import("redux/actions").RequestRestorePassword | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure | import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid | import("redux/actions").AcceptGdpr | import("redux/actions").SetNotificationPermission | import("redux/actions").ReadyToUpdate | import("redux/actions").Updated | import("redux/actions").SchedulerPerform | import("redux/actions").StartLoading | import("redux/actions").EndLoading | import("redux/actions").SetLanguage | import("redux/actions").SetInitialLanguage | import("redux/actions").SetCurrency | import("redux/actions").RequestStoreSettings | import("redux/actions").RequestStoreSettingsSuccess | import("redux/actions").RequestStoreSettingsFailure | import("redux/actions").OpenDrawer | import("redux/actions").CloseDrawer | import("redux/actions").CloseAllDrawers>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>; /**
             * Execute requests to add products to cart
             */
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromAddQueue | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors>) | ((action$: ActionsObservable<import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid | import("redux/actions").AcceptGdpr | import("redux/actions").SetNotificationPermission | import("redux/actions").ReadyToUpdate | import("redux/actions").Updated | import("redux/actions").SchedulerPerform | import("redux/actions").StartLoading | import("redux/actions").EndLoading | import("redux/actions").SetLanguage | import("redux/actions").SetInitialLanguage | import("redux/actions").SetCurrency | import("redux/actions").RequestStoreSettings | import("redux/actions").RequestStoreSettingsSuccess | import("redux/actions").RequestStoreSettingsFailure | import("redux/actions").OpenDrawer | import("redux/actions").CloseDrawer | import("redux/actions").CloseAllDrawers>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>; /**
             * Execute requests to add products to cart
             */
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromDeleteQueue>) | ((action$: ActionsObservable<import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid | import("redux/actions").AcceptGdpr | import("redux/actions").SetNotificationPermission | import("redux/actions").ReadyToUpdate | import("redux/actions").Updated | import("redux/actions").SchedulerPerform | import("redux/actions").StartLoading | import("redux/actions").EndLoading | import("redux/actions").SetLanguage | import("redux/actions").SetInitialLanguage | import("redux/actions").SetCurrency | import("redux/actions").RequestStoreSettings | import("redux/actions").RequestStoreSettingsSuccess | import("redux/actions").RequestStoreSettingsFailure | import("redux/actions").OpenDrawer | import("redux/actions").CloseDrawer | import("redux/actions").CloseAllDrawers>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>; /**
             * Execute requests to add products to cart
             */
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestCart | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToCartErrors>) | ((action$: ActionsObservable<import("redux/actions").RequestLogin | import("redux/actions").RequestLoginWithRestoreToken | import("redux/actions").RequestLoginSuccess | import("redux/actions").RequestLoginFailure | import("redux/actions").RequestSocialLogin | import("redux/actions").Logout | import("redux/actions").LogoutSuccess | import("redux/actions").RequestProfile | import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure | import("redux/actions").RequestSignup | import("redux/actions").RequestSignupSuccess | import("redux/actions").RequestSignupFailure | import("redux/actions").RequestSignupForm | import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure | import("redux/actions").RequestUpdateProfileForm | import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestUpdateProfile | import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure | import("redux/actions").RequestRestorePassword | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure | import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid>) => import("rxjs").Observable<{
        type: CartActionTypes;
    }>) | ((action$: ActionsObservable<OrderAction>) => import("rxjs").Observable<RequestClearCart>) | ((action$: ActionsObservable<RequestClearCart>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<import("redux/actions").ClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure>) | ((action$: ActionsObservable<AppInit | import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid>, state$: StateObservable<StoreState>, { indexedDb }: {
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
    }) => import("rxjs").Observable<import("redux/actions").FillQueue>) | ((action$: ActionsObservable<AppInit | import("redux/actions").RequestCart | import("redux/actions").RequestCartSuccess | import("redux/actions").RequestCartFailure | import("redux/actions").RequestUserData | import("redux/actions").RequestUserDataSuccess | import("redux/actions").RequestUserDataFailure | import("redux/actions").MoveAuthErrorsToQueue | import("redux/actions").AddToDeleteQueue | import("redux/actions").RemoveFromDeleteQueue | import("redux/actions").AddToUpdateQueue | import("redux/actions").RemoveFromUpdateQueue | import("redux/actions").AddToAddQueue | import("redux/actions").RemoveFromAddQueue | import("redux/actions").FillQueue | import("redux/actions").ClearQueue | import("redux/actions").RequestAddToCart | import("redux/actions").RequestAddToCartSuccess | import("redux/actions").RequestAddToCartFailure | import("redux/actions").ClearCart | RequestClearCart | import("redux/actions").RequestClearCartSuccess | import("redux/actions").RequestClearCartFailure | import("redux/actions").AddToCartErrors | import("redux/actions").RemoveFromCartErrors | import("redux/actions").FillErrorProducts | import("redux/actions").ResetCartState | import("redux/actions").SetShippingMethod | import("redux/actions").SetPaymentMethod | import("redux/actions").SetPaymentData | SetUserData | import("redux/actions").SetCheckoutForm | RequestUpdateUserData | import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure | import("redux/actions").SetCheckoutFormIsValid>, state$: StateObservable<StoreState>, { indexedDb }: {
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
    }) => import("rxjs").Observable<import("redux/actions").FillErrorProducts>) | ((action$: ActionsObservable<AuthAction>) => import("rxjs").Observable<import("redux/actions").ResetCartState>) | ((action$: ActionsObservable<SetUserData>) => import("rxjs").Observable<RequestUpdateUserData>) | ((action$: ActionsObservable<RequestUpdateUserData>, state$: StateObservable<StoreState>, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestUpdateUserDataSuccess | import("redux/actions").RequestUpdateUserDataFailure>))[];
    export default _default_22;
}
declare module "type-casts/wishlist" {
    const typeCastWishlist: (wishlist: any) => any;
    export default typeCastWishlist;
}
declare module "redux/epics/networkHelper" {
    export const requestCatch: (payload: any, error: any, errorType: string) => import("rxjs").Observable<{
        payload: any;
        type: string;
    }>;
    export const extractRequestStatus: (response: any) => number;
}
declare module "redux/epics/Wishlist" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { WishlistAction, AuthAction, AppAction } from "redux/actions/index";
    import { AddToWishlistRemoveQueue } from "redux/actions/Wishlist";
    import { StoreState } from "redux/types/index";
    import Product from "entities/product/Product";
    import WishlistActionTypes from "redux/types/actions/Wishlist";
    export const requestWishlistEpic: (action$: ActionsObservable<WishlistAction>) => import("rxjs").Observable<{
        payload: any;
        type: string;
    } | {
        payload: {
            wishlist: any;
        };
        type: WishlistActionTypes;
    }>;
    export const requestAddToWishlistEpic: (action$: ActionsObservable<WishlistAction>, state$: StateObservable<StoreState>) => import("rxjs").Observable<{
        payload: any;
        type: string;
    } | {
        type: WishlistActionTypes;
        payload: {
            productsIds: any[];
        };
    }>;
    export const addToWishlistUpdateEpic: (action$: ActionsObservable<WishlistAction | AuthAction>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
    }>;
    /**
     * Should start request on:
     *  - app init,
     *  - login,
     *  - internet restoring,
     *  - wishlist queue update
     * @param action$
     * @param state$
     */
    export const appInitEpic: (action$: ActionsObservable<AppAction | WishlistAction | AuthAction>, state$: StateObservable<StoreState>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
    }>;
    export const removeFromWishlistQueueOnRequestSuccessEpic: (action$: ActionsObservable<WishlistAction>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
        payload: {
            productsIds: any;
        };
    }>;
    export const removeFromWishlistQueueEpic: (action$: ActionsObservable<AddToWishlistRemoveQueue>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
        payload: {
            productsIds: number[];
        };
    }>;
    export const dbRequestWishlistProductsEpic: (action$: ActionsObservable<WishlistAction>, state$: StateObservable<StoreState>) => import("rxjs").Observable<{
        payload: {
            wishlist: {
                products: Product<any>[];
            };
        };
        type: WishlistActionTypes;
    }>;
    export const resetWishlistOnLogoutEpic: (action$: ActionsObservable<AuthAction>) => import("rxjs").Observable<import("redux/actions").ResetWishlistState>;
    const _default_23: (((action$: ActionsObservable<import("redux/actions").RequestLogin | import("redux/actions").RequestLoginWithRestoreToken | import("redux/actions").RequestLoginSuccess | import("redux/actions").RequestLoginFailure | import("redux/actions").RequestSocialLogin | import("redux/actions").Logout | import("redux/actions").LogoutSuccess | import("redux/actions").RequestProfile | import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure | import("redux/actions").RequestSignup | import("redux/actions").RequestSignupSuccess | import("redux/actions").RequestSignupFailure | import("redux/actions").RequestSignupForm | import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure | import("redux/actions").RequestUpdateProfileForm | import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestUpdateProfile | import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure | import("redux/actions").RequestRestorePassword | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure | import("redux/actions").RequestWishlist | import("redux/actions").RequestWishlistSuccess | import("redux/actions").RequestWishlistFailure | import("redux/actions").DbRequestWishlistSuccess | import("redux/actions").AddToWishlistQueue | AddToWishlistRemoveQueue | import("redux/actions").RemoveFromWishlistQueue | import("redux/actions").RequestAddToWishlist | import("redux/actions").RequestAddToWishlistSuccess | import("redux/actions").RequestAddToWishlistFailure | import("redux/actions").RequestRemoveFromWishlist | import("redux/actions").RequestRemoveFromWishlistSuccess | import("redux/actions").RequestRemoveFromWishlistFailure | import("redux/actions").ClearWishlist | import("redux/actions").RequestClearWishlist | import("redux/actions").RequestClearWishlistSuccess | import("redux/actions").RequestClearWishlistFailure | import("redux/actions").ResetWishlistState>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
    }>) | ((action$: ActionsObservable<import("redux/actions").AppInit | import("redux/actions").RequestLogin | import("redux/actions").RequestLoginWithRestoreToken | import("redux/actions").RequestLoginSuccess | import("redux/actions").RequestLoginFailure | import("redux/actions").RequestSocialLogin | import("redux/actions").Logout | import("redux/actions").LogoutSuccess | import("redux/actions").RequestProfile | import("redux/actions").RequestProfileSuccess | import("redux/actions").RequestProfileFailure | import("redux/actions").RequestSignup | import("redux/actions").RequestSignupSuccess | import("redux/actions").RequestSignupFailure | import("redux/actions").RequestSignupForm | import("redux/actions").RequestSignupFormSuccess | import("redux/actions").RequestSignupFormFailure | import("redux/actions").RequestUpdateProfileForm | import("redux/actions").RequestUpdateProfileFormSuccess | import("redux/actions").RequestUpdateProfileFormFailure | import("redux/actions").RequestUpdateProfile | import("redux/actions").RequestUpdateProfileSuccess | import("redux/actions").RequestUpdateProfileFailure | import("redux/actions").RequestRestorePassword | import("redux/actions").RequestRestorePasswordSuccess | import("redux/actions").RequestRestorePasswordFailure | import("redux/actions").RequestWishlist | import("redux/actions").RequestWishlistSuccess | import("redux/actions").RequestWishlistFailure | import("redux/actions").DbRequestWishlistSuccess | import("redux/actions").AddToWishlistQueue | AddToWishlistRemoveQueue | import("redux/actions").RemoveFromWishlistQueue | import("redux/actions").RequestAddToWishlist | import("redux/actions").RequestAddToWishlistSuccess | import("redux/actions").RequestAddToWishlistFailure | import("redux/actions").RequestRemoveFromWishlist | import("redux/actions").RequestRemoveFromWishlistSuccess | import("redux/actions").RequestRemoveFromWishlistFailure | import("redux/actions").ClearWishlist | import("redux/actions").RequestClearWishlist | import("redux/actions").RequestClearWishlistSuccess | import("redux/actions").RequestClearWishlistFailure | import("redux/actions").ResetWishlistState>, state$: StateObservable<StoreState>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
    }>) | ((action$: ActionsObservable<WishlistAction>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
        payload: {
            productsIds: any;
        };
    }>) | ((action$: ActionsObservable<AddToWishlistRemoveQueue>) => import("rxjs").Observable<{
        type: WishlistActionTypes;
        payload: {
            productsIds: number[];
        };
    }>) | ((action$: ActionsObservable<WishlistAction>, state$: StateObservable<StoreState>) => import("rxjs").Observable<{
        payload: {
            wishlist: {
                products: Product<any>[];
            };
        };
        type: WishlistActionTypes;
    }>) | ((action$: ActionsObservable<AuthAction>) => import("rxjs").Observable<import("redux/actions").ResetWishlistState>))[];
    export default _default_23;
}
declare module "redux/epics/utils/mapFailActionToAction" {
    import { ActionsObservable } from 'redux-observable';
    import { Observable } from 'rxjs';
    import { IdentifierFailuredAction, FailedRequestSelectionAction } from "redux/actions/index";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    /**
     * Map failed identifier action to another
     *
     * @param action$
     * @param {string} type
     * @param mapToAction
     */
    export function switchFailedRequestActionToAction<T extends IdentifierFailuredAction, O>(action$: ActionsObservable<T>, type: string, mapToAction: (id: any) => O): Observable<O>;
    /**
     * Map failed selection action to another
     *
     * @param action$
     * @param {string} type
     * @param mapToAction
     */
    export function switchFailedRequestSelectionActionToAction<
    /**
     * Selection
     */
    S extends AbstractItemsSelection, 
    /**
     * Incoming action
     */
    T extends FailedRequestSelectionAction<S>, 
    /**
     * Output action
     */
    O>(action$: ActionsObservable<T>, 
    /**
     * Income action type
     */
    type: string, 
    /**
     * Action to be output
     */
    mapToAction: (selection: S | undefined) => O): Observable<O>;
}
declare module "redux/epics/utils/requestDbById" {
    import { IdentifierAction, DbIdentifierSuccessedAction, DbIdentifierFailuredAction } from "redux/actions/index";
    import { ActionsObservable } from 'redux-observable';
    import { Observable } from 'rxjs';
    /**
     * Perform DB request for a item by id
     */
    export function createRequestDbById<
    /**
     * Action to be mapped as income
     */
    Action extends IdentifierAction, 
    /**
     * Action to be as success output
     */
    Success extends DbIdentifierSuccessedAction, 
    /**
     * Action to be as fail output
     */
    Failure extends DbIdentifierFailuredAction, 
    /**
     * Response data type
     */
    ItemType>(action$: ActionsObservable<Action>, type: string, find: (id: Action['payload']['id']) => Promise<ItemType | undefined>, onSuccess: (id: Action['payload']['id'], item: ItemType) => Success, onFailure: (id: Action['payload']['id']) => Failure): Observable<Success | Failure>;
}
declare module "redux/epics/utils/requestDbBySelection" {
    import { ActionsObservable } from 'redux-observable';
    import { Observable } from 'rxjs';
    import { SelectionAction, SuccessedRequestSelectionAction } from "redux/actions/index";
    import AbstractItemsSelection from "entities/selection/AbstractItemsSelection";
    /**
     * Perform DB request for an item by selection
     */
    export function requestDbBySelection<SelectionType extends AbstractItemsSelection, Action extends SelectionAction<SelectionType>, Success extends SuccessedRequestSelectionAction<SelectionType>>(action$: ActionsObservable<Action>, type: string, find: (selection: SelectionType | undefined) => Promise<SelectionType>, onSuccess: (selection: SelectionType) => Success): Observable<Success>;
}
declare module "redux/epics/order/Order" {
    import { Observable } from 'rxjs';
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { RequestOrders, RequestOrderCreate, RequestOrder, RequestOrderFailure, DbRequestOrder, RequestOrdersFailure, DbRequestOrders, DbRequestOrderSuccess, DbRequestOrderFailure, DbRequestOrdersSuccess, RequestSettlementCreate, RequestOnlinePayment, RequestOnlinePaymentResult, RequestOnlinePaymentResultSuccess, RequestOrderCreateFailure, RequestOrderCreateSuccess, RequestOrderSuccess, RequestOrdersSuccess, RequestOnlinePaymentSuccess, RequestOnlinePaymentFailure, RequestSettlementCreateSuccess, RequestSettlementCreateFailure, RequestOnlinePaymentResultFailure } from "redux/actions/Order";
    import { StoreState } from "redux/types/index";
    import OrderSelection from "entities/order/OrderSelection";
    import Order from "entities/order/Order";
    import db from "db/models/index";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    export const createOrderEpic: (action$: ActionsObservable<RequestOrderCreate>, state$: StateObservable<StoreState>, { api }: IEpicDependencies) => Observable<RequestOrderCreateFailure | RequestOrderCreateSuccess>;
    export const completeOrderWithOnlinePaymentEpic: (action$: ActionsObservable<RequestOnlinePaymentResultSuccess>, state$: StateObservable<StoreState>) => Observable<RequestOrderCreateSuccess | never>;
    export const hookBackendPaymentResultPageEpic: (action$: ActionsObservable<RequestOnlinePaymentResult>, state$: null, { api }: IEpicDependencies) => Observable<RequestOnlinePaymentResultSuccess | RequestOnlinePaymentResultFailure>;
    export const placeSettlementEpic: (action$: ActionsObservable<RequestSettlementCreate>, state$: null, { api }: IEpicDependencies) => Observable<RequestSettlementCreateSuccess | RequestSettlementCreateFailure>;
    export const placeOnlinePaymentEpic: (action$: ActionsObservable<RequestOnlinePayment>, state$: null, { api }: IEpicDependencies) => Observable<RequestOnlinePaymentSuccess | RequestOnlinePaymentFailure>;
    /**
     * Request orders
     */
    export const requestOrdersEpic: (action$: ActionsObservable<RequestOrders>, state$: null, { api, parser }: IEpicDependencies) => Observable<RequestOrdersSuccess | RequestOrdersFailure>;
    /**
     * Should request DB for an orders on network error
     */
    export const mapApiRequestSelectionFailureToDbRequestEpic: (action$: ActionsObservable<RequestOrdersFailure>) => Observable<DbRequestOrders>;
    /**
     * Requests an order from API
     */
    export const requestOrderEpic: (action$: ActionsObservable<RequestOrder>, state$: null, { api, parser, }: IEpicDependencies) => Observable<RequestOrderFailure | RequestOrderSuccess>;
    /**
     * Should request DB for an order on network error
     */
    export const mapApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestOrderFailure>) => Observable<DbRequestOrder>;
    /**
     * Perform DB request for the order
     * @param action$
     * @param state$
     * @param param2
     */
    export const dbRequestOrderEpic: (action$: ActionsObservable<DbRequestOrder>, state$: null, { indexedDb }: IEpicDependencies) => Observable<DbRequestOrderSuccess | DbRequestOrderFailure>;
    /**
     * Perform DB request for the order
     * @param action$
     * @param state$
     * @param param2
     */
    export const dbRequestOrdersEpic: (action$: ActionsObservable<DbRequestOrders>, state$: null, { indexedDb }: {
        indexedDb: typeof db;
    }) => Observable<DbRequestOrdersSuccess>;
    const _default_24: (((action$: ActionsObservable<RequestOrderCreate>, state$: StateObservable<StoreState>, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestOrderCreateSuccess | RequestOrderCreateFailure>) | ((action$: ActionsObservable<RequestOnlinePaymentResultSuccess>, state$: StateObservable<StoreState>) => Observable<RequestOrderCreateSuccess>) | ((action$: ActionsObservable<RequestOnlinePaymentResult>, state$: null, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestOnlinePaymentResultSuccess | RequestOnlinePaymentResultFailure>) | ((action$: ActionsObservable<RequestSettlementCreate>, state$: null, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestSettlementCreateSuccess | RequestSettlementCreateFailure>) | ((action$: ActionsObservable<RequestOnlinePayment>, state$: null, { api }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestOnlinePaymentSuccess | RequestOnlinePaymentFailure>) | ((action$: ActionsObservable<RequestOrders>, state$: null, { api, parser }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestOrdersSuccess | RequestOrdersFailure>) | ((action$: ActionsObservable<RequestOrdersFailure>) => Observable<DbRequestOrders>) | ((action$: ActionsObservable<RequestOrder>, state$: null, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestOrderSuccess | RequestOrderFailure>) | ((action$: ActionsObservable<RequestOrderFailure>) => Observable<DbRequestOrder>) | ((action$: ActionsObservable<DbRequestOrder>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<OrderSelection>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<Order<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<DbRequestOrderSuccess | DbRequestOrderFailure>) | ((action$: ActionsObservable<DbRequestOrders>, state$: null, { indexedDb }: {
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
    }) => Observable<DbRequestOrdersSuccess>))[];
    export default _default_24;
}
declare module "redux/epics/Layouts" {
    import { ActionsObservable, Epic } from 'redux-observable';
    import { Observable } from 'rxjs';
    import { LayoutsAction, RequestLayout, DbRequestLayout, GetLayout, RequestLayoutFailure, DbRequestLayoutFailure, RequestLayoutSuccess } from "redux/actions/layout/LayoutAction";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    import { StoreState } from "redux/types/index";
    /**
     * Request API for layout
     */
    export const requestLayoutEpic: (action$: ActionsObservable<RequestLayout>, state$: null, { api, parser, }: IEpicDependencies) => Observable<RequestLayoutSuccess | RequestLayoutFailure>;
    /**
     * Get layout from anywhere
     * Change primary endpoint (api or db) here
     */
    export const getLayoutEpic: (action$: ActionsObservable<GetLayout>) => Observable<RequestLayout>;
    /**
     * Get layout from DB
     *
     * @param action$
     * @param state$
     * @param param2
     */
    export const dbRequestLayoutEpic: (action$: ActionsObservable<DbRequestLayout>, state$: null, { indexedDb }: IEpicDependencies) => Observable<import("redux/actions/layout/DbRequestLayout").DbRequestLayoutSuccess | DbRequestLayoutFailure>;
    /**
     * Should request DB for a layout on network error
     */
    export const mapApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestLayoutFailure>) => Observable<DbRequestLayout>;
    export const retryFailedRequest: Epic<LayoutsAction, LayoutsAction, StoreState>;
    /**
     * Should request API for a layout on DB error
     */
    export const mapDbRequestFailureToApiRequestEpic: (action$: ActionsObservable<DbRequestLayoutFailure>) => Observable<RequestLayout>;
    /**
     * Should get default layout
     */
    export const getDefaultLayoutOnInitEpic: (action$: ActionsObservable<RequestLayoutSuccess>) => Observable<GetLayout>;
    const _default_25: (((action$: ActionsObservable<RequestLayout>, state$: null, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestLayoutSuccess | RequestLayoutFailure>) | ((action$: ActionsObservable<GetLayout>) => Observable<RequestLayout>) | ((action$: ActionsObservable<DbRequestLayout>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<import("redux/actions/layout/DbRequestLayout").DbRequestLayoutSuccess | DbRequestLayoutFailure>) | ((action$: ActionsObservable<RequestLayoutFailure>) => Observable<DbRequestLayout>) | Epic<LayoutsAction, LayoutsAction, StoreState, any> | ((action$: ActionsObservable<RequestLayoutSuccess>) => Observable<GetLayout>))[];
    export default _default_25;
}
declare module "redux/epics/Category" {
    import { ActionsObservable } from 'redux-observable';
    import cscartApi from "api/index";
    import db from "db/models/index";
    import { DbRequestCategory, RequestCategory, RequestCategoryFailure } from "redux/actions/category/CategoryAction";
    import { RequestLayoutFailure, RequestLayout } from "redux/actions/index";
    /**
     * Request API for a category
     */
    export const requestCategoryEpic: (action$: ActionsObservable<RequestCategory>, state$: null, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<import("redux/actions").RequestCategorySuccess | RequestCategoryFailure>;
    /**
     * Should request DB on network error
     */
    export const mapApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestCategoryFailure>) => import("rxjs").Observable<DbRequestCategory>;
    /**
     * Perform DB request for a category by id
     */
    export const dbRequestCategoryEpic: (action$: ActionsObservable<DbRequestCategory>, state$: null, { indexedDb }: {
        indexedDb: typeof db;
    }) => import("rxjs").Observable<import("redux/actions").DbRequestCategorySuccess | import("redux/actions").DbRequestCategoryFailure>;
    /**
     * Map layout request with slug failure to db request for entity
     */
    export const mapFailuredLayoutRequestToCategoryRequestEpic: (action$: ActionsObservable<RequestLayoutFailure>) => import("rxjs").Observable<RequestCategoryFailure>;
    /**
     * set current category is loading true when map layout request for a category begins
     */
    export const mapSetCategoryIsRequestingOnLayoutEpic: (action$: ActionsObservable<RequestLayout>) => import("rxjs").Observable<import("redux/actions").SetCategoryIsRequesting>;
    const _default_26: (((action$: ActionsObservable<RequestCategory>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestCategorySuccess | RequestCategoryFailure>) | ((action$: ActionsObservable<RequestCategoryFailure>) => import("rxjs").Observable<DbRequestCategory>) | ((action$: ActionsObservable<DbRequestCategory>, state$: null, { indexedDb }: {
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
    }) => import("rxjs").Observable<import("redux/actions").DbRequestCategorySuccess | import("redux/actions").DbRequestCategoryFailure>) | ((action$: ActionsObservable<RequestLayoutFailure>) => import("rxjs").Observable<RequestCategoryFailure>) | ((action$: ActionsObservable<RequestLayout>) => import("rxjs").Observable<import("redux/actions").SetCategoryIsRequesting>))[];
    export default _default_26;
}
declare module "redux/epics/product/Product" {
    import { Observable } from 'rxjs';
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { RequestCategoryProducts, RequestSearchProducts, RequestCategoryProductsFailure, RequestProduct, RequestProductFailure, DbRequestProduct, DbRequestCategoryProducts, RequestProductSuccess, RequestCategoryProductsSuccess, RequestSearchProductsSuccess, RequestSearchProductsFailure } from "redux/actions/product/ProductAction";
    import Product from "entities/product/Product";
    import { RequestLayoutFailure, RequestLayout } from "redux/actions/index";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    import { StoreState } from "redux/types/index";
    /**
     * Requests a product from API
     */
    export const requestProductEpic: (action$: ActionsObservable<RequestProduct>, state$: null, { api, parser, }: IEpicDependencies) => Observable<RequestProductSuccess | RequestProductFailure>;
    /**
     * Request products for a category
     */
    export const requestCategoryProductsEpic: (action$: ActionsObservable<RequestCategoryProducts>, state$: null, { api, parser, }: IEpicDependencies) => Observable<RequestCategoryProductsSuccess | RequestCategoryProductsFailure>;
    /**
     * Request products for a search
     */
    export const requestSearchProductsEpic: (action$: ActionsObservable<RequestSearchProducts>, state$: null, { api, parser }: IEpicDependencies) => Observable<RequestSearchProductsSuccess | RequestSearchProductsFailure>;
    /**
     * Should request DB for a product on network error
     */
    export const mapApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestProductFailure>) => Observable<DbRequestProduct>;
    /**
     * Should request DB for a products on network error
     */
    export const mapCategoryProductsApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestCategoryProductsFailure>) => Observable<DbRequestCategoryProducts>;
    /**
     * Perform DB request for a product by id
     */
    export const dbRequestProductEpic: (action$: ActionsObservable<DbRequestProduct>, state$: null, { indexedDb }: IEpicDependencies) => Observable<import("redux/actions").DbRequestProductSuccess | import("redux/actions").DbRequestProductFailure>;
    /**
     * Perform DB request for a products by category
     */
    export const dbRequestCategoryProductsEpic: (action$: ActionsObservable<DbRequestCategoryProducts>, state$: null, { indexedDb }: IEpicDependencies) => Observable<import("redux/actions").DbRequestCategoryProductsSuccess>;
    /**
     * Map layout request with slug failure to db request for entity
     */
    export const mapFailuredLayoutRequestToProductRequestEpic: (action$: ActionsObservable<RequestLayoutFailure>) => Observable<RequestProductFailure>;
    /**
     * set current product is loading true when map layout request for a product begins
     */
    export const mapSetProductIsRequestingOnLayoutEpic: (action$: ActionsObservable<RequestLayout>, state$: StateObservable<StoreState>) => Observable<import("redux/actions").SetProductIsRequesting>;
    const _default_27: (((action$: ActionsObservable<RequestProduct>, state$: null, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestProductSuccess | RequestProductFailure>) | ((action$: ActionsObservable<RequestCategoryProducts>, state$: null, { api, parser, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestCategoryProductsSuccess | RequestCategoryProductsFailure>) | ((action$: ActionsObservable<RequestSearchProducts>, state$: null, { api, parser }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<RequestSearchProductsSuccess | RequestSearchProductsFailure>) | ((action$: ActionsObservable<RequestProductFailure>) => Observable<DbRequestProduct>) | ((action$: ActionsObservable<RequestCategoryProductsFailure>) => Observable<DbRequestCategoryProducts>) | ((action$: ActionsObservable<DbRequestProduct>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<import("redux/actions").DbRequestProductSuccess | import("redux/actions").DbRequestProductFailure>) | ((action$: ActionsObservable<DbRequestCategoryProducts>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => Observable<import("redux/actions").DbRequestCategoryProductsSuccess>) | ((action$: ActionsObservable<RequestLayoutFailure>) => Observable<RequestProductFailure>) | ((action$: ActionsObservable<RequestLayout>, state$: StateObservable<StoreState>) => Observable<import("redux/actions").SetProductIsRequesting>))[];
    export default _default_27;
}
declare module "redux/epics/Article" {
    import { ActionsObservable } from 'redux-observable';
    import { DbRequestArticle, DbRequestArticles, RequestArticles, RequestArticleFailure, RequestArticlesFailure } from "redux/actions/article/ArticleAction";
    import Article from "entities/article/Article";
    import { RequestLayout, RequestLayoutFailure } from "redux/actions/index";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    /**
     * Should request DB on network error
     */
    export const mapApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestArticleFailure>) => import("rxjs").Observable<DbRequestArticle>;
    /**
     * Perform DB request for a article by id
     */
    export const dbRequestArticleEpic: (action$: ActionsObservable<DbRequestArticle>, state$: null, { indexedDb }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").DbRequestArticleSuccess | import("redux/actions").DbRequestArticleFailure>;
    /**
     * Request articles for a parent article
     */
    export const requestArticlesByParentEpic: (action$: ActionsObservable<RequestArticles>, state$: null, { api, parser }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestArticlesSuccess | RequestArticlesFailure>;
    /**
     * Should request DB for a articles on network error
     */
    export const mapArticlesApiRequestFailureToDbRequestEpic: (action$: ActionsObservable<RequestArticlesFailure>) => import("rxjs").Observable<DbRequestArticles>;
    /**
     * Perform DB request for a articles by parent
     */
    export const dbRequestArticlesEpic: (action$: ActionsObservable<DbRequestArticles>, state$: null, { indexedDb }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").DbRequestArticlesSuccess>;
    /**
     * Map layout request with slug failure to db request for entity
     */
    export const mapFailuredLayoutRequestToArticleRequestEpic: (action$: ActionsObservable<RequestLayoutFailure>) => import("rxjs").Observable<DbRequestArticle>;
    /**
     * set current article is loading true when map layout request for a article begins
     */
    export const mapSetArticleIsRequestingOnLayoutEpic: (action$: ActionsObservable<RequestLayout>) => import("rxjs").Observable<import("redux/actions").SetArticleIsRequesting>;
    const _default_28: (((action$: ActionsObservable<RequestArticleFailure>) => import("rxjs").Observable<DbRequestArticle>) | ((action$: ActionsObservable<DbRequestArticle>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<Article<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").DbRequestArticleSuccess | import("redux/actions").DbRequestArticleFailure>) | ((action$: ActionsObservable<RequestArticles>, state$: null, { api, parser }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<Article<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestArticlesSuccess | RequestArticlesFailure>) | ((action$: ActionsObservable<RequestArticlesFailure>) => import("rxjs").Observable<DbRequestArticles>) | ((action$: ActionsObservable<DbRequestArticles>, state$: null, { indexedDb }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<Article<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").DbRequestArticlesSuccess>) | ((action$: ActionsObservable<RequestLayoutFailure>) => import("rxjs").Observable<DbRequestArticle>) | ((action$: ActionsObservable<RequestLayout>) => import("rxjs").Observable<import("redux/actions").SetArticleIsRequesting>))[];
    export default _default_28;
}
declare module "redux/epics/Review.messages" {
    const _default_29: {
        reviewSubmitError: {
            id: string;
            defaultMessage: string;
        };
        reviewSubmitSuccess: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_29;
}
declare module "redux/epics/Review" {
    import i from "intl/IntlGlobalProvider";
    import cscartApi from "api/index";
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { RequestReviewThread, CreateDraft } from "redux/actions/Review";
    import { StoreState } from "redux/types/index";
    /**
     * Requests a review thread from API
     */
    export const requestReviewThreadEpic: (action$: ActionsObservable<RequestReviewThread>, state$: null, { api, }: {
        api: typeof cscartApi;
    }) => import("rxjs").Observable<import("redux/actions/Review").RequestReviewThreadSuccess | import("redux/actions/Review").RequestReviewThreadFailure>;
    /**
     * Requests an adding new post to testimonials thread
     */
    export const requestAddReviewEpic: (action$: ActionsObservable<CreateDraft>, state$: StateObservable<StoreState>, { api, intl, }: {
        api: typeof cscartApi;
        intl: () => typeof i;
    }) => import("rxjs").Observable<RequestReviewThread | import("redux/actions/Review").RemoveDraft | import("redux/actions/Review").RequestReviewAddFailure | import("redux/actions/Review").RequestReviewAddSuccess>;
    const _default_30: (((action$: ActionsObservable<RequestReviewThread>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
    }) => import("rxjs").Observable<import("redux/actions/Review").RequestReviewThreadSuccess | import("redux/actions/Review").RequestReviewThreadFailure>) | ((action$: ActionsObservable<CreateDraft>, state$: StateObservable<StoreState>, { api, intl, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        intl: () => import("react-intl").IntlShape;
    }) => import("rxjs").Observable<RequestReviewThread | import("redux/actions/Review").RemoveDraft | import("redux/actions/Review").RequestReviewAddFailure | import("redux/actions/Review").RequestReviewAddSuccess>))[];
    export default _default_30;
}
declare module "redux/epics/Search" {
    import { ActionsObservable } from 'redux-observable';
    import { PerformSearch } from "redux/actions/Search";
    /**
     * Set currency if not selected
     * @param action$
     */
    export const pushQueryParameterOnGlobalSearchEpic: (action$: ActionsObservable<PerformSearch>) => import("rxjs").Observable<never>;
    const _default_31: ((action$: ActionsObservable<PerformSearch>) => import("rxjs").Observable<never>)[];
    export default _default_31;
}
declare module "redux/epics/notification/Notification" {
    import { ActionsObservable, StateObservable } from 'redux-observable';
    import { RequestNotifications, RequestNotificationsSuccess, RequestMarkNotificationsAsRead } from "redux/actions/notification/NotificationAction";
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    import { AppInit, RequestLoginSuccess, RequestSignupSuccess, LogoutSuccess } from "redux/actions/index";
    import { StoreState } from "redux/types/index";
    import EntityNotification from "entities/notifications/EntityNotification";
    /**
     * Request api for user notifications
     */
    export const requestNotificationsEpic: (action$: ActionsObservable<RequestNotifications>, state$: null, { api, }: IEpicDependencies) => import("rxjs").Observable<RequestNotificationsSuccess | import("redux/actions").RequestNotificationsFailure>;
    /**
     * Request api for mark notifications as read
     */
    export const requestMarkNotificationsAsReadEpic: (action$: ActionsObservable<RequestMarkNotificationsAsRead>, state$: null, { api, }: IEpicDependencies) => import("rxjs").Observable<import("redux/actions").RequestNotificationsFailure | import("redux/actions").RequestMarkNotificationsAsReadSuccess | import("redux/actions").RequestMarkNotificationsAsReadFailure>;
    /**
     * Schedule notification requests
     *
     * @param action$
     */
    export const notificationsSchedulerEpic: (action$: ActionsObservable<AppInit | RequestLoginSuccess | RequestSignupSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<RequestNotifications>;
    /**
     * Map success notifications request to request for mark notifications as read
     *
     * @param action$
     */
    export const mapRequestNotificationsSuccessToRequestMarkNotificationsAsReadEpic: (action$: ActionsObservable<RequestNotificationsSuccess>) => import("rxjs").Observable<RequestMarkNotificationsAsRead>;
    /**
     * Clear notifications on logout
     *
     * @param action$
     */
    export const clearNotificationsOnLogoutEpic: (action$: ActionsObservable<LogoutSuccess>) => import("rxjs").Observable<import("redux/actions").ClearNotifications>;
    const _default_32: (((action$: ActionsObservable<RequestNotifications>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): EntityNotification[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<RequestNotificationsSuccess | import("redux/actions").RequestNotificationsFailure>) | ((action$: ActionsObservable<RequestMarkNotificationsAsRead>, state$: null, { api, }: {
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): EntityNotification[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => any;
            requestNotificationPermission: () => Promise<NotificationPermission>;
        };
    }) => import("rxjs").Observable<import("redux/actions").RequestNotificationsFailure | import("redux/actions").RequestMarkNotificationsAsReadSuccess | import("redux/actions").RequestMarkNotificationsAsReadFailure>) | ((action$: ActionsObservable<AppInit | RequestLoginSuccess | RequestSignupSuccess>, state$: StateObservable<StoreState>) => import("rxjs").Observable<RequestNotifications>) | ((action$: ActionsObservable<RequestNotificationsSuccess>) => import("rxjs").Observable<RequestMarkNotificationsAsRead>) | ((action$: ActionsObservable<LogoutSuccess>) => import("rxjs").Observable<import("redux/actions").ClearNotifications>))[];
    export default _default_32;
    /**
     * Get time of the lates notifications
     *
     * @param notifcations
     */
    export const getLatestNotificationTime: (notifcations: Array<EntityNotification>) => Date | undefined;
}
declare module "redux/epics/index" {
    import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
    import { BehaviorSubject, Observable } from 'rxjs';
    import IEpicDependencies from "redux/epics/IEpicDependencies";
    export const epic$: BehaviorSubject<any>;
    export const rootEpic: (action$: ActionsObservable<any>, state$: StateObservable<any>, deps: IEpicDependencies) => Observable<unknown>;
    export const epicMiddleware: import("redux-observable").EpicMiddleware<import("redux").Action<any>, import("redux").Action<any>, void, {
        indexedDb: {
            products: typeof import("db/models/Product");
            categories: typeof import("db/models/Category");
            articles: typeof import("db/models/Article");
            layouts: typeof import("db/models/Layout");
            orders: typeof import("db/models/Order");
        };
        api: {
            auth: typeof import("api/Auth");
            settings: typeof import("api/Settings");
            cart: typeof import("api/Cart");
            products: typeof import("api/Product");
            categories: typeof import("api/Category");
            articles: typeof import("api/Article");
            testimonials: typeof import("api/Testimonials");
            orders: typeof import("api/Order");
            settlements: typeof import("api/Settlement");
            profile: typeof import("api/Profile");
            layouts: typeof import("api/Layouts");
            notifications: typeof import("api/Notification");
        };
        intl: () => import("react-intl").IntlShape;
        parser: {
            extractEntityNotifications(data: import("api/parser/cscart/EntityNotification").default): import("entities/notifications/EntityNotification").default[];
            extractSignupForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractCheckoutFormFromCart(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractProfileUpdateForm(data: any): Promise<import("entities/form/FormSchema").default<any>>;
            extractOrders(data: import("api/parser/cscart/Orders").default): Promise<import("entities/order/OrderSelection").default>;
            extractOrder(data: import("api/parser/cscart/Order").IOrder): Promise<import("entities/order/Order").default<any>>;
            extractCart(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/Cart").default<any>>;
            extractCheckoutCustomerInformation(data: import("api/parser/cscart/Cart").ICart): Promise<import("entities/cart/UserData").default>;
            extractLayout(data: import("api/parser/cscart/Layout").ILayout): Promise<import("entities/layout/Layout").default<any>>;
            extractCategory(data: import("api/parser/cscart/Category").ICategory): Promise<import("entities/category/Category").default<any>>;
            extractProduct(data: import("api/parser/cscart/Product").IProduct): Promise<import("entities/product/Product").Product<any>>;
            extractProducts(data: import("api/parser/cscart/Products").default): Promise<import("entities/product/ProductSelection").default>;
            extractArticle(data: import("api/parser/cscart/Article").IArticle): Promise<import("entities/article/Article").default<any>>;
            extractArticles(data: import("api/parser/cscart/Articles").IArticlesResponse): Promise<import("entities/article/ArticleSelection").default>;
            extractCurrency(data: import("api/parser/cscart/Currency").ICurrency): Promise<import("entities/currency/Currency").default<any>>;
            extractLanguage(data: import("api/parser/cscart/Language").ILanguage): Promise<import("entities/language/Language").default<any>>;
            extractSettings(data: import("api/parser/cscart/Settings").ISettings): Promise<import("entities/settings/Settings").default<any>>;
        };
        /**
         * All async function helpers with promises for example
         * You should mock it for marble testing
         */
        asyncUtils: {
            handleThirdpartyLogout: (provider: import("constants/AuthProviders").default | null) => Promise<unknown>;
            requestNotificationPermission: (notification?: {
                new (title: string, options?: NotificationOptions | undefined): Notification;
                prototype: Notification;
                readonly maxActions: number;
                readonly permission: NotificationPermission;
                requestPermission(deprecatedCallback?: NotificationPermissionCallback | undefined): Promise<NotificationPermission>;
            }) => Promise<NotificationPermission>;
        };
    }>;
    /**
     * Inject epics to global store
     *
     * @param epics
     */
    export const injectEpics: (epics: Array<Epic>) => void;
}
declare module "redux/store/index" {
    import { ReducersMapObject, Store, CombinedState, AnyAction } from 'redux';
    import { StoreState } from "redux/types/index";
    export const store: Store<CombinedState<StoreState>, AnyAction> & {
        dispatch: unknown;
    };
    export function configureStore(initialState?: Partial<StoreState>): Store<CombinedState<StoreState>, AnyAction> & {
        dispatch: unknown;
    };
    export function injectReducer(asyncReducer: ReducersMapObject<any, any>): void;
}
declare module "redux/index" {
    import { store } from "redux/store/index";
    export default store;
}
declare module "components/blocks/main-block/mainBlockPropsFactory" {
    export type IFactories = Record<string, Promise<any>>;
    const mainBlockPropsFactory: (data: any) => null;
    export default mainBlockPropsFactory;
}
declare module "components/blocks/html-block/htmlBlockPropsFactory" {
    const htmlBlockPropsFactory: (data: any) => {
        title: any;
        content: any;
        hideTitle: boolean;
        disposition: any;
    };
    export default htmlBlockPropsFactory;
}
declare module "entities/banner/factories/banerFactory" {
    import { IEntityExtendable } from "entities/IEntityExtendable";
    import Banner from "entities/banner/Banner";
    export interface IBannerFactory extends IEntityExtendable {
        id: number;
        title: string;
        description: string;
        position: number;
        url?: string;
        image: string;
        alt: string;
    }
    const createBanner: (bannerData: IBannerFactory) => Promise<Banner>;
    export default createBanner;
}
declare module "api/parser/cscart/Banner" {
    import { IBannerFactory } from "entities/banner/factories/banerFactory";
    export interface IBanner {
        banner_id: string;
        type: string;
        target: string;
        status: string;
        position: string;
        banner: string;
        description: string;
        url: string;
        banner_image_id: string;
        main_pair: {
            pair_id: string;
            image_id: string;
            detailed_id: string;
            position: string;
            icon: {
                image_path: string;
                alt: string | null;
                image_x: string;
                image_y: string;
                http_image_path: string;
                https_image_path: string;
                absolute_path: string;
                relative_path: string;
            };
        };
    }
    export const castBanner: (banner: IBanner) => Promise<IBannerFactory>;
}
declare module "components/blocks/banners-block/bannersBlockPropsFactory" {
    import { IBannerFactory } from "entities/banner/factories/banerFactory";
    const bannerBlockPropsFactory: (data: any) => Promise<{
        title: any;
        banners: IBannerFactory[];
        hideTitle: boolean;
        disposition: any;
    }>;
    export default bannerBlockPropsFactory;
}
declare module "components/blocks/products-block/productsBlockPropsFactory" {
    import { IProductFactory } from "entities/product/factories/productFactory";
    const productsBlockPropsFactory: (data: any) => Promise<{
        title: any;
        products: IProductFactory[];
        hideTitle: boolean;
        disposition: any;
    }>;
    export default productsBlockPropsFactory;
}
declare module "components/blocks/categories-block/categoriesBlockPropsFactory" {
    import { ICategoryFactory } from "entities/category/factories/categoryFactory";
    const categoriesBlockPropsFactory: (data: any) => Promise<{
        title: any;
        categories: ICategoryFactory[];
        hideTitle: boolean;
        disposition: any;
    }>;
    export default categoriesBlockPropsFactory;
}
declare module "components/blocks/articles-block/articlesBlockPropsFactory" {
    import { IArticleFactory } from "entities/article/factories/articleFactory";
    const articlesBlockPropsFactory: (data: any) => Promise<{
        title: any;
        articles: IArticleFactory[];
        hideTitle: boolean;
        disposition: any;
    }>;
    export default articlesBlockPropsFactory;
}
declare module "components/blocks/search/searchBlockPropsFactory" {
    const searchBlockPropsFactory: () => {};
    export default searchBlockPropsFactory;
}
declare module "entities/menu/factories/menuItemFactory" {
    import MenuItem from "entities/menu/MenuItem";
    export interface IMenuItemFactory {
        title: string;
        position: number;
        href?: string;
        subitems: Array<IMenuItemFactory>;
    }
    const createMenuItem: (menuData: IMenuItemFactory) => MenuItem;
    export default createMenuItem;
}
declare module "api/parser/cscart/Menu" {
    import { IMenuItemFactory } from "entities/menu/factories/menuItemFactory";
    export interface IMenuItem {
        param_id?: string;
        param_2?: string;
        param_3?: string;
        param_4?: string;
        param_5?: string;
        status?: string;
        position?: string;
        parent_id?: string;
        id_path?: string;
        class?: string;
        new_window?: number;
        item: string;
        href: string;
        level: number;
        subitems?: Array<IMenuItem>;
    }
    export const castMenuItem: (item: IMenuItem) => Promise<IMenuItemFactory>;
}
declare module "entities/menu/factories/menuFactory" {
    import Menu from "entities/menu/Menu";
    import { IMenuItemFactory } from "entities/menu/factories/menuItemFactory";
    export interface IMenuFactory {
        items: Array<IMenuItemFactory>;
    }
    const createMenu: (menuData: IMenuFactory) => Menu;
    export default createMenu;
}
declare module "components/blocks/menu-block/menuBlockPropsFactory" {
    import { IMenuItemFactory } from "entities/menu/factories/menuItemFactory";
    const menuBlockPropsFactory: (data: any) => Promise<{
        classModifier: any;
        title: any;
        menu: {
            items: IMenuItemFactory[];
        };
        hideTitle: boolean;
        disposition: any;
    }>;
    export default menuBlockPropsFactory;
}
declare module "components/blocks/language-selector-block/languageSelectorBlockPropsFactory" {
    const languageSelectorBlockPropsFactory: (data: any) => {
        title: any;
        hideTitle: boolean;
    };
    export default languageSelectorBlockPropsFactory;
}
declare module "components/blocks/currency-selector-block/currencySelectorBlockPropsFactory" {
    const currencySelectorBlockPropsFactory: (data: any) => {
        title: any;
        hideTitle: boolean;
    };
    export default currencySelectorBlockPropsFactory;
}
declare module "components/layout-handler/LayoutHandler" {
    import React from 'react';
    import { IProps } from "components/layout-handler/ILayoutHandler";
    import '../blocks/blocks.css';
    import './LayoutHandler.css';
    /**
     * Layout handler is a HOC to receive from API page structure
     * and display it with supported blocks filling
     *
     * @param props
     */
    const LayoutHandler: React.FC<IProps>;
    export default LayoutHandler;
}
declare module "entities/services/screen/ScreenService" {
    import React from 'react';
    class ScreenService {
        protected _screens: IScreens;
        registerScreen(screen: IScreen): void;
        getScreenComponent(route: string): React.LazyExoticComponent<any> | undefined;
        getScreen(route: string): IScreen | undefined;
        map(callback: (screen: IScreen) => any): Array<IScreen>;
    }
    export default ScreenService;
    interface IScreen {
        route: string;
        exact?: boolean;
        auth?: boolean;
        /**
         * Form or any other component to be display as a screen component
         */
        component?: React.LazyExoticComponent<any>;
        /**
         * Callback to fire before a screen component will be mount
         */
        beforeMount?: () => void;
    }
    interface IScreens {
        [code: string]: IScreen;
    }
}
declare module "components/screen-handler/screen-service/screenService" {
    import ScreenService from "entities/services/screen/ScreenService";
    const screenService: ScreenService;
    export default screenService;
}
declare module "entities/services/extension-api/ExtensionApiService" {
    /**
     * Allows to register custom extension`s api
     */
    class ExtensionApiService {
        protected _extensions: IExtensions;
        register(extension: IExtension): void;
        getApi<T = any>(code: string): T | undefined;
        get(code: string): IExtension | undefined;
    }
    export default ExtensionApiService;
    interface IExtension<T = any> {
        code: string;
        api: T;
    }
    interface IExtensions {
        [code: string]: IExtension;
    }
}
declare module "services/extension-api/extensionApiService" {
    import ExtensionApiService from "entities/services/extension-api/ExtensionApiService";
    const extensionApiService: ExtensionApiService;
    export default extensionApiService;
}
declare module "components/subcomponents/page-load-indicator/IPageLoadIndicator" {
    export interface IOwnProps {
    }
    export interface IStateProps {
        isLoading: boolean;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/page-load-indicator/PageLoadIndicator" {
    import React from 'react';
    import { IProps } from "components/subcomponents/page-load-indicator/IPageLoadIndicator";
    import './PageLoadIndicator.css';
    const PageLoadIndicator: React.FC<IProps>;
    export default PageLoadIndicator;
}
declare module "components/subcomponents/page-load-indicator/PageLoadIndicatorContainer" {
    import { StoreState } from "redux/types/index";
    import { IStateProps, IDispatchProps, IOwnProps } from "components/subcomponents/page-load-indicator/IPageLoadIndicator";
    export const registerIsLoading: <T extends Record<string, unknown> = any>(isLoading: (state: T) => boolean) => void;
    export function mapStateToProps(state: StoreState): IStateProps;
    export function mapDispatchToProps(): IDispatchProps;
    const _default_33: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IProps>, Pick<import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IProps, never> & IOwnProps>;
    export default _default_33;
}
declare module "utils/import/dynamicImportComponentWithRedux" {
    /**
     * Resolves component import promise only after importing redux/epics
     */
    export const dynamicImportComponentWithRedux: (code: string) => (componentPromise: Promise<any>, reduxPromise?: Promise<any> | undefined, epicsPromise?: Promise<any> | undefined) => Promise<any>;
}
declare module "components/subcomponents/back-button/IBackButton" {
    export interface IOwnProps {
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/back-button/BackButton.messages" {
    const _default_34: {
        back: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_34;
}
declare module "components/subcomponents/back-button/BackButton" {
    import React from 'react';
    import { IProps } from "components/subcomponents/back-button/IBackButton";
    import './BackButton.css';
    /**
     * Back button
     * Moves to previous page on click
     */
    const BackButton: React.FC<IProps>;
    export default BackButton;
}
declare module "entities/breadcrumb/IBreadcrumb" {
    interface IBreadcrumb {
        url: string;
        title: string;
    }
    export default IBreadcrumb;
}
declare module "entities/breadcrumb/Breadcrumb" {
    import IBreadcrumb from "entities/breadcrumb/IBreadcrumb";
    /**
     * Entity for breadcrumb representation
     */
    class Breadcrumb implements IBreadcrumb {
        url: string;
        title: string;
        constructor(breadcrumb: IBreadcrumb);
    }
    export default Breadcrumb;
}
declare module "entities/breadcrumb/BreadcrumbsPath" {
    import Breadcrumb from "entities/breadcrumb/Breadcrumb";
    import IBreadcrumb from "entities/breadcrumb/IBreadcrumb";
    class BreadcrumbsPath {
        breadcrumbs: Array<Array<Breadcrumb>>;
        constructor(breadcrumbs: Array<Array<Breadcrumb>>);
        append(breadcrumb: IBreadcrumb): BreadcrumbsPath;
        prepend(breadcrumb: IBreadcrumb): BreadcrumbsPath;
        isEmpty(): boolean;
        get levels(): Breadcrumb[][];
        merge(path: BreadcrumbsPath | undefined, offset?: number): BreadcrumbsPath;
    }
    export default BreadcrumbsPath;
}
declare module "components/subcomponents/breadcrumbs/IBreadcrumbs" {
    import BreadcrumbsPath from "entities/breadcrumb/BreadcrumbsPath";
    export interface IOwnProps {
        breadcrumbsPath?: BreadcrumbsPath;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/breadcrumbs/Breadcrumbs.messages" {
    const _default_35: {
        ariaLabel: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_35;
}
declare module "components/subcomponents/breadcrumbs/Breadcrumbs" {
    import React from 'react';
    import Breadcrumb from "entities/breadcrumb/Breadcrumb";
    import { IProps } from "components/subcomponents/breadcrumbs/IBreadcrumbs";
    import './Breadcrumbs.css';
    /**
     * Breadcrumbs component
     *
     * @param { IProps } props
     */
    const Breadcrumbs: React.FC<IProps>;
    export const Item: React.FC<{
        breadcrumb: Breadcrumb;
    }>;
    export default Breadcrumbs;
}
declare module "components/subcomponents/carousel/ICarousel" {
    export interface IOwnProps {
        images?: Array<string>;
        thumbnails?: Array<string>;
        className?: string;
    }
}
declare module "components/subcomponents/carousel/Carousel" {
    import React from 'react';
    import 'slick-carousel/slick/slick.css';
    import '../../../styles/vendors/slick.custom.css';
    import { IOwnProps } from "components/subcomponents/carousel/ICarousel";
    import './Carousel.css';
    /**
     * Carousel with thumbnails
     *
     * @param {IOwnProps} props
     */
    const Carousel: React.FC<IOwnProps>;
    /**
     * Fix slick slider on cases when slidesToShow is more than images count
     *
     * @param {number} childrenCount
     * @param {number} slidesToShowCount
     *
     * @returns number - how many items to be shown in real
     */
    export const fixSlidesToShow: (childrenCount: number, slidesToShowCount: number) => number;
    /**
     * Fix slick slider center mode
     *
     * @param {numer} childrenCount
     * @param {number} slidesToShowCount
     *
     * @returns boolean - should set center mode if number of items is less then slidesToShow
     */
    export const fixCenterMode: (childrenCount: number, slidesToShowCount: number) => boolean;
    export default Carousel;
}
declare module "components/subcomponents/close-button/ICloseButton" {
    export interface IOwnProps {
        onClick: () => void;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/close-button/CloseButton.messages" {
    const _default_36: {
        close: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_36;
}
declare module "components/subcomponents/close-button/CloseButton" {
    import React from 'react';
    import { IProps } from "components/subcomponents/close-button/ICloseButton";
    /**
     * Close button
     *
     * @param props
     */
    const CloseButton: React.FC<IProps>;
    export default CloseButton;
}
declare module "components/subcomponents/divider/IDivider" {
    export interface IOwnProps {
        text?: string;
        className?: string;
    }
}
declare module "components/subcomponents/divider/Divider" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/divider/IDivider";
    import './Divider.css';
    const Divider: React.FC<IOwnProps>;
    export default Divider;
}
declare module "components/subcomponents/drawer/IDrawer" {
    import { SwipeableDrawerProps } from '@material-ui/core/SwipeableDrawer';
    export interface IOwnProps {
        children: React.ReactNode;
        className?: string;
        id: string;
        position?: SwipeableDrawerProps['anchor'];
    }
    export interface IStateProps {
        isOpened: boolean;
    }
    export interface IDispatchProps {
        openDrawer: (id: string) => void;
        closeDrawer: (id: string) => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/drawer/Drawer" {
    import React from 'react';
    import { IProps } from "components/subcomponents/drawer/IDrawer";
    import './Drawer.css';
    const Drawer: React.FC<IProps>;
    export default Drawer;
}
declare module "components/subcomponents/drawer/DrawerContainer" {
    import { IOwnProps } from "components/subcomponents/drawer/IDrawer";
    const _default_37: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/drawer/IDrawer").IProps>, Pick<import("components/subcomponents/drawer/IDrawer").IProps, "className" | "id" | "children" | "position"> & IOwnProps>;
    export default _default_37;
}
declare module "components/subcomponents/key-value-table/IKeyValueTable" {
    export interface IOwnProps {
        /**
         * key: value object:
         * {
         *  name: 'John',
         *  phone: '+7 100 100 10 10',
         * }
         */
        items: any | Array<IItem>;
        /**
         * Justify key and value inside rows
         */
        justify?: boolean;
        className?: string;
        /**
         * Show rows with no value
         */
        showEmpty?: boolean;
        /**
         * Title for a table
         */
        title?: string;
        topDivider?: boolean;
        bottomDivider?: boolean;
    }
    export interface IItem {
        key: any;
        value: any;
    }
}
declare module "components/subcomponents/key-value-table/KeyValueTable" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/key-value-table/IKeyValueTable";
    import './KeyValueTable.css';
    /**
     * Table for display objects with key-value structure like a table
     *
     * @param {IOwnProps} props
     */
    const KeyValueTable: React.FC<IOwnProps>;
    export default KeyValueTable;
}
declare module "components/subcomponents/feature/IFeatureTable" {
    import ProductFeature from "entities/product/ProductFeature";
    export interface IOwnProps {
        features: Array<ProductFeature>;
    }
}
declare module "components/subcomponents/feature/FeatureTable" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/feature/IFeatureTable";
    import './FeatureTable.css';
    /**
     * Product features table
     *
     * @param props
     */
    const FeatureTable: React.FC<IOwnProps>;
    export default FeatureTable;
}
declare module "components/subcomponents/filters/variant-selector/IVariantSelector" {
    export interface IOwnProps {
        variants: Array<{
            label: string;
            name: string | number;
            checked?: boolean;
            disabled: boolean;
        }>;
        onChange: (selected: any) => void;
    }
}
declare module "components/subcomponents/filters/variant-selector/VariantSelector" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/filters/variant-selector/IVariantSelector";
    import './VariantSelector.css';
    /**
     * Group of checkboxes
     * @param props
     */
    const VariantSelector: React.FC<IOwnProps>;
    export default VariantSelector;
}
declare module "components/subcomponents/filters-button/IFiltersButton" {
    export interface IOwnProps {
        className?: string;
        children?: React.ReactNode;
    }
    export interface IStateProps {
        isOpened: boolean;
    }
    export interface IDispatchProps {
        open: () => void;
        close: () => void;
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/filters-button/FiltersButton" {
    import React from 'react';
    import { IProps } from "components/subcomponents/filters-button/IFiltersButton";
    import './FiltersButton.css';
    /**
     * Opens drawer with filters
     *
     * @param props
     */
    const FiltersButton: React.FC<IProps>;
    export default FiltersButton;
}
declare module "components/subcomponents/filters-button/FiltersButtonContainer" {
    import { IOwnProps } from "components/subcomponents/filters-button/IFiltersButton";
    const _default_38: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/filters-button/IFiltersButton").IProps>, Pick<import("components/subcomponents/filters-button/IFiltersButton").IProps, "className" | "children"> & IOwnProps>;
    export default _default_38;
}
declare module "components/subcomponents/hide-on-scroll/IHideOnScroll" {
    export interface IOwnProps {
        children: React.ReactElement<any, any>;
    }
}
declare module "components/subcomponents/hide-on-scroll/HideOnScroll" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/hide-on-scroll/IHideOnScroll";
    const HideOnScroll: React.FC<IOwnProps>;
    export default HideOnScroll;
}
declare module "components/subcomponents/home-button/IHomeButton" {
    export interface IOwnProps {
        size?: number;
        className?: string;
        label?: string;
    }
}
declare module "components/subcomponents/home-button/HomeButton" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/home-button/IHomeButton";
    /**
     * Returns to home page
     *
     * @param props
     */
    const HomeButton: React.FC<IOwnProps>;
    export default HomeButton;
}
declare module "components/subcomponents/iframe/IIFrame" {
    export interface IOwnProps {
        html?: string;
        src?: string;
        className?: string;
        title: string;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/iframe/IFrame" {
    import React from 'react';
    import { IProps } from "components/subcomponents/iframe/IIFrame";
    const IFrame: React.FC<IProps>;
    export default IFrame;
}
declare module "components/subcomponents/inactive-handler/IInactiveHandler" {
    export interface IOwnProps {
        inactive: boolean;
    }
}
declare module "components/subcomponents/inactive-handler/InactiveHandler" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/inactive-handler/IInactiveHandler";
    import './InactiveHandler.css';
    /**
     * Wrapper with inactive indicator for components with inactive state
     */
    const InactiveHandler: React.FC<IOwnProps>;
    export default InactiveHandler;
}
declare module "components/subcomponents/input/IInput" {
    export interface IOwnProps {
        ref?: ((instance: HTMLDivElement) => void) | React.RefObject<HTMLDivElement>;
        id?: string;
        label?: string;
        className?: string;
        value?: string;
        error?: boolean;
        helperText?: string;
        disabled?: boolean;
        fullWidth?: boolean;
        multiline?: boolean;
    }
    export type IProps = IOwnProps & React.InputHTMLAttributes<HTMLInputElement>;
}
declare module "components/subcomponents/input/Input" {
    import React from 'react';
    import { IProps } from "components/subcomponents/input/IInput";
    /**
     * Base text input component
     *
     * @param props
     */
    export const Input: React.FC<IProps>;
    export default Input;
}
declare module "components/subcomponents/load-more/ILoadMore" {
    export interface IOwnProps {
        /**
         * Items per page
         */
        limit?: number;
        /**
         * Current page number
         */
        page?: number;
        /**
         * Total items
         */
        total?: number;
        /**
         * onClick event handler
         */
        onLoadMore: () => void;
        /**
         * Is in loading state
         */
        isLoading: boolean;
    }
}
declare module "components/subcomponents/load-more/LoadMore.messages" {
    const _default_39: {
        buttonLabel: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_39;
}
declare module "components/subcomponents/load-more/LoadMore" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/load-more/ILoadMore";
    import './LoadMore.css';
    const LoadMore: React.FC<IOwnProps>;
    export default LoadMore;
}
declare module "components/subcomponents/modal/full-screen/IFullScreenModal" {
    export interface IOwnProps {
        children: React.ReactNode;
        onClose?: () => void;
        className?: string;
        title?: JSX.Element;
    }
}
declare module "components/subcomponents/modal/full-screen/FullScreenModal" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/modal/full-screen/IFullScreenModal";
    import './FullScreenModal.css';
    const FullScreenModal: React.FC<IOwnProps>;
    export default FullScreenModal;
}
declare module "components/subcomponents/no-content/INoContent" {
    export interface IOwnProps {
        icon?: JSX.Element;
        className?: string;
    }
}
declare module "components/subcomponents/no-content/NoContent.messages" {
    const definedMessages: {
        title: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/no-content/NoContent" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/no-content/INoContent";
    import './NoContent.css';
    const NoContent: React.FC<IOwnProps>;
    export default NoContent;
}
declare module "components/subcomponents/no-content/no-content-handler/INoContentHandler" {
    export interface IOwnProps {
        icon?: JSX.Element;
        content?: JSX.Element;
        className?: string;
    }
}
declare module "components/subcomponents/no-content/no-content-handler/NoContentHandler" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/no-content/no-content-handler/INoContentHandler";
    /**
     * Returns NoContent component if all of the children passed to
     * this components are null.
     * Works only with conditional renders for children.
     */
    const NoContentHandler: React.FC<IOwnProps>;
    export default NoContentHandler;
}
declare module "components/subcomponents/notifier/INotifier" {
    export interface IOwnProps {
        info?: boolean;
        success?: boolean;
        warning?: boolean;
        error?: boolean;
        className?: string;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/notifier/Notifier" {
    import React from 'react';
    import { IProps } from "components/subcomponents/notifier/INotifier";
    const Notifier: React.FC<IProps>;
    export default Notifier;
}
declare module "components/subcomponents/offline-panel/IOfflinePanel" {
    export interface IOwnProps {
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/offline-panel/OfflinePanel.messages" {
    const _default_40: {
        offline: {
            id: string;
            defaultMessage: string;
        };
        offlineTitle: {
            id: string;
            defaultMessage: string;
        };
        offlineDescription: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_40;
}
declare module "components/subcomponents/offline-panel/OfflinePanel" {
    import React from 'react';
    import { IProps } from "components/subcomponents/offline-panel/IOfflinePanel";
    import './OfflinePanel.css';
    /**
     * Offline panel component
     * Detects offline & online events
     */
    const OfflinePanel: React.FC<IProps>;
    export const onOfflinePanelShow: () => void;
    export const onOfflinePanelHide: () => void;
    export default OfflinePanel;
}
declare module "components/subcomponents/option/variant/IOptionVariant" {
    import ProductOptionVariant from "entities/product/ProductOptionVariant";
    export interface IOwnProps {
        variant: ProductOptionVariant;
        onClick: (value: any) => void;
        selected: boolean;
        withImage: boolean;
        readonly?: boolean;
    }
}
declare module "components/subcomponents/option/variant/OptionVariant" {
    import React from 'react';
    import ProductOption from "entities/product/ProductOption";
    import ProductOptionVariant from "entities/product/ProductOptionVariant";
    import { IOwnProps } from "components/subcomponents/option/variant/IOptionVariant";
    import './OptionVariant.css';
    const OptionVariant: React.FC<IOwnProps>;
    export const getPriceWithAppliedOptions: (options: Array<ProductOption>, productBasePrice: number, currentOptionId: number) => number;
    export const getVariantPrice: (variant: ProductOptionVariant, productBasePrice: number) => number;
    export default OptionVariant;
}
declare module "components/subcomponents/option/select/IOptionSelect" {
    import ProductOption from "entities/product/ProductOption";
    export interface IOwnProps {
        option: ProductOption;
        onChange: (value: any) => void;
        readonly?: boolean;
    }
}
declare module "components/subcomponents/option/select/OptionSelect" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/option/select/IOptionSelect";
    import './OptionSelect.css';
    const OptionSelect: React.FC<IOwnProps>;
    export default OptionSelect;
}
declare module "components/subcomponents/option/text/IOptionText" {
    import ProductOption from "entities/product/ProductOption";
    export interface IOwnProps {
        option: ProductOption;
        onChange: (value: string) => void;
        readonly?: boolean;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/option/text/OptionText" {
    import React from 'react';
    import { IProps } from "components/subcomponents/option/text/IOptionText";
    import './OptionText.css';
    const OptionText: React.FC<IProps>;
    export default OptionText;
}
declare module "components/subcomponents/option/IOptionSection" {
    import ProductOption from "entities/product/ProductOption";
    export interface IOwnProps {
        option: ProductOption;
        onChange: (value: number | string) => void;
        readonly?: boolean;
    }
}
declare module "components/subcomponents/option/OptionSection" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/option/IOptionSection";
    import './OptionSection.css';
    const OptionSection: React.FC<IOwnProps>;
    export default OptionSection;
}
declare module "components/subcomponents/option/selected/IProductOptionsSelected" {
    import ProductOptionSelected from "entities/product/IProductOptionSelected";
    export interface IOwnProps {
        productOptionsSelected: Array<ProductOptionSelected>;
        className?: string;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/option/selected/ProductOptionsSelected" {
    import React from 'react';
    import { IProps } from "components/subcomponents/option/selected/IProductOptionsSelected";
    import './ProductOptionsSelected.css';
    const ProductOptionsSelected: React.FC<IProps>;
    export default ProductOptionsSelected;
}
declare module "contexts/parent/ParentContext" {
    import React from 'react';
    import Parent from "entities/parent/Parent";
    const ParentContext: React.Context<Parent[] | null>;
    export default ParentContext;
}
declare module "components/subcomponents/parents/IParents" {
    import Parent from "entities/parent/Parent";
    export interface IOwnProps {
        parents: Array<Parent>;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/parents/Parents" {
    import React from 'react';
    import { IProps } from "components/subcomponents/parents/IParents";
    import './Parents.css';
    const Parents: React.FC<IProps>;
    export default Parents;
}
declare module "components/subcomponents/price-range/IPriceRange" {
    export interface IOwnProps {
        min: number;
        max: number;
        from?: number;
        to?: number;
        onChange: (from: number, to: number) => void;
    }
}
declare module "components/subcomponents/price-range/PriceRange" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/price-range/IPriceRange";
    import './PriceRange.css';
    const PriceRange: React.FC<IOwnProps>;
    export default PriceRange;
}
declare module "components/subcomponents/quantity-selector/QuantitySelector.messages" {
    const definedMessages: {
        down: {
            id: string;
            defaultMessage: string;
        };
        up: {
            id: string;
            defaultMessage: string;
        };
        maximumReached: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/quantity-selector/IQuantitySelector" {
    export interface IOwnProps {
        onChange: (quantity: number) => void;
        initialValue?: number;
        step?: number;
        minimum?: number;
        maximum?: number;
    }
}
declare module "components/subcomponents/tooltip/ITooltip" {
    export interface IOwnProps {
        title: string;
        children: React.ReactElement;
        open: boolean;
        onClose?: (event: React.ChangeEvent<{}>) => void;
        onOpen?: (event: React.ChangeEvent<{}>) => void;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/tooltip/Tooltip" {
    import React from 'react';
    import { IProps } from "components/subcomponents/tooltip/ITooltip";
    const Tooltip: React.FC<IProps>;
    export default Tooltip;
}
declare module "components/subcomponents/quantity-selector/QuantitySelector" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/quantity-selector/IQuantitySelector";
    import './QuantitySelector.css';
    const QuantitySelector: React.FC<IOwnProps>;
    export default QuantitySelector;
}
declare module "components/subcomponents/rating/overview/IRatingOverview" {
    import ReviewsThread from "entities/testimonial/ReviewsThread";
    import ReviewableEntities from "constants/ReviewableEntities";
    export interface IOwnProps {
        id: number;
        type: ReviewableEntities;
    }
    export interface IStateProps {
        thread?: ReviewsThread;
        isRequesting: boolean;
    }
    export interface IDispatchProps {
    }
    export type IProps = IOwnProps & IStateProps & IDispatchProps;
}
declare module "components/subcomponents/rating/overview/RatingOverview" {
    import React from 'react';
    import { IProps } from "components/subcomponents/rating/overview/IRatingOverview";
    const RatingOverview: React.FC<IProps>;
    export default RatingOverview;
}
declare module "components/subcomponents/rating/overview/RatingOverviewContainer" {
    import { IOwnProps } from "components/subcomponents/rating/overview/IRatingOverview";
    const _default_41: import("react-redux").ConnectedComponent<import("react").FC<import("components/subcomponents/rating/overview/IRatingOverview").IProps>, Pick<import("components/subcomponents/rating/overview/IRatingOverview").IProps, "type" | "id"> & IOwnProps>;
    export default _default_41;
}
declare module "components/subcomponents/select/ISelect" {
    export interface IOwnProps {
        ref?: ((instance: HTMLSelectElement) => void) | React.RefObject<HTMLSelectElement>;
        options: Array<{
            value: string | number;
            label: string;
        }>;
        name: string;
        description: string;
        fullWidth?: boolean;
        error?: boolean;
        helperText?: string;
        disabled?: boolean;
        value?: unknown;
        onChange?: (event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>) => void;
    }
    export type IProps = IOwnProps & React.InputHTMLAttributes<HTMLSelectElement>;
}
declare module "components/subcomponents/select/Select" {
    import React from 'react';
    import { IProps } from "components/subcomponents/select/ISelect";
    const Select: React.FC<IProps>;
    export default Select;
}
declare module "components/subcomponents/selection/ISelectionHandler" {
    export interface IOwnProps {
    }
}
declare module "components/subcomponents/selection/SelectionHandler" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/selection/ISelectionHandler";
    import './SelectionHandler.css';
    const SelectionHandler: React.FC<IOwnProps>;
    export default SelectionHandler;
}
declare module "components/subcomponents/selection/sort/ISelectionSort" {
    export interface IOwnProps {
        items: Array<{
            value: string;
            name: string;
            order: string;
        }>;
        value: any;
        onChange: (value: string) => void;
    }
}
declare module "components/subcomponents/selection/sort/SelectionSort" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/selection/sort/ISelectionSort";
    import './SelectionSort.css';
    const SelectionSort: React.FC<IOwnProps>;
    export default SelectionSort;
}
declare module "components/subcomponents/status/IStatus" {
    import Status from "entities/status/Status";
    export interface IOwnProps {
        status: Status;
        className?: string;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/status/Status" {
    import React from 'react';
    import { IProps } from "components/subcomponents/status/IStatus";
    import './Status.css';
    const Status: React.FC<IProps>;
    export default Status;
}
declare module "components/subcomponents/steps-handler/StepsHandler.messages" {
    const definedMessages: {
        next: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/steps-handler/IStepsHandler" {
    export interface IOwnProps {
        name?: string;
        onFinish?: () => void;
        finishComponent?: () => void;
        children: Array<JSX.Element>;
        childrenClassName?: string;
        className?: string;
        showAll?: boolean;
        canContinue?: (stepId: number) => boolean;
    }
    export type IProps = IOwnProps;
}
declare module "components/subcomponents/steps-handler/StepsHandler" {
    import React from 'react';
    import { IProps } from "components/subcomponents/steps-handler/IStepsHandler";
    import './StepsHandler.css';
    const StepsHandler: React.FC<IProps>;
    export default StepsHandler;
}
declare module "components/subcomponents/sticky-nav/IStickyNav" {
    export interface IOwnProps {
        className?: string;
        /**
         * Class will mix to body's class
         */
        bodyMixin?: string;
    }
}
declare module "components/subcomponents/sticky-nav/StickyNav" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/sticky-nav/IStickyNav";
    import './StickyNav.css';
    const StickyNav: React.FC<IOwnProps>;
    export default StickyNav;
}
declare module "components/subcomponents/tabs/ITabs" {
    export interface IOwnProps {
        children: Array<React.ReactNode>;
        panels: Array<React.ReactNode>;
        ariaLabel: string;
    }
}
declare module "components/subcomponents/tabs/panel/ITabPanel" {
    export interface IOwnProps {
        index: any;
        value: any;
        className?: string;
        children: React.ReactNode;
    }
}
declare module "components/subcomponents/tabs/panel/TabPanel" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/tabs/panel/ITabPanel";
    import './TabPanel.css';
    const TabPanel: React.FC<IOwnProps>;
    export default TabPanel;
}
declare module "components/subcomponents/tabs/Tabs" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/tabs/ITabs";
    import './Tabs.css';
    const Tabs: React.FC<IOwnProps>;
    export default Tabs;
}
declare module "components/subcomponents/tabs/tab/ITab" {
    export interface IOwnProps {
        children?: React.ReactNode;
        label: React.ReactNode;
        icon?: React.ReactElement;
        disabled?: boolean;
    }
}
declare module "components/subcomponents/tabs/tab/Tab" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/tabs/tab/ITab";
    import './Tab.css';
    /**
     * Single tab navigation button
     *
     * @param {IOwnProps} props
     */
    const Tab: React.FC<IOwnProps>;
    export default Tab;
}
declare module "components/subcomponents/testimonial/ITestimonial" {
    import Testimonial from "entities/testimonial/Testimonial";
    export interface IOwnProps {
        testimonial: Testimonial;
    }
}
declare module "components/subcomponents/testimonial/Testimonial" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/testimonial/ITestimonial";
    import './Testimonial.css';
    /**
     * Testimonial single view component
     *
     * @param {IOwnProps} props
     */
    const Testimonial: React.FC<IOwnProps>;
    export default Testimonial;
}
declare module "components/subcomponents/toggle-search-button/IToggleSearchButton" {
    export interface IOwnProps {
        onClick: () => void;
        className?: string;
    }
}
declare module "components/subcomponents/toggle-search-button/ToggleSearchButton.messages" {
    const _default_42: {
        title: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_42;
}
declare module "components/subcomponents/toggle-search-button/ToggleSearchButton" {
    import React from 'react';
    import { IOwnProps } from "components/subcomponents/toggle-search-button/IToggleSearchButton";
    import './ToggleSearchButton.css';
    const ToggleSearchButton: React.FC<IOwnProps>;
    export default ToggleSearchButton;
}
declare module "components/subcomponents/dynamic-form/IDynamicForm" {
    import { WrappedComponentProps } from 'react-intl';
    import FormSchema from "entities/form/FormSchema";
    export interface IOwnProps {
        submitTitle?: string;
        isRequesting: boolean;
        error?: string | null;
        secondButton?: React.ReactNode;
        schema: FormSchema;
        onSubmit?: (values: any) => void;
        onChange?: (data: any, isValid: boolean) => void;
        onCancel?: () => void;
        className?: string;
        onIsValidChange?: (isValid: boolean) => void;
        enableReinitialize?: boolean;
        initialValues?: Record<string, string | number | undefined>;
    }
    export interface IOwnFormValues {
    }
    export type IProps = IOwnProps & WrappedComponentProps;
}
declare module "components/subcomponents/dynamic-form/DynamicForm.messages" {
    const definedMessages: {
        email: {
            id: string;
            defaultMessage: string;
        };
        password: {
            id: string;
            defaultMessage: string;
        };
        tooShort: {
            id: string;
            defaultMessage: string;
        };
        tooLong: {
            id: string;
            defaultMessage: string;
        };
        required: {
            id: string;
            defaultMessage: string;
        };
        invalidEmail: {
            id: string;
            defaultMessage: string;
        };
        submitTitle: {
            id: string;
            defaultMessage: string;
        };
        resetTitle: {
            id: string;
            defaultMessage: string;
        };
    };
    export default definedMessages;
}
declare module "components/subcomponents/checkbox/ICheckbox" {
    export interface IOwnProps {
        ref?: ((instance: HTMLButtonElement) => void) | React.RefObject<HTMLButtonElement>;
        id?: string;
        label: string;
        description?: string;
        className?: string;
        value?: string;
        disabled?: boolean;
        fullWidth?: boolean;
        multiline?: boolean;
    }
    export type IProps = IOwnProps & React.InputHTMLAttributes<HTMLInputElement>;
}
declare module "components/subcomponents/checkbox/Checkbox.messages" {
    const _default_43: {
        expandAria: {
            id: string;
            defaultMessage: string;
        };
    };
    export default _default_43;
}
declare module "components/subcomponents/checkbox/Checkbox" {
    import React from 'react';
    import { IProps } from "components/subcomponents/checkbox/ICheckbox";
    /**
     * Base checkbox component
     *
     * @param props
     */
    export const Checkbox: React.FC<IProps>;
    export default Checkbox;
}
declare module "components/subcomponents/dynamic-form/DynamicForm" {
    import React from 'react';
    import { FormikProps } from 'formik';
    import { IProps, IOwnFormValues } from "components/subcomponents/dynamic-form/IDynamicForm";
    import './DynamicForm.css';
    /**
     * Builder for custom forms with validation by scheme
     *
     * @param props
     */
    const DynamicForm: React.FC<IProps & FormikProps<IOwnFormValues>>;
    export default DynamicForm;
}
declare module "components/subcomponents/dynamic-form/DynamicFormContainer" {
    import React from 'react';
    import { IProps } from "components/subcomponents/dynamic-form/IDynamicForm";
    import FormSchema from "entities/form/FormSchema";
    type ResolverType<T> = Omit<T, 'schema'> & FormSchemaPromise;
    export interface FormSchemaPromise {
        schema: Promise<FormSchema> | FormSchema;
    }
    const FormWithFormikAndIntl: React.ForwardRefExoticComponent<Pick<ResolverType<IProps>, "className" | "onChange" | "onSubmit" | "error" | "schema" | "isRequesting" | "onCancel" | "submitTitle" | "onIsValidChange" | "secondButton" | "enableReinitialize" | "initialValues"> & {
        forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
    } & React.RefAttributes<any>> & {
        WrappedComponent: React.ComponentType<ResolverType<IProps>>;
    };
    export default FormWithFormikAndIntl;
}
/// <amd-module name="pwajet" />
declare module "pwajet" {
    import React from 'react';
    import { IInjectMessages } from "intl/TranslationsEvent";
    import Button from "components/subcomponents/button/Button";
    import { injectReducer } from "redux/store/index";
    import { AbstractRequest } from 'cscart-sdk';
    import { DatabaseHooks } from "db/Database";
    import * as url from "url/index";
    const internals: {
        core: {
            config: import("config/Config").Config;
            components: {
                Price: React.FC<import("components/subcomponents/price/IPrice").IProps>;
                Button: typeof Button;
                LayoutHandler: React.FC<import("components/layout-handler/ILayoutHandler").IProps>;
                DynamicForm: React.LazyExoticComponent<React.ForwardRefExoticComponent<Pick<Pick<import("components/subcomponents/dynamic-form/IDynamicForm").IProps, "className" | "onChange" | "onSubmit" | "error" | "intl" | "isRequesting" | "onCancel" | "submitTitle" | "onIsValidChange" | "secondButton" | "enableReinitialize" | "initialValues"> & import("components/subcomponents/dynamic-form/DynamicFormContainer").FormSchemaPromise, "className" | "onChange" | "onSubmit" | "error" | "schema" | "isRequesting" | "onCancel" | "submitTitle" | "onIsValidChange" | "secondButton" | "enableReinitialize" | "initialValues"> & {
                    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
                } & React.RefAttributes<any>> & {
                    WrappedComponent: React.ComponentType<Pick<import("components/subcomponents/dynamic-form/IDynamicForm").IProps, "className" | "onChange" | "onSubmit" | "error" | "intl" | "isRequesting" | "onCancel" | "submitTitle" | "onIsValidChange" | "secondButton" | "enableReinitialize" | "initialValues"> & import("components/subcomponents/dynamic-form/DynamicFormContainer").FormSchemaPromise>;
                }>;
                BackButton: React.LazyExoticComponent<React.FC<import("components/subcomponents/back-button/IBackButton").IOwnProps>>;
                Breadcrumbs: React.LazyExoticComponent<React.FC<import("components/subcomponents/breadcrumbs/IBreadcrumbs").IOwnProps>>;
                Carousel: React.LazyExoticComponent<React.FC<import("components/subcomponents/carousel/ICarousel").IOwnProps>>;
                CloseButton: React.LazyExoticComponent<React.FC<import("components/subcomponents/close-button/ICloseButton").IOwnProps>>;
                CurrencySelector: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/currency-selector/ICurrencySelector").IProps>, Pick<import("components/subcomponents/currency-selector/ICurrencySelector").IProps, never> & import("components/subcomponents/currency-selector/ICurrencySelector").IOwnProps>>;
                Divider: React.LazyExoticComponent<React.FC<import("components/subcomponents/divider/IDivider").IOwnProps>>;
                Drawer: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/drawer/IDrawer").IProps>, Pick<import("components/subcomponents/drawer/IDrawer").IProps, "className" | "id" | "children" | "position"> & import("components/subcomponents/drawer/IDrawer").IOwnProps>>;
                FeatureTable: React.LazyExoticComponent<React.FC<import("components/subcomponents/feature/IFeatureTable").IOwnProps>>;
                VariantSelector: React.LazyExoticComponent<React.FC<import("components/subcomponents/filters/variant-selector/IVariantSelector").IOwnProps>>;
                FiltersButton: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/filters-button/IFiltersButton").IProps>, Pick<import("components/subcomponents/filters-button/IFiltersButton").IProps, "className" | "children"> & import("components/subcomponents/filters-button/IFiltersButton").IOwnProps>>;
                Hamburger: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/hamburger/IHamburger").IProps>, Pick<import("components/subcomponents/hamburger/IHamburger").IProps, "className" | "label" | "size" | "onClick"> & import("components/subcomponents/hamburger/IHamburger").IOwnProps>>;
                HideOnScroll: React.LazyExoticComponent<React.FC<import("components/subcomponents/hide-on-scroll/IHideOnScroll").IOwnProps>>;
                HomeButton: React.LazyExoticComponent<React.FC<import("components/subcomponents/home-button/IHomeButton").IOwnProps>>;
                Icon: React.LazyExoticComponent<React.FC<import("components/subcomponents/icon/IIcon").IProps>>;
                IFrame: React.LazyExoticComponent<React.FC<import("components/subcomponents/iframe/IIFrame").IOwnProps>>;
                ImageElement: React.LazyExoticComponent<typeof import("components/subcomponents/image/Image").default>;
                InactiveHandler: React.LazyExoticComponent<React.FC<import("components/subcomponents/inactive-handler/IInactiveHandler").IOwnProps>>;
                Input: React.LazyExoticComponent<React.FC<import("components/subcomponents/input/IInput").IProps>>;
                KeyValueTable: React.LazyExoticComponent<React.FC<import("components/subcomponents/key-value-table/IKeyValueTable").IOwnProps>>;
                Label: React.LazyExoticComponent<React.FC<import("components/subcomponents/label/ILabel").IOwnProps>>;
                LanguageSelector: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/language-selector/ILanguageSelector").IProps>, Pick<import("components/subcomponents/language-selector/ILanguageSelector").IProps, never> & import("components/subcomponents/language-selector/ILanguageSelector").IOwnProps>>;
                LazyLoadHandler: React.LazyExoticComponent<React.FC<import("components/subcomponents/lazy-load-handler/ILazyLoadHandler").IOwnProps>>;
                LoadMore: React.LazyExoticComponent<React.FC<import("components/subcomponents/load-more/ILoadMore").IOwnProps>>;
                LoaderIcon: React.LazyExoticComponent<React.FC<import("components/subcomponents/loader-icon/ILoaderIcon").IOwnProps>>;
                FullScreenModal: React.LazyExoticComponent<React.FC<import("components/subcomponents/modal/full-screen/IFullScreenModal").IOwnProps>>;
                NoContent: React.LazyExoticComponent<React.FC<import("components/subcomponents/no-content/INoContent").IOwnProps>>;
                NoContentHandler: React.LazyExoticComponent<React.FC<import("components/subcomponents/no-content/no-content-handler/INoContentHandler").IOwnProps>>;
                Notifier: React.LazyExoticComponent<React.FC<import("components/subcomponents/notifier/INotifier").IOwnProps>>;
                OfflinePanel: React.LazyExoticComponent<React.FC<import("components/subcomponents/offline-panel/IOfflinePanel").IOwnProps>>;
                OptionSection: React.LazyExoticComponent<React.FC<import("components/subcomponents/option/IOptionSection").IOwnProps>>;
                OptionVariant: React.LazyExoticComponent<React.FC<import("components/subcomponents/option/variant/IOptionVariant").IOwnProps>>;
                OptionText: React.LazyExoticComponent<React.FC<import("components/subcomponents/option/text/IOptionText").IOwnProps>>;
                ProductOptionSelected: React.LazyExoticComponent<React.FC<import("components/subcomponents/option/selected/IProductOptionsSelected").IOwnProps>>;
                OptionSelect: React.LazyExoticComponent<React.FC<import("components/subcomponents/option/select/IOptionSelect").IOwnProps>>;
                PriceRange: React.LazyExoticComponent<React.FC<import("components/subcomponents/price-range/IPriceRange").IOwnProps>>;
                PageLoadIndicator: React.LazyExoticComponent<React.FC<import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IProps>>;
                PageLoadIndicatorContainer: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IProps>, Pick<import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IProps, never> & import("components/subcomponents/page-load-indicator/IPageLoadIndicator").IOwnProps>>;
                Parents: React.LazyExoticComponent<React.FC<import("components/subcomponents/parents/IParents").IOwnProps>>;
                QuantitySelector: React.LazyExoticComponent<React.FC<import("components/subcomponents/quantity-selector/IQuantitySelector").IOwnProps>>;
                Rating: React.LazyExoticComponent<React.FC<import("components/subcomponents/rating/IRating").IOwnProps>>;
                RatingOverview: React.LazyExoticComponent<React.FC<import("components/subcomponents/rating/overview/IRatingOverview").IProps>>;
                RatingOverviewContainer: React.LazyExoticComponent<import("react-redux").ConnectedComponent<React.FC<import("components/subcomponents/rating/overview/IRatingOverview").IProps>, Pick<import("components/subcomponents/rating/overview/IRatingOverview").IProps, "type" | "id"> & import("components/subcomponents/rating/overview/IRatingOverview").IOwnProps>>;
                Select: React.LazyExoticComponent<React.FC<import("components/subcomponents/select/ISelect").IProps>>;
                SelectionHandler: React.LazyExoticComponent<React.FC<import("components/subcomponents/selection/ISelectionHandler").IOwnProps>>;
                SelectionSort: React.LazyExoticComponent<React.FC<import("components/subcomponents/selection/sort/ISelectionSort").IOwnProps>>;
                SelectionSearch: React.LazyExoticComponent<React.FC<import("components/subcomponents/selection/search/ISelectionSearch").IOwnProps>>;
                Autocomplete: React.LazyExoticComponent<React.FC<import("components/subcomponents/selection/autocomplete/IAutocomplete").IOwnProps>>;
                Status: React.LazyExoticComponent<React.FC<import("components/subcomponents/status/IStatus").IOwnProps>>;
                StepsHandler: React.LazyExoticComponent<React.FC<import("components/subcomponents/steps-handler/IStepsHandler").IOwnProps>>;
                StickyNav: React.LazyExoticComponent<React.FC<import("components/subcomponents/sticky-nav/IStickyNav").IOwnProps>>;
                Tabs: React.LazyExoticComponent<React.FC<import("components/subcomponents/tabs/ITabs").IOwnProps>>;
                Tab: React.LazyExoticComponent<React.FC<import("components/subcomponents/tabs/tab/ITab").IOwnProps>>;
                TabPanel: React.LazyExoticComponent<React.FC<import("components/subcomponents/tabs/panel/ITabPanel").IOwnProps>>;
                Testimonial: React.LazyExoticComponent<React.FC<import("components/subcomponents/testimonial/ITestimonial").IOwnProps>>;
                ToggleSearchButton: React.LazyExoticComponent<React.FC<import("components/subcomponents/toggle-search-button/IToggleSearchButton").IOwnProps>>;
                Tooltip: React.LazyExoticComponent<React.FC<import("components/subcomponents/tooltip/ITooltip").IOwnProps>>;
            };
            renderSubscriber: import("utils/event-emitter/EventEmitter").default<import("react/IRenderEvent").default>;
            layoutService: import("entities/services/layout/LayoutService").default;
            layoutHandlerSubscriber: import("utils/event-emitter/AsyncEventEmitter").AsyncEventEmitter<unknown>;
            screenService: import("entities/services/screen/ScreenService").default;
            createLinkUrl: (routeUrl: string, params?: any) => string;
            extensionApiService: import("entities/services/extension-api/ExtensionApiService").default;
            factoryService: import("entities/services/factory/FactoryService").FactoryService;
            parserSubscriber: import("entities/services/parser/ParserEvent").ParserEvent;
            registerIsLoading: <T extends Record<string, unknown> = any>(isLoading: (state: T) => boolean) => void;
            store: {
                injectReducer: typeof injectReducer;
                store: import("redux").Store<import("redux").CombinedState<import("redux/types").StoreState>, import("redux").AnyAction> & {
                    dispatch: unknown;
                };
                injectEpics: (epics: import("redux-observable").Epic<any, any, any, any>[]) => void;
                dynamicImportComponentWithRedux: (code: string) => (componentPromise: Promise<any>, reduxPromise?: Promise<any> | undefined, epicsPromise?: Promise<any> | undefined) => Promise<any>;
            };
            api: {
                AbstractRequest: typeof AbstractRequest;
                requestSubscriber: import("api/request-subscriber/RequestSubscriber").RequestSubscriber;
                client: import("cscart-sdk").default;
            };
            entities: {};
            paymentService: import("entities/services/payment/PaymentService").default;
            mapDatabaseHooksToDatabase: (database: import("dexie").Dexie, hooks: DatabaseHooks) => void;
            DatabaseHooks: typeof DatabaseHooks;
            translations: {
                /**
                 * Pass messages to be added to a global translations list
                 */
                injectTranslations: (newMessages: IInjectMessages['messages']) => void;
            };
            url: typeof url;
        };
    };
    export default internals;
}
