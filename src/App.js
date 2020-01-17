import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './components/NavBar'
import Tab from './components/Tab'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CityCard from "./components/CityCard";


class App extends Component {

    constructor(prop){
        super(prop)
        this.state={
            classes : [],
            dateCity:[],
            weather:{
                list : []
            },
            days:[],
            loading: true
        }
    }

    componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Bucharest,ro&units=metric&APPID=04732e001ee43c2618c3a93eb62a70f9')
            .then(response =>{
                let arr;
                arr = response.data.list;

                //preiau ziele din array-ul mare
                let newarr;
                newarr = arr.map(function(item) {
                    var myDate = new Date(item.dt * 1000)
                    var date = myDate.getDate();

                    return date
                })
                const unique = (value, index, self) => {
                    return self.indexOf(value) === index
                }

                const uniqueDates = newarr.filter(unique)

                let formatted_arr = []


                for (var index in uniqueDates){
                    let timestamps = [];
                    for (var index_arr in arr){
                        var date_unique = uniqueDates[index]
                        var dateArr = new Date(arr[index_arr].dt * 1000)
                        var date_arr = dateArr.getDate()
                        if (date_unique === date_arr){
                            let temperature = []
                            temperature = {
                                temp_max : Math.round((arr[index_arr].main.temp_max - 273.15)),
                                temp_min : Math.round((arr[index_arr].main.temp_min - 273.15)),
                                weather :  arr[index_arr].weather[0].main
                            }
                            timestamps[dateArr.getHours()+':00'] = temperature;
                        }

                        formatted_arr[date_unique] = timestamps
                    }
                }
                this.setState({
                    days : formatted_arr,
                    dateCity : response.data.city,
                    weather:response.data,
                    loading:false
                })
            })
            .catch(error =>{
                console.log('Error fetching and parsing data',error)
            })
    }

    render() {
        return (
                <React.Fragment>
                <NavBar />
                <CssBaseline />
                <Container maxWidth="sm">
                    <CityCard data={this.state} key={'city'}/>
                    <Tab data={this.state} key ={'tabs'}/>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
