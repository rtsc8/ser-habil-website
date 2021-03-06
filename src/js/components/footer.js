import { newText, newMultimedia, newLink, newContainer } from './helpers';

const createLinks = (dataLinks) => {
  const arrayLinks = dataLinks.map((link) => {
    const linksItems = newLink(link.href, link.text, ['footer__data-links']);
    const listLink = newContainer('li', [linksItems], ['footer__items-list']);

    return listLink;
  });

  return arrayLinks;
};

const createIcons = (dataIcons) => {
  const arrayIcons = dataIcons.map((icons) => {
    const iconsImages = newMultimedia('img', icons.icon, ['footer__icons']);
    const iconsLinks = newLink(icons.href, '', ['footer__icons-links']);
    iconsLinks.target = '_blank';
    iconsLinks.appendChild(iconsImages);

    return iconsLinks;
  });

  return arrayIcons;
};

const footerComp = (data) => {
  const logoFooter = newMultimedia('img', data.logo.image, ['footer__logo']);
  const linkLogo = newLink(data.logo.href, '', ['footer__link-logo']);
  const listLink = createLinks(data.items);
  const items = newContainer('ul', listLink, ['footer__items']);
  const socialText = newText('p', data.socialText, ['footer__social-text']);
  const socialIcons = createIcons(data.socialLinks);
  const containerItems = newContainer(
    'div',
    [socialText, ...socialIcons],
    ['footer__container-items'],
  );
  const containerElements = newContainer(
    'div',
    [items, containerItems],
    ['footer__container-elements'],
  );
  linkLogo.appendChild(logoFooter);
  const footer = newContainer('footer', [linkLogo, containerElements], ['footer']);

  return footer;
};

export { footerComp };
