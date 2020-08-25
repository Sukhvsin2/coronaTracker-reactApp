import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";

export default class App extends React.Component{

    state ={
        data : {},
        country: ""
    }
    async componentDidMount(){
        const data = await fetchData()
        this.setState({data: data})
    }

    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }
    render(){
        const {data, country} = this.state;
        return <div className={styles.container}>
            <img src="https://i.ibb.co/7QpKsCX/image.png" className={styles.image} alt="corona img"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
            <span className={styles.author}>Made by <a href="https://github.com/Sukhvsin2">Sukhvinder Singh</a> </span>
        </div>
    }
}