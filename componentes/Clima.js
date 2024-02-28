import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Diseño';

const Clima = () => {

    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://api.weatherapi.com/v1/forecast.json?key=1f0105bc101946f0b4420655242802%20&q=HUEJUTLA&days=10&aqi=no&alerts=no')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
        .catch(err=>Alert.alert('Error inesperado: ' + err))
    },[])

    const Card=({fecha,icono,min,max})=>{
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.Card}>
                    <Text style={{marginTop:5}}>{fecha}</Text>
                    <Image
                        style={{height:50, width:50}}
                        source={{uri:'https:'+icono}}
                    />
                    <Text style={{marginTop:5}}>{max}°C / {min}°C</Text>
                </View>
            </View>
        )
    }

    const CHora=({hora,temp,icon})=>{
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.chora}>
                    <Text style={{margin:5}}>{hora}</Text>
                    <Image
                        style={{height:50, width:50}}
                        source={{uri:'https:'+icon}}
                    />
                    <Text style={{margin:5}}>{temp}</Text>
                </View>
            </View>
        )
    }

    const LScreen=()=>{
        return(
            <View>
                <View style={styles.center}>
                <Text style={styles.titulo}>API CLIMA</Text>
                    <View style={styles.fondB}>
                        <View style={styles.fondBC}>
                            <Text style={styles.textofondo}>Ciudad: {data.location.name}</Text>
                            <Text style={styles.textofondo}>Temperatura: {data.current.temp_c}°C</Text>
                            <Text style={styles.textofondo}>Max: {data.forecast.forecastday[0].day.maxtemp_c}°C / Min: {data.forecast.forecastday[0].day.mintemp_c}°C</Text>
                            <Text style={styles.textofondo}>Humedad: {data.forecast.forecastday[1].day.avghumidity}</Text>
                            <Text style={styles.textofondo}>Presión: {data.current.pressure_in}</Text>
                            <Text style={styles.textofondo}>Hora para el anochecer: {data.forecast.forecastday[0].astro.moonrise}</Text>
                            <Text style={styles.textofondo}>Sensacion Termica: {data.current.feelslike_c}°C</Text>
                        </View>
                    </View>
                    <View style={styles.Lista2}>
                        <View style={styles.center}>
                            <Text style={styles.texto1}>Pronostico de hoy:</Text>
                            <FlatList horizontal
                                data={data.forecast.forecastday[0].hour}
                                renderItem={({item})=>
                                    <CHora
                                        hora={item.time}
                                        temp={item.temp_c}
                                        icon={item.condition.icon}
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View style={styles.Lista1}>
                        <View style={styles.center}>
                            <Text style={styles.texto1}>Pronostico:</Text>
                            <FlatList horizontal
                                data={data.forecast.forecastday}
                                renderItem={({item})=>
                                    <Card
                                        fecha={item.date}
                                        icono={item.day.condition.icon}
                                        max={item.day.maxtemp_c}
                                        min={item.day.mintemp_c}
                                    />
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const UScreen=()=>{
        return(
            <View>
                <ActivityIndicator size={'large'} color={'darkblue'}/>
            </View>
        )
    }

  return (
    <View>
        {load?LScreen():UScreen()}
    </View>
  )
}

export default Clima