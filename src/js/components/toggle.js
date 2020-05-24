const toggle = element => {
  const $buttons = document.querySelectorAll(`[data-toggle=${element}]`);
  
  $buttons.forEach($button => {
    $button.addEventListener('click', () => {
      const $el = document.querySelector(`[data-id=${element}]`);
      $el.classList.toggle('show');
    });
  });
};

export default toggle;