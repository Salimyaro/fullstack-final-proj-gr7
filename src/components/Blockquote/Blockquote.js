import s from './Blockquote.module.css';

export default function Blockquote() {
  return (
    <div className={s.quoteContainer}>
      <blockquote className={s.quoteText}>
        &#8220;Regression testing. What is it? <br /> If the system compiles,
        that's good, if it boots, that's great!&#8221;
      </blockquote>
      <p className={s.author}>Linus Torvalds</p>
      <p className={s.description}>Linux kernel creator, hacker, 1969</p>
    </div>
  );
}
