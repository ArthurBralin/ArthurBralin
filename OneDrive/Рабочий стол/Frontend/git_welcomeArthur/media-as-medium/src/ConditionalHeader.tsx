import { useLocation } from 'react-router-dom';

function ConditionalHeader() {
  const location = useLocation();

  return location.pathname.startsWith('/personal-news') ? null : (
    <div className="header">
      <p><strong>Hello, world!</strong></p>
    </div>
  );
}

export default ConditionalHeader;
