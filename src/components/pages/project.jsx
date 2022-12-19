import { useLocation } from 'react-router-dom';

export default function Template() {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/components/sections/modal') {
      setText('Text for template 1');
      setImage('/assets/template1.jpg');
    } else if (location.pathname === '/template/2') {
      setText('Text for template 2');
      setImage('/assets/template2.jpg');
    }
  }, [location.pathname]);

  return (
    <div>
      <h1>{text}</h1>
      <img src={image} alt="Template" />
    </div>
  )
}