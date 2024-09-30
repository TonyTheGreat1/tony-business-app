import React, { useState } from 'react';

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: {
            first: '',
            middle: '',
            last: '',
        },
        phone: '',
        email: '',
        password: '',
        image: {
            url: '',
            alt: '',
        },
        address: {
            state: '',
            country: '',
            city: '',
            street: '',
            houseNumber: '',
            zip: '',
        },
        isBusiness: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('name.')) {
            const field = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                name: {
                    ...prevData.name,
                    [field]: value,
                },
            }));
        } else if (name.startsWith('image.')) {
            const field = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                image: {
                    ...prevData.image,
                    [field]: value,
                },
            }));
        } else if (name.startsWith('address.')) {
            const field = name.split('.')[1];
            setFormData((prevData) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    [field]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h2>sign up</h2>
            <p>create a new account in t-card and start </p>
            <form className="signUp" onSubmit={handleSubmit}>
                <div className="signup" >

                    <div>
                        <label htmlFor="firstName">first name</label>
                        <input className="input" type="text" name="name.first" value={formData.name.first} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="middleName">middle name</label>
                        <input className="input" type="text" name="name.middle" placeholder="optional" value={formData.name.middle} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="lastName">last name</label>
                        <input className="input" type="text" name="name.last" value={formData.name.last} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="phone">phone</label>
                        <input className="input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input className="input" type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="imageUrl">image url</label>
                        <input className="input" type="text" name="image.url" placeholder="optional" value={formData.image.url} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="imageAlt">image alt</label>
                        <input className="input" type="text" name="image.alt" placeholder="optional" value={formData.image.alt} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="state">state</label>
                        <input className="input" type="text" name="address.state" placeholder="optional" value={formData.address.state} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="country">coutry</label>
                        <input className="input" type="text" name="address.country" value={formData.address.country} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="city">city</label>
                        <input className="input" type="text" name="address.city" value={formData.address.city} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="street">street</label>
                        <input className="input" type="text" name="address.street" value={formData.address.street} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="houseNumber">house number</label>
                        <input className="input" type="text" name="address.houseNumber" value={formData.address.houseNumber} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="zip">zip</label>
                        <input className="input" type="text" name="address.zip" value={formData.address.zip} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="isBusiness">sign up as business account</label>
                        <input className="input" type="checkbox" name="isBusiness" checked={formData.isBusiness} onChange={handleChange} />
                    </div>

                    <button className="btns" type="submit" style={{ height: '64px', width: '120px', borderRadius: '50px' }}>sign up</button>
                </div>
            </form>
        </>
    )
}

export default SignUp