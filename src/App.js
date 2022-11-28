import './App.scss';
import { AiOutlineSearch } from "react-icons/ai"
import { AiFillCloseSquare } from "react-icons/ai"
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [cartOpened, setCartopened] = useState(false)

  useEffect(() => {
    axios.get('https://6384b0ac3fa7acb14ffd7b94.mockapi.io/items')
      .then(res => setItems(res.data))

    axios.get('https://6384b0ac3fa7acb14ffd7b94.mockapi.io/cart')
      .then(res => setCartItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => +item.id === +obj.id)) {
      axios.delete(`https://6384b0ac3fa7acb14ffd7b94.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => +item.id !== +obj.id))
    } else {
      axios.post('https://6384b0ac3fa7acb14ffd7b94.mockapi.io/cart', obj)
      setCartItems(prevState => [
        ...prevState,
        obj
      ])
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6384b0ac3fa7acb14ffd7b94.mockapi.io/cart/${id}`)
    setCartItems(prevState => prevState.filter(el => el.id !== id)
    )
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)

  }
  return (
    <div className="wrapper">
      {cartOpened && <Drawer
        onClose={() => setCartopened(false)}
        items={cartItems}
        onRemove={onRemoveItem}
      />}
      <Header
        onClickCart={() => setCartopened(true)}
      />

      <div className='content'>
        <div className='block'>
          <h1>{searchValue ? "Search to..." : "All Sneakers..."}</h1>
          <div className='search-block'>
            <AiOutlineSearch />
            <input
              type="text"
              placeholder='search...'
              value={searchValue}
              onChange={onChangeSearchInput}
            />
            {searchValue && < AiFillCloseSquare onClick={() => setSearchValue("")} />}
          </div>
        </div>
        <div className='cardItem'>
          {items.length === 0 ? "Loading..." : items.filter(el => el.name.toLowerCase().includes(searchValue))
            .map(sn => <Card key={sn.id} sneakers={sn} onClickPlus={onAddToCart} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
