import React, { useState } from 'react';
import styles from '../styles/MultiStepForm.scss';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className={styles.formContainer}>
      <h2>Step {step} of 3</h2>

      {step === 1 && (
        <>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
          <div className={styles.buttonGroup}>
            <button className={styles.next} onClick={nextStep}>Next</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
          <div className={styles.buttonGroup}>
            <button className={styles.back} onClick={prevStep}>Back</button>
            <button className={styles.next} onClick={nextStep}>Next</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className={styles.reviewBox}>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.back} onClick={prevStep}>Back</button>
            <button className={styles.submit} onClick={() => alert("Form Submitted!")}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
