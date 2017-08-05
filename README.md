# react-back-top
React component to back to top.  
![](example/back_top.gif)
## 1. Installation
> npm install --save react-back-top

## 2. Demo & Examples
To build the examples locally, run:
> npm install  
npm start

## 3. Usage
```js
import React from 'react';
import BackToTop from 'react-back-top';
const Demo = (props) => {
  const config = {
      text: "回到顶部",
        topDistance: 10,
        timing=“easeIn”
    }
  return <BackToTop ...config/>
}
export default Demo;
```
## 4. Properties

prop | type | default | notes  
------- | ------- | ------- | -------
shape | string | default | `default` or `round`, default is rectangle
radius | number | 24 | Only work for `round` shape
text | string |  | Content of button
fontSize | string | 16px |
position | object | {  bottom: '10%', right: '5%'} | `top` `bottom` `left` `right` are avalible, determine the position of button
icon | string | | It is a class name of icon,font icon such as `font awesome` and `icomoon` are supported. For `Material Design Icons`, icon should be `material-icons search`, search is the name of icon, but fontSize is not worked for `Material Design Icons`, you need to set `icon`to be `material-icons md-18 search`
color | string | white | Color of text or icon
background | string | #ff5252 | Backgound of button 
hover | object | {background: '#eb0000' } | Effect when hover
topDistance | number | 200 | Scroll y position where button is visible, set 0 the button will always visible
timing | string | linear | Timing function scroll to top, `linear`, `easeIn`, `easeOut`, `easeInOut` are available
speed | number | 100 | Speed to scroll

## License
Copyright (c) 2017 ZiQiangWang [MIT](https://github.com/ZiQiangWang/react-back-top/blob/master/LICENSE) Licensed.
