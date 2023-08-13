import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const shouldRedirect = true;
  const navigate = useNavigate();
  useEffect(() => {
    console.log('redirecting...');
    if (shouldRedirect) navigate('/people/1', {relative: 'path'});
    return;
  },[])
  return <h1>Loading...</h1>
};