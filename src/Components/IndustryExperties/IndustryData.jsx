import React from 'react';
import Industry from './Industry';

const IndustryData = () => {
  return (
    <div>
      <div className="ind-h3-data">
      <h3>Key Verticals and Industries Served​</h3>
      </div>

      
    <div className="data-ind-content">
      
      <Industry image='rgs-img/industry_healthcare.svg'  ttl='Banking Insurance and Financial Service' desc='' />

      <Industry image='rgs-img/industry_travel.svg' ttl='Travel, Transportation and Hospitality​' desc='​' />

      <Industry image='rgs-img/industry_other.svg' ttl='Retail and Consumer Products and Goods​' desc='​' />

      <Industry image='rgs-img/industry-tech.svg' ttl='Healthcare, Pharma and Lifesciences​' desc='​' />

      <Industry image="rgs-img/industry_finance.svg"
       ttl="Utilitis TeleCommunication AND Manufacturing​"
       desc="​"/>
</div>
    </div>
  );
};

export default IndustryData;
