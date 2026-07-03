const hero = new URL('./hero.png', import.meta.url).href;
const picture1 = new URL('./Picture 1.jpeg', import.meta.url).href;
const picture2 = new URL('./Picture 2.jpeg', import.meta.url).href;
const picture3 = new URL('./Picture 3.jpeg', import.meta.url).href;
const logo = new URL('./logo.png', import.meta.url).href;
const reactLogo = new URL('./react.svg', import.meta.url).href;
const viteLogo = new URL('./vite.svg', import.meta.url).href;

const images = [picture1, picture2, picture3];

export { hero, picture1, picture2, picture3, logo, reactLogo, viteLogo, images };

export default {
	hero,
	picture1,
	picture2,
	picture3,
	logo,
	reactLogo,
	viteLogo,
	images,
};
