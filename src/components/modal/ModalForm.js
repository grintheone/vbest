import React from 'react'


class ModalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            phone: "",
            email: "",
            contact: "",
            valid: "",
            closeModal: false,
            errorMessage: "d-none"
        }
    }


    handleChange = (event) => {
        const {name, value} = event.target
        if (event.target.form.checkValidity()) {
            this.setState({valid: "", closeModal: true, errorMessage: "d-none", [name]: value})
        } else {
            this.setState({valid: "was-validated", closeModal: false, errorMessage: "d-block", [name]: value})
        }
    }

    

    handleClick = (event) => {
        if (event.target.form.checkValidity()) {
            const person = {
                id: "",
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email
            }
            this.props.getData(person)
            this.setState({
                name: "",
                phone: "",
                email: "",
                contact: "",
                valid: "",
                errorMessage: "d-none"
            })
        } else {
            this.setState({valid: "was-validated", errorMessage: "d-block"})
        }
    }


    render() {
        const valid = this.state.closeModal ? "modal" : null
        
        return (
            <form className={this.state.valid} noValidate>
                <div className="modal-body">
                    <label className="d-flex flex-column mb-2"> ФИО
                        <input 
                            type="text"
                            name="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required   
                        /> 
                    </label>
                    <div className={"text-danger pb-2 " + this.state.errorMessage}>
                        Это поле не может быть пустым
                    </div>
                    <div className="d-flex row">
                        <label className="d-flex flex-column mb-2 col-sm-7 col-12"> Телефон
                            <input 
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                className="form-control"    
                            /> 
                        </label>
                        <label className="d-flex flex-column mb-2 col-sm-5 col-12"> Контактный номер
                            <input 
                                type="text"
                                name="contact"
                                value={this.state.contact}
                                onChange={this.handleChange}
                                className="form-control"    
                            /> 
                        </label>
                    </div>
                    <label className="d-flex flex-column mb-2"> Почта
                        <input 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"    
                        /> 
                    </label>
                </div>
                <div className="modal-footer">
                    <button onClick={this.handleClick} type="button" className="btn btn-secondary" data-bs-dismiss={valid} aria-label="Готово">Готово</button>
                </div>
            </form>
        )
    }
}

export default ModalForm;