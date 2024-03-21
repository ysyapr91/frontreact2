import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div class="tab active" onclick="showContent(0)">Tab 1</div>
      <div class="tab" onclick="showContent(1)">Tab 2</div>
      <div class="tab" onclick="showContent(2)">Tab 3</div>
    </div>
  );
}

export default Footer;