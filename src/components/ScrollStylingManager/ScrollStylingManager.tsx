import React, {useEffect} from 'react';

const ScrollStylingManager = () => {
    useEffect(() => {
        const handleScroll = () => {
            const selectors = [
                '.breadcrumbsContainer_Ar0W',
                '.theme-doc-markdown header h1',
                '.container_eK_a'
            ];
            console.log(window.scrollY)
            const targetElements = document.querySelectorAll(selectors.join(', '));

            if (window.scrollY >= 140) {
                targetElements.forEach(el => el.classList.add('scrolledClass'));
            } else {
                targetElements.forEach(el => el.classList.remove('scrolledClass'));
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Перевірка одразу при завантаженні
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
};

export default ScrollStylingManager;