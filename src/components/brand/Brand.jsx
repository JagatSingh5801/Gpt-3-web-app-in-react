import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="not found"/>
    </div>
    <div>
      <img src={slack} alt="not found"/>
    </div>
    <div>
      <img src={atlassian} alt="not found"/>
    </div>
    <div>
      <img src={dropbox} alt="not found"/>
    </div>
    <div>
      <img src={shopify} alt="not found"/>
    </div>
  </div>
);

export default Brand;
