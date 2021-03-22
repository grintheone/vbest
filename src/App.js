import React from 'react'
import SearchBar from './components/SearchBar'
import Section from './components/Section'
import Modal from './components/modal/Modal'



const info = {Руководство: [
                            {
                              id: 0,
                              name: 'Гуляев Гордий Авксентьевич',
                              phone: '7(999)026-04-82',
                              email: 'orrutanego@mail.com',
                              contact: 785
                            },
                            {
                              id: 1,
                              name: 'Захаров Леонид Андреевич',
                              phone: '7(999)907-03-61',
                              email: 'ippamaddarr@mail.com',
                              contact: 332
                            },
                            {
                              id: 2,
                              name: 'Елисеева Юлия Кимовна',
                              phone: '7(999)291-39-62',
                              email: 'uzeriras@mail.com',
                              contact: 543
                            }
                          ],
              Сотрудники: [
                            {
                              id: 0,
                              name: 'Никитин Рубен Данилович',
                              phone: '7(999)157-89-52',
                              email: 'ixebowupp@mail.com',
                              contact: 784
                            },
                            {
                              id: 1,
                              name: 'Яковлев Александр Дмитриевич',
                              phone: '7(999)780-27-34',
                              email: 'zycuvenna@mail.com',
                              contact: 832
                            },
                            {
                              id: 2,
                              name: 'Ильина Снежана Тарасовна',
                              phone: '7(999)326-78-78',
                              email: 'vyllappinna@mail.com',
                              contact: 543
                            }
              ]}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      info: info,
      input: "",
      section: ""
    }
  }

  handleInput = (searchData) => {
    this.setState({input: searchData})
  }
  
  
  getDataFromModal = (value) => {
    const section = this.state.section
    const newInfo = Object.assign({}, this.state.info)
    value.id = newInfo[section].reduce((current, previous) => {
      return current.id > previous.id ? current.id : previous.id + 1
    })
  
    newInfo[section].push(value)
    this.setState({info: newInfo})
    }
  

  getSection = (value) => this.setState({section: value});
  

  render() {
    
    return (
      <div className="App">
        <SearchBar sendData={this.handleInput} currentValue={this.state.input}/>
        <Section section="Руководство" getSection={this.getSection} cards={this.state.info.Руководство} input={this.state.input}/>
        <Section section="Сотрудники" getSection={this.getSection} cards={this.state.info.Сотрудники} input={this.state.input}/>
        <Modal getData={this.getDataFromModal}/>
      </div>
    );
  }
}

export default App;


 
