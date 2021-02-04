import React from 'react';
import Botui from 'botui-react';

export default class UIBot extends React.Component {

    componentDidMount() {
        const _that = this;
        this.botui.message.bot({ // show first message
            delay: 1000,
            content: 'Hi there 👋',
            className: 'hi-there'
        }).then(() => {
            return _that.botui && _that.botui.message.bot({ // second one
                delay: 1000, // wait 1 sec.
                content: 'My name is Hina and most of my time is spent designing and developing stuff. Do you wish to know more about me?'
            })
        }).then(function() {
            return _that.botui && _that.botui.action.button({
                human: !0,
                action: [{
                    text: "Yes 👍",
                    value: 1
                }, {
                    text: "Shut up already! 😷",
                    value: 2
                }]
            })
        }).then(function(e) {
            return 1 === e.value ? _that.botui && _that.botui.message.add({
                loading: !0,
                delay: 1e3,
                content: "Cool !! 😎"
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 2e3,
                    content: "I've always been interested in design and development. I believe for most of the products, both of these go hand in hand."
                })
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 3e3,
                    content: "Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website."
                })
            }).then(function() {
                return  _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 5e3,
                    content: "Crap 😱"
                })
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 3e3,
                    content: "Server on fire🔥🔥🔥"
                })
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 500,
                    content: "GTG!!"
                })
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 3e3,
                    content: "Meanwhile, feel free to explore the website."
                })
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 1e3,
                    content: "byee 👋"
                })
            }) : _that.botui && _that.botui.message.add({
                loading: !0,
                delay: 1e3,
                content: "😔 Okay!!",
            }).then(function() {
                return _that.botui && _that.botui.message.add({
                    loading: !0,
                    delay: 2e3,
                    content: "![](https://send.ewebdesign.com/source/59f83dc6cea7e/come.gif?1509453577048) It seems you are in a hurry! <br>Feel free to explore website or drop me a mail at [hinashivhare26@gmail.com](mailto:hinashivhare26@gmail.com)"
                })
            })
        })

    }


    render () {
        return <Botui ref={ cmp => {
            this.botui = cmp
        }
        } />;
    }
}


