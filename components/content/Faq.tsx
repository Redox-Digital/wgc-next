import css from './Faq.module.scss';
export default function Faq() {
  const faqs = [
    {
      question: 'How do I start a Challenge?',
      answer:
        'To start a challenge, go to the Challenges page and click on "Start a Challenge". Follow the instructions to set up your challenge.',
    },
    {
      question: 'How do I join a Challenge?',
      answer:
        'To join a challenge, go to the Challenges page and click on "Join a Challenge". Enter the challenge code provided by the challenge creator.',
    },
    {
      question: 'How do I track my progress?',
      answer:
        'You can track your progress on the Dashboard page. It shows your current standings, completed challenges, and upcoming events.',
    },
    {
      question: 'What is Net Stableford?',
      answer:
        'Net Stableford is a scoring system used in golf. Points are awarded based on the number of strokes taken at each hole relative to a fixed score, usually par.',
    },
    {
      question: 'How do I withdraw my winnings?',
      answer:
        'To withdraw your winnings, go to the Wallet page and click on "Withdraw". Follow the instructions to transfer your winnings to your bank account.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can contact support by clicking on the "Contact Us" button at the bottom of the Support page. Fill out the form and our support team will get back to you as soon as possible.',
    },
  ];

  return (
    <div className={css.faq}>
      {faqs.map((faq, index) => (
        <details key={index}>
          <summary>
            <h5>{faq.question}</h5>
            <div className={css.sign}>
              <span></span>
              <span></span>
            </div>
          </summary>
          <small>{faq.answer}</small>
        </details>
      ))}
    </div>
  );
}
