
export class Modal {

  constructor() {
    const background = document.createElement('div');
    background.classList.add('modal-background');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const text = document.createElement('p');
    text.textContent = 'We have winner!';
    text.classList.add('winner-text');
    const button = document.createElement('button');
    button.textContent = 'Reset';
    modal.append(text, button);
    background.append(modal);

    return modal;
  }
}
