const createCardInterface = ({
  webformatURL,
  largeImageURL,
  tags,
  views,
  likes,
  comments,
  downloads,
}) => {
  return `<div class="photo-wrap">
  <a class="gallery-link" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy"  class="card-image"/>
  </a>
  <div class="information">
    <p class="information-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="information-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="information-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="information-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div>`;
};

const cardInterface = array => array.map(createCardInterface).join('');
export default cardInterface;
