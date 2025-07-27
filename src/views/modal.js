
export class Modal {

  constructor() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const text = document.createElement('p');
    text.classList.add('winner-text');
    const button = document.createElement('button');
    button.textContent = 'Reset';
    button.addEventListener('click', () => {
      location.reload();
    });
    modal.append(text, button);
    return modal;
  }

}
