import React from 'react'

export default class Registration extends React.Component{
    inputElem;
    inputElem1;
    inputElem2;
    inputElem3;
    selectElement;

    register = () => {
        if (this.props.userType === 'Concert Manager') {
            this.props.registerManager(this.inputElem.value, this.inputElem1.value, this.inputElem2.value,
                this.selectElement.value, this.inputElem3.value);
            this.props.history.push('/login');
        }
        else
            this.props.registerUser(this.inputElem.value, this.inputElem1.value, this.inputElem2.value, this.selectElement.value);
        this.props.history.push('/login')
    };

    render() {return (
        <div className="container">
            <div className="cardRegistration card-container">
                <form className="form-signin form-inline row m-2">
                    <label htmlFor="username form-label"  className="col-2 ">Enter username:</label>
                    <input className="col-9"
                           id="username"
                           onChange={() => this.props.textChanged('username', this.inputElem.value)}
                           ref={node => this.inputElem = node}/>
                </form>
                <form className="form-signin form-inline m-2">
                    <label htmlFor="password"  className="col-2 ">Enter Password:</label>
                    &nbsp;
                    <input className="col-9"
                           id="password"
                           onChange={() => this.props.textChanged('password', this.inputElem1.value)}
                           ref={node => this.inputElem1 = node}/>
                </form>
                <form className="form-signin form-inline m-2">
                    <label htmlFor="verifyPassword"  className="col-2 ">Verify Password:</label>
                    &nbsp;
                    <input className="col-9"
                           id="verifyPassword"
                           onChange={() => this.props.textChanged('verifyPassword', this.inputElem2.value)}
                           ref={node => this.inputElem2 = node}/>
                </form>

                <select onChange={() => this.props.selectUserType(this.selectElement.value)}
                        ref={node =>this.selectElement = node}>
                    <option>Listener</option>
                    <option>Audiophile</option>
                    <option>Concert Manager</option>
                </select>
                <br/>

                {this.props.userType === 'Concert Manager' && <div>
                    <form className="form-inline">
                        <label htmlFor="eventLocation">Enter Event Location:</label>
                        &nbsp;
                        <input className="col-8"
                               id="eventLocation"
                               onChange={() => this.props.textChanged('eventLocation', this.inputElem3.value)}
                               ref={node => this.inputElem3 = node}/>
                    </form>
                </div>}


                <button onClick={() => {
                    this.register()
                }}>Register
                </button>
            </div>
        </div>
    )}
}