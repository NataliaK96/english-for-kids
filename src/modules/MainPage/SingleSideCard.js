export class SingleSideCard {
  constructor(cardData, header) {
    this.cardWrapper = document.createElement('div');
    this.cardWrapper.classList.add('col-12', 'col-md-6', 'col-lg-3');
    this.node = document.createElement('div');
    this.node.classList.add('card', 'text-white', 'bg-primary', 'mb-3', 'main-page-card');
    this.cardBody = document.createElement('div');
    this.cardBody.classList.add('card-body', 'text-center');
    this.cardImg = document.createElement('img');
    this.cardImg.src = cardData.image;
    this.cardImg.classList.add('card-img-top', 'rounded-circle', 'img-sqr');
    this.cardHeader = document.createElement('h4');
    this.cardHeader.innerHTML = header;
    this.cardHeader.classList.add('card-title');
    this.cardBody.append(this.cardImg, this.cardHeader);
    this.node.append(this.cardBody);
    this.cardWrapper.append(this.node);
  }

  appendTo(node) {
    node.append(this.cardWrapper);
  }

  toGame() {
    this.node.classList.remove('bg-primary');
    this.node.classList.add('bg-success');
  }

  toTrain() {
    this.node.classList.remove('bg-success');
    this.node.classList.add('bg-primary');
  }
}
