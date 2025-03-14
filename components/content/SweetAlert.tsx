import Swal from 'sweetalert2';
import swalCss from '@/components/content/SweetAlert.module.scss';

// DEV : no real use in the static version, only for design purposes for FH.
export default function SweetAlert() {
  return Swal.fire({
    title: 'Hello There',
    html: `<p class="">General Kenobi</p>`,
    showCancelButton: true,
    showCloseButton: true,

    customClass: {
      container: swalCss.swalBackdrop,
      popup: swalCss.container,
      input: swalCss.input,
      title: swalCss.title,
      confirmButton: swalCss.confirmButton,
      cancelButton: swalCss.cancelButton,
      closeButton: swalCss.closeButton,
      denyButton: swalCss.denyButton,

      /*
      header: '...',
      icon: '...',
      image: '...',
      htmlContainer: '...',
      inputLabel: '...',
      validationMessage: '...',
      actions: '...',
      loader: '...',
      footer: '....',
      timerProgressBar: '....', */
    },
  });
}

export function SweetAlertJoin() {
  return Swal.fire({
    title: 'Welcome to Challenge HCP up to 54',
    html: `<p class="">18-hole Net Stableford on March 13th</p><small>Be able to prove your score (e.i. signed scorecard or federation HCP record sheet)</small>`,
    showCancelButton: true,
    showCloseButton: true,

    imageUrl: '/sponsors/sponsor_4aces.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: '4ACES',

    customClass: {
      container: swalCss.swalBackdrop,
      popup: swalCss.container,
      input: swalCss.input,
      title: swalCss.title,
      confirmButton: swalCss.confirmButton,
      cancelButton: swalCss.cancelButton,
      closeButton: swalCss.closeButton,
      denyButton: swalCss.denyButton,
      image: swalCss.img,

      /*
      header: '...',
      icon: '...',
      image: '...',
      htmlContainer: '...',
      inputLabel: '...',
      validationMessage: '...',
      actions: '...',
      loader: '...',
      footer: '....',
      timerProgressBar: '....', */
    },
  });
}
