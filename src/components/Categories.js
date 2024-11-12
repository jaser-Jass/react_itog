import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё'
        },
         {
          key: 'Куртки',
          name: 'Куртки'
        },
         {
          key: 'Футболки',
          name: 'Футболки'
        },
         {
          key: 'Обувь',
          name: 'Обувь'
        },
           {
          key: 'Джинсы',
          name: 'Джинсы'
        },
        {
          key: 'Пиджаки',
          name: 'Пиджаки'
        },
        

      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories