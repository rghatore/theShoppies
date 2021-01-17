import { useState } from 'react';
import './Banner.scss';

function Banner () {
  const [open, setOpen] = useState(true)

  // timeout for banner popup
  setTimeout(() => setOpen(false), 10000);

  return (
    open &&
    <div className="modal_popup">
      <span className="modal_content">
        <p>You have reached your limit for nominations. Thank you for participating!</p>
      </span>
    </div>
  )
};

export default Banner;