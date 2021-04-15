import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/auth/context';

export default function GoogleAuth() {
  const { onGoogleLogin } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    const params = new URL(document.location).searchParams;
    const token = params.get('token');
    const refreshToken = params.get('refreshToken');
    onGoogleLogin({ token, refreshToken });
    history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Loading ...</div>;
}
