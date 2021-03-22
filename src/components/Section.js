import React from 'react'
import DropDownMenu from './DropDownMenu'
import CardBody from './CardBody'

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    collapseSection = () => {
        this.setState(prevState => {
            return {collapsed: !prevState.collapsed}
        })
    }

    returnCard = (id, name, phone, email, contact) => {
      return <CardBody key={id} name={name} phone={phone} email={email} contact={contact} />
    }
  
    filterCards = () => {
      let cards;
      if (this.props.input === "") {
        cards = this.showWithoutFilter()
      } else {
        cards = this.applyFilter()
      }
      return cards;
    }
  
  
    applyFilter = () => {
      const info = this.props.cards
      const input = this.props.input.toLowerCase()
      
      return (
        info.map(person => {
          const {id, name, phone, email, contact} = person
          const card = this.returnCard(id, name, phone, email, contact);
          if (isNaN(input)) {
            return name.toLowerCase().includes(input) || email.toLowerCase().includes(input) ?
            card : null
          } else {
            return phone.toString().includes(input) || contact.toString().includes(input) ?
            card : null
          }
        })
      )
    }
    
  
    
    showWithoutFilter = () => {
      return (
        this.props.cards.map(person => {
          return this.returnCard(person.id, person.name, person.phone, person.email, person.contact)
        })
      )
    }
    
    render() {
        const {section, getSection} = this.props
        const cards = this.filterCards()
        const collapsed = this.state.collapsed ? "d-none" : "d-block"
        return (
            <div>
                <div className="container d-flex justify-content-between align-items-center mt-4">
                    <h1>{section}</h1>
                    <DropDownMenu
                        section={section}
                        getSection={getSection}
                        collapse={this.collapseSection} 
                        collapseBtnText={this.state.collapsed ? "Развернуть список" : "Свернуть список"}/>
                </div>
                <div className={collapsed}>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Section