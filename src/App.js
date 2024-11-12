import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
    items: [
        { id: 1, title: 'Футболка', img: 'foto1.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', category: 'Футболки', price: 20, size: 'M'},
        {id: 2, title: 'Туфли', img: 'foto2.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', category: 'Обувь', price: 40, size: 'L'},
        {id: 3, title: 'Куртка', img: 'foto3.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', price: 100, size: 'S'},
        { id: 4, title: 'Кроссовки', img: 'foto4.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', category: 'Обувь', price: 70, size: 'XS' },
        { id: 5, title: 'Пиджак', img: 'foto5.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', category: 'Пиджаки', price: 20, size: 'XS' },
         { id: 6, title: 'Рубашка', img: 'foto6.webp', desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi', category: 'Рубашки', price: 10, size: 'XS' },
    ],
    showFullItem: false,
    fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Navigation orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Header/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer/>

    </div>
  )
  }

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
 this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
 })
}



deleteOrder(id){
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item){
    let isInAttay = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInAttay = true
    })
if(!isInAttay)

  this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
