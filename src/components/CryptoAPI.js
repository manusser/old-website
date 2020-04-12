import React, { Component } from 'react';
import { FaBitcoin, FaEthereum } from "react-icons/fa";

class CryptoAPI extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: []
    };
  }

  getCryptoIcon = (icon) => {
    if(icon === "Bitcoin"){
      return <FaBitcoin style={{color:'orange'}}/>
    } else if(icon === "Ethereum"){
      return <FaEthereum style={{color:'blue'}}/>
    }
  }

  componentDidMount() {

    const apiHost = "coingecko.p.rapidapi.com";
    const apiKey = "f499b0c80emsh4da670db83bbe25p1c6b2bjsncb9ae6435440"

    fetch("https://coingecko.p.rapidapi.com/coins/"+this.props.name, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': apiHost,
        'x-rapidapi-key': apiKey
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
          console.log(result);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div key={item.name}>{this.getCryptoIcon(item.name)} {item.market_data.current_price.usd}</div>
      );
    }
  }

}


export default CryptoAPI;
