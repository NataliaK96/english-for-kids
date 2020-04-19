import { SingleSideCard } from '../MainPage/SingleSideCard';

export class DubleSideCard extends SingleSideCard {
  constructor(cardData) {
    super(cardData, cardData.word);
    this.cardBody.remove();
    this.cardImg.classList.remove('rounded-circle', 'img-sqr');
    this.cardBodyFront = this.cardBody;
    this.frontSide = document.createElement('div');
    this.frontSide.classList.add('front');
    this.frontSide.append(this.cardBodyFront);
    this.rotateBtnFront = document.createElement('input');
    this.rotateBtnFront.classList.add('card-rotate-btn');
    this.rotateBtnFront.type = 'image';
    this.rotateBtnFront.src = 'img/rotate.svg';
    this.backSide = document.createElement('div');
    this.backSide.classList.add('back');
    this.cardBodyBack = document.createElement('div');
    this.cardBodyBack.classList.add('card-body', 'text-center');
    this.backSide.append(this.cardBodyBack);
    this.cardBodyFront.append(this.rotateBtnFront);
    this.cardImgBack = document.createElement('img');
    this.cardImgBack.src = cardData.image;
    this.cardImgBack.classList.add('card-img-top');
    this.cardHeaderBack = document.createElement('h4');
    this.cardHeaderBack.innerHTML = cardData.translation;
    this.cardHeaderBack.classList.add('card-title');
    this.cardBodyBack.append(this.cardImgBack, this.cardHeaderBack);
    this.node.append(this.frontSide, this.backSide);
    this.node.classList.remove('main-page-card');
    this.rotateBtnFront.addEventListener('click', () => {
      this.node.classList.add('rotate');
    });
    this.node.addEventListener('mouseleave', () => {
      this.node.classList.remove('rotate');
    });
    this.sound = new Audio();
    this.sound.src = cardData.audioSrc;
    this.node.addEventListener('click', (e) => {
      if (this.soundIsOff) return;
      if (e.target !== this.rotateBtnFront) this.say();
    });
  }

  toTrain() {
    this.node.classList.remove('bg-success');
    this.node.classList.add('bg-primary');
    this.cardHeader.classList.remove('d-none');
    this.rotateBtnFront.classList.remove('d-none');
    this.soundIsOff = false;
  }

  toGame() {
    this.node.classList.remove('bg-primary');
    this.node.classList.add('bg-success');
    this.cardHeader.classList.add('d-none');
    this.rotateBtnFront.classList.add('d-none');
    this.soundIsOff = true;
  }

  say() {
    this.sound.play();
  }
}
