import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)  this will go back to the previous page
      router.push('/');
    }, 3000);
    
  }, [])

  return (
    <div className="not-found">
      <h1>Oooops ...</h1>
      <h2>That Page cannot be found.</h2>
      <p> Go back to the <Link href="/"><a>Home Page</a></Link> </p>
    </div>
  )
}

export default NotFound
