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
