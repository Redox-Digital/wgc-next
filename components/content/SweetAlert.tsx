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

export function SweetAlertMoreInfo(content: React.ReactNode) {
  return Swal.fire({
    // title: 'Hello There',
    html: `<p class="">${content}</p>`,
    showCloseButton: true,

    customClass: {
      container: swalCss.swalBackdrop,
      popup: swalCss.container,
      input: swalCss.input,
      title: swalCss.title,
      confirmButton: swalCss.confirmButton,
      closeButton: swalCss.closeButton,
    },
  });
}

export function SweetAlertLeagues() {
  return Swal.fire({
    title: 'Leagues',
    html: `<p class="">Enter your scores, participates in challenges, win and have fun !</p><p>
Move up the leagues and show the world that you mean business on the green.</p>`,
    footer: '<a href="/profile/leagues">See all leagues</a>',

    showCloseButton: true,
    customClass: {
      container: swalCss.swalBackdrop,
      popup: swalCss.container,
      input: swalCss.input,
      title: swalCss.title,
      confirmButton: swalCss.confirmButton,
      closeButton: swalCss.closeButton,
      footer: swalCss.footer,
    },
  });
}

type SwalBadgeProps = {
  img: string;
  title: string;
  description: string;
  date: Date;
};

export function SweetAlertBadge({ img, title, description, date }: SwalBadgeProps) {
  return Swal.fire({
    title: '',
    imageUrl: img,
    // imageHeight: 120,
    html: `<p class="${swalCss.badgeSurtitle}">${title}</p>
    <h3 class="${swalCss.badgeTitle}">${description}</h3>
    <small class="${swalCss.badgeDate}">${date.toDateString()}</small>`,

    showCloseButton: true,
    customClass: {
      container: swalCss.swalBackdrop,
      popup: swalCss.container,
      input: swalCss.input,
      title: swalCss.title,
      confirmButton: swalCss.confirmButton,
      closeButton: swalCss.closeButton,
      footer: swalCss.footer,
    },
  });
}
