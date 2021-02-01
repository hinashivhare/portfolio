import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import FrontPage from "./FrontPage";
import About from "./About";

export default class ScreenScroll extends React.Component{

    render() {
        return (
            <div className='main'>
                <div className='button_group'>
                    <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
                    <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
                    <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
                    <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
                    <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
                    <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
                    <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
                </div>
                <section  style={{height: "500px"}} className='violet' ref={(section) => { this.Violet = section; }}><FrontPage/></section>
                <section style={{height: "500px"}}  className='indigo' ref={(section) => { this.Indigo = section; }}><About/></section>
                <section style={{height: "500px"}}  className='blue' ref={(section) => { this.Blue = section; }}>Blue</section>
                <section style={{height: "500px"}}  className='green' ref={(section) => { this.Green = section; }}>Green</section>
                <section style={{height: "500px"}}  className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
                <section style={{height: "500px"}}  className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
                <section style={{height: "500px"}}  className='red' ref={(section) => { this.Red = section; }}>Red</section>
            </div>
        )
    }
}