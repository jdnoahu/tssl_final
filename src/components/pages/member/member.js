import React, { useEffect, useState } from 'react';
import Navigation from '../../../components/navigation'
import MemberHeroImg from '../../photos/member_hero.jpg';
import Footer from '../../../components/footer';
import axios from 'axios'
import { AsyncStorage } from 'AsyncStorage';



var valueCurrentUser = '';

export default function Member() {
    const [soberDays, setSoberDays] = useState('');
  
    useEffect(() => {
        window.scrollTo(0, 0)
        getCurrentUser();
    }, [])

    async function getCurrentUser() {
        // console.log("ABC")
        try {
            var value = await AsyncStorage.getItem('currentUserId');
            console.log("abc",value)
            if (value !== null) {
                valueCurrentUser = value;
                
                axios.get("https://tssl-backend.herokuapp.com/members",

                    { withCredentials: false }
                ).then(response => {
                    console.log("response", response);
                    var arr = response.data;
                    console.log("response", arr);

                    var searchedData = arr.filter(item => item.id == valueCurrentUser)
                    console.log("response", searchedData);

                    if (searchedData.length != 0) {
                    console.log("response", searchedData);
                        var today=new Date();
                        var dbSobriety= new Date(searchedData[0].sobriety_date)
                        console.log(today);
                        console.log(dbSobriety);
                        var diff= today-dbSobriety;
                        var daysTill30June2035 = Math.floor(diff / (1000 * 60 * 60 * 24));
                        // var years=daysTill30June2035/;
                        // var yearsRemainder=
                        console.log(daysTill30June2035);
                        var x = daysTill30June2035;
                        x *= -1;
                        setSoberDays(x)
                        // console.log(diff.Days);


                        // try {
                        //     AsyncStorage.setItem('currentUserId', searchedData[0].id);
                        // } catch (error) {
                        //     // Error saving data
                        // }
                        // this.setState({
                        //     redirectNext: true
                        // })
                    }
                    // else {
                    //     alert("Wrong Username or password!")
                    // }
                    // arr.forEach(element => {
                    //     console.log(element)
                    // });
                })
                    .catch(error => {
                        console.log(error)
                    });

            }
        } catch (error) {

        }
    }
    return (
        <div className="member_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={MemberHeroImg} />
            </div>
            <div style={{alignItems:'center',marginLeft:"45%",marginTop:30, fontSize:20}}><p> Sober Duration: {soberDays} Days</p></div>
            

            <Footer />
        </div>
    )
}
