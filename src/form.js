import React from 'react';

const INITIAL_VALUE = {
    email: "",
    fname: "",
    address_1: "",
    address_2: "",
    city: "",
    province: "",
    post_code: "",
    agreement: false
}
export default class FormEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...INITIAL_VALUE}
        
        this.provinces = ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba", "British Columbia", "Prince Edward Island", "Saskatchewan", "Alberta", "Newfoundland and Labrador", "Northwest Territories", "Nunavut", "Yukon"]
    }

    onClearForm = event => {
        event.preventDefault();
        this.setState({...INITIAL_VALUE});
    }

    onSubmitForm = event => {
        event.preventDefault();

        this.setState({
            email: event.target.form[0].value,
            fname: event.target.form[1].value,
            address_1: event.target.form[2].value,
            address_2: event.target.form[3].value,
            city: event.target.form[4].value,
            province: event.target.form[5].value,
            post_code: event.target.form[6].value,
            agreement: event.target.form[7].value
        });
    }
    onValueChanged = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onCheck = () => {
        this.setState({
            agreement: !this.state.agreement
        })
    }
    
    render() {
        return (
            <>
                <div className='text-center'>
                    <h2>Data Entry Form</h2>
                </div>
                <div className='p-3 m-5'>
                    <form>
                        <div className='row'>
                            <div className="form-floating mb-3 col-md-6">
                                <input value={this.state.email}
                                onChange={e => this.onValueChanged(e)} 
                                type="email" className="form-control" id="email_input" placeholder="name@example.com" name="email" />
                                <label htmlFor="email_input">Email address</label>
                            </div>
                            <div className="form-floating mb-3 col-md-6">
                                <input type="text" value={this.state.fname} onChange={e => this.onValueChanged(e)} className="form-control" id="fulllname_input" placeholder="Full Name" name="fname" />
                                <label htmlFor="fulllname_input">Full Name</label>
                            </div>
                        </div>
                        <div>
                            <div className="form-floating mb-3 col-12">
                                <input type="text" value={this.state.address_1} onChange={e => this.onValueChanged(e)} className="form-control" id="address_1_input" placeholder="Address" name="address_1" />
                                <label htmlFor="address_1_input">Address</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-floating mb-3 col-12">
                                <input type="text" value={this.state.address_2} onChange={e => this.onValueChanged(e)} className="form-control" id="address_2" placeholder="Apt. or Suit (Opt.)" name="address_2" />
                                <label htmlFor="address_2_input">Apt. or Suit {'('}Opt.{')'}</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-floating mb-3 col-md-4">
                                <input type="text" value={this.state.city} onChange={e => this.onValueChanged(e)} className="form-control" id="city_input" placeholder="City" name="city" />
                                <label htmlFor="city_input">City</label>
                            </div>
                            <div className="form-floating col-md-4">
                                <select 
                                    className='form-select'     
                                    id="province_input" 
                                    name='province' 
                                    aria-label="Floating label select example" value={this.state.province}
                                    onChange={this.onValueChanged}
                                >
                                    { 
                                        this.provinces.map((prov, index) => (
                                            <option key={index} value={prov}>{prov}</option>
                                        ))
                                    }
                                </select>
                                <label htmlFor="province_input">Province</label>
                            </div>
                            <div className="form-floating mb-3 col-md-4">
                                <input type="text" value={this.state.post_code} onChange={e => this.onValueChanged(e)} className="form-control" id="postcode_input" placeholder="Postal Code" name="post_code" />
                                <label htmlFor="postcode_input">Postal Code</label>
                            </div>
                        </div>
                        <div>
                            <div className='form-check'>
                                <input className='form-check-input' type="checkbox" onChange={this.onCheck} checked={this.state.agreement} name="agreement" id="agreed_check" />
                                <label className='form-check-label' htmlFor="agreed_check">{'Agree with Terms and Conditions'}</label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button onClick={e => this.onSubmitForm(e)} className='btn btn-primary' type="submit" disabled={!this.state.agreement}>Submit</button>
                            <button onClick={this.onClearForm} className='btn btn-secondary' type="reset">Clear</button>
                        </div>
                    </form>
                </div>
                <div className='container border border-1 p-3'>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>Email:</h4>
                        </div>
                        <div className='col-auto'>
                            <h4>{this.state.email}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>Fullname:</h4>
                        </div>
                        <div className='col-auto'>
                            <h4>{this.state.fname}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>Address:</h4>
                        </div>
                        <div className='col-auto'>
                            <h4>{this.state.address_1 + ' - ' + this.state.address_2}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>City:</h4>
                        </div>
                        <div className='col-auto'>
                            <h4>{this.state.city}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>Province:</h4>
                        </div>
                        <div className='col-auto'>{this.state.province}</div>
                    </div>
                    <div className='row'>
                        <div className='col-auto'>
                            <h4>Postal Code:</h4>
                        </div>
                        <div className='col-auto'>{this.state.post_code}</div>
                    </div>
                </div>
            </>
        );
    }
}
