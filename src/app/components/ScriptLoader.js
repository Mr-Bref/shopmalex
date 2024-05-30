import useLoadScripts from '@/hooks/useLoadScript';

const ScriptLoader = () => {
    const scripts = [
        { src: '../assets/js/jquery-3.5.1.slim.min.js', id: 'jquery' },
        { src: '../assets/js/bootstrap.bundle.min.js', id: 'bootstrap' },
        { src: '../assets/js/jquery.magnific-popup.min.js', id: 'jquery-popup' },
        { src: '../assets/js/jquery.nice-select.min.js', id: 'niceselect' },
        { src: '../assets/js/wow.min.js', id: 'wowmin' },
        { src: '../assets/js/jquery.ajaxchimp.min.js', id: 'ajaxchimp' },
        { src: '../assets/js/form-validator.min.js', id: 'form-validator' },
        { src: '../assets/js/jquery.validate.js', id: 'validate' },
        { src: '../assets/js/jquery-ui.min.js', id: 'jqueryui' },
        { src: '../assets/js/mixitup.min.js', id: 'mixitup' },
        { src: '../assets/js/slick.min.js', id: 'slick' },
        { src: '../assets/js/meanmenu.js', id: 'meanmenu' },
        { src: '../assets/js/owl.carousel.min.js', id: 'owlcarousel' },
        { src: '../assets/js/custom.js', id: 'customjs' },
    ];

    useLoadScripts(scripts);

    return null;
};

export default ScriptLoader;
