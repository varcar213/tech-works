import React from 'react';
import '../styles/PricingPlans.scss';

const plans = [
  {
    name: 'Basic',
    price: '₹499/month',
    features: ['1 Website', 'Email Support', 'Basic Security'],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '₹999/month',
    features: ['5 Websites', 'Priority Email Support', 'Advanced Security'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Projects', '24/7 Support', 'Full Suite Security'],
    highlighted: false
  }
];

const PricingPlans = () => {
  return (
    <div className="pricing-section">
      <h2>Choose Your Plan</h2>
      <div className="plans">
        {plans.map((plan, idx) => (
          <div key={idx} className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
