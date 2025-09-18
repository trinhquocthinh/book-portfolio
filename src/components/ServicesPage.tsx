import React from 'react';
import type { ServicesPageProps } from '../types';

const ServicesPage: React.FC<ServicesPageProps> = ({ services, pageNumber }) => {
  return (
    <>
      <h1 className="title">My Services</h1>

      <div className="services-box">
        {services.map((service) => (
          <div key={service.id} className="services-content">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="btn">Read More</a>
          </div>
        ))}
      </div>

      <span className="number-page">{pageNumber}</span>
    </>
  );
};

export default ServicesPage;