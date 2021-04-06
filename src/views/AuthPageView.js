import AuthForm from '../components/AuthForm';

export default function AuthPageView() {
  return (
    <div>
      <h1>Pro Test</h1>
      <p>
        <b>[</b> We will help you find weak points in knowledge so that you can
        strengthen it. We will show you what is relevant to know for a
        <b> QA Engineer </b> and will try to make the learning process more
        diverse_ <b>]</b>
      </p>
      <div>
        <AuthForm />
      </div>
    </div>
  );
}
