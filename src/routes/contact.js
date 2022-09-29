import React from 'react';
import styled from 'styled-components';
import Header from '../components/Home/Header';
import arrow from '../assests/arrow-right.svg';

const Contact = () => {
    return(
        <Body>
            <Header />
            <Head>
                <div className='heading'>
                    <h1>we'd love to fear from you</h1>
                </div>
                <div className='form'>
                    <div className='input'>
                        <h3>what's your full name? (required) <span>*</span></h3>
                        <input type='text' placeholder='eg. John Doe'/>
                    </div>
                    <div className='input'>
                        <h3>your email address? (required) <span>*</span></h3>
                        <input type='text' placeholder='eg. Youremailaddress@gmail.com'/>
                    </div>
                    <div className='input'>
                        <h3>Subject <span>*</span></h3>
                        <input type='text' />
                    </div>
                    <div className='input'>
                        <h3>your message (required)<span> *</span></h3>
                        <textarea rows='10' cols='100'></textarea>
                    </div>
                </div>
                <div className='send'>
                    <a href='#'><span>send message</span><img src={arrow} /></a>
                </div>
            </Head>
        </Body>
    )
}

const Body = styled.body`
    display: grid;
    grid-temple-column: repeat(autofit, (1fr,12))
    `;
    
    const Head = styled.div`
    overflow: hidden !important;
    margin: 20vh 0;
    grid-column: 2/10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
    
    @media screen and (max-width: 850px){
        
    }
    
}

.heading{
    text-align: center
}

.form{
    margin-top: 5vh;

    // .................MEDIA QUERY..................//
    @media screen and (max-width: 850px){
        align-items: center;
        .input{
            input{
                font-weight: bold;
                width: 500px
            }
            textarea{
                width: 500px;
            }
        }
    }

       @media screen and (max-width: 520px){
            align-items: center;
           .heading{
               h1{
                //    font-size: 20px;
               }
           }
           .input{
               h3{
                   font-size: 15px;
                   text-wrap: wrap;
               }
               input{
                   width: 350px;
                   font-weight: bold;
                   padding-left: 5px;
                   text-transform: capitalize;
               }
               textarea{
                   width: 350px;
                   font-size: 1rem;
               }
           }
       }

       @media screen and (max-width: 320px){
        .input{
                input{
                    width: 275px;
                    font-size: 15px;
                    font-weight: bold;
                }
                textarea{
                    width: 275px;
                }
            }
        }

        //..............END QUERY.................//
    }
    
    .input{
        display: flex;
        padding-bottom: 5vh;
        flex-direction: column;
        // align-items: flex-start;
        // margin-bottom: 20px;
        gap: 5px;

        h3{
                font-weight: 500;
                text-transform: capitalize;

                span{
                    color: red;
                }
            }
            input{
                padding:  15px 0 15px 15px;
                font-size: 20px;
                color: #7A7A7A;
                border: 2px solid #DDE0E5;
                border-radius: 10px;
                outline: none;
            }
        }
        textarea{
            color: #7A7A7A;
            outline: none;
            border: 2px solid #DDE0E5;
            border-radius: 10px;
    }

        .send{
            a{
                display: flex;
                align-items: center;
                gap: 15px;
                text-decoration: none;
                color: white;
                background-color: #43AFE2;
                padding: 20px 30px;
                border-radius: 6px;
            }
        }



`;

export default Contact;