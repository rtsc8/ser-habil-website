import { newText, newMultimedia, newContainer } from './helpers';

const createImages = (dataImages) => {
  const arrayImages = dataImages.map((element, number) => {
    const imagesScenarios = newMultimedia('img', element, ['scenarios__image']);
    const textScenarios = newText('p', element.text, ['scenarios__text']);
    textScenarios.innerHTML = element.text;
    const containerImages = newContainer(
      'div',
      [textScenarios, imagesScenarios],
      [ `scenarios__images--${number}`],
    );
    return containerImages;
  });
  return arrayImages;
};

const scenariosComp = (data) => {
  const mainTitle = newText('h3', data.title, ['scenarios__title']);
  const imagesScenarios = createImages(data.images);
  const principalContainer = newContainer(
    'div',
    [...imagesScenarios],
    ['scenarios__principal-container'],
  );
  const section = newContainer('section', [mainTitle, principalContainer], ['container','scenarios']);

  return section;
};
export { scenariosComp };
