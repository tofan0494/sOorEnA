import Conterols from "../../components/Layout/Conterols/Conterols";
import React from "react";
// import Titles from "react-pagination-table/lib/Components/Titles";
import Wrapper from "../../hoc/Wrapper";
const price = {
    product1 : 57,
    product2 : 33,
    product3 : 44,
    product4 : 56
}
class Shapping extends React.Component{
    state = {
        products :{
            product1 : 0,
            product2 : 0,
            product3 : 0,
            product4 : 0,
        },
        totalPrice : 0
        
    }
    AddProductHandler =(type)=>{
        const prevCount = this.state.products[type]
       const updatedCount = prevCount + 1
       const updatedProduct = {
        ...this.state.products
       }
       updatedProduct[type] = updatedCount
       const PriceAdd = price[type]
       const prevPrice = this.state.totalPrice
       const newPrice = prevPrice + PriceAdd
       this.setState({totalPrice : newPrice , products : updatedProduct})

    }
    removeProductHandler = (type)=>{
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProduct = {
         ...this.state.products
        }
        updatedProduct[type] = updatedCount
        const PriceSub = price[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice -  PriceSub
        this.setState({totalPrice : newPrice , products : updatedProduct})

  }
    render() {
        return (
             <Wrapper>
                <Conterols 
                producadd={this.AddProductHandler} 
                productRemove ={this.removeProductHandler}
                Price ={this.state.totalPrice}
                />
             </Wrapper>
        );
    }
}
export default Shapping